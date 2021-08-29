class Node {
    constructor(element) {
        this.element = element;
        this.next = null
    }
  
    addItem(node, element){
        if(node.next === null) {
            node.next = new Node(element)            
        } else {
            const next = node.next;
            this.addItem(next, element)
        }
    }
  
    print(node){
       if(node !== null) {
           console.log(node.element);
           this.print(node.next)
       }
    }
  
    remove(node , element) {
        if(node !== null && node.next !== null && node.next.element === element) {
            node.next = node.next.next            
        } else {
            this.remove(node.next, element)
        }
    }
  
    indexOf(node, element, index) {
        if(node === null) return -1;
        if(node.element === element) {
            return index;
        } 
        return this.indexOf(node.next, element, index + 1)
    }
  
    insertAt(node, element, currenIndex, index) {
        if(currenIndex + 1 === index) {
            const newNode = new Node(element)
            newNode.next = node.next
            node.next = newNode;
        } else {
            this.insertAt(node.next, element, currenIndex + 1, index)
        }
    }
  
    removeByIndex(node , currentIndex, index) {
        if(currentIndex + 1 === index) {
            const element = node.next.element
            node.next = node.next.next      
            return element
        } else {
            return this.removeByIndex(node.next, currentIndex + 1, index)
        }
    }
  }
  
  class LinkedList {
    constructor() {
        this.root = null;
        this.size = 0;
    }
  
    isNotEmpty() {
        return this.root !== null
    }
  
    listAdd(element) {
        if(this.root === null) {
            this.root = new Node(element);
        } else {
            this.root.addItem(this.root, element);
        }
        this.size++;
    }
  
    listPrint() {
        this.root.print(this.root)
    }
  
    listSize() {
        return this.size;
    }
  
    removeElement(element) {
        this.root.remove(this.root, element)
        return element;
    }
  
    indexOf(element) {
        return this.root.indexOf(this.root, element, 0)
    }
  
    insertAt(element, index) {
        this.root.insertAt(this.root, element, 0, index)
    }
  
    removeFrom(index) {
        return this.root.removeByIndex(this.root, 0, index);
    }
  }