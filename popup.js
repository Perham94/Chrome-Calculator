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

  $('#calculator').on('click', 'button', function () {
    let val = $(this).val();
    console.log(val);
    if (val == "1") {
      $('#numberInput').append(1);
      return;
    }
    if (val == "2") {
      $('#numberInput').append(2);
      return;
    }
    if (val == "3") {
      $('#numberInput').append(3);
      return;
    }
    if (val == "4") {
      $('#numberInput').append(4);
      return;
    }
    if (val == "5") {
      $('#numberInput').append(5);
      return;
    }
    if (val == "6") {
      $('#numberInput').append(6);
      return;
    }
    if (val == "7") {
      $('#numberInput').append(7);
      return;
    }
    if (val == "8") {
      $('#numberInput').append(8);
      return;
    }
    if (val == "9") {
      $('#numberInput').append(9);
      return;
    }
    if (val == "0") {
      $('#numberInput').append(0);
      return;
    }
    if (val == "CE") {
      $('#numberInput').html("");
      return;
    }
    if (val == "C") {
      $('#numberInput').html("");
      return;
    }
    let a = parseInt($('#numberInput').html());
    $('#numberInput').html("");
    if (val == "+" || "-" || "*" || "/") {
      if (b != null && val == "+") {
    
        result(add(a, b));
        b = null;
      }
      else if (b != null && val == "-") {
        result(subtraction(a, b));
        b = null;
      }
      else if (b != null && val == "*") {
        result(multiply(a, b));
        b = null;
      }
      else if (b != null && val == "/") {
        result(divide(a, b));
        b = null;
      }
      else {
        b = a;
      }
      return;
    }

  });

});


let b = null;

function add(a, b) {
  return a + b;
};

function multiply(a) {
  return a * b;
};

function divide(a) {
  return a / b;
};

function subtraction(a) {
  return a - b;
};

function result(result) {
  $('#numberInput').html(result);
};
