
'use strict'
let username = prompt('please enter your name ')

console.log(username);
alert('welcome '+username + ' we are going to play a guessing  game ')

let car = prompt('is it bmw my favorite car ? ')
console.log(car);
car=car.toLocaleLowerCase()

if (car ==='yes'||car ==='y'){
    console.log(car);
    alert('great job That\'s right  '+ username)
} 
else if( car ==='no'|| car==='n'){
    console.log(car);
    alert('sorry That\'s not  right  '+ username)
} 
else {
    alert('please enter yes/y or no/n ')
}

let place = prompt('is garmany in jordan !?')
place=place.toLocaleLowerCase()

if (place  ==='yes'|| place==='y'){
    console.log(place);
    alert('sorry That\'s not  right  '+ username)
}
else if( place ==='no'||place ==='n'){
    console.log(place);
    alert('great job That\'s right  '+ username)
   
}
else{
    alert('please enter yes/y or no/n ')
}

let tall = prompt('is my tall around 177 cm ?')
tall=tall.toLowerCase()
if (tall ==='yes'|| tall==='y'){
    console.log(tall);
    alert('great job That\'s right  '+ username)
}
else if( tall ==='no'||tall==='n'){
    console.log(tall);
    alert('sorry That\'s not  right  '+ username)
}else{
    alert('please enter yes/y or no/n ')
}

let food = prompt('do you think that ahmad like maqluba ')
food=food.toLowerCase()
if (food  ==='yes'||food ==='y'){
    console.log(food);
    alert('sorry That\'s not  right  '+ username)
}
else if( food ==='no'||food ==='n'){
    console.log(food);
    alert('great job That\'s right  '+ username)
   
}
else{
    alert('please enter yes/y or no/n ')
}

let live = prompt('is the dinosaurs Existing ')
live=live.toLowerCase()
if (live  ==='yes'|| live ==='y'){
    console.log(live);
    alert('sorry That\'s not  right  '+ username)
}
else if( live ==='no'||live ==='n'){
    console.log(food);
    alert('great job That\'s right  '+ username)
   
}
else{
    alert('please enter yes/y or no/n ')
}


alert('thanks '+username+'for playing with us ')