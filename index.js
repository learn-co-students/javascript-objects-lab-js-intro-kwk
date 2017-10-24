var recipes = {
  eggs: 2,
  flour: '3 cups',
  oil: '.25 cup'
};

function updateObjectWithKeyAndValue(object, key, value){
  var copy = Object.assign(object, { prop2: 2 });
  return copy;
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}
function deleteFromObjectByKey(object, key){
  Object.assign({}, object, key);
  return object;
} 
function destructivelyDeleteFromObjectByKey(object, key){
  delete object.key;
  return object;
}