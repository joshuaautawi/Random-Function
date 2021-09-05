class Node {
    constructor(data){
    this.data = data
    this.next = null
}
}

class LinkenList {
    constructor(){
    this.header = null //  Node {data : 30 , next : null } // Node {data : 10 , next : Node {data : 30 , next : null }}                       // Node(data :50 , next : Node {data : 10 , next : Node {data : 30 , next : null }})
    this.tail == null
    this.size = 0}
    
    addFront(data){
        const x = new Node(data)
        if(this.size === 0 ){
            this.header = x 
            this.tail = x
        }
        else{
            x.next = this.header
            this.header = x 
        }
        this.size++
    }

    addBack(data){
        const x = new Node(data)
        if(this.size === 0 ){
            this.header = x
            this.tail = x
        }
        else{
            const temp = this.tail
            this.tail = x
            temp.next= this.tail
        }
        this.size++
    }
    printList(){
        let data = ""
        let current = this.header
        while(current != null ){
            data = data + current.data + " "
            current = current.next
        }
       
        return data
    }
    insertAt(index,data){
        let newNode = new Node(data)
        if(index< 0 || index> this.size){return null}
        if(index == 0){return this.addFront()}
        if(index == this.size-1){return this.addBack()}
        else{
            let counter = 0
            let prev = null
            let current = this.header
            while(counter<index){
                prev = current
                current = current.next
            }
            prev.next = newNode
            newNode.next = current
            this.size ++
        }
    }

    removeFirst(){
        if(this.size == 0 ){
            return null
        }
        let data = this.header.data
        if(this.size ===1 ){
            this.header = null 
            this.tail = null
        }
        else{
            this.header =this.header.next
        }
        this.size --
        return data
    }

    removeLast(){
        if(this.size === 0 ){
            return null
        }
        let data =this.tail.data
        if(this.size ===1 ){
            this.header =null
            this.tail = null
        }
        else{
            let current = this.header
            while(current.next.next != null ){
                current = current.next
            }
            current.next = null
            this.tail = current
        }
        this.size --
        return data
    }
    indexOf(data){
        if(this.size <= 0){
            return null
        }
       else{
            let current = this.head
            let counter = 0
            console.log(current)
            while(counter < this.size){
                if(current.data == data){
                    return counter
                }
                else if(current.data != data ){
                    current = current.next
                    counter++
                }
            }
            return null
            
       }
    }
    isNotEmpty(){
        return this.size <= 0 ? false : true
    }

    
    linkSize(){return this.size}
}
    

