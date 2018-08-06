var form = document.createElement("form");
    form.setAttribute("name", "login");
    form.setAttribute("method", "post");
    form.setAttribute("action", "google.com");
    form.setAttribute("id", "form")
    
var inputAge = document.createElement("input");
    inputAge.setAttribute("type", "text");
    inputAge.setAttribute("name","age");
    inputAge.setAttribute("id", "age");
    inputAge.setAttribute("placeholder", "age");
    

var inputUname= document.createElement("input");
    inputUname.setAttribute("type", "text");
    inputUname.setAttribute("name","username");
    inputUname.setAttribute("id", "username");
    inputUname.setAttribute("placeholder", "name");
    

var inputDate = document.createElement("input");
    inputDate.setAttribute("type", "text");
    inputDate.setAttribute("name","date");
    inputDate.setAttribute("id", "date");
    inputDate.setAttribute("placeholder", "dd/mm/yyyy");

var inputButton = document.createElement("input");
    inputButton.setAttribute("type", "submit");
    inputButton.setAttribute("value","Validate Me");
    inputButton.setAttribute("id", "button");

    form.appendChild(inputAge);
    form.appendChild(inputUname);
    form.appendChild(inputDate);
    form.appendChild(inputButton);

    document.body.appendChild(form);

  
  document.getElementById("form").onsubmit = function formValidate(e){
    e.preventDefault();
  
    var age = document.getElementById('age').value;
    var userName = document.getElementById('username').value;
    var dateInput= document.getElementById('date').value;
    var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/; 
    
    
     if(age ==="" || age === 0 || userName ==="" || dateInput === ""){
       alert("Please fill in all fields!");
       return;
     }
   
    if (!age.match(/^[0-9]+$/)){
     alert("Please enter numbers only!");
     return;
    }

     
    if (!userName.match(/^user_/)){
     alert ("Username should start with user_!");
     return;
     
   }


  if (!dateInput.match(dateformat)){
     alert("Date should be dd/mm/yyyy");
     return;
   }
   
   alert("Form was submitted successfully");
 }