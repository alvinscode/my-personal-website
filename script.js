const h2 = document.createElement("h2");
h2.textContent = "My name is Alvin Li. I am a Software Engineering student from Chicago, Illinois.";
h2.addEventListener("mouseover", function() {
    h2.style.fontSize = '50px';
    h2.style.fontWeight = 'bold';
    h2.style.fontKerning = 'none';
});
h2.addEventListener("mouseout", function() {
    h2.style.fontSize = '25px';
    h2.style.fontWeight = 'lighter';
    h2.style.fontKerning = 'normal';
});
document.querySelector("body").appendChild(h2);