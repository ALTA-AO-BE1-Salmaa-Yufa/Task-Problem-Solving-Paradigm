/*We have three different integers, x, y and z, which satisfy the following three relations:

x + y + z = A
xyz = B
x^2 + y^2 + z^2 = C

You are asked to write a program that solves for x, y and z for given values of A, B and C. (1 ≤ A, B, C ≤ 10000).

Sample Test Cases
Input: 1 2 3
Output: No solution.

Input: 6 6 14
Output: 1 2 3*/


function simpleEquations(a, b, c) {
    for (let x = 1; x <= 10000; x++) {
        for (let y = 1; y <= 10000; y++){
            let z = a - x - y;
            
            if (x*y*z === b) {
                if (x**2 + y**2 + z**2 === c) {
                return '${x} ${y} ${z}';
                }
            }
        }
    }
    return "No solution.";
}
   console.log(simpleEquations(1, 2, 3)); 
   console.log(simpleEquations(6, 6, 14));
   
   