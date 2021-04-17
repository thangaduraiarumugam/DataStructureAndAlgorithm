/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let step1 = 0;
  let step2 = 0;
  for (let i = cost.length - 1; i >= 0; i--) {
    let currentStep = cost[i] + Math.min(step1, step2);
    step1 = step2;
    step2 = currentStep;
  }

  return Math.min(step1, step2);
};
