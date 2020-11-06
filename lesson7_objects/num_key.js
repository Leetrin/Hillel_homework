const user = {
    "0": "zero",
    "42": "answer",
    "greeting": "hello",
    "3.14": "PI",
  };
  
  function isNumber(user) {
    for (let key in user){
      if (!isNaN(+key)) {
        console.log(user[key])
      }
    }
   }
  
  isNumber(user);