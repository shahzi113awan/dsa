class QueueObject {
    constructor() {
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }
    enqueu(el) {
        this.items[this.count] = el
        this.count++
    }
    dequeu() {
        const res = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return res
    }
    isEmpty() {
        return Object.keys(this.items).length === 0;
    }
    print() {
        if (this.isEmpty) {
            return "empty"
        }
        else {

            return this.items
        }
    }
    peek() {
        if (this.isEmpty) {
            return "no element present in queue"
        }
        else {
            return this.items[this.count]
        }
    }
    clear() {
        delete this.items
    }

}
class Queue {
    constructor() {
        this.items = [];
        this.count = 0;
        this.lowestCount = 0;
    }
    enqueu(el) {
        this.items.push(el)
        this.count++
    }
    dequeu() {

        if (this.isEmpty()) {
            return undefined;
        }
        this.items.splice(this.lowestCount, 1)
    }   
    print() {
        if (this.isEmpty()) {
            return "Empty Queue"
        }
        else {
            return this.items
        }

    }
    isEmpty() {
        return this.items.length == 0
    }
    peek() {

        return this.items[this.lowestCount]
    }
}

module.exports = { Queue, QueueObject }