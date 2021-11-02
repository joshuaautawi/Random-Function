class Node{
    constructor(data){
        this.data = data,
        this.next = null
    }
    addNode(data){
        let current = this
        if(current.data == null){
            current.data= data
        }
        else{
            while(current.next != null){
                current = current.next
            }
            current.next = new Node(data)
        }
    }
    removeOdd(){
        let current = this
        let previous = null
        while(current != null){
            if(current.data %2!= 0){
                if(previous== null){
                    this.data = this.next.data
                    this.next = this.next.next
                }
                else{
                    current =current.next
                    previous.next = current
                }
            }
            else{
                previous = current
                current = current.next
            }
        }
    }
}
function removeNode(node,value){
    let current = node
    let previous = null
    
    if(node.data == value){
        current.data = current.next.data
        current.next = current.next.next
    }

    while(current != null){
        if(current.data == value){
            previous.next = current.next
        }
        previous = current
        current = current.next

    }
    return node
}
function remove(node,value){
    let current = node
    let previous = null
    let counter = 0
    while(current != null){
        if(current.data == value){
            
            if(counter>0){
                previous.next = current.next
            }
            counter++
            
        }
        else{
            previous = current
        }
        
        current = current.next

    }
    return node
}
function removeRedudant(node){
    let current = node 
    let obj = {}
    while(current != null){
        obj[current.data] = obj[current.data]+1 || 1
        current = current.next
    }
    for(let i in obj){
        if(obj[Number(i)]>1){
            remove(node,Number(i))
        }
    }
    return node

}
function removeAllRedundant(node){
    let current = node
    let obj= {}
    while(current != null){
        obj[current.data] = obj[current.data]+1 || 1
        current = current.next
    }
    for(let i in obj){
        if(obj[Number(i)]>1){
            removeNode(node,Number(i))
        }
    }
    return node
}
const node = new Node()

let arr = [1, 2, 1, 1, 5, 6, 7]
arr.forEach(e=>{
    node.addNode(e)
})

// node.removeOdd()
// console.log(node)
// console.log(removeAllRedundant(node))
console.log(removeRedudant(node))
