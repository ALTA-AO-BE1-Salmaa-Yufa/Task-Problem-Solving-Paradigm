function dragonOfLoowater(dragonHead, knightHeight) {
    // your code here
    const cloneDragon = dragonHead.slice().sort((a, b) => a - b);
    const cloneKnight = knightHeight.slice().sort((a, b) => a - b);
    let totalHeight = 0;
  
    for (let i = 0; i < cloneKnight.length; i++) {
      if (cloneKnight[i] < cloneDragon[0]) {
        continue;
      }
  
      cloneDragon.shift();
      totalHeight += cloneKnight[i];
  
      if (cloneDragon.length === 0) {
        return totalHeight;
      }
    }
  
    return "knight fall";
  }
  
  console.log(dragonOfLoowater([5, 4], [7, 8, 4])); // 11
  console.log(dragonOfLoowater([5, 10], [5])); // knight fall
  console.log(dragonOfLoowater([7, 2], [4, 3, 1, 2])); // knight fall
  console.log(dragonOfLoowater([7, 2], [2, 1, 8, 5])); // 10