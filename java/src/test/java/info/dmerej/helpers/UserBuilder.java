package info.dmerej.helpers;

import info.dmerej.Address;
import info.dmerej.User;

public class UserBuilder {
    // Note: no auto-generated setters here - by design - we are modeling the domain here and
    // non-default values have meaning!

    private boolean alreadyBuilt = false;
    private Address address = new Address("51 Franklin Street", "Fifth Floor", "Boston", "02110", "USA");
    private String name = "";
    private String email = "";
    private int age = 25;
    private boolean verified = true;

    public UserBuilder(String name) {
        setNameAndEmail(name);
    }

    public UserBuilder unVerified() {
        this.verified = false;
        return this;
    }

    public UserBuilder minor() {
        this.age = 16;
        return this;
    }

    public UserBuilder foreigner() {
        this.address = new Address("33 quai d'Orsay", "", "Paris", "75007", "France");
        return this;
    }

    public User build() {
        if (alreadyBuilt) {
            throw new RuntimeException("Builder object must not be re-used");
        }
        alreadyBuilt = true;
        return new User(name, email, age, verified, address);
    }

    private void setNameAndEmail(String name) {
        this.name = name;
        this.email = name.toLowerCase() + "@domain.tdl";
    }
}
