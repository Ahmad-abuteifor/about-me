
'use strict'
let username = prompt('please enter your name ')
let score = 0

console.log(username);
alert('welcome '+username + ' we are going to play a guessing  game ')

function question1(){

let car = prompt('is it bmw my favorite car ? ')
console.log(car);
car=car.toLocaleLowerCase()

if (car ==='yes'||car ==='y'){
    console.log(car);
    alert('great job That\'s right  '+ username);
    score++;
} 
else if( car ==='no'|| car==='n'){
    console.log(car);
    alert('sorry That\'s not  right  '+ username)
} 
else {
    alert('please enter yes/y or no/n ')
}
}
question1 ()

function question2(){
let place = prompt('is garmany in jordan !?')
place=place.toLocaleLowerCase()

if (place  ==='yes'|| place==='y'){
    console.log(place);
    alert('sorry That\'s not  right  '+ username)
}
else if( place ==='no'||place ==='n'){
    console.log(place);
    alert('great job That\'s right  '+ username)
    score++;

}
else{
    alert('please enter yes/y or no/n ')
}
}
question2()

function question3(){
let tall = prompt('is my tall around 177 cm ?')
tall=tall.toLowerCase()
if (tall ==='yes'|| tall==='y'){
    console.log(tall);
    alert('great job That\'s right  '+ username);
    score++;

}
else if( tall ==='no'||tall==='n'){
    console.log(tall);
    alert('sorry That\'s not  right  '+ username)
}else{
    alert('please enter yes/y or no/n ')
}
}
question3()
function question4(){
let food = prompt('do you think that ahmad like maqluba ')
food=food.toLowerCase()
if (food  ==='yes'||food ==='y'){
    console.log(food);
    alert('sorry That\'s not  right  '+ username)
}
else if( food ==='no'||food ==='n'){
    console.log(food);
    alert('great job That\'s right  '+ username);
    score++;


}
else{
    alert('please enter yes/y or no/n ')
}
}
question4()

function question5(){
let live = prompt('is the dinosaurs Existing ')
live=live.toLowerCase()
if (live  ==='yes'|| live ==='y'){
    console.log(live);
    alert('sorry That\'s not  right  '+ username)
}
else if( live ==='no'||live ==='n'){
    console.log(food);
    alert('great job That\'s right  '+ username);
    score++;


}
else{
    alert('please enter yes/y or no/n ')
}
}
question5()



alert('thanks '+username+'for playing with us ')

function question6(){

let num = prompt('guess a number between 4 and 25')
console.log(num);
num=parseInt(num);
for (let i=0;i<3;i++){

   if (num==13){
       alert('yes you are right ')
       console.log(num);
       score++;
       break;

   }
     else if ((14 <= num) &&( num <= 25))
     {alert('too high ')
     num = prompt('pleas try again ')
     console.log(num);

    }
      else if ((4 <=num) && (num <=12))
    {alert('too low ')
    num = prompt('pleas try again ')
    console.log(num);


    }
      else {
        alert('soory your answer wrong ')
        num = prompt('pleas try again ')

    }
}

}
question6()


   









//    let counter = 0
//    let correctanser=false
//  while (counter < 6 && correctanser ==false){
//     let foodqus = prompt('what is my faveroit food ')


//     for (let n = 0; n < typefood.length; n++) {
//         console.log('first loop ' ,n);

//         if (foodqus === typefood[n]) {
           
//             alert('wow great also ' + typefood)
//             correctanser = true
//             score++;
//             break;
            

//         }

//         // else {
//         //     foodqus = prompt('please try again ')

//         // }
//  }

//  counter++ 

// }

let response='';
let typefood = ['mansaf', 'borger', 'taco', 'kapsah'];

for (let i=0;i<6;i++){
 response=prompt('what is my faverote food ')

 for (let j=0;j<typefood.length;j++)
    if (response===typefood[j]){
         alert('great you are correct ')
         score++
         i=10

    }

if (i===5){
    alert ('sorry no more tries  '+typefood)

}
else if (i<6){
    alert('wrong answer try again ')
}



}




console.log(score);
alert(`you have a score of ${score} /7`);
