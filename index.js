const driver = {};

function updateDriverWithKeyAndValue(object, key, value) {
    const newobject = {...object}
    newobject[key] = value;
    return newobject;
};

function destructivelyUpdateDriverWithKeyAndValue(object, key, value) {
    object[key] = value;
    return object;
};

function deleteFromDriverByKey(object, key) {
    const newobject = {...object};
    delete newobject[key];
    return newobject;
};

function destructivelyDeleteFromDriverByKey(object, key) {
    delete object[key];
    return object;
};