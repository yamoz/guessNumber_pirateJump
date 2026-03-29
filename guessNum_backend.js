function randomNumArray(arrayLength = 5) {
    if (arrayLength > 0 && arrayLength <= 10) {
        let originArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        // let tempArr = [];
        // shuffle the origin array
        for (let i = 0; i < 10; i++) {
            let temp = originArr[i];
            // shuffle with random position num
            let randomPosition = Math.floor(Math.random() * 10);
            originArr[i] = originArr[randomPosition];
            originArr[randomPosition] = temp;
        }
        let randomArr = new Array(arrayLength);
        // assign shuffled origin array to new array
        for (let i = 0; i < arrayLength; i++) {
            randomArr[i] = originArr[i];
        }
        return randomArr;
    } else {
        console.log("please input an integer that greater than 0 and less than 11.");
    }
}
// console.log(randomNumArray());

function checkGuessNum(inputArr, randomArr) {
    let repeatNums = [];
    for (let i = 0; i < inputArr.length; i++) { // grab a num from inputArr
        for (let j = 0; j < randomArr.length; j++) { // check if the input num was in randomArr
            if (inputArr[i] == randomArr[j]) { // if there is the same num in both arr
                repeatNums.push(inputArr[i]);
                break;
            }
        }
    }
    return repeatNums;
}

// 0.9 * (10-1)

var cnt = 0;
function dis() {
  // 先推入一個狀態，讓瀏覽器以為多了一頁
  window.history.pushState('forward', null, window.location.href);
  
  // 監聽後退動作
  window.onpopstate = function() {
    // 當使用者按後退，立刻強制「前進」回來
    window.history.forward(1);
    
    // 測試用：加個 alert 讓你確認攔截成功
    console.log("攔截成功！"); 
  };
  
  console.log("blocked history: " + ++cnt);
}

// document.addEventListener('click', dis, {once: true});
document.addEventListener('touchstart', dis, {once: true});