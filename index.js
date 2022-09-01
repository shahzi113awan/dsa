 
const {  Stack,StackObject} = require('./stack')
const { Queue } = require('./Queue')
const { Dequeue } = require('./Dqueue')

const stack = new Dequeue();
stack.addBack(1)
stack.addBack(2)
stack.addBack(3)

stack.addFront(5)
//  stack.removeBack()
//  stack.removeFront()
console.log(stack.print())
console.log(stack.peekBack())
// console.log(stack.peek())