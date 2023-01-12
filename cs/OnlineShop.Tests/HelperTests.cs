namespace OnlineShop.Tests;


public class HelperTests
{

  [Test]
  public void TestUsingBuilders()
  {
    // Checking default values
    var alice = AUser.Named("Alice").Build();
    alice.Name.ShouldBe("Alice");
    alice.Verified.ShouldBeTrue();
    alice.Address.Country.ShouldBe("USA");

    // Checking special cases
    var bob = AUser.Named("Bob").UnVerified().Build();
    bob.Name.ShouldBe("Bob");
    bob.Verified.ShouldBeFalse();

    var charlie = AUser.Named("Charlie").Minor().Build();
    charlie.Name.ShouldBe("Charlie");
    charlie.Age.ShouldBeLessThan(18);

    var eve = AUser.Named("eve").Foreigner().Build();
    eve.Address.Country.ShouldNotBe("USA");
  }

  [Test]
  public void CannotUseTheBuilderTwice()
  {
    var builder = new UserBuilder("Bob");
    var alice = builder.Build();
    Should.Throw<Exception>(() => builder.Build());
  }
}