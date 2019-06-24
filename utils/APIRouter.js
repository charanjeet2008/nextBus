const fetch = require('node-fetch')
const DOMAIN_NAME = "https://svc.metrotransit.org/";
const SERVICE_NAME = "NexTrip/";

class APIRouter {
    constructor() {
    }
    async call(module, ...parameters) {
        try {
            //aggregate parameters
            let queryArguments = "";
            if(parameters.length > 0) {
                queryArguments = "/";
                queryArguments += parameters.join("/");
            }


            //fetch url
            const url = DOMAIN_NAME + SERVICE_NAME + module + queryArguments + '?format=json';
            const response = await fetch(url);
            return await response.json();
        }
        catch(error) {
            console.log(error);
        }

    }
}
module.exports = APIRouter;