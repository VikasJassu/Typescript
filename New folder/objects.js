"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "vikas",
    email: "vks@g.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
//this is example of weird behaviour of objects in js/ts
var userData = { name: "abc", isPaid: false, email: "xyz@g.com" };
createUser(userData);
//in this type function returns an object
function createCourse() {
    return { name: "typescript", price: 199 };
}
