const test = require('tape')

const { buildUser } = require('./helpers')

test('creating default user', (t) => {
    const user = buildUser("Bob")

    t.equal(user.name, "Bob")
    t.true(user.age >= 18)
    t.true(user.verified)
    t.equal(user.address.country, "USA")

    t.end()
})

test('creating a minor', (t) => {
    const user = buildUser("Bob", { minor: true })

    t.true(user.age <= 18)
    t.end()
})

test('creating a foreigner', (t) => {
    const user = buildUser("Bob", { foreigner: true })

    t.notEqual(user.address.country, "USA")
    t.end()
})

test('creating a non-verified user', (t) => {
    const user = buildUser("Bob", { unverified: true })

    t.false(user.verified)
    t.end()
})