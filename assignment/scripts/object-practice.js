console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  // TODO - add properties here
  firstName: 'Chris',
  lastName: 'Cantoni',
  hasSiblings: true,
  shoeCount: 4,
  favThreeFoods: [`General Tso's Chicken`, 'soft pretzels', 'peanut butter']
};
console.log('A little about me:', me);
let meList = document.querySelector('#me');

meList.innerHTML += `<h2>${me.firstName} ${me.lastName}</h2>
       <p>Do you have siblings? ${me.hasSiblings}<br>
       How many pairs of shoes do you own? ${me.shoeCount}<br>
       What are three of your favorite foods? ${me.favThreeFoods.join(', ')}
      </p>` // You can use the array.join function on the array inside the object!


/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/
let fullName = me.firstName + ' ' + me.lastName;
console.log(fullName);
meList.innerHTML += `My full name is ${fullName}`;

/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/
console.log('First favorite food:', me.favThreeFoods[0]);
console.log('Last favorite food:', me.favThreeFoods[2]);

meList.innerHTML += `<p>My first favorite food is ${me.favThreeFoods[0]}
and my last favorite food is ${me.favThreeFoods[2]}.</p>`;


/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/

console.log(me.shoeCount);
me.shoeCount += 1;
console.log(me.shoeCount);
meList.innerHTML += `<p>I just got a new pair so now I have ${me.shoeCount} pairs of shoes!</p>`;


/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/

me.favoriteColor = 'green';
console.log('My favorite color is', me.favoriteColor);
meList.innerHTML += `My favorite color is ${me.favoriteColor}`;