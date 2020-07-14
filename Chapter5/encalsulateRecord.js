// before
organization = {name : "애크미 구스베리", country: "GB"};

result += {$organization.name}; //읽기 예
organization.name = newName;    //쓰기 예

//{start:1 , end:5}


function getRawDataOfOrganization() {
    return organization;
}

//after
class Organization {
    constructor(data) {
        this._name = data.name;
        this._country = data.country;
    }

    get name() {
        return this._name;
    }

    set name(arg) {
        this._name = arg;
    }

    get country() {
        return this._country;
    }

    set country(arg) {
        this._country = arg;
    }
}