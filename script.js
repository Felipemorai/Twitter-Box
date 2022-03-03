const editableInput = document.querySelector(".editable"),
readonlyInput = document.querySelector(".readonly"),
placeholder = document.querySelector(".placeholder"),
counter = document.querySelector(".counter"),
button = document.querySelector("button");

editableInput.onkeyup = (e) => {
    let element = e.target; 
    let currentLength = element.innerText.length;

    if(currentLength <= 0) {
        placeholder.style.display = "block";
    } else {
        placeholder.style.display = "none";
    }
}