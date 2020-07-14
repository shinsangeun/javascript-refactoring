class Person{
    get name(){return this._name;}
    set name(arg){this._name = arg;}
    get telephoneNumber(){return '(${this.officeAreaCode}) ${this.officeNumber}';}
    get officeAreaCode(){return this._officeAreaCode;}
    set officeAreaCode(arg){this._officeAreaCode = arg;}
    get officeNumber(){return this._officeNumber;}
    set officeNumber(arg){this._officeNumber = arg;}
}
//before
class Person{
    get officeAreaCode() {return this._officeAreaCode;}
    get officeNumber() {return this._officeNumber;}
}

//after
class Person{
    get officeAreaCode() {return this._telephoneNumber.areaCode;}
    get officeNumber(){return this._telephoneNumber.number;}
}
class TelephoneNumber{
    get areaCode(){return this._areaCode;}
    get number(){return this._number;}
}