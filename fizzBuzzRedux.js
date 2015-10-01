//Benton Green
(function() {
  function FizzBuzz(){
    var startNum;
    var endNum;
  }
    FizzBuzz.prototype.readFizzBuzz = function() {
      console.log("read");
      startNum = parseInt(document.getElementById('startNumber').value);
      endNum = parseInt(document.getElementById('endNumber').value);
    }

    FizzBuzz.prototype.writeFizzBuzz = function(startingNum, endingNum) {
      console.log("write");
      this.startingNum = startingNum; 
      this.endingNum = endingNum + 1; //added one to stopNum so that it would include ending number in list
      
      fbOutputList = document.getElementsByClassName('fizzBuzzOutput')[0];
      fbOutputContent = document.createElement('li');
      
      while (fbOutputList.firstChild) { //basically checks to see if the fizzbuzz output ul has any content
        console.log("reset");
        fbOutputList.removeChild(fbOutputList.firstChild); //loops through and removes all content, IE reset
      }

      function writeToList(item){
      console.log("writeToList");
      fbOutputList = document.getElementsByClassName('fizzBuzzOutput')[0];
      fbOutputContent = document.createElement('li');
      fbOutputContent.appendChild(document.createTextNode(item));
      fbOutputList.appendChild(fbOutputContent);
      }

      for(var x = this.startingNum; x < this.endingNum; x++) {
        if(x%3 === 0 && x%5 === 0){
          writeToList(x + " fizzybuzzer");
        }
          else if(x%3 === 0){
            writeToList(x + " fizzy");  
          }
            else if(x%5 === 0){
              writeToList(x + " buzzer");
            }
            else{
              writeToList(x);
            }
      }
    }

  var submitButton = document.getElementsByTagName('button')[0];
  submitButton.addEventListener('click', function(event1){
    console.log("submit");
    event1.preventDefault();
    fizzyBuzzer.readFizzBuzz();
    fizzyBuzzer.writeFizzBuzz(startNum,endNum);
    document.getElementById('startNumber').value = '';
    document.getElementById('endNumber').value = '';
  });
  var fizzyBuzzer = new FizzBuzz();
})();