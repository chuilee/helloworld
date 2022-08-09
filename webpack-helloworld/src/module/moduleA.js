import ModuleB from "./moduleB";

export default class ModuleA extends ModuleB {
  constructor() {
    super();
    this.name = "moduleA";
  }

  sayName() {
    console.log(this.name, 111);
  }
}
