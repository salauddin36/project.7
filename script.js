function getAndUpdate(){
    console.log("add list");

    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;

    if(localStorage.getItem('itemsJson') == null){
      itemJsonArray = [];
      itemJsonArray.push([tit, desc]);
      localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));

    }
    else{
      itemJsonArrayStr = localStorage.getItem('itemsJson');
      itemJsonArray = JSON.parse(itemJsonArrayStr);
      itemJsonArray.push([tit, desc]);
      localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));

      document.getElementById('title').value = '';
      document.getElementById('description').value = '';

    }
    update();
  }

  function update(){
    if(localStorage.getItem('itemsJson') == null){
      itemJsonArray = [];
      localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));

    }
    else{
      itemJsonArrayStr = localStorage.getItem('itemsJson');
      itemJsonArray = JSON.parse(itemJsonArrayStr);
    }

    // add to table
    tableBody = document.getElementById('tableBody');
    let str = "";
    itemJsonArray.forEach((ele, index) => {
      str += `
      <tr>
            <th scope="row">${index  + 1}</th>
            <td>${ele[0]} </td>
            <td>${ele[1]}</td>
            <td><button class="btn btn-primary btn-sm" onclick='deleted(${index})'>Delete</button></td>
      </tr>
     `;
   
    });

    tableBody.innerHTML = str;
  }

  let add = document.getElementById("add");
  add.addEventListener("click", getAndUpdate);
  update();

  function deleted(itemIndex){
    console.log('deleted', itemIndex);
    itemJsonArrayStr = localStorage.getItem('itemsJson');
    itemJsonArray = JSON.parse(itemJsonArrayStr);

    // delete itemIndex element from array
    itemJsonArray.splice(itemIndex, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    update();

  }

  function clearStorage(){
    if(confirm("Do you really want to Clear the list ?")){

      console.log('clear list');
      localStorage.clear();
      update();

    }
  }