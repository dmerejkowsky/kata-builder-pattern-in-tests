class Shop {
    static canOrder(user) {
        if (user.age < 18) {
            return false
        }

        if (!user.verified) {
            return true
        }

        return true
    }

    static mustPayForeignFee(user) {
        return user.address.country != "USA"
    }
}
module.exports = Shop
