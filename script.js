var tit = document.title;
var c = 0;
function writetitle()
{
    document.title = tit.substring(0,c);
    if(c==tit.length)
{

    c = 0;
    setTimeout("writetitle()", 1000)
}

else
{
    c++;
    setTimeout("writetitle()", 200)
}
}

writetitle()

const optionMenu = document.querySelector(".seleccion-menu"),
    seleccionBtn = optionMenu.querySelector(".seleccion-btn"),
    options = optionMenu.querySelectorAll(".OPCIONES"),
    sbtn_Text = optionMenu.querySelector(".sbtn_text");

seleccionBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

options.forEach(option => {
    option.addEventListener("click", ()=> {
        let selectedOption = option.querySelector(".OPCIONES").innerText;
        sBtn_text.innerText = selectedOption;

        optionMenu.classList.remove("active")
    });
});
