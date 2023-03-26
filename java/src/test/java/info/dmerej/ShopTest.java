package info.dmerej;

import info.dmerej.helpers.AUser;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class ShopTest {
    @Test
    public void happy_path() {
        var bob = AUser.named("bob").build();

        assertTrue(Shop.canOrder(bob));
        assertFalse(Shop.mustPayForeignFee(bob));
    }

    @Test
    public void minors_cannot_order_from_shop() {
        var bob = AUser.named("bob").minor().build();

        assertFalse(Shop.canOrder(bob));
    }

    @Test
    public void must_be_verified_to_order_from_shop() {
        var bob = AUser.named("bob").unVerified().build();

        assertFalse(Shop.canOrder(bob));
    }

    @Test
    public void foreigners_must_pay_foreign_fee() {
        var bob = AUser.named("bob").foreigner().build();

        assertTrue(Shop.mustPayForeignFee(bob));
    }
}
