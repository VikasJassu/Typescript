"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var TakePhoto = /** @class */ (function () {
    function TakePhoto(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    TakePhoto.prototype.getReelsCount = function () {
        //after some complex calculations
        return 3;
    };
    return TakePhoto;
}());
//const obj = new TakePhoto("test", "test")
// We can use abstract keyword to define a method/function without definition. We will leave it for
// later that we can define it as our requirement.
// Constructors for derived classes must contain a super call.
var Instagram = /** @class */ (function (_super) {
    __extends(Instagram, _super);
    function Instagram(cameraMode, filter, color) {
        var _this = _super.call(this, cameraMode, filter) || this;
        _this.cameraMode = cameraMode;
        _this.filter = filter;
        _this.color = color;
        return _this;
    }
    Instagram.prototype.getSepia = function () {
        console.log("Sepia");
    };
    return Instagram;
}(TakePhoto));
var obj = new Instagram("test", "test", "red");
obj.getReelsCount();
