/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */


module.exports = function getLoveTrianglesCount(preferences = []) {
  let triangle = 0;
  for(let i =0; i < preferences.length; i++){
    let lover1 = i;
    let lover2 = preferences[lover1] - 1;
    let lover3 = preferences[lover2] - 1;
    let lover3Preference = preferences[lover3] - 1;
    if(lover1 === lover2 || lover2 === lover3 || lover1 < 0 || lover2 < 0){
      continue;
    }
    if(lover1 === lover3Preference){
      triangle = triangle + 1;
    }
}
return triangle / 3 ;
}