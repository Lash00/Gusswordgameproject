const wordList = [
    "apple", "banana", "orange", "grape", "lemon",
    "cat", "dog", "bird", "horse", "monkey", "tiger",
    "red", "blue", "green", "yellow", "purple", "brown",
    "happy", "sad", "angry", "scared", "funny", "silly",
    "house", "school", "garden", "beach", "river",
    "sunny", "rainy", "cloudy", "snowy", "windy",
    "today", "night", "month", "year",
    "above", "below", "around", "inside", "outside",
    "quiet", "noisy", "fast", "slow",
    "ocean", "island",
    "paper", "pencil",
    "bread", "milk",
    "money",
    "clock",
    "world",
    "space",
];
function getRandomInt(length) {
    return Math.floor(Math.random() * length);
}
let wordToGuss = getRandomInt(wordList.length);
console.log(wordList[wordToGuss]);
let wordSplite = wordList[wordToGuss].split(""); // true splite
let wordTrue = wordList[wordToGuss].split(""); // true splite
console.log(wordSplite);
// Shuffle the wordSplit array randomly
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // swaped between index and random index
    }
}

shuffleArray(wordSplite);


// Store the shuffled array in another variable
let shuffledWordSplit = wordSplite;  // randon splite

console.log(shuffledWordSplit);
console.log("*".repeat(10));
let list = shuffledWordSplit.join(" || ");
console.log(list);
let charList = document.querySelector(".char-list");
let charListText = document.createTextNode(list);
charList.appendChild(charListText);
let divLingth = document.querySelector(".char-list-lingth");
let lengthText = document.createTextNode(`Length = ${wordSplite.length}`);
divLingth.appendChild(lengthText);
// console.log(divLingth);
let inputValue = document.querySelectorAll("input");
let check = document.querySelector(".btn-1");
let ans0To5 = [];
let index = wordSplite.length;


// Search for letter 
function search(char) {
    for (let i = 0; i < wordSplite.length; i++) {
        if (char === wordSplite[i])
            return true;
    }
    return false;
}

let count = 0;
check.onclick = (e) => {
    if (count === 0) {
        ans0To5 = [];
        let indexx = 0;
        let trueAns = 0;
        for (let i = 0; i < 6; i++) {
            ans0To5.push(inputValue[i].value);
            let j = search(ans0To5[i]);
            // console.log(`ans = ${j}`);
            if (j) {
                if (wordTrue[indexx] === ans0To5[indexx]) {
                    inputValue[i].style.backgroundColor = "rgb(236, 147, 63)";
                    inputValue[i].style.color = "white";
                    trueAns++;
                }
                else {
                    inputValue[i].style.backgroundColor = "rgb(57, 167, 152)";
                    inputValue[i].style.color = "white";
                }
            }
            else {
                inputValue[i].style.backgroundColor = "rgb(49, 48, 47)";
                inputValue[i].style.color = "white";
            }
            indexx++;
        }
        count++;
        let wen = document.querySelector(".win");
        if (trueAns == wordTrue.length)
            wen.style.display = "block";
    }
    else if (count === 1) {
        ansfor1 = [];
        let i = 0;
        let trueAns = 0;
        for (let j = 6; j < 12; j++, i++) {
            ansfor1.push(inputValue[j].value);
            let found = search(ansfor1[i]);
            // console.log(`ans = ${found}`);
            if (found) {
                if (wordTrue[i] === ansfor1[i]) {
                    inputValue[j].style.backgroundColor = "rgb(236, 147, 63)";
                    inputValue[j].style.color = "white";

                    trueAns++;
                }
                else {
                    inputValue[j].style.backgroundColor = "rgb(57, 167, 152)";
                    inputValue[j].style.color = "white";

                }
            }
            else {
                inputValue[j].style.backgroundColor = "rgb(49, 48, 47)";
                inputValue[j].style.color = "white";

            }
        }


        // console.log(ans0To5);
        count++;
        // console.log(count);
        let wen = document.querySelector(".win");
        if (trueAns == wordTrue.length)
            wen.style.display = "block";

    }
    else if (count === 2) {
        let answer = [];
        let i = 0;
        let trueAns = 0;
        for (let c = 12; c < 18; c++, i++) {
            answer.push(inputValue[c].value);
            let found = search(answer[i]);
            // console.log(`ans = ${found}`);
            if (found) {
                if (wordTrue[i] === answer[i]) {
                    inputValue[c].style.backgroundColor = "rgb(236, 147, 63)";
                    inputValue[c].style.color = "white";

                    trueAns++;
                }
                else {
                    inputValue[c].style.backgroundColor = "rgb(57, 167, 152)";
                    inputValue[c].style.color = "white";

                }
            }
            else {
                inputValue[c].style.backgroundColor = "rgb(49, 48, 47)";
                inputValue[c].style.color = "white";

            }

        }
        count++;
        // console.log(answer);
        // console.log(count);
        let wen = document.querySelector(".win");
        if (trueAns == wordTrue.length)
            wen.style.display = "block";

    }
    else if (count === 3) {
        let ans = [];
        let i = 0;
        let trueAns = 0;
        for (let k = 18; k < 24; k++, i++) {
            ans.push(inputValue[k].value);
            let found = search(ans[i]);
            // console.log(`ans = ${found}`);
            if (found) {
                if (wordTrue[i] === ans[i]) {
                    inputValue[k].style.backgroundColor = "rgb(236, 147, 63)";
                    inputValue[k].style.color = "white";

                    trueAns++;
                }
                else {
                    inputValue[k].style.backgroundColor = "rgb(57, 167, 152)";
                    inputValue[k].style.color = "white";

                }
            }
            else {
                inputValue[k].style.backgroundColor = "rgb(49, 48, 47)";
                inputValue[k].style.color = "white";

            }

        }
        count++;
        // console.log(ans);
        // console.log(count);
        let wen = document.querySelector(".win");
        if (trueAns == wordTrue.length)
            wen.style.display = "block";
    }
    else if (count === 4) {
        let ans = [];
        let i = 0;
        let trueAns = 0;
        for (let x = 24; x < 30; x++, i++) {
            ans.push(inputValue[x].value);
            let found = search(ans[i]);
            // console.log(`ans = ${found}`);
            if (found) {
                if (wordTrue[i] === ans[i]) {
                    inputValue[x].style.backgroundColor = "rgb(236, 147, 63)";
                    inputValue[x].style.color = "white";

                    trueAns++;
                }
                else {
                    inputValue[x].style.backgroundColor = "rgb(57, 167, 152)";
                    inputValue[x].style.color = "white";

                }
            }
            else {
                inputValue[x].style.backgroundColor = "rgb(49, 48, 47)";
                inputValue[x].style.color = "white";

            }

        }
        count++;
        // console.log(ans);
        // console.log(count);
        let wen = document.querySelector(".win");
        if (trueAns == wordTrue.length)
            wen.style.display = "block";
        else {
            let los = document.querySelector(".loser");
            los.style.display = "block";


        }

    }


};


