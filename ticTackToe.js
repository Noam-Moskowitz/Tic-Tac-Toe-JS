const topL = document.getElementById('topL')
const topM = document.getElementById('topM')
const topR = document.getElementById('topR')
const middleL = document.getElementById('middleL')
const middleM = document.getElementById('middleM')
const middleR = document.getElementById('middleR')
const bottomL = document.getElementById('bottomL')
const bottomM = document.getElementById('bottomM')
const bottomR = document.getElementById('bottomR')

const board = [topM, middleL, bottomR, middleR, topR, bottomL, middleM, bottomM, topL];

const V1 = [topL, topM, topR];
const V2 = [middleL, middleM, middleR];
const V3 = [bottomL, bottomM, bottomR];
const V4 = [topL, middleL, bottomL];
const V5 = [topM, middleM, bottomM];
const V6 = [topR, middleR, bottomR];
const V7 = [topR, middleM, bottomL];
const V8 = [topL, middleM, bottomR];

const CV1 = [topL, topM]
const CV2 = [topR, topM]
const CV3 = [middleR, middleM]
const CV4 = [middleL, middleM]
const CV5 = [bottomR, bottomM]
const CV6 = [bottomL, bottomM]
const CV7 = [topL, middleL]
const CV8 = [bottomL, middleL]
const CV9 = [topM, middleM]
const CV10 = [middleM, bottomM]
const CV11 = [topR, middleR]
const CV12 = [bottomR, middleR]
const CV13 = [topL, middleM]
const CV14 = [bottomR, middleM]
const CV15 = [bottomL, middleM]
const CV16 = [topR, middleM]
const CV17 = [topR, bottomR]
const CV18 = [topM, bottomM]
const CV19 = [topL, bottomL]
const CV20 = [topR, topL]
const CV21 = [middleR, middleL]
const CV22 = [bottomR, bottomL]
const CV23 = [topL, bottomR]
const CV24 = [topR, bottomL]

const Draw = [topL, topM, topR, middleL, middleM, middleR, bottomL, bottomM, bottomR]
let a = 0;

document.addEventListener("click", function (e) {
    let elementID = e.target.id;
    let element = document.getElementById(elementID);

    for (x = 0; x < board.length; x++) {
        let boardCheck = board[x].id;

        if (elementID == boardCheck) {
            element.style.backgroundColor = "lightblue";
            element.innerHTML = "<p style = 'color:blue;'>X</p>";

            a++;
            if (a >= 5) {
                document.getElementById('draw').style.display = 'block';
            }

            for (x = 0; x < board.length; x++) {
                let loopelementID = board[x].id;
                let loopelement = document.getElementById(loopelementID);
                const pTag = loopelement.querySelector('p');

                if (!pTag) {
                    /*   winner(); */
                    Competition();
                    winner();
                    return;
                } else {

                }
            }
        }
    }
});
document.getElementById('Restart1').addEventListener("click", function () {
    document.location.reload();
});
document.getElementById('Restart2').addEventListener("click", function () {
    document.location.reload();
});
document.getElementById('Restart3').addEventListener("click", function () {
    document.location.reload();
});

