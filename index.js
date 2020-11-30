// Write your solution in this file!
let driver = {};
function updateDriverWithKeyAndValue(driver, key, value){
    return Object.assign({}, driver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromDriverByKey(driver, key){
    const newObj = Object.assign({}, driver);
    delete newObj[key];
    return newObj;

    
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    Object.assign({}, driver);
    delete driver[key];
    return driver;

}