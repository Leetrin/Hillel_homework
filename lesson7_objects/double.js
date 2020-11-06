const salaries = {
    HRs: { Alice: 500, Bob: 700 },
    Devs: { Carol: 2500, Carlos: 1000, Charles: 1500 },
    QAs: { Chuck: 1650, Craig: 850, Dave: 3000 },
  };
  
  const newSalaries = JSON.parse(JSON.stringify(salaries));
  
  multiplyNumeric(newSalaries);
  
  function multiplyNumeric(obj) {
    for (let keyObj in obj) {
      for (let key in obj[keyObj]) {
        if (typeof obj[keyObj][key] == "number") {
          obj[keyObj][key] *= 2;
        }
      }
    }
  }