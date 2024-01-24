from shop import Shop, UserBuilder


def test_happy_path(fsf_address):
    user = (
        UserBuilder()
        .with_age(25)
        .with_verified_status(True)
        .with_address(fsf_address)
        .build()
    )

    assert Shop.can_order(user)
    assert not Shop.must_pay_foreign_fee(user)


def test_minors_cannot_order_from_the_shop(fsf_address):
    user = (
        UserBuilder()
        .with_age(16)
        .with_verified_status(True)
        .with_address(fsf_address)
        .build()
    )

    assert not Shop.can_order(user)


def test_cannot_order_if_not_verified(fsf_address):
    """
    Before the modifications, the test passed because it received
    the false value for tests under 18 years of age. We need to
    set an age greater than 18 to check the "verified" field correctly.
    """
    user = (
        UserBuilder()
        .with_age(19)
        .with_verified_status(False)
        .with_address(fsf_address)
        .build()
    )

    assert not Shop.can_order(user)


def test_foreigners_must_be_foreign_fee(paris_address):
    user = (
        UserBuilder()
        .with_age(25)
        .with_verified_status(False)
        .with_address(paris_address)
        .build()
    )

    assert Shop.must_pay_foreign_fee(user)
