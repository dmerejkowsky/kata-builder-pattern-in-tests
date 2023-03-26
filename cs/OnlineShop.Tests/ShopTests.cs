namespace OnlineShop.Tests;

public class ShopTests
{
  [Test]
  public void HappyPath()
  {
    var bob = AUser.Named("Bob").Build();

    var canOrder = Shop.CanOrder(bob);
    var foreignFee = Shop.MustPayForeignFee(bob);

    canOrder.ShouldBeTrue();
    foreignFee.ShouldBeFalse();
  }

  [Test]
  public void MinorCannotOrderFromTheShop()
  {
    var bob = AUser.Named("Bob").Minor().Build();

    var canOrder = Shop.CanOrder(bob);

    canOrder.ShouldBeFalse();
  }

  [Test]
  public void NonVerifiedUserCannotOrderFromTheShop()
  {
    var bob = AUser.Named("Bob").UnVerified().Build();

    var canOrder = Shop.CanOrder(bob);

    canOrder.ShouldBeFalse();
  }

  [Test]
  public void ForeignersMustPayForeignFee()
  {
    var bob = AUser.Named("Bob").Foreigner().Build();

    var foreignFee = Shop.MustPayForeignFee(bob);

    foreignFee.ShouldBeTrue();
  }
}