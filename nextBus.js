const nextBusMediator = require("./nextBusMediator");
const {isNonEmptyValidString} = require("./utils/validations");

//read input
var route = process.argv[2];
var stop = process.argv[3];
var direction = process.argv[4];


const nextBus = async (route, stop, direction) => {
    try {
        //validate route
        if (!isNonEmptyValidString(route))
            throw new Error('INVALID_ROUTE');


        //validate stop
        if (!isNonEmptyValidString(stop))
            throw new Error('INVALID_STOP');


        //validate direction
        if (!isNonEmptyValidString(direction))
            throw new Error('INVALID_DIRECTION');


        //call mediator
        const mediator = new nextBusMediator(route, stop, direction);
        const time = await mediator.getTimeForNextBus();


        //render output
        console.log(time);
    }
    catch(error) {
        console.log(error)
    }

}
nextBus(route, stop, direction);