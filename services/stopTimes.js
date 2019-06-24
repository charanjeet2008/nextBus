const APIRouter = require("../utils/APIRouter");
class stopTimes {
    constructor(routeID, directionID, stopID) {
        this.routeID = routeID;
        this.directionID = directionID;
        this.stopID = stopID;
    }
    async getNextBuses() {
        try {
            //call API
            const APICaller = new APIRouter();
            return await APICaller.call(this.routeID, this.directionID, this.stopID);

        }
        catch(error) {
            console.log(error);
        }
    }
}
module.exports = stopTimes;