

function solution(A) {
    // Implement your solution here
    let N = 1;
    for(let i = 0; i < A.length; i++){
        if(N > 0 || N <100,001){
            N++;
            if(A[i]<=1_000_000 && A[i]>=-1_000_000){
                if(A[i] > 0){
                    if(!A.includes(N)){
                        return N;
                    }
                } else{
                    N = 1;
                    if(!A.includes(N)){
                        return N;
                    }
                }
            }
        }
    }
}

console.log(solution([1, 3, 6, 4, 1, 2]))
console.log(solution([1,2,3]))
console.log(solution([-3, -1]))
console.log(solution([-5, -1]))
console.log(solution([-5, -2, 1]))
console.log(solution([-5, -2, 3]))
console.log(solution([-5, -2, 1,2, 3]))
console.log(solution([-5, -2, 1,2, 5]))

console.log('test only');
console.log('lets pull request');