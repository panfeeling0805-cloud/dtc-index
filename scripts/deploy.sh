#!/bin/bash
set -e

SERVER="root@47.251.171.98"
PASS="2338341Pan"
SSH="/opt/homebrew/bin/sshpass -p $PASS ssh -o StrictHostKeyChecking=no $SERVER"
SCP="/opt/homebrew/bin/sshpass -p $PASS scp -o StrictHostKeyChecking=no"
LOG="../scripts/DEPLOY_LOG.md"
REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"

cd "$REPO_ROOT"

# ─── 1. 展示本次改动 ───────────────────────────────────────────
echo ""
echo "╔══════════════════════════════════════════════╗"
echo "║           本次部署变更预览                   ║"
echo "╚══════════════════════════════════════════════╝"

CHANGED_FILES=$(git diff --name-only && git diff --cached --name-only)

if [ -z "$CHANGED_FILES" ]; then
  echo ""
  echo "⚠️  没有检测到本地改动。"
  read -p "仍要继续部署吗？(y/n): " FORCE
  [ "$FORCE" != "y" ] && echo "已取消。" && exit 0
else
  echo ""
  echo "📁 改动的文件："
  git diff --name-only && git diff --cached --name-only | sed 's/^/   - /'

  echo ""
  echo "📝 具体代码变化："
  echo "──────────────────────────────────────────────"
  git diff --stat
  echo ""
  git diff
  echo "──────────────────────────────────────────────"
fi

# ─── 2. 让用户输入本次更新说明并确认 ──────────────────────────
echo ""
read -p "📌 请输入本次更新说明（将写入日志）: " COMMIT_MSG
[ -z "$COMMIT_MSG" ] && COMMIT_MSG="日常更新"

echo ""
read -p "✅ 确认部署以上内容吗？(y/n): " CONFIRM
[ "$CONFIRM" != "y" ] && echo "已取消部署。" && exit 0

# ─── 3. 提交并推送 ─────────────────────────────────────────────
echo ""
echo "=== 推送到 GitHub ==="
git add -A
git commit -m "$COMMIT_MSG ($(date '+%Y-%m-%d %H:%M'))" || echo "nothing to commit"
git push origin main

COMMIT_HASH=$(git rev-parse --short HEAD)
DEPLOY_TIME=$(date '+%Y-%m-%d %H:%M:%S')
AUTHOR=$(git config user.name || echo "pan")

# ─── 4. 服务器拉取 ─────────────────────────────────────────────
echo ""
echo "=== 服务器拉取最新代码 ==="
$SSH "cd /opt/dtc-backend && git pull origin main"

# ─── 5. 按需更新后端 ───────────────────────────────────────────
BACKEND_CHANGED=false
if echo "$CHANGED_FILES" | grep -q "^backend/"; then
  BACKEND_CHANGED=true
  echo ""
  echo "=== 检测到后端变动，重启服务 ==="
  $SSH "/opt/rh/rh-python38/root/usr/local/bin/pip3 install -r /opt/dtc-backend/backend/requirements.txt -q"
  $SSH "systemctl restart dtc-backend"
  echo "后端已更新并重启"
fi

# ─── 6. 按需更新前端 ───────────────────────────────────────────
FRONTEND_CHANGED=false
if echo "$CHANGED_FILES" | grep -q "^frontend/"; then
  FRONTEND_CHANGED=true
  echo ""
  echo "=== 检测到前端变动，重新构建 ==="
  cd frontend && npm run build && cd ..
  $SCP -r frontend/dist root@47.251.171.98:/var/www/dtc-index/frontend/
  echo "前端已构建并更新"
fi

# ─── 7. 写入部署日志 ───────────────────────────────────────────
FILE_LIST=$(echo "$CHANGED_FILES" | sed 's/^/- /' | head -30)
[ -z "$FILE_LIST" ] && FILE_LIST="- （无本地文件变动，强制部署）"

DIFF_SUMMARY=$(git diff HEAD~1 HEAD --stat 2>/dev/null || echo "（首次提交）")

cat >> "$LOG" << EOF

## [${COMMIT_HASH}] ${DEPLOY_TIME} | 修改人: ${AUTHOR}

**更新说明：** ${COMMIT_MSG}

**改动文件：**
${FILE_LIST}

**变更统计：**
\`\`\`
${DIFF_SUMMARY}
\`\`\`

**更新范围：** $([ "$BACKEND_CHANGED" = true ] && echo "后端 ✅" || echo "后端 —") | $([ "$FRONTEND_CHANGED" = true ] && echo "前端 ✅" || echo "前端 —")

---
EOF

echo ""
echo "╔══════════════════════════════════════════════╗"
echo "║  ✅ 部署完成！                               ║"
echo "║  版本: $COMMIT_HASH                           "
echo "║  时间: $DEPLOY_TIME                           "
echo "╚══════════════════════════════════════════════╝"
