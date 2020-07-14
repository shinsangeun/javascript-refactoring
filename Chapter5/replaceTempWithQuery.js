class order{
    constructor(quantity, item) {
        this._quantity = quantity;
        this._item = item;
    }

    get price(){
        const basePrice = this._quantity * this._item.price;
        if(basePrice > 1000){
            return basePrice * 0.95;
        }else{
            return basePrice * 0.98;
        }
    }

    getbasePrice(){
        return this._quantity * this._item.price;
    }
}

//before
const basePrice = this._quantity * this._itemPrice;
if(basePrice > 1000){
    return basePrice * 0.95;
}else{
    return basePrice * 0.98;
}

//after
get basePrice() {this._quantity * this._item.price;}

if(this.basePrice > 1000){
    return this.basePrice * 0.95;
}else{
    return this.basePrice * 0.98;
}

