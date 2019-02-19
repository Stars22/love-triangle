/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */


module.exports = function getLoveTrianglesCount(preferences = []) {
  let triangle = 0;
  let lover1, lover2, lover3, lover3Preference;
  for(let i =0; i < preferences.length; i++){
    lover1 = i;
    lover2 = preferences[lover1] - 1;
    lover3 = preferences[lover2] - 1;
    lover3Preference = preferences[lover3] - 1;
    if(lover1 === lover2 || lover2 === lover3){
      continue;
    }
    if(lover1 === lover3Preference){
      triangle = triangle + 1;
    }
}
return triangle / 3 ;
}
