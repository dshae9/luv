let btnRandom = document.querySelector('button');
let result = document.querySelector('p');

let list = ["If it were possible to place you in my brain and let you roam around, in and out my thought waves, you would never have to ask, 'Why do you love me?' A Poem for Ann #2 -Pat Parker "  , "'If I had a flower for every time I thought of you… I could walk through my garden forever.' -Alfred Tennyson" , "'I love you for all that you are, all that you have been and all that you will be.'" , "'To the world you may be one person, but to one person you are the world.'" , "'In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.' -Maya Angelou" , "'Romance is the glamour which turns the dust of everyday life into a golden haze.' -Elinor Glyn" , "'Take love, multiply it by infinity and take it to the depths of forever, and you still have only a glimpse of how I feel for you.' -Meet Joe Black"];


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
