let driver = {}
driver.name = Sam 
function updateDriverWithKeyAndValue(obj,key,value){
    return Object.assign({}, obj, { [key]: value });
    
    const newDriver = updateDriverWithKeyAndValue(driver,'address','11 Broadway')
}

function  destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver.address = '12 Broadway';

    return driver;
}
function  deleteFromDriverByKey(driver, key){
    let newObj=  Object.assign({},driver);
    delete newObj[key];
    return newObj
}
function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key]
    return driver
}
