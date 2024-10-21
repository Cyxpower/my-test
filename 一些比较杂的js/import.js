import value, { add } from "./export.js";  //使用不带大括号 {} 的变量来接收默认导出（使用 export default 导出的内容）。使用带大括号 { } 的变量来接收命名导出（使用 export 导出的内容）。
import obj from './export_default.js'




add();

console.log(value);




const res = obj(1.2, 3.4)
console.log(res);