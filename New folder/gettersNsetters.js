"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(email, password) {
        this.email = email;
        this.password = password;
        this._customerId = 1;
        this.city = "Jaipur";
        //
    }
    Object.defineProperty(User.prototype, "getAppleEmail", {
        get: function () {
            return "apple email is ".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "CustomerId", {
        get: function () {
            return this._customerId;
        },
        set: function (customNum) {
            this._customerId = customNum;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var vikas = new User("vks@g.com", 123);
