pub mod shop;

pub struct Address {
    line1: String,
    line2: String,
    city: String,
    zip_code: String,
    country: String,
}

impl Address {
    pub fn new(line1: &str, line2: &str, city: &str, zip_code: &str, country: &str) -> Self {
        Self {
            line1: line1.to_owned(),
            line2: line2.to_owned(),
            city: city.to_owned(),
            zip_code: zip_code.to_owned(),
            country: country.to_owned(),
        }
    }

    pub fn line1(&self) -> &str {
        self.line1.as_ref()
    }

    pub fn line2(&self) -> &str {
        self.line2.as_ref()
    }

    pub fn city(&self) -> &str {
        self.city.as_ref()
    }

    pub fn zip_code(&self) -> &str {
        self.zip_code.as_ref()
    }

    pub fn country(&self) -> &str {
        self.country.as_ref()
    }
}

pub struct User {
    name: String,
    email: String,
    age: u8,
    address: Address,
    verified: bool,
}

impl User {
    pub fn new(name: &str, email: &str, age: u8, address: Address, verified: bool) -> Self {
        Self {
            name: name.to_owned(),
            email: email.to_owned(),
            age,
            address,
            verified,
        }
    }

    pub fn name(&self) -> &str {
        &self.name
    }

    pub fn age(&self) -> u8 {
        self.age
    }

    pub fn address(&self) -> &Address {
        &self.address
    }

    pub fn verified(&self) -> bool {
        self.verified
    }

    pub fn email(&self) -> &str {
        &self.email
    }
}
