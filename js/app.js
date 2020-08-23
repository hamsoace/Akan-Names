function myAkanName(){
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    var birthDay = document.getElementById("datepicker").value;
    var myGender = document.getElementsByName("gender"); 
    var dateOfBirth = new Date(birthDay);
    var dayOfTheWeek = dateOfBirth.getDay();
    

    if(birthDay === ""){
        alert("Fill in the date");
    }
    else {
            for (var i = 0; i < myGender.length; i++) {
                if(myGender[i].checked){
                    if(myGender[i].value === "male"){
                        alert("You were born on " +days[dayOfTheWeek] + " and Your akan name is " +maleAkanNames[dayOfTheWeek]+"!");
                    }
                    else{
                        alert("You were born on " +days[dayOfTheWeek] + " and Your Akan Name is " +femaleAkanNames[dayOfTheWeek]+"!");
                    }
                }
                
            }
        }

}


function clearAkanMessage(){
    document.getElementById('message').innerHTML = "";
}

