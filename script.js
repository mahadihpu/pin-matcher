        document.getElementById("generate-button").addEventListener("click",function(){
            var randomNumber = Math.round(Math.random()*100000);
            document.getElementById("random-number").value = randomNumber;
        });
        document.getElementById("submit-button").addEventListener("click",function(){
            var randomNum = document.getElementById("random-number").value;
            var givenNum = document.getElementById("input").value;
            if(randomNum == givenNum){
                document.getElementById("pin-matched").style.visibility = 'visible';
            }
            if(randomNum != givenNum){
                document.getElementById("pin-mismatched").style.visibility = 'visible';
            }
        });