class Dequeue {
    constructor() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }
    addFront(el) {
        if (this.isEmpty()) {
            this.addBack(el)
        }
        else if (this.lowestCount > 0) {
            console.log("here")
            this.lowestCount--
            this.items[this.lowestCount] = el
        }
        else {
            for (let i = this.count; i > 0; i--) {
                this.items[i] = this.items[i - 1];
            }
            this.count++
            this.items[0] = el

        }
    }
    addBack(el) {
        this.items[this.count] = el
        this.count++
    }
    removeBack(){
       
        let res  = this.items[this.count-1]
        delete this.items[this.count-1]
        return this.items
    }
    removeFront(){
       let res =  this.items[0] 
       delete this.items[0]
       for(let i=this.count ; i=0 ; i--){
        this.items[i-1] = this.items[i]
       }
    }
    isEmpty() {
        return Object.keys(this.items).length == 0
    }
    print() {
        return this.items
    }
    peekFront(){
      return this.items[0]
    }
    peekBack(){
        return this.items[this.count-1]
    }
    isEmpty(){
      return Object.keys(this.items).length == 0 ? "empty":"filled"
    }
}

module.exports = { Dequeue }