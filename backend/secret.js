const secrets = {
  //dbUri: "mongodb://jelo:a9bc839993@ds151382.mlab.com:51382/jelotest"
    dbUri:  "mongodb+srv://Learn:Learn@cluster0.joyik.mongodb.net/test"
};

const getSecret = key => secrets[key];

module.exports = getSecret;
