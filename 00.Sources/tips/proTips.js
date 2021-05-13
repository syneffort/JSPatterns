const foo = { name: 'tom', age:30, nervous: false };
const bar = { name: 'dick', age:30, nervous: false };
const baz = { name: 'harry', age:30, nervous: false };

// ****************************
// ¡Ú SHOW AS SINGLE OBJECT
// ****************************
console.log('%c My Friends', 'color: orange; font-weight: bold;');
console.log({ foo, bar, baz });



// ****************************
// ¡Ú SHOW AS TABLE ARRAY
// ****************************
console.log('%c My Friends', 'color: orange; font-weight: bold;');
console.table([ foo, bar, baz ]);



// ****************************
// ¡Ú TIME TRACE
// ****************************
console.time('looper');
let i = 0;
while (i < 1000000) {
    i++;
}
console.timeEnd('looper');



// ****************************
// ¡Ú CALL POSITION TRACE
// ****************************
const deleteMe = () => console.trace('bye bye database');
deleteMe();
deleteMe();



// ****************************
// ¡Ú DESTRUCTING
// ****************************
const turtle = {
    name: 'Bob ?',
    legs: 4,
    shell: true,
    type: 'amphibious',
    meal: 10,
    diet: 'berries'
}
// bad code
function feedBad(animal) {
    return `Feed ${animal.name} ${animal.meal} kilos of ${animal.diet}`
}
console.log(feedBad(turtle));

// good code
function feedGood1({ name, meal, diet }) {
    return `Feed ${name} ${meal} kilos of ${diet}`;
}
console.log(feedGood1(turtle));
// or
function feedGood2(animal) {
    const { name, meal, diet } = animal;
    return `Feed ${name} ${meal} kilos of ${diet}`;
}
console.log(feedGood2(turtle));



// ****************************
// ¡Ú TEMPLATE LITERALS
// ****************************
const horse = {
    name: 'Topher ? ',
    size: 'large',
    skills: ['jousting', 'racing'],
    age: 7
}

// bad code
let bio = horse.name + ' is a ' + horse.size + ' horse skilled in ' + horse.skills.join(' & ');
console.log(bio);

// good code
const { name, size, skills } = horse;
bio = `${name} is a ${size} horse skilled in ${skills.join(' & ')}`;
console.log(bio);

// Advanced
function horseAge(str, age) {
    const ageStr = age > 5 ? 'old' : 'young';
    return `${str[0]}${ageStr} at ${age} years`;
}
const bio2 = horseAge`This horse is ${horse.age}`;
console.log(bio2);


// ****************************
// ¡Ú SPREAD SYNTAX
// ****************************
const pikachu = { name: 'Pikachu ?'};
const stats = { hp: 40, attack: 60, defence: 45 };

// bad code
pikachu['hp'] = stats.hp;
pikachu['attack'] = stats.attack;
pikachu['defence'] = stats.defence;

const lv10 = Object.assign(pikachu, stats);
const lv11 = Object.assign(pikachu, {hp: 45});

console.log(lv11);

// good code
const lv12 = { ...pikachu, ...stats }
const lv13 = { ...pikachu, hp: 45 }
console.log(lv13);

// Arrays
let pokemon = ['Arbok', 'Raichu', 'Sandshrew'];

// bad code
pokemon.push('Bulbasaur');
pokemon.push('Metapod');
pokemon.push('Weedle');
console.log(pokemon);

// good code
pokemon = [ 'Bulbasaur', ...pokemon, 'Metapod', 'Weedle' ];
console.log(pokemon);



// ****************************
// ¡Ú LOOPS
// ****************************
const orders = [500, 30, 90, 15, 223];

// bad code
let total = 0;
let withTax = [];
let highValue = [];
for (i = 0; i < orders.length; i++) {
    // Reduce
    total += orders[i];

    // Mep
    withTax.push(orders[i] * 1.1);

    // Filter
    if (orders[i] > 100) {
        highValue.push(orders[i]);
    }
}
console.log(total);
console.log(withTax);
console.log(highValue);

// good code
const total2 = orders.reduce((acc, cur) => acc + cur);
const withTax2 = orders.map(v => v * 1.1);
const highValue2 = orders.filter(v => v > 100);
console.log(total2);
console.log(withTax2);
console.log(highValue2);

// ****************************
// ¡Ú ASYNC-AWAIT
// ****************************
const random = () => {
    return Promise.resolve(Math.random());
};

// bad code
const sumRandomAsyncNums = () => {
    let first;
    let second;
    let third;

    return random()
        .then(v => {
            first = v;
            return random();
        })
        .then(v => {
            second = v;
            return random();
        })
        .then(v => {
            third = v;
            return random();
        })
        .then(v => {
            return first + second + third;
        })
        .then(v => {
            console.log(`Result ${v}`);
        })
};

sumRandomAsyncNums();

// good code
const sumRandomAsyncNums2 = async() => {
    const first = await random();
    const second = await random();
    const third = await random();

    console.log(`Result ${first + second + third}`);
};

sumRandomAsyncNums2();