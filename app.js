//! UPmX11tOezXAYjD4
const mongoose = require("mongoose");

const { DB_HOST } = require("./config");

mongoose
  .connect(DB_HOST)
  .then(() => console.log("Database connect"))
  .catch((error) => {
    console.log(error.message);

    //! обработка ошибки подключения
    process.exit(1);
  });
