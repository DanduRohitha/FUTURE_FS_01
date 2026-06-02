const roles = [
    "Full Stack Developer",
    "Cloud Engineer",
    "DSA Enthusiast",
    "Python Developer"
];

let roleIndex = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing");

function typeText() {

    if (charIndex < roles[roleIndex].length) {

        typingElement.textContent += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeText, 100);

    } else {

        setTimeout(() => {

            typingElement.textContent = "";
            charIndex = 0;

            roleIndex++;

            if(roleIndex >= roles.length){
                roleIndex = 0;
            }

            typeText();

        }, 1500);
    }
}

typeText();