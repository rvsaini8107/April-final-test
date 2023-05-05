// console.log("Jai ShriRam")

const url = "./dataOfStudent.json";
fetch(url)
  .then(response => response.json())
  .then(data => {
 
// insert data 
const tbbody = document.getElementById("tb-body");

function printDataInHtml(element){
    
    var studentResult = ((element.passing)?"Passing":"Failed");
    var trdata = `<tr>
                        <td>${element.id}</td>
                        <td class="img-name"><img src="${element.img_src}" alt="" class="img-in-tb"> ${element.first_name} ${element.last_name}</td>
                        <td>${element.gender}</td>
                        <td>${element.class}</td>
                        <td>${element.marks}</td>
                        <td>${studentResult}</td>
                        <td>${element.email}</td>
                 </tr>`;
    tbbody.innerHTML+=trdata;
}


data.forEach(element => { printDataInHtml(element);});

// ========search Data===========

const searchInput = document.getElementById("search");
    searchInput.addEventListener("input",()=>{
       const searchBoxValue = searchInput.value.toLowerCase();
       const filterData = data.filter(student=>{
            const nameFull = `${student.first_name}${student.last_name}`.toLowerCase();
            const Email = student.email.toLowerCase();
            return nameFull.includes(searchBoxValue) || Email.includes(searchBoxValue);
            
        });
        tbbody.innerHTML=""
        filterData.forEach(element=>{printDataInHtml(element);});

        console.log(filterData)
    
    });

// ===========sort data==============
const maleTable = document.getElementById('male-table');

 const sortingAtZ = document.querySelector(".btn-1");
 const sortingZtA = document.querySelector(".btn-2");
 const sortingMarks = document.querySelector(".btn-3");
 const sortingPassing = document.querySelector(".btn-4");
 const sortingClass = document.querySelector(".btn-5");
 const sortingGender = document.querySelector(".btn-6");

 sortingAtZ.addEventListener("click",()=>{
    tbbody.innerHTML="";
    data.sort((a, b) => a.first_name.localeCompare(b.first_name));
    data.forEach(element => { printDataInHtml(element);});
 });

 sortingZtA.addEventListener("click",()=>{
    tbbody.innerHTML="";
    data.sort((a, b) => b.first_name.localeCompare(a.first_name));
    data.forEach(element => { printDataInHtml(element);});
 });

 sortingMarks.addEventListener("click",()=>{
    tbbody.innerHTML="";
    maleTable.style.display="none";

    data.sort((a, b) => a.marks - b.marks);
    data.forEach(element => { printDataInHtml(element);});
    // console.log("h3");
 });

 sortingPassing.addEventListener("click",()=>{
    tbbody.innerHTML="";
    maleTable.style.display="none";
    data = data.filter(student => student.passing);
    data.forEach(element => { printDataInHtml(element);});
    console.log("h4");
 });

 sortingClass.addEventListener("click",()=>{
    tbbody.innerHTML="";
    maleTable.style.display="none";
    data.sort((a, b) => a.class - b.class);
    data.forEach(element => { printDataInHtml(element);});
    console.log("h5");
 });

 sortingGender.addEventListener("click",()=>{
     tbbody.innerHTML="";
     maleTable.style.display="none";
    const femaleData = data.filter(student => student.gender === 'Female');
    femaleData.forEach(element => { printDataInHtml(element);});

    // male table
    
    maleTable.style.display="block";
    const maleData = data.filter(student => student.gender === 'Male');

    const tbbodyMale = document.getElementById("tb-body-male");

function printDataInHtmlMale(element){
    
    var studentResult = ((element.passing)?"Passing":"Failed");
    var trdata = `<tr>
                        <td>${element.id}</td>
                        <td class="img-name"><img src="${element.img_src}" alt="" class="img-in-tb"> ${element.first_name} ${element.last_name}</td>
                        <td>${element.gender}</td>
                        <td>${element.class}</td>
                        <td>${element.marks}</td>
                        <td>${studentResult}</td>
                        <td>${element.email}</td>
                 </tr>`;
    tbbodyMale.innerHTML+=trdata;
}


maleData.forEach(element => { printDataInHtmlMale(element);});










    console.log("h6");
 });



    




    console.log(data)
  })
  .catch(error => console.error(error));



