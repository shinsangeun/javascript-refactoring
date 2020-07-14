// 사람 클래스
class Person{
    constructor(name) {
        this._name = name;
    }
    get name(){return this._name;}
    get department(){return this._department;}
    set department(arg){this._department = arg;}
}

//사람이 속한 부서
class Department{
    get chargeCode(){return this._chargeCode;}
    set chargeCode(arg){this._chargeCode = arg;}
    get manager(){return this._manager;}
    set manager(arg){this._manager = arg;}
}

//before
manager = aPerson.department.manager;

//after
manager = aPerson.manager;

class Person{
    get manager(){return this.department.manager;}
}