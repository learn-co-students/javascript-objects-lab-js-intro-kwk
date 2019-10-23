var recipes = {item1:"ed"}

function updateObjectWithKeyAndValue(object, key, value){
  object[key]=value
  return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value
  return object
}

function deleteFromObjectByKey(object, key){
  var objectCopy=Object.assign({},object)
  delete  objectCopy[key]
  return objectCopy
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete  object[key]
  return object
}
