//mouseover text effect, inserting h2 into page
const h2 = document.createElement("h2");
h2.textContent = "My name is Alvin Li.";
h2.addEventListener("mouseover", function() {
    h2.style.fontSize = '50px';
    h2.style.fontWeight = 'bold';
    h2.style.fontKerning = 'none';
});
h2.addEventListener("mouseout", function() {
    h2.style.fontSize = '149%';
});
document.querySelector("body").appendChild(h2);
//end mouseover text effect

//github highlight image effect
function changeImage() {
    document.getElementById("gitHub").src = "./images/github-mark-white.png";
    }
function resetImage() {
    document.getElementById("gitHub").src = "./images/github-mark.png";
    }
//end github highlight effect