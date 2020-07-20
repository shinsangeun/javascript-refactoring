//before
class Organization{
    constructor(data) {
        this._name = data.name;
        this._country = data.country;
    }
    get name() {return this._name;}
    set name(arg){this._name = aString;}
    get country(){return this._country;}
    set country(arg){this._country = aCountryCode;}
}

const organization = new Organization({name:"애크미 구스베리", country:"GB"})

// after
class Organization{
    constructor(data) {
        this._title = data.title;
        this._country = data.country;
    }
    get title() {return this._title;}
    set title(arg){this._name = aString;}
    get country(){return this._country;}
    set country(arg){this._country = aCountryCode;}
}