import Address from "./address"

export default class User {
  name: string
  email: string
  age: number
  verified: boolean
  address: Address

  constructor({ name, email, age, verified, address }: { name: string, email: string, age: number, verified: boolean, address: Address }) {
    this.name = name
    this.email = email
    this.age = age
    this.verified = verified
    this.address = address
  }
}
