function timeStamp (req,res,next) {
    
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const time = `${hour}:${minute}`;
    // req.timeStamp = date.toLocaleDateString([],{hour: '2-digit', minute:"2-digit"});
    req.timeStamp = time;
    console.log(req.timeStamp);
    next();
    
}

module.exports = {//exporting as object for if in future more functions are made and need to be exported
    timeStamp: timeStamp,
}