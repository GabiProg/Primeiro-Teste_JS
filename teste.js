function somaMaxima(lst) {
    let maxContinua = lst[0];
    let maxSum = lst[0];

    for (let i = 1; i < lst.length; i++) {
        maxContinua = Math.max(lst[i], maxContinua + lst[i]);
        maxSum = Math.max(maxSum, maxContinua);
    }

    return maxSum;
}
