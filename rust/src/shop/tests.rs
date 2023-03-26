use super::*;
use crate::User;

#[test]
fn test_happy_path() {
    let user = User::named("Bob").build();

    assert!(Shop::can_order(&user));
    assert!(!Shop::must_pay_foreign_fee(&user));
}

#[test]
fn test_minors_cannot_order_from_shop() {
    let user = User::named("Bob").minor().build();

    assert!(!Shop::can_order(&user));
}

#[test]
fn test_unverified_users_cannot_order_from_shop() {
    let user = User::named("Bob").unverified().build();

    assert!(!Shop::can_order(&user));
}

#[test]
fn test_foreigners_must_pay_foreign_fee() {
    let user = User::named("Bob").foreigner().build();

    assert!(Shop::must_pay_foreign_fee(&user));
}
