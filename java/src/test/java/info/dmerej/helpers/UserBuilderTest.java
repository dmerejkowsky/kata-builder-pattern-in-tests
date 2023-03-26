package info.dmerej.helpers;

import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatExceptionOfType;

public class UserBuilderTest {
    @Test
    public void cannot_use_the_builder_twice() {
        var builder = new UserBuilder("Bob");
        builder.build();
        assertThatExceptionOfType(RuntimeException.class).isThrownBy(builder::build);
    }

    @Test
    public void building_default_user() {
        var alice = AUser.named("Alice").build();
        assertThat(alice.name()).isEqualTo("Alice");
        assertThat(alice.age()).isGreaterThan(18);
        assertThat(alice.addres().country()).isEqualTo("USA");
    }

    @Test
    public void building_a_minor() {
        var bob = AUser.named("Bob").minor().build();
        assertThat(bob.age()).isLessThan(18);
    }

    public void building_a_foreigner() {
        var charlie = AUser.named("Charlie").foreigner().build();
        assertThat(charlie.addres().country()).isNotEqualTo("USA");
    }

    public void building_a_non_verified_user() {
        var eve = AUser.named("Eve").unVerified().build();
        assertThat(eve.verified()).isFalse();
    }

}
