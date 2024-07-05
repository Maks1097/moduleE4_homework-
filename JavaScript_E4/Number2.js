const vegetables = {
    Cucumber: 'Огурец',
    Tomato: 'Помидор',
    Onion: 'Лук'
}

function vegetableInVegetables (str, arr) {
    for (let key in arr) {
        if (key === str) {
            return true;
        }
        else {
            return false;
        }
    }
}

console.log(vegetableInVegetables('Cucumber', vegetables))
console.log(vegetableInVegetables('Tomato', vegetables))