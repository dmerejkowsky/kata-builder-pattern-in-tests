use super::*;

pub(crate) struct UserBulder {
    name: String,
    minor: bool,
    foreigner: bool,
    verified: bool,
}

impl UserBulder {
    fn new(name: &str) -> UserBulder {
        UserBulder {
            name: name.to_owned(),
            minor: false,
            foreigner: false,
            verified: true,
        }
    }

    pub(crate) fn minor(&mut self) -> &mut Self {
        self.minor = true;
        self
    }

    pub(crate) fn foreigner(&mut self) -> &mut Self {
        self.foreigner = true;
        self
    }

    pub(crate) fn unverified(&mut self) -> &mut Self {
        self.verified = false;
        self
    }

    pub(crate) fn build(&self) -> User {
        let address = if self.foreigner {
            Address::new(
                "33 quai d'Orsay",
                "Premier étage",
                "Paris",
                "75007",
                "France",
            )
        } else {
            Address::new(
                "51 Franklin Street",
                "Fifth Floor",
                "Boston",
                "02110",
                "USA",
            )
        };
        let verified = self.verified;
        let age = if self.minor { 18 } else { 25 };
        let name = &self.name;
        let email = format!("{}@domain.tld", name.to_lowercase());

        User {
            name: self.name.to_owned(),
            email,
            age,
            verified,
            address,
        }
    }
}

impl User {
    pub(crate) fn named(name: &str) -> UserBulder {
        UserBulder::new(name)
    }
}

#[test]
fn test_building_default_user() {
    let user = User::named("bob").build();
    assert!(user.age() >= 21);
    assert_eq!(user.address().country(), "USA");
    assert!(user.verified());
}

#[test]
fn test_building_a_minor() {
    let user = User::named("Bob").minor().build();
    assert!(user.age() < 21);
}

#[test]
fn test_building_a_foreigner() {
    let user = User::named("Bob").foreigner().build();
    assert_ne!(user.address().country, "USA");
}

#[test]
fn test_building_a_non_verified_user() {
    let user = User::named("Bob").unverified().build();
    assert!(!user.verified());
}
