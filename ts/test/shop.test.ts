import { test, expect } from "@jest/globals"

import Address from '../address'
import Shop from '../shop'
import User from '../user'

const fsfAddress = new Address("51 Franklin Street", "Fifth Floor", "Boston", "02110", "USA")
const parisAddress = new Address("33 quai d'Orsay", "", "Paris", "75007", "France")

test('happy path', () => {
  const user = new User({ name: "Bob", "email": "bob@domain.tld", age: 25, address: fsfAddress, verified: true })

  expect(Shop.canOrder(user)).toBe(true)
  expect(Shop.mustPayForeignFee(user)).toBe(false)
})

test('minor users cannot order from the shop', () => {
  const user = new User({ name: "Bob", "email": "bob@domain.tld", age: 16, address: fsfAddress, verified: true })

  expect(Shop.canOrder(user)).toBe(false)
})

test('must be a verified user to order from the shop', () => {
  const user = new User({ name: "Bob", "email": "bob@domain.tld", age: 16, address: fsfAddress, verified: false })

  expect(Shop.canOrder(user)).toBe(false)
})

test('foreigners must pay foreign fee', () => {
  const user = new User({ name: "Bob", "email": "bob@domain.tld", age: 25, address: parisAddress, verified: true })

  expect(Shop.mustPayForeignFee(user)).toBe(true)
})