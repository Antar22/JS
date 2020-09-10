class Sinhvien {
    constructor(msv, name, email) {
        this.msv = msv;
        this.name = name;
        this.email = email;
    }
}
var listSV = [];
var listbtndel = [];
var editID = -1;


function show(){
    for(i = 0; i < listSV.length; i++){
        document.getElementById("show").innerHTML +="<input type='checkbox' name='delete'>" + listSV[i].msv + " " + listSV[i].name + " " + listSV[i].email + "     " + "<button id='btnEdit" + (l - 1) + "' onclick='Edit(" + (i) + ")''>EDIT</button>" +  "<br/>";
        }
}
function Xoa(id){
    listSV.splice(id,1);
}
function Capnhat(){
    document.getElementById("show").innerHTML = "";
    show();
}
function Edit(id){
    var btnsave = document.getElementById("btnsave");
    btnsave.style.display = "inline-block";
    var btnsubmit = document.getElementById("btnsubmit");
    btnsubmit.style.display = "none";
    document.getElementById("ma-sinh-vien").value = listSV[id].msv;
    document.getElementById("ho-va-ten").value = listSV[id].name;
    document.getElementById("email").value = listSV[id].email;
    editID = id;
}
function Save(id){
    var btnsave = document.getElementById("btnsave");
    btnsave.style.display = "none";
    var btnsubmit = document.getElementById("btnsubmit");
    btnsubmit.style.display = "inline-block";
    listSV[id].msv = document.getElementById("ma-sinh-vien").value;
    listSV[id].name = document.getElementById("ho-va-ten").value;
    listSV[id].email = document.getElementById("email").value;
    document.getElementById("sinh-vien-form").reset();
    Capnhat();
}
window.onload = function(){
    var btnsave = document.getElementById("btnsave");
    btnsave.style.display = "none";
    
    
    var btnsubmit = document.getElementById("btnsubmit");
    btnsubmit.onclick = function(e){
        var msv = document.getElementById("ma-sinh-vien").value;
        var name = document.getElementById("ho-va-ten").value;
        var email = document.getElementById("email").value;
        s = new Sinhvien(msv, name, email);
        listSV.push(s);
        l = listSV.length;
        document.getElementById("sinh-vien-form").reset();
        document.getElementById("show").innerHTML += "<input type='checkbox' name='delete'>"  + s.msv  + " "  + s.name  + " "  + s.email + "     " + "<button id='btnEdit" + (l - 1) + "' onclick='Edit(" + (l - 1) + ")''>EDIT</button>" +  "<br/>";
        
        e.preventDefault();
    }

    var btndelete = document.getElementById("deleteTong");
       btndelete.onclick = function(){
        var listbox = [];
        var listdel = [];
        var count = 0;
        listbox = document.getElementsByName("delete");
           for(i = 0; i < listbox.length; i++){
               
               if(listbox[i].checked == true){
                   listdel[count] = i - count;
                   count++; 
               }
           }
           for(i = 0; i < listdel.length; i++){
                listSV.splice(listdel[i],1);
           }
           Capnhat();
        
       }    
       
       var btnsave = document.getElementById("btnsave");
       btnsave.onclick = function(e){
           Save(editID);
           e.preventDefault();
       }
    //    for(i = 0; i < listSV.length; i++){
    //        listbtndel[i] = document.getElementById("btnXoa" + i);
    //        listbtndel[i].onclick = function(){
    //         listSV.splice(i,1);
           
    //        }
    //    }
    // for(i = 0; i < listSV.length; i++){
    //     document.getElementById("show").innerHTML += listSV[i].msv + " " + listSV[i].name + " " + listSV[i].email + "<button id='btnEdit" + i + "'>EDIT</button>" + "<button id='btnXoa" + i + "'>DELETE</button>" +  "<br/>";

//`${listSV[i].msv} ${listSV[i].name} ${listSV[i].email} <br/>`;

}

