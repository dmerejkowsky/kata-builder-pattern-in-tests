from tests.helpers import build_user


def test_default_user():
    user = build_user("Bob")

    assert user.name == "Bob"
    assert user.age >= 21
    assert user.verified
    assert user.address.country == "USA"


def test_minor():
    user = build_user("Bob", minor=True)

    assert user.age <= 21


def test_unverified():
    user = build_user("Bob", verified=False)

    assert not user.verified


def test_foreigner():
    user = build_user("Bob", foreigner=True)

    assert user.address.country != "USA"
