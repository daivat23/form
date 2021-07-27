let formData = localStorage.getItem('formData') ? JSON.parse(localStorage.getItem('formData')) : [];

const add = e => {
    let formData = {
        Name: document.getElementById("Name").value,
        Address:  document.getElementById("Address").value,
        Email: document.getElementById("email").value,
        Countries: document.getElementById("countries").value,
        Gendar: document.getElementById("gendar").value,
        Hobby: document.getElementById("hobby").value,
    }
    localStorage.setItem('formData', JSON.stringify(formData));
    //console.log(localStorage.getItem('formData'));
    dispData();
    e.preventDefault();
}
function dispData(){
    if(localStorage.getItem('formData')){
        let{Name, Address, Email, Countries, Gendar, Hobby} = JSON.parse(localStorage.getItem('formData'));
    var output = document.getElementById("output");
    output.innerHTML = `
    <table>
      <tbody>
      <tr>
        <th>Info</th>
        <th>Data</th>
       <tr>
         <td>Name</td>
         <td>${Name}</td>
         <td><button>Delete</button></td>
       </tr>
       <tr>
         <td>Address</td>
         <td>${Address}</td>
       </tr>
       <tr>
         <td>Email</td>
         <td>${Email}</td>
       </tr>
       <tr>
         <td>Countries</td>
         <td>${Countries}</td>
       </tr>
       <tr>
         <td>Gendar</td>
         <td>${Gendar}</td>
       </tr>
       <tr>
         <td>Hobby</td>
         <td>${Hobby}</td>
       </tr>
       
    `;
    }
}