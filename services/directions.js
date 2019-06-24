const APIRouter = require("../utils/APIRouter");
class directions {
    constructor(routeID, direction) {
        this.routeID = routeID;
        this.direction = direction;
    }
    async getID() {
        try {
            //call API
            const APICaller = new APIRouter();
            const directions = await APICaller.call("Directions", this.routeID);


            //match direction
            var findDirection = directions.find(function (direction) {
                return direction.Text === this.direction;
            }, this);


            //if direction not found
            if(typeof findDirection == "undefined") {
                throw new Error('Route not found. Please try again.')
            }


            //return direction ID
            return findDirection.Value;
        }
        catch(error) {
            console.log(error);
        }
    }
}
module.exports = directions;