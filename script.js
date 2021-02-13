let btnRandom = document.querySelector('button');
let result = document.querySelector('p');

let list = ["If it were possible to place you in my brain and let you roam around, in and out my thought waves, you would never have to ask, 'Why do you love me?' A Poem for Ann #2 -Pat Parker "  , "'If I had a flower for every time I thought of you… I could walk through my garden forever.' -Alfred Tennyson" , "'I love you for all that you are, all that you have been and all that you will be.'" , "'To the world you may be one person, but to one person you are the world.'" , "'In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.' -Maya Angelou" , "'Romance is the glamour which turns the dust of everyday life into a golden haze.' -Elinor Glyn" , "'Take love, multiply it by infinity and take it to the depths of forever, and you still have only a glimpse of how I feel for you.' -Meet Joe Black" , "'I love you because the entire universe conspired to help me find you.' -The Alchemist" , "'My god, if your love were a grain of sand, mine would be a universe of beaches.' -The Princess Bride" , "You are worthy of infinite compassion" , "You are love and love comes to you with ease" , "Whenever I look at the sparkling stars in the sky, every one of them reminds me of your eyes." , "The world is a sweeter place because of your existence." , "'Unable to perceive the shape of you, I find you all around me. Your presence fills my eyes with your love. It humbles my heart, for you are everywhere.' -The Shape of Water" , ];


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
