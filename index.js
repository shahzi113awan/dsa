 
const {  Stack,StackObject} = require('./stack')

const stack = new StackObject();
stack.push(1)
stack.push(2)
stack.push(3)
stack.pop()
console.log(stack.print())