package info.dmerej;

public class Shop {
    public static boolean canOrder(User user) {
        boolean minor = user.age() < 18;
        boolean verified = user.verified();

        return !minor;
    }

    public static boolean mustPayForeignFee(User user) {
        return !user.addres().country().equals("USA");
    }
}
