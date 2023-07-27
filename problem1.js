function frog(jumps) {
    let nStone = jumps.length;
    let totalCost = [];
  
    totalCost[0] = 0;
    totalCost[1] = Math.abs(jumps[1] - jumps[0]);
  
    for (let i = 2; i < nStone; i++) {
      const jump1 = Math.abs(jumps[i] - jumps[i - 1]) + totalCost[i - 1];
      const jump2 = Math.abs(jumps[i] - jumps[i - 2]) + totalCost[i - 2];
      console.log("JUMP", jump1, jump2);
      totalCost[i] = Math.min(jump1, jump2);
      console.log("TOTAL COST", totalCost[i]);
    }
  
    console.log(totalCost);
    return totalCost[nStone - 1];
  }
  
  console.log(frog([10, 30, 40, 20])); // 30
  console.log(frog([30, 10, 60, 10, 60, 50])); // 40