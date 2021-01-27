const sequelize = require("./sequelize");

module.exports = {
  retries: 0,

  connect(action = "Trying") {
    console.log(`${action} to connect to database.`);
    return sequelize
      .authenticate()
      .then((_msg) => {
        console.log("Database Connection Established Successfully");
        return _msg;
      })
      .catch((_err) => {
        console.log("Databse connection refused...");
        if (this.retries < 3) {
          console.log("Retry connecting database in 10 seconds again.");
          return new Promise(() =>
            setInterval(() => {
              this.retries += 1;
              return this.connect("Retrying");
            }, 10000)
          );
        }
      });
  },
};
