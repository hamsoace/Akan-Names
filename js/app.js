function myAkanName(){
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
    let femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
    let birthDay = document.getElementById("datepicker").value;
    let gender = document.getElementsByName("gender") 
    let dateOfBirth = new Date(birthday);
    let dayOfTheWeek = dateOfBirth.getDay();

    if(birthday === "" && gender === "--"){
        alert("Fill in the date")
    }
    else if{
        for (let i = 0; i < gender.length; i++) {
            if(gender[i].checked){
                if(gender[i].value === "Male"){
                    alert("You were born on " +days[dayOfTheWeek] + " and Your akan name is " +maleAkanNames[dayOfTheWeek]+"!");
                }
            }
            
        }
    }
}

