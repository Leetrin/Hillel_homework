const container = document.getElementById('container');

const container2 = document.querySelector('#container');

const liSecond = document.querySelectorAll('li.second');

const liThird = document.querySelector('ol li.third');

const header = document.querySelector('.header');
header.textContent = 'Hello!';

const footer = document.querySelector('.footer');
footer.classList.add('main');
footer.classList.remove('main');

const newLi = document.createElement('li');
newLi.textContent = 'four';
const ul = document.querySelector('ul');
ul.append(newLi);

const allLiOl = document.querySelectorAll('ol li');

allLiOl.forEach(elem => {
    elem.style.background = 'green';
})

footer.remove();


console.log(container);
console.log(container2);
console.log(liSecond);
console.log(liThird);
console.log(allLiOl);