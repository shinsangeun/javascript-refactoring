// before
class Customer{
    applyDiscount(aNumber){
        return (this.discountRate) ? aNumber - (this.discountRate * aNumber) : aNumber;
    }
}

//after
class Customer{
    applyDiscount(aNumber){
        if(!this.discountRate) return aNumber;
        else{
            assert(this.discountRate >= 0);
            return aNumber - (this.discountRate * aNumber);
        }
    }
}