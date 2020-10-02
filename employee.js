function addText(){
    var div2= document.getElementById("div1button");
    div2.style.display= "block";
}

var update=[];


function submit11(){
    var a= document.getElementsByClassName("sub")[0].value;
    var card3= document.getElementsByClassName("card3_2nd")[0];
    var str="";
    if(a==""){
        alert("Please enter your updates");}

    else if((update.includes(a))){
        alert("updates already exists");}
    else
      update.push(a);
    for(i=0; i<update.length; i++){
            if( i%2==0){
                str+= "<marquee>"+ update[i] + "</marquee>"
                }
        else{
            str+= "<marquee direction = 'right'>" + update[i] + "</marquee>" 
          }
    }
    card3.innerHTML=str;
    document.getElementsByClassName("sub")[0].value= "";
    var div2= document.getElementById("div1button");
    div2.style.display= "none";    
}

function showhide(elem){
    var element = document.getElementById(elem);
    if(element.style.display === "none"){
        element.style.display = "block";
    }else{
        element.style.display = "none";
    }
}

function addmember(){
 const fullname = document.getElementById("fullname").value;
 const designation = document.getElementById("designation").value;
 const facebook = document.getElementById("facebook").value;
 const github = document.getElementById("github").value;
 const linkdin = document.getElementById("linkdin").value;

 if(document.getElementById('cards_container').innerHTML.includes(fullname)){
     alert('User already exists!');
 }
 else if(document.getElementsByClassName("usersubmit").value==""){
     alert('No user entered!');
 }
 else{
    const newcard = `
    <div class="card hvr-float-shadow">
        <div class="studentdp" style="background-image: url(kisu.jpg);"> </div>
        <div>
            <h3>`+fullname+`</h3>
            <h3>`+designation+`</h3>
        </div>

        <div class="icons">
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-github"></i>
            <i class="fab fa-linkedin-in"></i>
        </div>
    </div>
    `;

    document.getElementById('cards_container').innerHTML += newcard;
 }
 

}

