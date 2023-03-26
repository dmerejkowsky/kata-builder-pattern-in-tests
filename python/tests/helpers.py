from shop import Address, User

default_address = Address("51 Franklin Street", "Fifth Floor", "Boston", "02110", "USA")
paris_address = Address("33 quai d'Orsay", "", "Paris", "75007", "France")


def build_user(name, minor=False, verified=True, foreigner=False):
    age = 16 if minor else 25
    address = paris_address if foreigner else default_address
    return User(name=name, age=age, address=address, verified=verified)
