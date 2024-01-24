from shop import Shop, User


def test_happy_path(fsf_address):
    user = User(
        name="bob",
        email="bob@domain.tld",
        age=25,
        address=fsf_address,
        verified=True,
    )

    assert Shop.can_order(user)
    assert not Shop.must_pay_foreign_fee(user)


def test_minors_cannot_order_from_the_shop(fsf_address):
    user = User(
        name="bob",
        email="bob@domain.tld",
        age=16,
        address=fsf_address,
        verified=True,
    )

    assert not Shop.can_order(user)


def test_cannot_order_if_not_verified(fsf_address):
    """
    Before the modifications, the test passed because it received 
    the false value for tests under 18 years of age. We need to 
    set an age greater than 18 to check the "verified" field correctly.
    """
    user = User(
        name="bob",
        email="bob@domain.tld",
        age=19,
        address=fsf_address,
        verified=False,
    )

    assert not Shop.can_order(user)


def test_foreigners_must_be_foreign_fee(paris_address):
    user = User(
        name="bob",
        email="bob@domain.tld",
        age=25,
        address=paris_address,
        verified=False,
    )

    assert Shop.must_pay_foreign_fee(user)
