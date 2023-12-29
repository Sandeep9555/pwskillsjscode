class product{
       
    name;
    #batch;

     constructor(n,b){
        this.name=n;
        this.batch=b;
     }
    print(){
       
       console.log(this.name,this.#batch);
    }


    static custom(){

        
        console.log("this is printing the static method");
    }

    // getRating(){
    //     console.log(this.#batch);
    // }
    // setRating(r){
    //     if(r<0){
    //         return ;
    //     }
    //     this.#batch=r;

    // }
    get ratingGetter(){
        console.log(this.#batch);
    }

    set ratingSetter(r){
        if(r<0){
            return ;
        }
        this.#batch=r;
    }


}
//static method always accessible only by using the class name

const obj=new product('sandeep',2);
obj.ratingSetter=10;
obj.ratingGetter;
console.log(this.name);
console.log(this.batch);
console.log(obj.print());
product.custom();