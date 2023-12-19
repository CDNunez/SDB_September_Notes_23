function logTime(req, res, next) {
    // console.log(req);

    let date = new Date();
    let time = date.getTime();
    const minute = 1000 * 60;
    const hour = minute * 60;
    let hours = Math.round(time / hour);
    let minutes = Math.round(time / minute);
    req.datePosted = date.toLocaleDateString();

    console.log(`DatePosted: `, req.datePosted);
    console.log(time);
    next();
}



module.exports = {
    logTime: logTime,
}