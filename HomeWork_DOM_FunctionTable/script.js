function createTable() {
  numRows = prompt("Number of rows", 1);
  numColumns = prompt("Number of columns", 1);

  for (let rows = 0; rows < parseInt(numRows); rows++) {
    let k = document.getElementById("myTable").insertRow(r);
    for (let cols = 0; cols < parseInt(numColumns); cols++) {
      let y = k.insertCell(c);
      y.innerHTML = "Row-" + rows + " Column-" + cols;
    }
  }
}
