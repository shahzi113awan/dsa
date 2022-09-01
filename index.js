 
const {  Stack,StackObject} = require('./stack')
const { Queue } = require('./Queue')

const stack = new Queue();
 stack.enqueu(1)
 stack.enqueu(2)
 stack.enqueu(3)
 stack.dequeu()
 
console.log(stack.isEmpty())
console.log(stack.print())
console.log(stack.peek())