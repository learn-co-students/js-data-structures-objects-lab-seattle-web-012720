// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, {[key]: value})
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value
    return driver
}

function deleteFromDriverByKey(driver, key) {
    const newDriver = {...driver}
    delete newDriver[key]
    // console.log(newDriver)
    // console.log(driver)
    return newDriver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    // console.log(driver)
    delete driver[key]
    // console.log(driver)

    return driver
}