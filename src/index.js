/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count=0;
  for (let i=0; i<preferences.length;) {
    if (preferences[i]!=''){
      if (preferences[i]!=i) {
    let a=preferences[i];
    if (a<=preferences.length) {
      if (preferences[a-1]!=a) {
    let b=preferences[a-1];
    if (b<=preferences.length){
      if (preferences[b-1]!=b) {
    let c=preferences[b-1];
    if (preferences[c-1]===a) {
      count++;
      preferences[a-1]='';
      preferences[b-1]='';
      preferences[c-1]='';

     }}}}}}} i++;
  }
  return count;
};


