
 const judgeVegetable = function (vegetables, metric) {
  const metricArray = vegetables.map((veg, i) => veg[metric]);
  const maxVal = Math.max(...metricArray);
  const candidates = vegetables.filter(veg => veg[metric] === maxVal)
  if (candidates.length == 1) {
    return candidates[0].submitter;
  } else {
    return candidates.map(cand => cand['submitter']);
  }
}