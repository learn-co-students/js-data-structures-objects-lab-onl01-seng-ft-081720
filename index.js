let driver = {};

function updateDriverWithKeyAndValue(obj, k, v) {
    return Object.assign({}, obj, { [k]: v });
};

const destructivelyUpdateDriverWithKeyAndValue = (obj, k, v) => {
    obj[k] = v;
    return obj;
};

function deleteFromDriverByKey(obj, k) {
    const newObj = { ...obj };
    delete newObj[k];
    return newObj;
};

const destructivelyDeleteFromDriverByKey = (obj, k) => {
    delete obj[k];
    return obj;
};