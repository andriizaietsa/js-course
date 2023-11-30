function getMathResult(baseNumber, repeatNumber) {
    if (typeof repeatNumber === "string" || repeatNumber <= 0) {
        return baseNumber;
    }
    let resultArr = [];
    for (let i = 1; i <= repeatNumber; i++) {
        resultArr.push(baseNumber * i);
    }
    console.log(resultArr.join(' --- '));
}

getMathResult(5, 3);



