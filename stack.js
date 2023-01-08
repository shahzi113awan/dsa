class Stack{
    constructor(){
        this.items = []
    }
    push(element){
        this.items.push(element)
    }
    pop(){
        console.log(this.items)
        this.items.pop()
    }
    isEmpty(){
       return this.items.length == 0
    }
    printStack(){
        return this.items
    }
    peek(){
       
        return this.isEmpty()?null:this.items[this.items.length-1]
    }
    size(){
        return this.items.length
    }
    clear(){
        return this.items=[]
    }

}
class StackObject {
    constructor(){
        this.items = {}
        this.count = 0
    }
    push(el){
        this.items[this.count] = el
        this.count++
    }
    pop(){
        if(this.isEmpty()){
            return undefined
        }
        else{

            let res =  this.items[this.count-1]
            delete this.items[this.count-1]
            this.count--
            return res
        }
    }
    print(){
        if(this.isEmpty){
            return "empty"
        }
        else{

            return this.items
        }
    }
    isEmpty(){
        return this.count === 0
    }
    peek(){
        return this.items[this.count-1]
    }
    size(){
        return this.count
    }
    clear(){
        return delete this.items
    }
}

module.exports = {Stack,StackObject}