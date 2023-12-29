class complexnumber{
    #real;
    #imag;

    constructor(r,i){
        this.#real=r;
        this.#imag=i;

    }

    display(){
        console.log(this.#real,'+ i',this.#imag);
    }
    get real(){
        return  this.#real;

    }
    get imag(){
        return this.#imag;
    }
    addcomplexnumber(c){

        this.#real+=c.real;
        this.#imag+=c.imag;
    }
}
const c1=new complexnumber(2,3);
c1.display();
const c2=new complexnumber(4,5);
c1.addcomplexnumber(c2);
c1.display();

