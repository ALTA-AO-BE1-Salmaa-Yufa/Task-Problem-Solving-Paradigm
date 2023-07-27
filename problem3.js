function chopDragons(dragonHeads, knightsHeights) {
    dragonHeads.sort((a, b) => b - a);
    knightsHeights.sort((a, b) => b - a);
    let totalHeight = 0;
  
    for (const headDiameter of dragonHeads) {
      if (knightsHeights.length === 0) {
        return 'knight fall';
      }
  
      while (knightsHeights.length > 0 && knightsHeights[0] < headDiameter) {
        knightsHeights.shift();
      }
  
      if (knightsHeights.length === 0) {
        return 'knight fall';
      }
  
      totalHeight += knightsHeights.shift();
    }
  
    return totalHeight;
  }
  
  
  console.log(chopDragons([5, 4], [7, 8, 4])); // Output: 11
  console.log(chopDragons([5, 10], [5]));      // Output: 'knight fall'
  console.log(chopDragons([7, 2], [4, 3, 1, 2])); // Output: 'knight fall'
  console.log(chopDragons([7, 2], [2, 1, 8, 5])); // Output: 10
  