// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value ) {
    return { ...driver, ...{ [key]: value } }
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, key, value) {
    const newObject = { ...driver }
    delete newObject[key];
    return newObject;
}

function destructivelyDeleteFromDriverByKey(driver, key, value) {
    delete driver[key];
    return driver;
}