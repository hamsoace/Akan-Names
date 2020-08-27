$(document).ready(function(){
    $(".popup-btn").click(function(){
        $(".popup")
        .css("display", "flex")
        .css("animation", "popup-bg 1s")
        .css("animation-interaction-count", "1");
        $(".popup-wrap")
        .css("animation", "popup 1s")
        .css("animation-iteration-count", "1");
    });

    $(".close").click(function(){
        $(".popup-wrap")
        .css("animation", "popup 1s")
        .css("animation-iteration-count", "1");
        $(".popup")
        .delay(500)
        .fadeOut();
    });


});

$(document).ready(function(){
    $('.submit-btn').click(function(){
        $('#display').toggle('slow');
    });
});


var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", " Yaa", "Afua", "Ama"];

function dayOfBirth() {
    var birthDate = document.getElementById("datepicker").value;
    var date = new Date(birthDate);
    var dayOfBirth = date.getDay();
    //get gender
    var genders = document.getElementsByName('gender');
    var gender_value;
    for (var i = 0; i < genders.length; i++) {
        if (genders[0].checked) {
            gender_value = "female";
        }
        if (genders[1].checked) {
            gender_value = "male";
        }
    }
    switch (gender_value) {
        case "female":
            if (dayOfBirth == 0) {
                document.getElementById("display").innerHTML = "You Were you born on <span>" + day[0] + "</span> and your Akan name is <span>" + femaleNames[0];
            }
            if (dayOfBirth == 1) {
                document.getElementById("display").innerHTML = "You Were you born on <span>" + day[1] + "</span> and your Akan name is <span>" + femaleNames[1];
            }
            if (dayOfBirth == 2) {
                document.getElementById("display").innerHTML = "You Were you born on <span>" + day[2] + "</span> and your Akan name is <span>" + femaleNames[2];
            }                     
            if (dayOfBirth == 3) {
                document.getElementById("display").innerHTML = "You Were you born on <span>" + day[3] + "</span> and your Akan name is <span>" + femaleNames[3];
            }
            if (dayOfBirth == 4) {
                document.getElementById("display").innerHTML = "You Were you born on <span>" + day[4] + "</span> and your Akan name is <span>" + femaleNames[4];
            }
            if (dayOfBirth == 5) {
                document.getElementById("display").innerHTML = "You Were you born on <span>" + day[5] + "</span> and your Akan name is <span>" + femaleNames[5];
            }
            if (dayOfBirth == 6) {
                document.getElementById("display").innerHTML = "You Were you born on <span>" + day[6] + "</span> and your Akan name is <span>" + femaleNames[6];
            }
            break;
        case "male":
            if (dayOfBirth == 0) {
                document.getElementById("display").innerHTML = "You Were you born on <span>" + day[0] + "</span> and your Akan name is <span>" + maleNames[0];
            }
            if (dayOfBirth == 1) {
                document.getElementById("display").innerHTML = "You Were you born on <span>" + day[1] + "</span> and your Akan name is <span>" + maleNames[1];
            }
            if (dayOfBirth == 2) {
                document.getElementById("display").innerHTML = "You Were you born on <span>" + day[2] + "</span> and your Akan name is <span>" + maleNames[2];
            }
            if (dayOfBirth == 3) {
                document.getElementById("display").innerHTML = "You Were you born on <span>" + day[3] + "</span> and your Akan name is <span>" + maleNames[3];
            }
            if (dayOfBirth == 4) {
                document.getElementById("display").innerHTML = "You Were you born on <span>" + day[4] + "</span> and your Akan name is <span>" + maleNames[4];
            }
            if (dayOfBirth == 5) {
                document.getElementById("display").innerHTML = "You Were you born on <span>" + day[5] + "</span> and your Akan name is <span>" + maleNames[5];
            }
            if (dayOfBirth == 6) {
                document.getElementById("display").innerHTML = "You Were you born on <span>" + day[6] + "</span> and your Akan name is <span>" + maleNames[6];
            }
            break;
        default:
    }
    //prevent refresh on form submit
    var form = document.getElementById("myForm");
    function handleForm(event) { event.preventDefault(); }
    form.addEventListener('submit', handleForm);

}

// $(document).ready(function(){
//     $("#myBirthDate").mask("99/99/9999");
// });


// function myAkanName() {
//     var days = [
//         "Sunday",
//         "Monday",
//         "Tuesday",
//         "Wednesday",
//         "Thursday",
//         "Friday",
//         "Saturday",
//       ];
//       var maleAkanNames = [
//         "Kwasi",
//         "Kwadwo",
//         "Kwabena",
//         "Kwaku",
//         "Yaw",
//         "Kofi",
//         "Kwame",
//       ];
//       var femaleAkanNames = [
//         "Akosua",
//         "Adwoa",
//         "Abenaa",
//         "Akua",
//         "Yaa",
//         "Afua",
//         "Ama",
//       ];
//   var birthDay = document.getElementById("datepicker").value;
//   var myGender = document.getElementsByName("gender");
//   var dateOfBirth = new Date(birthDay);
//   var dayOfTheWeek = dateOfBirth.getDay();
//   //alert(dateOfBirth.toDateString().substring(0,4))

//   if (birthDay === ""){
//       alert("Fill in the date");
//   }
  
//   else {
//     for(var i=0;i<myGender.length;i++){
//         if(myGender[i].checked){
//             if(myGender[i].value === "male"){
//                 document.getElementById('display').innerHTML = "<span><i class=\"fa fa-male\"></i></span>&nbsp;&nbsp; Born on a <span>" + days[dayOfTheWeek] + "</span>, Your Akan Name's <span>" + maleAkanNames[dayOfTheWeek] + "</span>";
//                 $('#message span:first-child').addClass("animated fadeInDown");
//                 $('#message span:last-child').addClass("animated fadeInUp");
//             }
//             else {
//                 document.getElementById('message').innerHTML = "<span><i class=\"fa fa-female\"></i></span>&nbsp;&nbsp; Born on a <span>" + days[dayOfTheWeek] + "</span>, Your Akan Name's <span>" + femaleAkanNames[dayOfTheWeek] + "</span>";
//                 $('#message span:first-child').addClass("animated fadeInDown");
//                 $('#message span:last-child').addClass("animated fadeInUp");
//             }
//             break;
//         }    
//         else {
//             document.getElementById('message').innerHTML = "<div class=\"alert alert-danger\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">x</button><strong>Oh snap!</strong> You Should Select a Gender Too Determine Your Akan Name!</div>";
//             $('#message').addClass("animated shake");
//         }
//     }
//     var form = document.getElementById("myForm");
//     function handleForm(event) { 
//         event.preventDefault(); }
//     form.addEventListener('submit', handleForm);


// function clearAkanMessage(){
// document.getElementById('message').innerHTML = "";
// }

  

// // function clearAkanMessage() {
// //   document.getElementById("message").innerHTML = "";
// }
// }
