const test = require('tape')

const Shop = require('../shop')
const { buildUser } = require('./helpers')


test('happy path', t => {
    const user = buildUser("Bob")

    t.true(Shop.canOrder(user))
    t.false(Shop.mustPayForeignFee(user))

    t.end()
})

test('minor users cannot order from the shop', t => {
    const user = buildUser("Bob", { minor: true })

    t.false(Shop.canOrder(user))

    t.end()
})

test('must be a verified user to order from the shop', t => {
    const user = buildUser("Bob", { unverified: true })

    t.false(Shop.canOrder(user))

    t.end()
})

test('foreigners must pay foreign fee', t => {
    const bob = buildUser("Bob", { foreigner: true })

    t.true(Shop.mustPayForeignFee(bob))

    t.end()
})