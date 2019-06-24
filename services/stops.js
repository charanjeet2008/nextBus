const APIRouter = require("../utils/APIRouter");
class stops {
    constructor(routeID, directionID, stop) {
        this.routeID = routeID;
        this.directionID = directionID;
        this.stop = stop;
    }
    async getID() {
        try {
            //call API
            const APICaller = new APIRouter();
            const stops = await APICaller.call("Stops", this.routeID, this.directionID);


            //match stop
            var findStop = stops.find(function (stop) {
                return stop.Text === this.stop;
            }, this);


            //if match not found
            if(typeof findStop == "undefined") {
                throw new Error('STOP_NOT_FOUND')
            }


            //return stop ID
            return findStop.Value;
        }
        catch(error) {
            console.log(error);
        }
    }
}
module.exports = stops;