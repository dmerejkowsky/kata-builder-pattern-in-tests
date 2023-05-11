import { test, expect } from "@jest/globals"
import { buildUser } from "./helpers"

test('building a default user', () => {
  const user = buildUser("Bob")
  expect(user.verified).toBe(true)
  expect(user.email).toStrictEqual("bob@domain.tld")
})

test('building a minor', () => {
  const user = buildUser("Bob", { minor: true })
  expect(user.age).toBeLessThan(18)
})

test('building a foreigner', () => {
  const user = buildUser("Bob", { foreign: true })
  expect(user.address.country).not.toEqual("USA")
})

test('building a non-verified user', () => {
  const user = buildUser("Bob", { verified: false })
  expect(user.verified).toBe(false)
})