let timer = 60;
let hitrun = 0;
let score = 0;

function decScore() {
    score -= 5;
    document.querySelector("#scor").textContent = score;
}

function incScore() {
    score += 10;
    document.querySelector("#scor").textContent = score;
}

function generateBubbleElements() {
    let maxBubbles = 152;

    if (window.innerWidth <= 600) {
        maxBubbles = 50;
    } else if (window.innerWidth <= 400) {
        maxBubbles = 20;
    }

    let clutter = "";
    for (let i = 1; i <= maxBubbles; i++) {
        const rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
    const tran = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#time").textContent = timer;
        } else {
            clearInterval(tran);
            document.querySelector("#pbtm").innerHTML = `<h1>Your Score: ${score}</h1>`;
        }
    }, 1000);
}

function generateNewHit() {
    hitrun = Math.floor(Math.random() * 10);
    document.querySelector("#hitt").textContent = hitrun;
}

function handleClickEvent() {
    document.querySelector("#pbtm").addEventListener("click", (dets) => {
        const clcknum = Number(dets.target.textContent);
        if (clcknum === hitrun) {
            incScore();
            generateBubbleElements();
            generateNewHit();
        }
    });
}

// Responsive adjustments
function adjustLayoutForMobile() {
    const bubbles = document.querySelectorAll('.bubble');
    bubbles.forEach(bubble => {
        bubble.style.width = '30px';
        bubble.style.height = '30px';
        bubble.style.fontSize = '16px';
    });

    const elements = document.querySelectorAll('.elem');
    elements.forEach(elem => {
        elem.style.width = '90%';
        elem.style.fontSize = '16px';
    });
}

function makeGameResponsive() {
    if (window.innerWidth <= 600) {
        adjustLayoutForMobile();
    }
}

generateBubbleElements(); // Initial generation of bubbles
runTimer();
generateNewHit();
handleClickEvent();
makeGameResponsive();

window.addEventListener('resize', makeGameResponsive); // Update layout on window resize
