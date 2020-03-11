function* demo() {
    console.log("1");
    yield;
    console.log("2");
}
console.log("start");
const it = demo();
console.log("before iteration");
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log("after iteration");