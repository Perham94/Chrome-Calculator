/* let changeColor = document.getElementById('changeColor');
chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
}); */
/*changeColor.onclick = function(element) {
  let color = element.target.value;
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      code: 'document.body.style.backgroundColor = "' + color + '";'
    });
  });
};
*/
$(document).ready(function () {
 /*  let addition = document.getElementById('addition');
  let subtraction = document.getElementById('subtraction');
  let multiply = document.getElementById('multiply');
  let divide = document.getElementById('divide');
  let result = document.getElementById('result');
  let numberInput = document.getElementById('numberInput');

  let nine = document.getElementById('9');
  let eight = document.getElementById('8');
  let seven = document.getElementById('7');
  let six = document.getElementById('6');
  let five = document.getElementById('5');
  let four = document.getElementById('4');
  let three = document.getElementById('3');
  let two = document.getElementById('2');
  let one = document.getElementById('1');
  let zero = document.getElementById('0');
  let com = document.getElementById('comma');
 */
  //$('#numberInput').on();


  $('#calculator').on('click', 'button', function () {
    let val = $(this).val();
    console.log(val);   
    if (val == "1") {
      alert("you pressed 1");
         
    }
  });




});