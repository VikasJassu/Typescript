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
//when we directly pass all userData separatly as argument then we can only pass defined arguments , we can't pass extra arguments
//but when when we make an objects userData and then pass it into createUser then it is fine. So this is weird behaviour of js/ts
var userData = { name: "abc", isPaid: false, email: "xyz@g.com" };
createUser(userData);
//in this type function returns an object
function createCourse() {
    return { name: "typescript", price: 199 };
}
//Type Aliases
//Type Aliases are used because if we have 8 functions taking the same argument let's say as an object 
//then we have to pass the same object to all functions then it would be very bad or lengthy to pass the
// same object to all those functions. So instead of passing the object to all function we use TYPE to create an object-like entity and
// pass that let's say a single word so it would be easy to write code and code also looks simpler and readable.
{ /**
    type User = {
    name: string;
    email:string;
    isActive: boolean
}

function newUser(user: User):User {
    return ({name:"", email:"", isActive: false});
}

newUser({name:"vikas", email:"abs.com", isActive: false});
*/
}
var myUser = {
    _id: "2224",
    name: "vikas",
    email: "vks@gmail.com",
    isActive: false,
};
myUser.email = "abc.com";
