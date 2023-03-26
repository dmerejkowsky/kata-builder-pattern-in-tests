const User = require('../user')
const Address = require('../address')

const defaultAddress = new Address("51 Franklin Street", "Fifth Floor", "Boston", "02110", "USA")
const parisAddress = new Address("33 quai d'Orsay", "", "Paris", "75007", "France")

const buildUser = (name, props = {}) => {

    let { age, unverified, minor, foreigner } = props

    if (!age) {
        age = 21
    }

    if (minor) {
        age = 18
    }

    const verified = !unverified

    const address = foreigner ? parisAddress : defaultAddress

    return new User({ name, age, verified, address })
}

module.exports = { buildUser }