def test_join_waitlist_success(client):
    response = client.post("/api/waitlist", json={"email": "test@example.com"})
    assert response.status_code == 201
    data = response.json()
    assert data["email"] == "test@example.com"
    assert "id" in data


def test_join_waitlist_duplicate_email(client):
    client.post("/api/waitlist", json={"email": "dup@example.com"})
    response = client.post("/api/waitlist", json={"email": "dup@example.com"})
    assert response.status_code == 400
    assert "already registered" in response.json()["detail"]


def test_join_waitlist_invalid_email(client):
    response = client.post("/api/waitlist", json={"email": "not-an-email"})
    assert response.status_code == 422


def test_join_waitlist_missing_email(client):
    response = client.post("/api/waitlist", json={})
    assert response.status_code == 422


def test_list_waitlist_requires_token(client):
    response = client.get("/api/waitlist")
    assert response.status_code == 422


def test_list_waitlist_wrong_token(client):
    response = client.get("/api/waitlist", headers={"X-Admin-Token": "wrong"})
    assert response.status_code == 403


def test_list_waitlist_with_token(client):
    client.post("/api/waitlist", json={"email": "a@example.com"})
    response = client.get(
        "/api/waitlist",
        headers={"X-Admin-Token": "change-me-admin-token"}
    )
    assert response.status_code == 200
    assert isinstance(response.json(), list)
    assert len(response.json()) == 1
