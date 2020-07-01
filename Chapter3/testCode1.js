class Province {
    constructor(doc) {
        this._name = doc.name;
        this._producers = [];
        this._totalProduction = 0;
        this._demand = doc.demand;
        this._price = doc.price;
        doc.producers.forEach(d => this.addProducer(new Producer(this, d)));
    }

    addProducer = (arg) => {
        this._producers.push(arg);
        this._totalProduction += arg.production;
    }

    get shortfall(){
        return this._demand - this._totalProduction;
    }

    get profit(){
        return this.demandValue - this.demandCost;
    }

    get demandValue(){
        return this.satisfiedDemand * this.price;
    }

    get satisfiedDemand(){
        return Math.min(this._demand, this.totalProduction)
    }

    get demandCost(){
        let remainingDemand = this.demand;
        let result = 0;
        this._producers
            .sort((a, b) => a.cost - b.cost)
            .forEach(p => {
                const contribution = Math.min(remainingDemand, p.production);
                    remainingDemand -= contribution;
                    result += contribution * p.cost;
            })
        return result;
    }
}

class Producer{
    constructor(aProvince, data){
        this._province = aProvince;
        this._cost = data.cost;
        this._name = data.name;
        this._production = data.production || 0;
    }

    get name()  {return this._name;}

    get cost()  {return this._cost;}
    set cost(arg)   {this._cost = parseInt(arg);}

    get production() { return this._production; }
    set production(amountStr){
        const amount = parseInt(amountStr);
        const newProduction = Number.isNaN(amount) ? 0 : amount;
        this._province.totalProduction += newProduction - this._production;
        this._production = newProduction;
    }
}

sampleProvinceData = () =>{
    return{
        name: "Asia",
        producers: [
            {name: "Byzantiun", cost: 10, production: 9},
            {name: "Attalia", cost: 12, production: 10},
            {name: "Sinope", cost: 10, production: 6}
        ],
        demand: 30,
        price: 20
    }
}

let assert = require('assert');
let expect = require('expect');

describe('province', function () {
    let asia;
    beforeEach(function () {
        asia = new Province(sampleProvinceData());
    });
    it('shortfall', function () {
        assert(asia.shortfall,5);                   // 2. 검증
    })

    it('profit', function () {
        assert(asia.profit, 230);
    })

    it('zero demand', function () {   // 수요가 없다.
        asia.demand = -1;
        assert(asia.shortfall, -26);
        assert(asia.profit, -10);
    })
})

function beforeEach(param) {

}

describe('no producers', function () {
    let noProducers;
    beforeEach(function () {
        const data = {
            name: "No Producers",
            producers: [],
            demand: 30,
            price: 20
        };
        noProducers = new Province(data);
    })
    it('shortfall', function () {
        assert(noProducers.shortfall, 30);
    })
    it('profit', function () {
        assert(noProducers.profit, 0);
    })
})