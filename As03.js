var myResults=function(){
    var myScore=0;
    
    var ans1=document.querySelector('option[class="q1"]:checked').value;        
    if(ans1=="no"){
        myScore+=2;
    }else if(ans1=="maybe"){
        myScore++;
    }else{
        myScore+=0;
    }
    
    var ans2=document.querySelector('input[class="q2"]').value;
    if(ans2<3){
        myScore+=3;
    }else if(ans2>=3&&ans2<6){
        myScore+=2;
    }else if(ans2>=6){
        myScore++;
    }
    
    var ans3=document.querySelectorAll('input[class="q3"]:checked').value;        
    if(ans3=="sleep"){
        myScore++;
    }else if(ans3=="party"){
        myScore+=3;
    }else if(ans3=="cook"){
        myScore+=2;
    }else if(ans3=="exercise"){
        myScore+=2;
    }else if(ans3=="adventure"){
        myScore+=3;
    }else if(ans3=="read"){
        myScore++;
    }else{
        myScore+=0;
    }
    
    var ans4=document.querySelector('input[class="q4"]:checked').value;        
    if(ans4=="breakfast"){
        myScore++;
    }else if(ans4=="brunch"){
        myScore+=2;
    }else if(ans4=="midnight"){
        myScore+=3;
    }else{
        myScore+=0;
    }

    var ans5=document.querySelector('input[class="q5"]:checked').value;        
    if(ans5=="eggs"){
        myScore++;
    }else if(ans5=="waffles"){
        myScore+=3;
    }else if(ans5=="shake"){
        myScore+=2
    }else{
        myScore+=0;
    }

    if(myScore<=4){
        document.write("<img style='height:200px;' src='./images/plain-pancakes.jpg' alt='pancakes'><br/>You are plain pancakes. You take life at face value and don't need anything extra to make you happy.");
    }else if(myScore>4&&myScore<=8){
        document.write("<img style='height:200px;' src='./images/banana-pancakes.jpg' alt='pancakes'><br/>You are banana pancakes. You wake up too early. Maybe we can sleep in?");
    }else if(myScore>8&&myScore<=12){
        document.write("<img style='height:200px;' src='./images/blueberry-pancakes.jpg' alt='pancakes'><br/>You are blueberry pancakes. You appreciate the little things in life and try to live your best self every day.");
    }else if(myScore>12){
        document.write("<img style='height:200px;' src='./images/chocolate-pancakes.jpg' alt='pancakes'><br/>You are chocolate chip pancakes. You live in the moment and look for the excitement in every day.");
    }
}