function winner() {
    for (x = 0; x < V1.length; x++) {
        if (V1[0].textContent == "X" && V1[1].textContent == "X" && V1[2].textContent == "X") {
            document.getElementById('Victory').style.display = 'block';
            return;

        } else if (V1[0].textContent == "O" && V1[1].textContent == "O" && V1[2].textContent == "O") {
            document.getElementById('Defeat').style.display = 'block';
            return;
        }
    }
    for (x = 0; x < V2.length; x++) {
        if (V2[0].textContent == "X" && V2[1].textContent == "X" && V2[2].textContent == "X") {
            document.getElementById('Victory').style.display = 'block';
            return;
        } else if (V2[0].textContent == "O" && V2[1].textContent == "O" && V2[2].textContent == "O") {
            document.getElementById('Defeat').style.display = 'block';
            return;
        }
    }
    for (x = 0; x < V3.length; x++) {
        if (V3[0].textContent == "X" && V3[1].textContent == "X" && V3[2].textContent == "X") {
            document.getElementById('Victory').style.display = 'block';
            return;
        } else if (V3[0].textContent == "O" && V3[1].textContent == "O" && V3[2].textContent == "O") {
            document.getElementById('Defeat').style.display = 'block';
            return;
        }
    }
    for (x = 0; x < V4.length; x++) {
        if (V4[0].textContent == "X" && V4[1].textContent == "X" && V4[2].textContent == "X") {
            document.getElementById('Victory').style.display = 'block';
            return;
        } else if (V4[0].textContent == "O" && V4[1].textContent == "O" && V4[2].textContent == "O") {
            document.getElementById('Defeat').style.display = 'block';
            return;
        }
    }
    for (x = 0; x < V5.length; x++) {
        if (V5[0].textContent == "X" && V5[1].textContent == "X" && V5[2].textContent == "X") {
            document.getElementById('Victory').style.display = 'block';
            return;
        } else if (V5[0].textContent == "O" && V5[1].textContent == "O" && V5[2].textContent == "O") {
            document.getElementById('Defeat').style.display = 'block';
            return;
        }
    }
    for (x = 0; x < V6.length; x++) {
        if (V6[0].textContent == "X" && V6[1].textContent == "X" && V6[2].textContent == "X") {
            document.getElementById('Victory').style.display = 'block';
            return;
        } else if (V6[0].textContent == "O" && V6[1].textContent == "O" && V6[2].textContent == "O") {
            document.getElementById('Defeat').style.display = 'block';
            return;
        }
    }
    for (x = 0; x < V7.length; x++) {
        if (V7[0].textContent == "X" && V7[1].textContent == "X" && V7[2].textContent == "X") {
            document.getElementById('Victory').style.display = 'block';
            return;
        } else if (V7[0].textContent == "O" && V7[1].textContent == "O" && V7[2].textContent == "O") {
            document.getElementById('Defeat').style.display = 'block';
            return;
        }
    }

    for (x = 0; x < V8.length; x++) {
        if (V8[0].textContent == "X" && V8[1].textContent == "X" && V8[2].textContent == "X") {
            document.getElementById('Victory').style.display = 'block';
            return;
        } else if (V8[0].textContent == "O" && V8[1].textContent == "O" && V8[2].textContent == "O") {
            document.getElementById('Defeat').style.display = 'block';
            return;
        }
    }
}
function Competition() {
    for (x = 0; x < CV1.length; x++) {
        if (CV1[0].textContent == "X" && CV1[1].textContent == "X") {
            const pTag = topR.querySelector('p');

            if (pTag) {
            } else {
                winner();
                topR.style.backgroundColor = "#f8b0b0";
                topR.innerHTML = "<p style = 'color:red;'>O</p>"
                return;

            }

        }
    }
    for (x = 0; x < CV2.length; x++) {
        if (CV2[0].textContent == "X" && CV2[1].textContent == "X") {
            const pTag = topL.querySelector('p');

            if (pTag) {
            } else {
                winner();
                topL.style.backgroundColor = "#f8b0b0";
                topL.innerHTML = "<p style = 'color:red;'>O</p>"
                return;
            }

        }
    }
    for (x = 0; x < CV3.length; x++) {
        if (CV3[0].textContent == "X" && CV3[1].textContent == "X") {
            const pTag = middleL.querySelector('p');

            if (pTag) {
            } else {
                winner();
                middleL.style.backgroundColor = "#f8b0b0";
                middleL.innerHTML = "<p style = 'color:red;'>O</p>"
                return;
            }

        }
    }
    for (x = 0; x < CV4.length; x++) {
        if (CV4[0].textContent == "X" && CV4[1].textContent == "X") {
            const pTag = middleR.querySelector('p');

            if (pTag) {
            } else {
                winner();
                middleR.style.backgroundColor = "#f8b0b0";
                middleR.innerHTML = "<p style = 'color:red;'>O</p>"
                return;
            }

        }
    }
    for (x = 0; x < CV5.length; x++) {
        if (CV5[0].textContent == "X" && CV5[1].textContent == "X") {
            const pTag = bottomL.querySelector('p');

            if (pTag) {
            } else {
                winner();
                bottomL.style.backgroundColor = "#f8b0b0";
                bottomL.innerHTML = "<p style = 'color:red;'>O</p>"
                return;
            }
        }
    }
    for (x = 0; x < CV6.length; x++) {
        if (CV6[0].textContent == "X" && CV6[1].textContent == "X") {
            const pTag = bottomR.querySelector('p');

            if (pTag) {
            } else {
                winner();
                bottomR.style.backgroundColor = "#f8b0b0";
                bottomR.innerHTML = "<p style = 'color:red;'>O</p>"
                return;
            }
        }
    }
    for (x = 0; x < CV7.length; x++) {
        if (CV7[0].textContent == "X" && CV7[1].textContent == "X") {
            const pTag = bottomL.querySelector('p');

            if (pTag) {
            } else {
                winner();
                bottomL.style.backgroundColor = "#f8b0b0";
                bottomL.innerHTML = "<p style = 'color:red;'>O</p>"
                return;
            }
        }
    }
    for (x = 0; x < CV8.length; x++) {
        if (CV8[0].textContent == "X" && CV8[1].textContent == "X") {
            const pTag = topL.querySelector('p');

            if (pTag) {
            } else {
                winner();
                topL.style.backgroundColor = "#f8b0b0";
                topL.innerHTML = "<p style = 'color:red;'>O</p>"
                return;
            }
        }
    }
    for (x = 0; x < CV9.length; x++) {
        if (CV9[0].textContent == "X" && CV9[1].textContent == "X") {
            const pTag = bottomM.querySelector('p');

            if (pTag) {
            } else {
                winner();
                bottomM.style.backgroundColor = "#f8b0b0";
                bottomM.innerHTML = "<p style = 'color:red;'>O</p>"
                return;
            }
        }
    }
    for (x = 0; x < CV10.length; x++) {
        if (CV10[0].textContent == "X" && CV10[1].textContent == "X") {
            const pTag = topM.querySelector('p');

            if (pTag) {
            } else {
                winner();
                topM.style.backgroundColor = "#f8b0b0";
                topM.innerHTML = "<p style = 'color:red;'>O</p>"
                return;
            }
        }
    }
    for (x = 0; x < CV11.length; x++) {
        if (CV11[0].textContent == "X" && CV11[1].textContent == "X") {
            const pTag = bottomR.querySelector('p');

            if (pTag) {
            } else {
                winner();
                bottomR.style.backgroundColor = "#f8b0b0";
                bottomR.innerHTML = "<p style = 'color:red;'>O</p>"
                return;
            }
        }
    }
    for (x = 0; x < CV12.length; x++) {
        if (CV12[0].textContent == "X" && CV12[1].textContent == "X") {
            const pTag = topR.querySelector('p');

            if (pTag) {
            } else {
                winner();
                topR.style.backgroundColor = "#f8b0b0";
                topR.innerHTML = "<p style = 'color:red;'>O</p>"
                return;
            }
        }
    }
    for (x = 0; x < CV13.length; x++) {
        if (CV13[0].textContent == "X" && CV13[1].textContent == "X") {
            const pTag = bottomR.querySelector('p');

            if (pTag) {
            } else {
                winner();
                bottomR.style.backgroundColor = "#f8b0b0";
                bottomR.innerHTML = "<p style = 'color:red;'>O</p>"
                return;
            }
        }
    }
    for (x = 0; x < CV14.length; x++) {
        if (CV14[0].textContent == "X" && CV14[1].textContent == "X") {
            const pTag = topL.querySelector('p');

            if (pTag) {
            } else {
                winner();
                topL.style.backgroundColor = "#f8b0b0";
                topL.innerHTML = "<p style = 'color:red;'>O</p>"
                return;
            }
        }
    }
    for (x = 0; x < CV15.length; x++) {
        if (CV15[0].textContent == "X" && CV15[1].textContent == "X") {
            const pTag = topR.querySelector('p');

            if (pTag) {
            } else {
                winner();
                topR.style.backgroundColor = "#f8b0b0";
                topR.innerHTML = "<p style = 'color:red;'>O</p>"
                return;
            }
        }
    }
    for (x = 0; x < CV16.length; x++) {
        if (CV16[0].textContent == "X" && CV16[1].textContent == "X") {
            const pTag = bottomL.querySelector('p');

            if (pTag) {
            } else {
                winner();
                bottomL.style.backgroundColor = "#f8b0b0";
                bottomL.innerHTML = "<p style = 'color:red;'>O</p>"
                return;
            }
        }
    }
    for (x = 0; x < CV17.length; x++) {
        if (CV17[0].textContent == "X" && CV17[1].textContent == "X") {
            const pTag = middleR.querySelector('p');

            if (pTag) {
            } else {
                winner();
                middleR.style.backgroundColor = "#f8b0b0";
                middleR.innerHTML = "<p style = 'color:red;'>O</p>"
                return;
            }
        }
    }
    for (x = 0; x < CV18.length; x++) {
        if (CV18[0].textContent == "X" && CV18[1].textContent == "X") {
            const pTag = middleM.querySelector('p');

            if (pTag) {
            } else {
                winner();
                middleM.style.backgroundColor = "#f8b0b0";
                middleM.innerHTML = "<p style = 'color:red;'>O</p>"
                return;
            }
        }
    }
    for (x = 0; x < CV19.length; x++) {
        if (CV19[0].textContent == "X" && CV19[1].textContent == "X") {
            const pTag = middleL.querySelector('p');

            if (pTag) {
            } else {
                winner();
                middleL.style.backgroundColor = "#f8b0b0";
                middleL.innerHTML = "<p style = 'color:red;'>O</p>"
                return;
            }
        }
    }
    for (x = 0; x < CV20.length; x++) {
        if (CV20[0].textContent == "X" && CV20[1].textContent == "X") {
            const pTag = topM.querySelector('p');

            if (pTag) {
            } else {
                winner();
                topM.style.backgroundColor = "#f8b0b0";
                topM.innerHTML = "<p style = 'color:red;'>O</p>"
                return;
            }
        }
    }
    for (x = 0; x < CV21.length; x++) {
        if (CV21[0].textContent == "X" && CV21[1].textContent == "X") {
            const pTag = middleM.querySelector('p');

            if (pTag) {
            } else {
                winner();
                middleM.style.backgroundColor = "#f8b0b0";
                middleM.innerHTML = "<p style = 'color:red;'>O</p>"
                return;
            }
        }
    }
    for (x = 0; x < CV22.length; x++) {
        if (CV22[0].textContent == "X" && CV22[1].textContent == "X") {
            const pTag = bottomM.querySelector('p');

            if (pTag) {
            } else {
                winner();
                bottomM.style.backgroundColor = "#f8b0b0";
                bottomM.innerHTML = "<p style = 'color:red;'>O</p>"
                return;
            }
        }
    }
    for (x = 0; x < CV23.length; x++) {
        if (CV23[0].textContent == "X" && CV23[1].textContent == "X") {
            const pTag = middleM.querySelector('p');

            if (pTag) {
            } else {
                winner();
                middleM.style.backgroundColor = "#f8b0b0";
                middleM.innerHTML = "<p style = 'color:red;'>O</p>"
                return;
            }
        }
    }
    for (x = 0; x < CV24.length; x++) {
        if (CV24[0].textContent == "X" && CV24[1].textContent == "X") {
            const pTag = middleM.querySelector('p');

            if (pTag) {
            } else {
                winner();
                middleM.style.backgroundColor = "#f8b0b0";
                middleM.innerHTML = "<p style = 'color:red;'>O</p>"
                return;
            }
        }
    }

    if (elementID = topL) {
        const board = [topM, middleM, middleL, bottomR, middleR, topR, bottomL, bottomM, topL];
        for (x = 0; x < board.length; x++) {
            let loopelementID = board[x].id;
            let loopelement = document.getElementById(loopelementID);
            const pTag = loopelement.querySelector('p');

            if (pTag) {
            } else {
                loopelement.style.backgroundColor = "#f8b0b0";
                loopelement.innerHTML = "<p style = 'color:red;'>O</p>"
                winner();
                return;
            }
        }
    }
    if (elementID = topM) {
        const board = [topR, middleM, topL, topM, middleL, bottomR, middleR, bottomL, bottomM];
        for (x = 0; x < board.length; x++) {
            let loopelementID = board[x].id;
            let loopelement = document.getElementById(loopelementID);
            const pTag = loopelement.querySelector('p');

            if (pTag) {
            } else {
                loopelement.style.backgroundColor = "#f8b0b0";
                loopelement.innerHTML = "<p style = 'color:red;'>O</p>"
                winner();
                return;
            }
        }
    }
    if (elementID = topR) {
        const board = [topM, middleM, middleR, middleL, bottomR, topR, bottomL, bottomM, topL];
        for (x = 0; x < board.length; x++) {
            let loopelementID = board[x].id;
            let loopelement = document.getElementById(loopelementID);
            const pTag = loopelement.querySelector('p');

            if (pTag) {
            } else {
                loopelement.style.backgroundColor = "#f8b0b0";
                loopelement.innerHTML = "<p style = 'color:red;'>O</p>"
                winner();
                return;
            }
        }
    }
    if (elementID = middleL) {
        const board = [topL, middleM, bottomL, topM, middleL, bottomR, middleR, topR, bottomM];
        for (x = 0; x < board.length; x++) {
            let loopelementID = board[x].id;
            let loopelement = document.getElementById(loopelementID);
            const pTag = loopelement.querySelector('p');

            if (pTag) {
            } else {
                loopelement.style.backgroundColor = "#f8b0b0";
                loopelement.innerHTML = "<p style = 'color:red;'>O</p>"
                winner();
                return;
            }
        }
    }
    if (elementID = middleM) {
        const board = [topM, middleL, middleR, bottomM, middleM, bottomR, topR, bottomL, topL];
        for (x = 0; x < board.length; x++) {
            let loopelementID = board[x].id;
            let loopelement = document.getElementById(loopelementID);
            const pTag = loopelement.querySelector('p');

            if (pTag) {
            } else {
                loopelement.style.backgroundColor = "#f8b0b0";
                loopelement.innerHTML = "<p style = 'color:red;'>O</p>"
                winner();
                return;
            }
        }
    }
    if (elementID = middleR) {
        const board = [topR, middleM, bottomR, topM, bottomM, middleL, middleR, bottomL, topL];
        for (x = 0; x < board.length; x++) {
            let loopelementID = board[x].id;
            let loopelement = document.getElementById(loopelementID);
            const pTag = loopelement.querySelector('p');

            if (pTag) {
            } else {
                loopelement.style.backgroundColor = "#f8b0b0";
                loopelement.innerHTML = "<p style = 'color:red;'>O</p>"
                winner();
                return;
            }
        }
    }
    if (elementID = bottomL) {
        const board = [middleL, middleM, bottomM, topM, bottomR, middleR, topR, bottomL, topL];
        for (x = 0; x < board.length; x++) {
            let loopelementID = board[x].id;
            let loopelement = document.getElementById(loopelementID);
            const pTag = loopelement.querySelector('p');

            if (pTag) {
            } else {
                loopelement.style.backgroundColor = "#f8b0b0";
                loopelement.innerHTML = "<p style = 'color:red;'>O</p>"
                winner();
                return;
            }
        }
    }
    if (elementID = bottomM) {
        const board = [middleM, middleL, middleR, topM, bottomR, topR, bottomL, bottomM, topL];
        for (x = 0; x < board.length; x++) {
            let loopelementID = board[x].id;
            let loopelement = document.getElementById(loopelementID);
            const pTag = loopelement.querySelector('p');

            if (pTag) {
            } else {
                loopelement.style.backgroundColor = "#f8b0b0";
                loopelement.innerHTML = "<p style = 'color:red;'>O</p>"
                winner();
                return;
            }
        }
    }
    if (elementID = bottomR) {
        const board = [middleR, middleM, bottomM, topM, middleL, bottomR, topR, bottomL, topL];
        for (x = 0; x < board.length; x++) {
            let loopelementID = board[x].id;
            let loopelement = document.getElementById(loopelementID);
            const pTag = loopelement.querySelector('p');

            if (pTag) {
            } else {
                loopelement.style.backgroundColor = "#f8b0b0";
                loopelement.innerHTML = "<p style = 'color:red;'>O</p>"
                winner();
                return;
            }
        }
    }
};







