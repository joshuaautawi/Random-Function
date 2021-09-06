const {SHA256} = require('crypto-js')

class Block {
    constructor(data,index,timestamp = String(new Date)){
        this.data = data
        this.index = index
        this.hash = this.calculateHash()
        this.timestamp = timestamp
    }
    

    calculateHash(){
        return SHA256(JSON.stringify(this.data) + this.index +this.timestamp).toString()
    }
}

class Blockchain {
    constructor(){
        this.chain = [this.firstBlock()]
    }

    firstBlock(){
        const date = '09/05/67'
        return new Block("firstBlock", 0 , date)
    }
    lastBlock(){
        return this.chain [this.chain.length-1]
    }
    addNewBlock(block){
        block.index = this.lastBlock().index+1
        block.hash = block.calculateHash()
        this.chain.push(block)
    }

}

const blockc = new Blockchain
blockc.firstBlock()
blockc.addNewBlock(new Block({sender : "joshua" , receiver :"autawi" , message : `Block ${blockc.chain.length} has been added`}))
console.log(blockc.chain[1])
// const result = new Block("ADA" , 0 , '24/06/1991')
// console.log(result)