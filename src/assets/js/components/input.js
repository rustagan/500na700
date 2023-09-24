$('.phone-input').mask('+7 (999) 999-99-99');

$.fn.setCursorPosition = function(pos) {
  if ($(this).get(0).setSelectionRange) {
    $(this).get(0).setSelectionRange(pos, pos);
  } else if ($(this).get(0).createTextRange) {
    var range = $(this).get(0).createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
};

$('input[type="tel"]').click(function(){
    $(this).setCursorPosition(4);  // set position number
  });

document.querySelector(".input_button").onclick = send;

function send () {
    let mail = document.querySelector(".mail-input").value;
    let phone = document.querySelector(".phone-input").value;
    let data = document.querySelector(".data-input").value;
    let time = document.querySelector(".time-input").value;
    console.log(mail);
    if (mail == "" || phone == "" || data == "" || time == "") {
        alert("Введите данные полностью");
    } else {
        let result = [{
            "mail": mail,
            "phone": phone,
            "data":data,
            "time":time
        }]
        console.log(result);
    }
}