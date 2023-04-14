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