//Exercise 1
const nums = [13, 87, 2, 89, 12, 4, 90, 63];

const numsTimesTwo = nums.map((num) => {
    return `${num*2}`;
})
console.log(numsTimesTwo);

//Exercise 2
const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

const [firstIngredient, secondIngredient] = pizzaToppings;
console.log(pizzaToppings[0]);
console.log(pizzaToppings[1]);

//Exercise 3
const car = {
  make: 'Audi',
  model: 'Q5',
};

const { make, model } = car
console.log(make)
console.log(model)
console.log(car.make)
console.log(car.model)


//Exercise 4
const morePizzaToppings = ['Cheese', 'Sauce'];

const uncontroversialPizzaToppings = [...morePizzaToppings];
console.log(uncontroversialPizzaToppings);

//Exercise 5

const anotherCar = {
  make: 'Toyota',
  model: 'RAV4',
};

const myCar = {...anotherCar}

console.log(myCar)

myCar.make = 'Honda'
myCar.model = 'Civic'

console.log(myCar)
console.log(anotherCar)


//Exercise 6
const propertyName = 'username'

const userProfile = {
    [propertyName]: 'Zahraa',
    age: 19,
    email: 'zahraasuhail2006@gmail.com'
}

console.log(userProfile)

//Exercise 8
function hello(noun,adjective){

    if(noun && adjective){
    console.log(`The ${noun} is ${adjective}.`)
    }

    else{
    noun = 'cat'
    adjective = 'orange'
    console.log(`The ${noun} is ${adjective}.`)
    }
}

hello('dog','white')

//Exercise 9
const pizza = 'tasty';
let taste = pizza === "tasty" ? "yum" : "yuck"
console.log(taste)


// ! Exercise 10:
const localLangConfig = null; 
const lang = localLangConfig || 'en'
console.log(lang)


const savedUserTheme = null; 
const theme = savedUserTheme || 'light'
console.log(theme)


//Exercise 11
const adventurer = {
  name: 'Alice',
};

let cat = adventurer.cat?.age;
console.log(cat)
