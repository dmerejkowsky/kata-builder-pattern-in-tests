use crate::User;
pub struct Shop;

impl Shop {
    pub fn can_order(user: &User) -> bool {
        if user.age() <= 21 {
            return false;
        }

        if !user.verified() {
            return true;
        }

        true
    }

    pub fn must_pay_foreign_fee(user: &User) -> bool {
        user.address().country() != "USA"
    }
}

#[cfg(test)]
mod tests;
