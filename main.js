import { LinkedList } from "./script.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

list.prepend("dog");
list.prepend("cat");
list.prepend("parrot");
list.prepend("hamster");
list.prepend("snake");
list.prepend("turtle");

console.log(list.toString());
console.log(list.size());
// console.log(list.head());
// console.log(list.tail());
// console.log(list.at(0));
// console.log(list.at(1));
// console.log(list.at(2.5));
// console.log(list.at(11));
// console.log(list.at(3));
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.toString());
// console.log(list.findIndex("parrgukgyuot"));
// list.insertAt(3, 10, 11, 12);
list.removeAt(0);
list.removeAt(10);
console.log(list.toString());
console.log(list.size());
