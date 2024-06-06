 // Immediately invoked function Expression(IIFE)
 
 (function chai() {
   //named IIFE
    console.log(`DB CONNECTION`);
 } )();



 ( (name) => {
   console.log(`DB CONNECTED TWO ${name}`);
 })('priya')