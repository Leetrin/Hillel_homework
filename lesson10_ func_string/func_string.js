function capitalize(string) {
    return string.split(' ')
    .map((elem) => elem[0].toUpperCase() + elem.slice(1))
    .join(' ');
}

capitalize("fff fff ggg kkk");






function checkSubstring(string, substring) {
    return string.toLowerCase()
        .includes(substring.toLowerCase());
}

checkSubstring("asdfghjk", "Asd");