const moneyCounter = (i) => {
    let count = i;
    const counts = () => {
      console.log(`valor $${count++}`);
    };
    return counts;
  };
  
  const counter = moneyCounter(10)
  counter() // valor 10
  counter() // valor 11
