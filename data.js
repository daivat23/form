var formArray = [];

function init(){
    document.getElementById("tablerows").innerHTML = " ";
    if(localStorage.studantRecord){
        formArray = JSON.parse(localStorage.studantRecord);
        for(var i=0;i<formArray.length;i++){
            prepareTableCell(formArray[i].name, formArray[i].address, formArray[i].email, formArray[i].countries, formArray[i].gendar, formArray[i].hobby, i);
        }
    }
}

function onRegisterPressed(){
    var name1 =  document.getElementById("name").value;
    var  address1 =  document.getElementById("address").value;
    var  email1 = document.getElementById("email").value;
    var countries1 = document.getElementById("countries").value;
    var gendar1 = document.getElementById("gendar").value;
    var hobby1 = document.getElementById("hobby").value;

    var stuObj = {name: name1,address: address1,email: email1,countries: countries1,gendar: gendar1,hobby: hobby1};
    if(selectedIndex === -1){
        formArray.push(stuObj);
    }else{
        formArray.splice(selectedIndex,1,stuObj);
    }
    localStorage.studantRecord = JSON.stringify(formArray);
    init();
    onClar();
}

function prepareTableCell(name, address, email, countries, gendar, hobby, index){
    var table = document.getElementById("tablerows");
    var row = table.insertRow();
    var nameCell = row.insertCell(0);
    var addressCell = row.insertCell(1);
    var emailCell = row.insertCell(2);
    var countriesCell = row.insertCell(3);
    var gendarCell = row.insertCell(4);
    var hobbyCell = row.insertCell(5);
    var actionCell = row.insertCell(6);
    

    nameCell.innerHTML = name;
    addressCell.innerHTML = address;
    emailCell.innerHTML = email;
    countriesCell.innerHTML = countries;
    gendarCell.innerHTML = gendar;
    hobbyCell.innerHTML = hobby;
    actionCell.innerHTML = '<button onclick="onEdit('+index+')">Edit</button><br/><button onclick="deleteTableRow('+index+')">Delete</button>';

}

function deleteTableRow(index){
    // var table = document.getElementById("tablerows");
    // table.deleteRow(index+1);
    formArray.splice(index, 1);
    localStorage.studantRecord = JSON.stringify(formArray);
    init();
}

function onClar(){
    selectedIndex = -1;
    document.getElementById("name").value = " ";
    document.getElementById("address").value = " ";
    document.getElementById("email").value = " ";
    document.getElementById("countries").value = "india";
    document.getElementById("gendar").value = "male";
    document.getElementById("hobby").value = "sports";
    document.getElementById("save").innerHTML = "Submit";
}
var selectedIndex = -1;
function onEdit(index){
    selectedIndex = index;
    var stuObj = formArray[index];
    document.getElementById("name").value = stuObj.name;
    document.getElementById("address").value = stuObj.address;
    document.getElementById("email").value = stuObj.email;
    document.getElementById("countries").value = stuObj.countries;
    document.getElementById("gendar").value = stuObj.gendar;
    document.getElementById("hobby").value = stuObj.hobby;
    document.getElementById("save").innerHTML = "Update";
}