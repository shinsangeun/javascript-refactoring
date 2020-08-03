//before
availableVacation(anEmployee, anEmployee.grade);

function availableVacation(anEmployee, grade) {
    //연휴 계산...
}

class Order{
    get finalPrice(){
        const basePrice = this.quantity * this.itemPrice;
        let discountLevel;
        if(this.quantity > 100) discountLevel = 2;
        else discountLevel = 1;
        return this.discountedPrice(basePrice, discountLevel);
    }
    discountedPrice(basePrice, discountLevel){
        switch(discountLevel){
            case 1: return basePrice * 0.95;
            case 2: return basePrice * 0.9;
        }
    }
}

//after
availableVacation(anEmployee)

function availableVacation(anEmployee) {
    const grade = anEmployee.grade;
    //연휴 계산...
}

class Order{
    get finalPrice(){
        const basePrice = this.quantity * this.itemPrice;
        return this.discountedPrice(basePrice);
    }
    get discountLevel() {
        return (this.quantity > 100) ? 2 : 1;
    }
    discountedPrice(basePrice){
        switch(this.discountLevel){
            case 1: return basePrice * 0.95;
            case 2: return basePrice * 0.9;
        }
    }
}