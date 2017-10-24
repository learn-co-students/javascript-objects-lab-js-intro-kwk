//1) Objects defines a `recipes` object:

var recipes = {ingred: "amount"}

/* 2) Objects updateObjectWithKeyAndValue(object, key, value) returns a clone of `o
bject` by adding `key` and `value` (it is non-destructive): */

function updateObjectWithKeyAndValue(recipes, ingred, amount) {
  return Object.assign({}, recipes, {[ingred]:amount})
}

/* 3) Objects destructivelyUpdateObjectWithKeyAndValue(object, key, value) updates
`object` with the given `key` and `value` (it is destructive):    */
function destructivelyUpdateObjectWithKeyAndValue(recipes, ingred, amount){
  recipes[ingred] = amount
  return recipes
}

/* 4) Objects deleteFromObjectByKey(object, key) deletes `key` from a clone of obje
ct and returns the new object (it is non-destructive): */

function deleteFromObjectByKey(recipes,ingred) {
  delete recipes.ingred;
  return recipes
}

/*
  5) Objects destructivelyDeleteFromObjectByKey(object, key) deletes `key` from ob
ject and returns object:  */

function destructivelyDeleteFromObjectByKey(recipes, ingred) {
  delete recipes.ingred;
  return recipes
}
