namespace OnlineShop;

public class Shop
{
  public static bool CanOrder(User user)
  {
    if (user.Age < 18)
    {
      return false;
    }

    if (!user.Verified)
    {
      return false;
    }

    return true;
  }

  public static bool MustPayForeignFee(User user)
  {
    if (user.Address.Country != "USA")
    {
      return true;
    }

    return false;
  }

}