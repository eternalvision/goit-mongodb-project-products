//! UPmX11tOezXAYjD4
const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://Sasha:UPmX11tOezXAYjD4@cluster0.eclt4.mongodb.net/online_shop?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => console.log("Database connect"))
  .catch((error) => {
    console.log(error.message);

    //! обработка ошибки подключения
    process.exit(1);
  });
