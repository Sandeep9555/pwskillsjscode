class Product{
    name;
    price;
    rating;

    constructor(){

        console.log("calling the constructor");
        
    }
    display()
    {
        console.log('displaying the current Product');
    }
}

const p=new Product();
console.log(p);

p.display();