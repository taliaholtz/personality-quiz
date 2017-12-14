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
    
    var dayOff={};
    var ans3=document.querySelectorAll('input[class="q3"]:checked');
    for (var i=0;i<ans3.length;i++){
        dayOff["activity "+[i+1]]=ans3[i].value;
    }
    console.log(dayOff);        
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

    //results
    var resultDiv=document.createElement('div');
    resultDiv.className="results";
    document.body.appendChild(resultDiv);
    var resultImg=document.createElement('img');
    resultDiv.appendChild(resultImg);
    var resultText=document.createElement('p');
    resultDiv.appendChild(resultText);

    if(myScore<=4){
        resultImg.src="./images/plain-pancakes.jpg";
        resultImg.alt="pancakes";
        resultText.textContent="You are plain pancakes, and you are beautiful. You take life at face value and don't need anything extra to make you happy.";
    }else if(myScore>4&&myScore<=8){
        resultImg.src="./images/banana-pancakes.jpg";
        resultImg.alt="pancakes";
        resultText.textContent="You are banana pancakes. You wake up too early. Maybe we can sleep in?";    
    }else if(myScore>8&&myScore<=12){
        resultImg.src="./images/blueberry-pancakes.jpg";
        resultImg.alt="pancakes";
        resultText.textContent="You are blueberry pancakes. You appreciate the little things in life and try to live your best self every day.";
    }else if(myScore>12){
        resultImg.src="./images/chocolate-pancakes.jpg";
        resultImg.alt="pancakes";
        resultText.textContent="You are chocolate chip pancakes. You live in the moment and look for the excitement in every day.";
    }
    window.scrollTo(0,document.body.scrollHeight);    
}

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }