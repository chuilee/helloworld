// 1、TypeScript 中如何联合枚举类型的 Key?
enum enumType {
  A,
  B,
  C,
}

type strEnum = keyof typeof enumType; // "A" | "B" | "C"

// 2、TypeScript 如何设计 Class 的声明？
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet(): string {
    return "Hello, " + this.greeting;
  }
}
let greeter = new Greeter("world");
// 在声明类的时候，一般类中都会包含，构造函数、对构造函数中的属性进行类型声明、类中的方法。

// 3、 协变， 逆变，双变， 不变

// 协变
interface X {
  name: string;
  age: number;
}
interface Y {
  name: string;
  age: number;
  hobbies: string[];
}
let x: X = { name: "xiaoming", age: 16 };
let y: Y = { name: "xiaohong", age: 18, hobbies: ["eat"] };
x = y;
// y = x 报错

// 逆变
let printY: (y: Y) => void;
printY = (y) => {
  console.log(y.hobbies);
};
let printX: (x: X) => void;
printX = (x) => {
  console.log(x.name);
};
printY = printX;
// printX = printY 报错

// 4、同名的interface会自动合并，同名的interface和class会自动聚合。
interface LoginData {
  name: string;
  age: number;
}

interface LoginData {
  code: string;
  getFrom(): string;
}

class LoginData {
  comeFrom: string;
  constructor(paramters: loginType) {
    this.comeFrom = paramters.comeFrom;
  }
}

type loginType = {
  name: string;
  age: number;
  code: string;
  comeFrom: string;
};

class StuLogin implements LoginData {
  name: string;
  age: number;
  code: string;
  comeFrom: string;
  constructor(parameters: loginType) {
    let { name, comeFrom, age, code } = parameters;
    this.comeFrom = comeFrom;
    this.name = name;
    this.age = age;
    this.code = code;
  }
  getFrom(): string {
    return this.comeFrom;
  }
}

let stu = new StuLogin({
  name: "string",
  age: 123,
  code: "string",
  comeFrom: "come from",
});

console.log(stu.getFrom());
