const test = require('tape')

const Address = require('../address')
const Shop = require('../shop')
const User = require('../user')

const fsfAddress = new Address("51 Franklin Street", "Fifth Floor", "Boston", "02110", "USA")
const parisAddress = new Address("33 quai d'Orsay", "", "Paris", "75007", "France")

test('happy path', t => {
    const user = new User({ name: "Bob", "email": "bob@domain.tld", age: 25, address: fsfAddress, verified: true })

    t.true(Shop.canOrder(user))
    t.false(Shop.mustPayForeignFee(user))
    t.end()
})

test('minor users cannot order from the shop', t => {
    const user = new User({ name: "Bob", "email": "bob@domain.tld", age: 16, address: fsfAddress, verified: true })

    t.false(Shop.canOrder(user))
    t.end()
})

test('must be a verified user to order from the shop', t => {
    const user = new User({ name: "Bob", "email": "bob@domain.tld", age: 16, address: fsfAddress, verified: false })

    t.false(Shop.canOrder(user))
    t.end()
})

test('foreigners must pay foreign fee', t => {
    const user = new User({ name: "Bob", "email": "bob@domain.tld", age: 25, address: parisAddress, verified: true })

    t.true(Shop.mustPayForeignFee(user))
    t.end()
})