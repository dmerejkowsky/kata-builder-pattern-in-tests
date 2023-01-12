namespace OnlineShop.Tests;

public class ShopTests
{
  private readonly Address _fsfAddress;
  private readonly Address _parisAddress;

  public ShopTests()
  {
    _fsfAddress = new Address("51 Franklin Street", "Fifth Floor", "Boston", "02110", "USA");
    _parisAddress = new Address("33 quai d'Orsay", "", "Paris", "75007", "Paris");
  }


  [Test]
  public void HappyPath()
  {
    var user = new User("user", "bob@domain.tld", 25, true, _fsfAddress);

    var canOrder = Shop.CanOrder(user);
    var foreignFee = Shop.MustPayForeignFee(user);

    canOrder.ShouldBeTrue();
    foreignFee.ShouldBeFalse();
  }

  [Test]
  public void MinorCannotOrderFromTheShop()
  {
    var user = new User("user", "bob@domain.tld", 16, true, _fsfAddress);

    var canOrder = Shop.CanOrder(user);

    canOrder.ShouldBeFalse();
  }

  [Test]
  public void NonVerifiedUserCannotOrderFromTheShop()
  {
    var user = new User("user", "bob@domain.tld", 16, false, _fsfAddress);


    var canOrder = Shop.CanOrder(user);

    canOrder.ShouldBeFalse();
  }

  [Test]
  public void ForeignersMustPayForeignFee()
  {
    var user = new User("user", "bob@domain.tld", 25, true, _parisAddress);


    var foreignFee = Shop.MustPayForeignFee(user);

    foreignFee.ShouldBeTrue();
  }
}