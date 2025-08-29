import promptSync from "prompt-sync";
let sales = 123456789;
let course = "TypeScript";
let is_published = true;
let user = [1, "Dana"];
console.log(sales, " ", course, " ", is_published, " ", user);
const pi = Math.PI;
function circleArea(radius) {
    return pi * Math.pow(radius, 2);
}
console.log(circleArea(2));
let food = ['pelmeni', 'pizza', 'icecream', 'buterbrod'];
for (let i = 0; i < food.length; i++) {
    console.log(food[i] + ", ");
}
const prompt = promptSync();
const input = prompt("Enter your age: ");
if (input !== null) {
    const age = Number(input);
    if (isNaN(age) || age < 0)
        console.log('Please enter a valid number');
    else if (age > 20)
        console.log('You are an adult');
    else if (age > 12)
        console.log('You are a teenager');
    else
        console.log('You are a child');
}
let level = 'hello';
let levelLength = level.length;
console.log(levelLength);
let sum = 0;
let list = ['salut', 2, 'ddjf', 'la revedere', 92374, 32];
list.forEach((i) => {
    if (typeof (i) === 'number')
        sum += i;
});
console.log(sum);
//# sourceMappingURL=index.js.map