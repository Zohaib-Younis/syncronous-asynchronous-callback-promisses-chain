//asynchronous 
//settimeout() function
function hello(){
    console.log("Hello");
}
setTimeout(hello,4000)

// We can also create an arrow function in settimeout() function
console.log("One");
console.log("Two");
setTimeout(()=>{
    console.log("This is an arrow function within 'settimeout()' function...");
},4000);
console.log("Three");
console.log("Four");