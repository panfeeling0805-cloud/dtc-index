def test_send_contact_success(client):
    response = client.post("/api/contact", json={
        "name": "张三",
        "email": "zhangsan@example.com",
        "message": "你好，我想了解更多信息"
    })
    assert response.status_code == 201
    data = response.json()
    assert data["success"] is True


def test_send_contact_missing_fields(client):
    response = client.post("/api/contact", json={"name": "张三"})
    assert response.status_code == 422


def test_send_contact_invalid_email(client):
    response = client.post("/api/contact", json={
        "name": "张三",
        "email": "not-valid",
        "message": "测试消息"
    })
    assert response.status_code == 422


def test_send_contact_empty_message(client):
    response = client.post("/api/contact", json={
        "name": "张三",
        "email": "test@example.com",
        "message": ""
    })
    # 空消息仍被接受（后续可加验证）
    assert response.status_code == 201


def test_health_check(client):
    response = client.get("/")
    assert response.status_code == 200
    assert response.json()["status"] == "ok"
