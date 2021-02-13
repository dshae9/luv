let btnRandom = document.querySelector('button');
let result = document.querySelector('p');

let list = ["If it were possible to place you in my brain and let you roam around, in and out my thought waves, you would never have to ask, 'Why do you love me?' A Poem for Ann #2 -Pat Parker "  , "You're sweet" , "Be mine" , "All yours" , "Sweetheart"];


function getRandomNumber(min, max){
  let step1 = max - min +1;
  let step2 = Math.random() * step1;
  let result = Math.floor(step2) + min;
  
  return result;
}

btnRandom.addEventListener('click', () => {
  
  let index = getRandomNumber(0, list.length-1);
  result.innerText = list[index];
});








// var items = ["You're cool" , "You're sweet" , "Be mine" , "All yours" , "Sweetheart"];
// function random_item(items)
// {
  
//   document.getElementById("items").console.log(random_item(items));
  
// return items[Math.floor(Math.random()*items.length)];
     
// }


// console.log(random_item(items));
