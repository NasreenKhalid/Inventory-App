const mongoose = require("mongoose");
const fastify = require("fastify")();
const routes = require("./routes");
const path = require("path");
const { MONGO_ATLAS_PW } = require("dotenv").config();

const DistPath = path.join(__dirname, "..", "dist");

fastify.register(require("fastify-static"), {
  root: DistPath
});

//connect to mongodb atlas
mongoose
  .connect(
    `mongodb+srv://test:test@cluster0-0ln31.mongodb.net/test?retryWrites=true&w=majority`,
    { useFindAndModify: false, useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB connected"))
  .catch(e => console.log("MongoDB could not be connected due to ", e));

//handles GET / request
fastify.get("/", async (request, reply) => {
  try {
    reply.sendFile("index.html");
  } catch (e) {
    console.log(e);
  }
});

//iterating over all the routes and registering them with fastify
routes.forEach(route => fastify.route(route));

//launching server at port : 3000 in local environment
fastify.listen(process.env.PORT || 3000, "0.0.0.0", err => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`server running at ${fastify.server.address().port}`);
});
