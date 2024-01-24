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
