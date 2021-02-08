function kilometerToMeter(kilometer)
{
    if (kilometer <= 0)
    {
        
        return "Incorrect Input";
    }
    else
    {
        meter = kilometer * 1000;
    
        return meter;
   
    }
     
}

console.log(kilometerToMeter(2))


function budgetCalculator(watch, mobile, laptop)
{
    if (watch <0 || mobile<0 || laptop<0)
    {
       
    return "Incorrect Value";

    }
    
    else
    {
    var watchPrice = 50;
    watch= watchPrice * watch;
    var mobilePrice = 100;
    mobile = mobilePrice * mobile;
    var laptopPrice = 500;
    laptop = laptopPrice * laptop;

    totalBudget = watch + mobile + laptop;

    return totalBudget;

    }
      

}


console.log(budgetCalculator(2,10,2));


function hotelCost(days)
{
    var rent = 100;
    if (days <= 0)
    {
        return "Invalid Value Inserted";
    }

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
console.log(hotelCost(15));


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