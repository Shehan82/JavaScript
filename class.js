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

class Car
{
    constructor(carName, year)
    {
        this.carName = carName;
        this.year = year;
    }

    age(x)
    {
        console.log(x - this.year);
    }
}

class dCar extends Car
{
    constructor(carName, year, color)
    {
        super(carName, year);
        // super(year);
        this.color = color;
    }

    show()
    {
       return console.log("This is " + this.carName + " with color " + this.color + ". model year is " + this.year);
    }

}

// var date = new Date();
// let year = date.getFullYear();
// const car1 = new Car("Tesla", 2002);

// car1.age(year);

var mycar = new dCar("Tesla", 2020, "cute white");

mycar.show();
