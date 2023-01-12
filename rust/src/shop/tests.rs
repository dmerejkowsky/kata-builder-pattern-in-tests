use super::*;
use crate::{Address, User};

fn fsf_address() -> Address {
    Address::new(
        "51 Franklin Street",
        "Fifth Floor",
        "Boston",
        "02110",
        "USA",
    )
}

fn paris_address() -> Address {
    Address::new(
        "33 quai d'Orsay",
        "Premier étage",
        "Paris",
        "75007",
        "France",
    )
}

#[test]
fn test_happy_path() {
    let user = User::new("user", "user@domain.tld", 25, fsf_address(), true);

    assert!(Shop::can_order(&user));
    assert!(!Shop::must_pay_foreign_fee(&user));
}

#[test]
fn test_minors_cannot_order_from_shop() {
    let user = User::new("user", "user@domain.tld", 16, fsf_address(), true);

    assert!(!Shop::can_order(&user));
}

#[test]
fn test_unverified_users_cannot_order_from_shop() {
    let user = User::new("user", "user@domain.tld", 16, fsf_address(), false);

    assert!(!Shop::can_order(&user));
}

#[test]
fn test_foreigners_must_pay_foreign_fee() {
    let user = User::new("user", "user@domain.tld", 25, paris_address(), true);

    assert!(Shop::must_pay_foreign_fee(&user));
}
