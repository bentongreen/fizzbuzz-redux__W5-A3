function onButtonClick () {
	var startNum = parseInt(document.getElementById('startNumber').value);
    var endNum = parseInt(document.getElementById('endNumber').value);
	var input1 = document.getElementById('input1').value;
	var input2 = document.getElementById('input2').value;

	var fizzyBuzzer = new FizzBuzz(input1,input2);
	
	fizzyBuzzer.readFizzBuzz(startNum,endNum);
    fizzyBuzzer.writeToFizzBuzz(document.getElementById("fizzBuzzOutput"));
    
    document.getElementById('startNumber').value = '';
    document.getElementById('endNumber').value = '';
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
}