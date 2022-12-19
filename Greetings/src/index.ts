import { Greeter } from "./greeter";
import { JavaScript_Greeter } from "./javascript_greeter";
import { Loud_Greeter } from "./loud_greeter";
import { HTML_Greeter } from "./html_greeter";

console.log(new Greeter("Good morning, Harold"));
console.log(new Greeter("Good afternoon, Farold"));

console.log(new JavaScript_Greeter("Hello, Carold"));
console.log(new JavaScript_Greeter("Hello, Karold"));

console.log(new Loud_Greeter("Good morning", "GOOD MORNING"));
console.log(new Loud_Greeter("Hello", "HELLO"));

console.log(new HTML_Greeter("Hello, Jarold"));
console.log(new HTML_Greeter("Hello, Yarold"));