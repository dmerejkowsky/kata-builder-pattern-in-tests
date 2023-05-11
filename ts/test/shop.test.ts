import { test, expect } from "@jest/globals"

import Shop from '../shop'
import { buildUser } from "./helpers"


test('happy path', () => {
  const user = buildUser("bob")

  expect(Shop.canOrder(user)).toBe(true)
  expect(Shop.mustPayForeignFee(user)).toBe(false)
})

test('minor users cannot order from the shop', () => {
  const user = buildUser("bob", { minor: true })

  expect(Shop.canOrder(user)).toBe(false)
})

test('must be a verified user to order from the shop', () => {
  const user = buildUser("bob", { verified: false })

  expect(Shop.canOrder(user)).toBe(false)
})

test('foreigners must pay foreign fee', () => {
  const user = buildUser("bob", { foreign: true })

  expect(Shop.mustPayForeignFee(user)).toBe(true)
})