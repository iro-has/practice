let greed = 'Hello, world!';
console.log(greed);

const num = 42;
console.log(`The answer is ${num}`);

let arr = [1, 2, 3, 4, 5];
console.log(arr[2]);

let index = 0;
while (index < arr.length) {
   console.log(index);
   index ++;
}

const test = (arg) => {
    if (arr.length > arg) {
        console.log('Array is long enough');
    } else {
        console.log('Array is too short');
    }
};

test(7);
test(3);
test(5);

const cance = {
    color: 'red',
    size: 'large',
    purfume: 'rose',
    gogo: (god) => {
        console.log(god);
    }
};
console.log(cance.color);
cance.gogo('my god');
console.log(cance);

console.log(window.location.href);
console.log(document.title);

console.log(document.getElementsByTagName('button')[0].addEventListener('click', () => {
    window.alert('Button clicked!');
}));