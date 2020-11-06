function Cat(name, breed) {
    this.name = name;
    this.breed = breed;
  
    this.meow = function() {
      console.log('Мяу!');
    }
  }
  
  const myCat = new Cat('Barsik', 'Рыжий');





  function User(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  
    this.greet = function() {
      console.log(`Hello, ${this.firstName} ${this.lastName}`);
    }
  }
  
  const myUser = new User('Василий', 'Борода', 34);