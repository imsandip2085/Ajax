fetch('https://github.com/imsandip2085/Ajax/blob/ajax/data.json')
.then(responce => responce.json())
.then(data => console.log(data))


fetch('https://github.com/imsandip2085/Ajax/blob/ajax/data.json')
  .then(response => response.json())
  .then(data => console.log(data))

  var table = document.createElement("table");
  table.classList.add("table");
  table.classList.add("table-border");
  table.classList.add("table-hover");
  table.classList.add("m-5");
  table.style.width = "50%";
  table.setAttribute("border", "1");
  table.setAttribute("cellspacing", "0");
  table.setAttribute("cellpadding", "3");
  
  var col = [];
  for (var i = 0; i < Person.length; i++) {
    for (var key in Person[i]) {
      if (col.indexOf(key) === -1) {
        col.push(key);
      }
    }
  }
  
  // table head
  var thead = document.createElement("thead");
  thead.classList.add("thead-dark");
  var hRow = document.createElement("tr");
  for (var i = 0; i < col.length; i++) {
    var th = document.createElement("th");
    th.innerHTML = col[i];
    hRow.appendChild(th);
  }
  thead.appendChild(hRow);
  table.appendChild(thead);
  
  //table body
  var tBody = document.createElement("tbody");
  for (var i = 0; i < 5; i++) {
    var bRow = document.createElement("tr");
    for (var j = 0; j < col.length; j++) {
      var td = document.createElement("td");
      td.innerHTML = Person[i][col[j]];
      bRow.appendChild(td);
    }
  
    tBody.appendChild(bRow);
    table.appendChild(tBody);
  }
  //add data
  var container = document.getElementById("personDetails");
  container.innerHTML = "";
  container.appendChild(table);
  