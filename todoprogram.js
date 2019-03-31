/**
 * Created by COMPUTER POINT on 3/24/2019.
 */
function listing() {

    var input = document.getElementById("in").value;





    var rem = document.createElement("input");

    rem.setAttribute("type","button");
    rem.setAttribute("value","Remove");
    rem.setAttribute("class","remove");
    rem.onclick = function(){
        document.body.removeChild(list)

        }


    var edit = document.createElement("input");
    edit.setAttribute("type","button");
    edit.setAttribute("value","Edit");
    edit.setAttribute("class","edit");
    edit.onclick = function(){
        var change = document.getElementById("add").value = "save"
        document.getElementById("in").value = list.innerText;

    }
    var change = document.getElementById("add").value = "add"

    var olist = document.createElement("ol");
    var list = document.createElement("li");
    list.setAttribute("id","lis");
    list.innerText = input;
    var list1 = olist.appendChild(list);
    list.appendChild(edit);
    list.appendChild(rem);
    document.body.appendChild(list1);


    document.getElementById("in").value = null;





}

