const Moment = require('moment')


const getDuration = (fromTime) => {
    Moment.relativeTimeThreshold('m', 60)
    var duration = new Moment(fromTime).fromNow()
    return duration.substring(3, duration.length);
}


const isBeforeTodayEOD = (time) => {
    const now = new Moment();
    const todayEOD = new Moment().endOf('day');
    return new Moment(time).isBetween(now, todayEOD);
}


module.exports = {getDuration, isBeforeTodayEOD};