"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array1 = [];
function scoreOne(val) {
    return val;
}
function scoreTwo(val) {
    return val;
}
function scoreThree(val) {
    return val;
}
scoreThree(true);
function scoreFour(val) {
    return val;
}
scoreFour({ brand: "nike", price: 4444 });
function getSearchResult(products) {
    //after doing some operations
    var myIndex = 3;
    return products[myIndex]; //one thing we must keep in mind that we can return only value which is an element of products array
    //we cannot return value except that.
}
var getMoreResult = function (products) {
    //after doing some operations
    var myIndex = 5;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne: valOne,
        valTwo: valTwo
    };
}
//here we can specify type of U using extends keyword
anotherFunction(4, { connection: "vikas", user: "vicky", password: 4 });
var sellable = /** @class */ (function () {
    function sellable() {
        this.cart = [];
    }
    sellable.prototype.addToCart = function (product) {
        this.cart.push(product);
    };
    return sellable;
}());
//Instanceof is like typeof but it tells us that object is an instance of a class or something else.
// It is used mostly where there is new keyword or not. But there is high potential of presence of new keyword.
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        console.log("it is Fish");
    }
    else {
        pet;
        console.log("it is Bird");
    }
}
function GetArea(shape) {
    switch (shape.kind) {
        case "Circle":
            return Math.PI * shape.radius * shape.radius;
        case "Square":
            return shape.side * shape.side;
        case "Rectangle":
            return shape.length * shape.width;
        default:
            var _defaultForShape = shape;
            return _defaultForShape;
    }
}
