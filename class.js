// implement simple set dataStructure

class set 
{
    constructor(arr)
    {
        this.arr = arr;
    }

    add(val)
    {
        if(!this.has(val))
        {
            this.arr.push(val);
        }
    }

    delete(val)
    {
        this.arr = this.arr.filter(x=>(x!=val));
    }

    has(val)
    {
        return this.arr.includes(val);
    }
}

const newSet = new set([1,2,3,4]);
newSet.add(5);
newSet.delete(3)
console.log(newSet)