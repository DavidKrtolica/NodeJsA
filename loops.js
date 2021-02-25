//FUNCTIONAL LOOPING METHODS - MAP, REDUCE, FILTER

const fruits = ['apple', 'banana', 'blueberry'];

//PRINTING OUT FRUITS USING THE MAP METHOD
console.log(fruits.map(fruit => fruit));
//PRINTING OUT EVERY FRUIT SEPERATELY
fruits.map(fruit => console.log(fruit));

//CREATING A NEW ARRAY WITH COPIED ELEMENTS W/ SOME CHANGES
const copiedFruits = fruits.map(fruit => {
    return {fruit, delicious: "YESSSS"}
});
console.log(copiedFruits);

