const table = document.querySelector('table');
const allTr = table.querySelectorAll('tr');
const tBodies = table.querySelectorAll('tbody');

function sortTable(columnIndex) {
    let sortedRows = Array.from(allTr)
        .sort((rowA, rowB) => +rowA.cells[columnIndex].innerHTML > +rowB.cells[columnIndex].innerHTML ? 1 : -1);

    tBodies[0].append(...sortedRows);
}

sortTable(1);
sortTable(4);