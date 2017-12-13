var myResults=function(){
    var myScore=0;
    
    var ans1=document.getElementsByClassName("q1").value;
    if(ans1==="no"){
        myScore+=2;
    }else if(ans1==="maybe"){
        myScore++;
    }
    
    var ans2=document.getElementsByClassName("q2").value;
    if(ans2<3){
        myScore+=3;
    }else if(ans2>=3&&ans2<6){
        myScore+=2;
    }else if(ans2>=6){
        myScore++;
    }
    
    var ans3;
    var qs3=document.getElementsByClassName("q3");
    for(var i=0;qs3[i];i++){
        if(qs3[i].checked){
          ans3=qs3[i].value;
        }
    if(ans3==="sleep"){
        myScore++;
    }else if(ans3==="party"){
        myScore+=3;
    }else if(ans3==="cook"){
        myScore+=2;
    }else if(ans3==="exercise"){
        myScore+=2;
    }else if(ans3==="adventure"){
        myScore+=3;
    }else if(ans3==="read"){
        myScore++;
    }
    
    var ans4;
    var qs4=document.getElementsByClassName("q4");    
    for(var i=0;qs4[i];i++){
        if(qs4[i].checked){
          ans4=qs4[i].value;
        }
    if(ans4==="breakfast"){
        myScore++;
    }else if(ans4==="brunch"){
        myScore+=2;
    }else if(ans4==="midnight"){
        myScore+=3;
    }
    
    var ans5;
    var qs5=document.getElementsByClassName("q5");    
    for(var i=0;qs5[i];i++){
        if(qs5[i].checked){
          ans5=qs5[i].value;
        }
    if(ans5==="eggs"){
        myScore++;
    }else if(ans5==="waffles"){
        myScore+=3;
    }else if(ans5==="shake"){
        myScore+=2
    }

    if(myScore<=5){
        document.write("<img style='height:200px;' src='./images/plain-pancakes.jpg' alt='pancakes'><br/>You are plain pancakes. You take life at face value and don't need anything extra to make you happy.");
    }else if(myScore>5&&myScore<=10){
        document.write("<img style='height:200px;' src='./images/banana-pancakes.jpg' alt='pancakes'><br/>You are banana pancakes. You wake up too early. Maybe we can sleep in?");
    }else if(myScore>10&&myScore<=15){
        document.write("<img style='height:200px;' src='./images/blueberry-pancakes.jpg' alt='pancakes'><br/>You are blueberry pancakes. You appreciate the little things in life and try to live your best self every day.");
    }else if(myScore>15){
        document.write("<img style='height:200px;' src='./images/chocolate-pancakes.jpg' alt='pancakes'><br/>You are chocolate chip pancakes. You live in the moment and look for the excitement in every day.");
    }
}