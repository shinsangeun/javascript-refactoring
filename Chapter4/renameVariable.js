let a = height * width;         //before
let area = height * width;      //after

const cpyNm = "애크미 구스베리";   //before
const companyName = "애크미 구스베리";     //after
const cpyNm = companyName;

let _title = "untitled";      //before
function title() {return _title;}       //after
function setTitle(arg) {_title = arg;}