const {carDatabase} = require("../carDatabase/cardb");

//function to add a car in the system

const add = (car) => {
car.plate_number = carDatabase.length+1;
carDatabase.push(car);

console.log("The car has been successfully added-----------\n");
console.log(carDatabase);
}


//function to update car information in the system

const update = (plate_number, key, value) => {
    available = carDatabase.find(element=>element.plate_number===plate_number);
    // console.log(available);

    if (!available) {
        console.log("no car with that plate number");
        
    }else{
        available[key] = value;

        console.log("The car information has successfully been updated-----------\n");
        console.log(available); 
    }
    

}


const updateMany = (plate_number, car) => {
available = carDatabase.filter(element=>element.plate_number===plate_number);

    if (!available) {
        console.log("no car with that plate number");
        
    }else{
        for (const key in car) {
            available[key]=car[key];
           
        }

        console.log("The car information has been updated successfully----------------------\n");
        console.log(available);
        
    }

}

const remove = (plate_number) => {
    const remains = [];
    available = carDatabase.find(element=>element.plate_number===plate_number);

    if (!available) {
        console.log("no car with such plate number exists");
        
    }else{
       const remains = carDatabase.filter(element=>element.plate_number!==plate_number);
        console.log("The car has been successfully removed from the system-----------------------\n");
        console.log(remains);
    }
}

const display = () =>{
    console.log("Displaying all cars in the system------------------\n");
    console.log(carDatabase);
}















module.exports = {
    add,
    update,
    updateMany,
    remove,
    display
}