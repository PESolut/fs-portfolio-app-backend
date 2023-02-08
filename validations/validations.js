exports.defaultDateTime = (req, res, next) => {

    // Automatically set the date and time
    req.body.date = new Date().toISOString().slice(0, 10);
    req.body.time = new Date().toLocaleTimeString();
  
    next();
  };
  