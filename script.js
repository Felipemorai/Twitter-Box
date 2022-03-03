const editableInput = document.querySelector(".editable"),
readonlyInput = document.querySelector(".readonly"),
placeholder = document.querySelector(".placeholder"),
counter = document.querySelector(".counter"),
button = document.querySelector("button");

editableInput.onkeypress = () => {
    placeholder.style.display = "none";
}