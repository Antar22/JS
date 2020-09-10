// var a = confirm("Abc")
//     console.log(a);
// var btn = document.getElementById("btn")
//     console.log(btn);
// window.onload = function(){
//     var btn = document.getElementById("btn");

//     btn.onclick = function(){
//         var first = document.getElementById("first-name").value;
//         var last = document.getElementById("first-name").value;
//         //document.getElementById("full").textContent = "FULL NAME: " + first + " " + last;
//         document.getElementById("full-name").textContent = "FULL NAME: " + first + " " + last;
//         //alert(first + " " + last);
//     }
//     console.log(btn);
// }

window.onload = function(){
    var formA = document.getElementsByTagName("form");
    console.log(formA[0].firstElementChild.nextElementSibling);

    console.log(document.getElementsByName("formlog")[0]);
}


// getName("Nguyen Van A");

// function getName(uName){
//     alert(uName);
// }

// var getName = function(){

// }


