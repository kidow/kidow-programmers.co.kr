function solution(n) {
    return String(n).split('').map(Number).reverse()
}

solution(12345) // [5,4,3,2,1]