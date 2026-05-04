#!/bin/bash
set -e

SERVER="root@47.251.171.98"
PASS="2338341Pan"
SSH="/opt/homebrew/bin/sshpass -p $PASS ssh -o StrictHostKeyChecking=no $SERVER"
SCP="/opt/homebrew/bin/sshpass -p $PASS scp -o StrictHostKeyChecking=no"
LOG="../scripts/DEPLOY_LOG.md"
REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"

cd "$REPO_ROOT"

# ─── 1. 展示版本历史 ───────────────────────────────────────────
echo ""
echo "╔══════════════════════════════════════════════╗"
echo "║           历史版本记录（最近10条）           ║"
echo "╚══════════════════════════════════════════════╝"
echo ""
git log --oneline -10 --pretty=format:"%C(yellow)%h%Creset  %C(cyan)%ad%Creset  %s" --date=format:'%Y-%m-%d %H:%M'
echo ""
echo ""

# ─── 2. 选择回滚目标 ───────────────────────────────────────────
read -p "输入要回滚到的版本号（前7位，直接回车则回滚到上一个版本）: " TARGET

if [ -z "$TARGET" ]; then
  TARGET=$(git rev-parse --short HEAD~1)
  echo "回滚到上一个版本: $TARGET"
fi

# 验证版本号存在
if ! git cat-file -e "${TARGET}^{commit}" 2>/dev/null; then
  echo "❌ 版本号 $TARGET 不存在，请重新检查。"
  exit 1
fi

TARGET_MSG=$(git log --oneline -1 $TARGET)
echo ""
echo "📌 将回滚到：$TARGET_MSG"
read -p "确认回滚吗？(y/n): " CONFIRM
[ "$CONFIRM" != "y" ] && echo "已取消。" && exit 0

CURRENT_HASH=$(git rev-parse --short HEAD)
ROLLBACK_TIME=$(date '+%Y-%m-%d %H:%M:%S')
AUTHOR=$(git config user.name || echo "pan")

# ─── 3. 本地回滚文件 ───────────────────────────────────────────
echo ""
echo "=== 回滚本地文件到 $TARGET ==="
git checkout $TARGET -- backend/ frontend/src/ frontend/public/

# ─── 4. 提交回滚 ───────────────────────────────────────────────
echo ""
echo "=== 提交回滚记录到 GitHub ==="
git add -A
git commit -m "rollback: 回滚到 $TARGET ($ROLLBACK_TIME)"
git push origin main

NEW_HASH=$(git rev-parse --short HEAD)

# ─── 5. 服务器拉取 ─────────────────────────────────────────────
echo ""
echo "=== 服务器拉取回滚版本 ==="
$SSH "cd /opt/dtc-backend && git pull origin main"

# ─── 6. 重建前端 ───────────────────────────────────────────────
echo ""
echo "=== 重建前端 ==="
cd frontend && npm run build && cd ..
$SCP -r frontend/dist root@47.251.171.98:/var/www/dtc-index/frontend/

# ─── 7. 重启后端 ───────────────────────────────────────────────
echo ""
echo "=== 重启后端 ==="
$SSH "systemctl restart dtc-backend"

# ─── 8. 写入日志 ───────────────────────────────────────────────
cat >> "$LOG" << EOF

## [${NEW_HASH}] ${ROLLBACK_TIME} | 操作人: ${AUTHOR} | ⏪ 回滚操作

**回滚说明：** 从 \`${CURRENT_HASH}\` 回滚到 \`${TARGET}\`

**目标版本：** ${TARGET_MSG}

**更新范围：** 后端 ✅ | 前端 ✅

---
EOF

echo ""
echo "╔══════════════════════════════════════════════╗"
echo "║  ✅ 回滚完成！                               ║"
echo "║  回滚到版本: $TARGET                          "
echo "║  时间: $ROLLBACK_TIME                         "
echo "╚══════════════════════════════════════════════╝"
