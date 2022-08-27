// 1、TypeScript 中如何联合枚举类型的 Key?
var enumType;
(function (enumType) {
    enumType[enumType["A"] = 0] = "A";
    enumType[enumType["B"] = 1] = "B";
    enumType[enumType["C"] = 2] = "C";
})(enumType || (enumType = {}));
// 2、TypeScript 如何设计 Class 的声明？
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
var x = { name: "xiaoming", age: 16 };
var y = { name: "xiaohong", age: 18, hobbies: ["eat"] };
x = y;
// y = x 报错
// 逆变
var printY;
printY = function (y) {
    console.log(y.hobbies);
};
var printX;
printX = function (x) {
    console.log(x.name);
};
printY = printX;
var LoginData = /** @class */ (function () {
    function LoginData(paramters) {
        this.comeFrom = paramters.comeFrom;
    }
    return LoginData;
}());
var StuLogin = /** @class */ (function () {
    function StuLogin(parameters) {
        var name = parameters.name, comeFrom = parameters.comeFrom, age = parameters.age, code = parameters.code;
        this.comeFrom = comeFrom;
        this.name = name;
        this.age = age;
        this.code = code;
    }
    StuLogin.prototype.getFrom = function () {
        return this.comeFrom;
    };
    return StuLogin;
}());
var stu = new StuLogin({
    name: "string",
    age: 123,
    code: "string",
    comeFrom: "come from",
});
console.log(stu.getFrom());
//# sourceMappingURL=index.js.map