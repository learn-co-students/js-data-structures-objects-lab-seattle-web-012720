// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
    const driver1 = {...driver};
    driver1[key]=value;
return driver1;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
driver[key] = value;
return driver;

}

function deleteFromDriverByKey(driver, key, value) {
//const obj = { key: value };
 
const newObj = Object.assign({}, driver);
 
//newObj;
// => { foo: "bar" }
 
delete newObj[key];
// => true
 
return newObj;}
// => {}
 
//obj; }
// => { foo: "bar" }
function destructivelyDeleteFromDriverByKey(driver, key, value) {

delete driver[key];
return driver;
}