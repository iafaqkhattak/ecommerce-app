//creating token and saving in cookie

const sendToken = (user, statusCode, res) => {
  const token = user.getJWTTOKEN();

  //OPTIONS FOR COOKIE

  const options = {
    expire: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
};

module.exports = sendToken;
