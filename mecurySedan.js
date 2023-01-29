//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")




class Car extends VehicleModule{
    constructor(make,model,year,color,mileage){
       super(make,model,year,color,mileage);   //super to add info to base class 
       this.maximumPassengers = 5;      //Max ocupancy of said car
       this.passenger = 0;              //number of occupants currently
       this.numberOfWheeels = 4;        //self explanied
       this.maximumSpeed = 160;         //car's max speed
       this.fuel = 10;                  //current gallons in car
       this.scheduleService = false;    //self explanitory
    }
    
    loadPassenger (num){
        if (num < this.maximumPassengers) {
            console.log(`${this.maximumPassengers - this.passenger} seats are available`)
            return true;
        } else {
            console.log("No more room")
            return false
        }

    }
    start() {
        if (this.fuel > 0) {
            console.log("engine rumbles")
            return this.start = true;
        } else {
            console.log("nothing happens")
            return this.start = false;
        }
    }
    scheduleService(mileage){
        if(mileage > 30000) {
            console.log("We've been trying to contact you about your car's extended warranty")
            this.scheduleService = true;
            return 
        }
    }

}

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "Blue", 50000);
v.start()
v.loadPassenger(3);
v.accelerate()
v.stop();
v.scheduleService(4526)
console.log(v.make)