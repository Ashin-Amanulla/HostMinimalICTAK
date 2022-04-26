const mongoose = require("mongoose");

mongoose
  .connect('mongodb+srv://userone:userone@cluster0.vcc0q.mongodb.net/MinimalICTAK?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((error) => {
    console.log(error.message);
  });



mongoose.connection.on("connected", () => {
  console.log("Mongoose connected to DB " );
});

mongoose.connection.on("error", (err) => {
  console.log(err.message);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose connection is disconnected");
});

process.on("SIGINT", async () => {
  await mongoose.connection.close();
  process.exit(0);
});