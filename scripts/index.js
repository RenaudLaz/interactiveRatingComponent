const buttons = document.querySelectorAll(".buttonNumbers button");
const submit = document.getElementById("submit");
const error = document.getElementById("error-msg");

const selectionMsg = document.getElementById("selection-msg");
const box1 = document.getElementById("ratingState");
const box2 = document.getElementById("thankYou");
let selected = "";

buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        removeSelectedClasses()
        selected = e.target.textContent
        e.target.classList.add("selected")
    })
})

submit.addEventListener("click", (e) => {
    if (selected === "") {
        console.log(submit)

        addButtonErrors()
        setTimeout(() => {
            removeButtonErrors()
        }, 3000);
        return
    }

    selectionMsg.textContent = `You selected ${selected} out of 5`
    ratingState.classList.add("d-none");
    thankYou.classList.remove("d-none");
    console.log(thankYou)    
    console.log(ratingState)
})

function addButtonErrors()
{
    error.classList.remove("d-none")
    buttons.forEach(btn => {
        btn.classList.add("error")
    })
}

function removeButtonErrors()
{
    error.classList.add("d-none")
    buttons.forEach(btn => {
        btn.classList.remove("error")
    })
}

function removeSelectedClasses()
{
    buttons.forEach(btn => {
        btn.classList.remove("selected")
    })
}