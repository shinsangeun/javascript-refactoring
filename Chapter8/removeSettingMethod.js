// before
class Person{
    get name() {return this._name;}
    set name(aString) {this._name = arg;}
    get id(){return this._id;}
    set id(arg) {this._id = arg;}
}

const martin = new Person();
martin.name = "마틴";
martin.id = "1234";

// after
class Person {
    constructor(id) {
        this.id = id;
    }
    get name() {return this._name;}
    set name(aString) {this._name = arg;}
    get id(){return this._id;}
}

const martin = new Person();
martin.name = "마틴";