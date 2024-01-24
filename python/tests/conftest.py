import pytest

from shop import Address


@pytest.fixture
def fsf_address():
    return Address("51 Franklin Street", "Fifth Floor", "Boston", "02110", "USA")


@pytest.fixture
def paris_address():
    return Address("33 quai d'Orsay", "", "Paris", "75007", "France")
