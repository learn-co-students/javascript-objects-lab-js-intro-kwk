var recipes = {}


function updateObjectWithKeyAndValue(obj, key, value){
  var newObj = Object.assign({}, obj,{[key]:value});
  return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value;
  return obj
}

function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({},object);
  delete newObj[key];
  return newObj
}

function destructivelyDeleteFromObjectByKey(obj, key){
  //obj = deleteFromObjectByKey(obj,key)
  delete obj[key] 
  return obj
}
