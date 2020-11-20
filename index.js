let driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, { [key]: value });
  }
  
  function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
  
    return driver;
  }

  function deleteFromDriverByKey(driver, key) {
    let res = Object.assign({},driver)
    delete res[key]
    return res
  }

  function destructivelyDeleteFromDriverByKey(driver, key){
      delete driver[key];

      return driver;
  }