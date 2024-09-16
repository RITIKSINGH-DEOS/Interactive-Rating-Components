

// for (let i = 0; i < ratingbtn.length; i++) {
//     ratingbtn[i].addEventListener("click", function () {
//         selectedRating = this.innerText;
//         this.classList.add("colorbtn");
//     })
// }



let selectedRating = null;

const btn = document.querySelectorAll(".btn");
const ratingbtn = document.querySelectorAll(".rating-number button");
const button = document.querySelector(".submit");
const leftC = document.querySelector(".left-component");
const rightC = document.querySelector(".right-component");
const ratingParagraph = rightC.querySelector("p");

for (let i = 0; i < ratingbtn.length; i++) {
    ratingbtn[i].addEventListener("click", function () {
        selectedRating = this.innerText;
        ratingParagraph.innerText = `You selected ${selectedRating} out of 5`;
    })
}


button.addEventListener("click", function () {
    leftC.classList.toggle("hidden");
    rightC.classList.toggle("hidden");
});