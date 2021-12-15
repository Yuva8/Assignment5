class uberPrice{
    constructor(basefare,bookingfare,pricepermin,pricepermile,ridingdistance,ridingtime){
        this.basefare = basefare;
        this.bookingfare = bookingfare;
        this.pricepermin = pricepermin;
        this.pricepermile = pricepermile;
        this.ridingdistance = ridingdistance;
        this.ridingtime = ridingtime;

    }
    getuberprice(){
        console.log(`The riding price is ${this.basefare+this.bookingfare+(this.pricepermin*this.ridingtime)+(this.pricepermile*this.ridingdistance)}`)
    }
    setuberprice(newbasefare,newbookingfare,newpricepermin,newpriceoermile,newridingdistance,newridingtime){
        this.basefare = newbasefare;
        this.bookingfare = newbookingfare;
        this.pricepermin = newpricepermin;
        this.pricepermile = newpriceoermile;
        this.ridingdistance = newridingdistance;
        this.ridingtime = newridingtime;

    }
}

let uberPrice1 = new uberPrice();
uberPrice1.setuberprice(20,25,4,3,15,25);
uberPrice1.getuberprice()

let uberPrice2 = new uberPrice(20,25,4,3,15,20);
uberPrice2.getuberprice()

let uberPrice3 = new uberPrice(20,25,4,3,8,15);
uberPrice3.getuberprice()
  
let uberPrice4 = new uberPrice();
uberPrice4.setuberprice(20,25,4,3,7,13);
uberPrice4.getuberprice()



