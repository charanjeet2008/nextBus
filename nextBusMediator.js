const routesAPI = require("./services/routes");
const directionsAPI = require("./services/directions");
const stopsAPI = require("./services/stops");
const stopTimesAPI = require("./services/stopTimes");
const dateOperations = require("./utils/dateOperations");
const {isNonEmptyArray} = require("./utils/validations");

class nextBusMediator {
    constructor(route, stop, direction ) {
        this.route = route;
        this.stop = stop;
        this.direction = direction;
    }


    async getTimeForNextBus() {
        try {
            //get route
            const routeService = new routesAPI(this.route);
            const routeID = await routeService.getID();


            //get direction
            const directionService = new directionsAPI(routeID, this.direction);
            const directionID = await directionService.getID();


            //get stop
            const stopService = new stopsAPI(routeID, directionID, this.stop);
            const stopID = await stopService.getID();


            //get next buses
            const stopTimesService = new stopTimesAPI(routeID, directionID, stopID)
            const nextBuses = await stopTimesService.getNextBuses();

            if(!isNonEmptyArray(nextBuses)) {
                throw new Error('NO_BUS_FOUND');
            }


            //compute duration
            const nextBus = nextBuses[0];
            if(nextBus.Actual) {
                return nextBus.DepartureText;
            }
            else {
                if(!dateOperations.isBeforeTodayEOD(nextBus.DepartureTime))
                    throw new Error('NO_BUS_TODAY');


                return dateOperations.getDuration(nextBus.DepartureTime);
            }


        }
        catch(error) {
            console.log(error);
        }
    }
}
module.exports = nextBusMediator;