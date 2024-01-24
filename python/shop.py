from dataclasses import dataclass


@dataclass
class Address:
    line1: str
    line2: str
    city: str
    zip_code: str
    country: str


@dataclass
class User:
    name: str
    email: str
    age: int
    address: Address
    verified: bool


@dataclass
class UserBuilder:
    name: str
    email: str
    age: int
    address: Address
    verified: bool

    def __init__(self):
        self.name = "bob"
        self.email = "bob@domain.tld"

    def with_name(self, name):
        self.name = name
        return self

    def with_email(self, email):
        self.email = email
        return self

    def with_age(self, age):
        self.age = age
        return self

    def with_verified_status(self, verified):
        self.verified = verified
        return self

    def with_address(self, address):
        self.address = address
        return self

    def build(self):
        return User(
            name=self.name,
            email=self.email,
            age=self.age,
            address=self.address,
            verified=self.verified,
        )


class Shop:
    @classmethod
    def can_order(cls, user):
        if user.age <= 18:
            return False
        if not user.verified:
            return False
        else:
            return True

    @classmethod
    def must_pay_foreign_fee(cls, user):
        return user.address.country != "USA"
