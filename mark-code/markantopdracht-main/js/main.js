let buttons = document.getElementsByClassName('main__menu--item--textfield--header');
let text = document.getElementsByClassName("main__menu--item--textfield--text");
for (let i = 0; i < buttons.length; i++){
    buttons[i].onclick = function () {
        if (text[i].style.display === "block") {
            text[i].style.display = "none"
        } else {
            
            text[i].style.display = "block"
        }
    }
}