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

let addition = document.getElementById('addition');
let subtraction = document.getElementById('subtraction');
let multiply = document.getElementById('multiply');
let divide = document.getElementById('divide');
let result = document.getElementById('result');

addition.onclick = function (element) {

  alert("+");

};

subtraction.onclick = function (element) {

    console.log("-");

};
multiply.onclick = function (element) {

    console.log("*");

};
divide.onclick = function (element) {

    console.log("/");

};