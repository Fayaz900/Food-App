const { connectMongoDb } = require("./Db/connectDb"); 
const { app } = require("./app");

process.on("uncaughtException", (err) => {
    console.log(
      `Server shutting down due to unhandled exceptional error: ${err.message}`
    );
    process.exit(0);
  });

  process.on("unhandledRejection", (err) => {
    console.log(
      `Server shutting down due to unHandled promise Rejection error: ${err.message}`
    );
    process.exit(0);
  });

  const createServer = async () => {
    //connection to mongoDb
    await connectMongoDb();
    const port = process.env.PORT;
    const server = app.listen(port, () => {
      console.log(`Server running at Port : ${port}`);
    });
  };
  
  createServer();