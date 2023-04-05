const nickname = "Timmy";
const firstname = "Timothy";

if (nickname) {
    console.log(`Good Morning, ${nickname}!`);
  } else if (firstname) {
    console.log(`Good Morning, ${firstname}!`);
  } else {
    console.log("Good Morning!");
  }
  /*the code was not running because they didn't use template laterals, and we need "if/else" 
  statements to explain the comditions*/