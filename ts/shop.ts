import User from "./user"

export default class Shop {
  static canOrder(user: User): boolean {
    if (user.age <= 18) {
      return false
    }

    if (!user.verified) {
      return false
    }

    return true
  }

  static mustPayForeignFee(user: User): boolean {
    return user.address.country != "USA"
  }
}