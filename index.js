// Write your solution in this file!

let driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, { [key]: value });
}

let newDriver = updateDriverWithKeyAndValue(driver, "non-destructive", "drivers different")

console.log(driver)
console.log(newDriver)


//////////////////////////////////////////////

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign(driver, { [key]: value });
}

let identicalDriver = destructivelyUpdateDriverWithKeyAndValue(driver, "destructive", "drivers identical")
console.log(driver)
console.log(identicalDriver)

//////////////////////////////////////////////

    // Incorrect but passed the test //
// function deleteFromDriverByKey(driver, key) {
//     return Object.assign({}, driver, { [key]: undefined });
//     delete driver.key;
// }


function deleteFromDriverByKey(driver, key) {
        let xDriver = Object.assign({}, driver);
        delete xDriver[key];
        return xDriver;
    }

let deleteOnlyMine = deleteFromDriverByKey(driver, "destructive")
console.log(deleteOnlyMine)
console.log(driver)

//////////////////////////////////////////////

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver
}

destructivelyDeleteFromDriverByKey(driver, "destructive")
console.log(driver)


