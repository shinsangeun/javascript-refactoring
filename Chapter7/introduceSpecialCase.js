// before
if(aCustomer === "미확인 고객") customerName = "거주자";

class UnknownCustomer {
    get name() {return "거주자"}
}

const aCustomer = site.customer;
let customerName;
if(aCustomer === "미확인 고객") customerName = "거주자";
else customerName = aCustomer.name;

const plan = (aCustomer === "미확인 고객") ? registry.billingPlans.basic : aCustomer.billingPlans;

const weeksDelinquent = (aCustomer === "미확인 고객") ? 0 : aCustomer.paymentHistory.weeksDelinquentInLastYear;