class Product{
    name;
    price;
    rating;

    constructor(n,p,r){

        console.log("calling the constructor");
        this.name=n;
        this.price=p;
        this.rating=r;

    }
    display()
    {
        console.log('displaying the current Product');
    }
}

const p=new Product('iphone',100000,5);
console.log(p);

p.display();