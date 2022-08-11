import _ from "lodash";
import Image1 from './images/image1.webp';
import "./styles/main.scss";

function component() {
  let element = document.createElement("div");
  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("blue");

  let image1 = document.createElement('img')
  image1.src = Image1;

  element.appendChild(image1);

  return element;
}

document.body.appendChild(component());
