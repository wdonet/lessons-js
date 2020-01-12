// ES6 introduces maps (collection)

let cardO = {
    name: 'Ozz'
};
let cardK = {
    name: 'King'
};

let deck = new Map();
deck.set('o', cardO);
deck.set('k', cardK);
// let deck = new Map([['o', cardO], ['k', cardK]]); // alternative to create a map
console.log(deck); // Map { 'o' => { name: 'Ozz' }, 'k' => { name: 'King' } }
deck.set(Object.create(null), ()=>{});
deck.set('str', 'string');
deck.set(0, 9);
deck.set(null, null);
deck.set(undefined, undefined);
console.log(deck); // Map { 'o' => { name: 'Ozz' }, 'k' => { name: 'King' } }