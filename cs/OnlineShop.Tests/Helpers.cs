using Shouldly;

namespace OnlineShop.Tests;


// Using the Builder pattern - lots of method that mutate
// and return `this`
public class UserBuilder
{
  private string _name = "";
  private string _email = "";

  private int _age = 25;
  private bool _verified = true;
  private bool _alreadyBuilt = false;

  private Address _address = new Address("51 Franklin Street", "Fifth Floor", "Boston", "02110", "USA");

  public UserBuilder(string name)
  {
    SetNameAndEmail(name);
  }

  private void SetNameAndEmail(string name)
  {
    _name = name;
    _email = name.ToLower() + "@domain.tdl";
  }

  public UserBuilder UnVerified()
  {
    _verified = false;
    return this;
  }

  public UserBuilder Minor()
  {
    _age = 16;
    return this;
  }

  public UserBuilder Foreigner()
  {
    _address = new Address("33 quai d'Orsay", "", "Paris", "75007", "France");
    return this;
  }

  public User Build()
  {
    if (_alreadyBuilt)
    {
      throw new Exception("Builder object must not be re-used");
    }
    _alreadyBuilt = true;
    return new User(_name, _email, _age, _verified, _address);
  }
}

// To make test even nicer to write, we introduce a class with a static method called `Named`
// rather than having to write `var user = new UserBuilder().Name("Bob").Build()`
public class AUser
{
  public static UserBuilder Named(string name)
  {
    return new UserBuilder(name);
  }
}
