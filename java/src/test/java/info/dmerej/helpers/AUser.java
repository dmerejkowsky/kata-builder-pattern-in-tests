package info.dmerej.helpers;

/*
To make test even nicer to write, we introduce a class with a static method called `Named`
so that rather than having to write

    var user = new UserBuilder().named("Bob").build()

We can write:

   var bob = AUser.named("Bob").build();
 */

public class AUser {
    public static UserBuilder named(String name) {
        return new UserBuilder(name);
    }
}
