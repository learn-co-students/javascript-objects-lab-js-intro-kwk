var recipes = {prop: 1}; 

function updateObjectWithKeyAndValue(object, key, value) {
object[key] = value
  return object
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes.prop2 = 2; 
  return recipes 
}

function deleteFromObjectByKey(recipes, key) {
  Object.assign({}, recipes); 
  return recipes 
}

function destructivelyDeleteFromObjectByKey(recipes, key) {
  delete recipes.prop2;
  return recipes 
} 