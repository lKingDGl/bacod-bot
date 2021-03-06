module.exports.rawBodyMiddleware = async (req, res, next) => {
  try {
    console.log('Parsing raw body...');
    let data = "";
    req.on('data', function(chunk){ data += chunk})
    req.on('end', function(){
      console.log(`Raw body: ${data}`);
      req.rawBody = data;
      next();
    });
  } catch (err) {
    next(err);
  }
};