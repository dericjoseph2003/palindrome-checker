const txtInput = document.querySelector(".inputs input");
const checkBtn = document.querySelector(".inputs button");
const infoTxt = document.querySelector(".info-txt");

txtInput.addEventListener("keyup", () => {
    let filterInput = txtInput.value.toLowerCase().replace(/[^a-z0-9]/gi, "");
    if (filterInput) {
        checkBtn.classList.add("active");
    } else {
        infoTxt.style.display = "none";
        checkBtn.classList.remove("active");
    }
});

checkBtn.addEventListener("click", () => {
    let filterInput = txtInput.value.toLowerCase().replace(/[^a-z0-9]/gi, "");
    let reverseInput = filterInput.split("").reverse().join("");
    infoTxt.style.display = "block";
    if (filterInput !== reverseInput) {
        infoTxt.innerHTML = "No, <span>'${txtInput.value}'</span> isn't a palindrome!";
    } else {
        infoTxt.innerHTML = "Yes, <span>'${txtInput.value}'</span> is a palindrome!";
    }
});
