// before
get discountedTotal(){
    return this._discountedTotal;
}
set discount(aNumber){
    const old = this._discount;
    this._discount = aNumber;
    this._discountedTotal += old -aNumber;
}

//after
get discountedTotal(){
    return this._baseTotal - this.discount;
}
set discount(aNumber){
    this._discount = aNumber;
}

// before
class ProductionPlan{
    get production(){
        return this._production;
    }
    applyAdjustment(anAdjustment){
        this._adjustments.push(anAdjustment);
        this._production += anAdjustment.amount;
    }
}

// after
class ProductionPlan{
    get production(){
        return this._adjustments
            .reduce((sum, a) => sum + a.amount, 0);
    }
    applyAdjustment(anAdjustment){
        this._adjustments.push(anAdjustment);
    }
}