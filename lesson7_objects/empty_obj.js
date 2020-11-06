const obj = {
    a: 111,
    b: '222'
  };
  const emptyObj = {};
  
  function isEmptyObject(obj) {
    return Object.keys(obj).length === 0
  }