const APIRouter = require("../utils/APIRouter");
class routes {
    constructor(route) {
        this.route = route;
    }
    async getID() {
        try {
            //call API
            const APICaller = new APIRouter();
            const routes = await APICaller.call("Routes");


            //match route
            var findRoute = routes.find(function (route) {
                return route.Description === this.route
            }, this);


            //if not found
            if(typeof findRoute == "undefined") {
                throw new Error('ROUTE_NOT_FOUND')
            }


            //return found route
            return findRoute.Route;
        }
        catch(error) {
            console.log(error);
        }
    }
}
module.exports = routes;