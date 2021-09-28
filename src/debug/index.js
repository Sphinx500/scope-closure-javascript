const moneyBox =()=>{              
    debugger // no hay ningun valor definido porque aun no se ha hecho nada
     var saveCoins = 0;
     const countCoins=(coins)=>{                                 
   debugger// paso por paso ira saltando para saber cual es el valor coins en parameto que le va llegando y cuanto guardara saveCoins
     saveCoins += coins;
     console.log(`MoneyBox:${saveCoins}`);
    }
    return countCoins;
 }
 let myMoneyBox = moneyBox();
 
 myMoneyBox(4);
 myMoneyBox(6);
 myMoneyBox(10);