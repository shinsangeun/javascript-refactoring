// before
let defaultOwner = {firtstName: "마틴", lastName: "파울러"};

// after
let defaultOwnerData = {firtstName: "마틴", lastName: "파울러"};
export function defaultOwner() {
    return defaultOwnerData;
}
export function setDefaultOwner(arg) {
    defaultOwnerData = arg;
}