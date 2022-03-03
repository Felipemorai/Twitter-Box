const editableInput = document.querySelector(".editable"),
readonlyInput = document.querySelector(".readonly"),
placeholder = document.querySelector(".placeholder"),
counter = document.querySelector(".counter"),
button = document.querySelector("button");

editableInput.onkeyup = (e) => {
    let element = e.target; 
    let maxLength = 100;
    let currentLength = element.innerText.length;

    if(currentLength <= 0) {
        placeholder.style.display = "block";
        counter.style.display = "none";
        button.classList.remove("active");
    } else {
        counter.style.display = "block";
        placeholder.style.display = "none";
        button.classList.add("active");
    }
    counter.innerText = maxLength - currentLength;

    if(currentLength > maxLength) {

    }

}