function kilometerToMeter(kilometer)
{
    meter = kilometer * 1000;

    return meter;
}

console.log(kilometerToMeter(600),"meters")


function budgetCalculator(watch, mobile, laptop)
{
    var watch = 50 * watch;
    var mobile = 100 * mobile;
    var laptop = 500 * laptop;

    totalBudget = watch + mobile + laptop;

    return totalBudget;
}

console.log(budgetCalculator(10,10,6),"usd");


function hotelCost(days)
{
    var rent = 100;
     if (days <= 10)
     {
        
       return rent * days;

    }
    if (days > 10)
    {
        rent = 80;

        discountRate = rent * (days - 10);
        
        regulfriendsate = 100 * 10;

        specialRate = regulfriendsate + discountRate;

        return specialRate;

    }
   
}
console.log(hotelCost(9));


function megaFriend(name) {
  var longestName = name[0];
  for (i = 0; i < name.length; i++) {
    if (name[i].length > longestName.length) {
      longestName = name[i];
    }
  }
  return longestName;
}

var persons = ['Donald', 'Trump', 'Joe', 'Biden', 'JohnCena', 'Kamalaaaaaaaaaaaaa', 'Hariss'];

console.log(megaFriend(persons));