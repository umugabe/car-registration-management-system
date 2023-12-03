const {add, update, updateMany, remove, display} = require("./controller/carController");

let newCar ={
    model: "TXL",
    manufacturing_year: 2019,
    carOwner: 'Irakoze Kevin',
    color: 'black',
    cost: 50000
}

let updateCar = {
    model: "VXL",
    manufacturing_year: 2021,
    carOwner: 'MUGABE Fleury',
    color: 'dark-blue',
    cost: 50000
}

add(newCar);
update('RAE 897 F', 'model', 'CROSS COUNTRY');
updateMany(5, updateCar);
remove('RAC 567 K');
display();