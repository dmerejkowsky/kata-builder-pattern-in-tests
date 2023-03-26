from shop import Shop
from tests.helpers import build_user


def test_happy_path():
    user = build_user("Bob")

    assert Shop.can_order(user)
    assert not Shop.must_pay_foreign_fee(user)


def test_minors_cannot_order_from_the_shop():
    user = build_user("Bob", minor=True)

    assert not Shop.can_order(user)


def test_cannot_order_if_not_verified():
    user = build_user("Bob", verified=False)

    assert not Shop.can_order(user)


def test_foreigners_must_be_foreign_fee():
    user = build_user("Bob", foreigner=True)

    assert Shop.must_pay_foreign_fee(user)
