
function random_item(items)
{
  
  document.getElementById("items").console.log(random_item(items));
  
return items[Math.floor(Math.random()*items.length)];
     
}

var items = ["You're cool" , "You're sweet" , "Be mine" , "All yours" , "Sweetheart"];
console.log(random_item(items));
