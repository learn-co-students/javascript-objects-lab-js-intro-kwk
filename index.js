var recipes = {}
function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign(object,{[key]:value})
  return object
}
function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes.prop2=2;
  return recipes
}
function deleteFromObjectByKey(object, key) {
  delete recipes.key
  return recipes
}

function destructivelyDeleteFromObjectByKey (object, key) {
  delete recipes.key
  return recipes
}
