const isEmptyString = (data) => {
    try {
        //is undefined
        if (typeof data == "undefined") return false;

        //is blank
        if (data.trim() === "") return false;

        //is valid
        return true;


    } catch (error) {
        console.log(error);
    }

}


const isNonEmptyValidString = (data) => {
    try {
        //is empty
        if (!isEmptyString(data)) return false;


        //match regex
        const regex = '^[1-9A-Za-z\\s&-]+$';
        return data.match(regex);


    } catch (error) {
        console.log(error);
    }
}


const isNonEmptyArray = (data) => {
    //is undefined
    if (typeof data == "undefined") return false;


    //is not an array
    if(!Array.isArray(data)) return false;


    //if empty
    if((data.length < 1)) return false;


    return true;

}


module.exports = {isEmpty: isEmptyString, isNonEmptyValidString, isNonEmptyArray}