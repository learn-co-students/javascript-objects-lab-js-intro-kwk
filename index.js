
var recipes = ['eggs', 'milk', 'flour']


function updateObjectWithKeyAndValue(object, key, value) {
  var obj = {prop: 1};

obj['prop2'] = 2;

return obj

}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
object['prop2'] = 2
return object

}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key
  return object
}


function deleteFromObjectByKey(object, key) {
  var obj = { prop: 1 }
 var newObj =  Object.assign({}, obj)
 return newObj
}
