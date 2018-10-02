function doIt(){
	var num1Ref, num2Ref, num3Ref, answerRef, anstypeRef; //html element/DOM references
	
	var num1, num2, num3, answer; //working variables
	
	//get references
	num1Ref = document.getElementById("number1");
	num2Ref = document.getElementById("number2");
    num3Ref = document.getElementById("number3");
	answerRef = document.getElementById("answer");
    anstypeRef = document.getElementById("anstype");
	var plus1 = document.getElementById("plus1")
	
	//answer = num1Ref.value + num2Ref.value; //will not work properly - concatenation not addition

	//convert strings to numbers e.g. "21" to 21
	num1 = Number(num1Ref.value);
	num2 = Number(num2Ref.value);
    num3 = Number(num3Ref.value);
	
    if (plus1.src.match("addition")) {
	answer = num1 + num2 + num3; //perform addition operation then assignment operation
    } else {
        answer = num1 - num2 - num3;
    }
	answerRef.innerText = answer;  //update DOM to update display
	
	if (answer >= 0)
		answerRef.className = "positive";
	else
		answerRef.className = "negative";
    
    if (answer%2 === 0)
        anstypeRef.className = "even", anstypeRef.innerText = "(even)";

    if (answer%2 !== 0)
        anstypeRef.className = "odd", anstypeRef.innerText = "(odd)";

}

function alternate() {
    var plus1 = document.getElementById("plus1")
    var plus2 = document.getElementById("plus2")
    
    if (plus1.src.match("addition")) {
        plus1.src = "images/green subtraction op - Copy.png";
        plus2.src = "images/green subtraction op - Copy.png";
        } else { plus1.src = "images/green addition op.png", plus2.src = "images/green addition op.png";
        }
        }
        

/*
Notes:
the input tag is a void tag (i.e. can't have start and end tag, can't have content) so does not support innerText or innerHtml, use value to get its contents 
*/
