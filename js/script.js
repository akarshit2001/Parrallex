function validate(){
    var a= document.getElementById("a1").value;
    var b= document.getElementById("b1").value;
    var c1= document.getElementById("phone").value;
    var d1= document.getElementById("d1");
    var reg=  /^[a-zA-Z]+ [a-zA-Z]+$/
    var regex= /^[7-9]\d{9}$/
    var regex_add = /^[a-zA-Z0-9\s,.'-]{3,}$/;
    if(reg.test(a)===false){
        document.getElementById("use").innerHTML="Invalid PLease Check it."
        document.getElementById("use").style.visibility="visible"
        document.getElementById("use").style.color="red"
        return false

    }
    else  if(regex_add.test(b)===false) {
        document.getElementById("two").innerHTML="Invalid PLease Check it."
        document.getElementById("two").style.visibility="visible"
        document.getElementById("two").style.color="red"

        //  document.getElementById("two").style.visibility = "visible";
        return false;
    }
   else if(regex.test(c1)===false){
        document.getElementById("ch").innerHTML="Invalid PLease Check it."
        document.getElementById("ch").style.visibility="visible"
        document.getElementById("ch").style.color="red"
        return false

    }
    else if(d1.value.trim()==""){
        b.style.border = "2px solid red";
        document.getElementById("two").style.visibility = "visible";
    }
    else {

        alert("Submitted sucessfully");
        alert("If any problem ,then our service men will contact you!")
        alert(" Thanku!")
        return true;
    }
}


