const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");
const { User } = require("./models");

const secret = 'vincent';

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
app.post("/register", async (req, res) => {
  const users = await User.find({ email: req.body.email });
  if (users.length != 0) {
    return res.status(400).json({
      error: "user email already exists",
    });
  }
  const _user = new User(req.body);
  _user.save((error, result) => {
    if (error) {
      return res.status(400).json(error);
    }
    return res.status(200).json({});
  });
});
app.post("/login", async (req, res) => {
  const users = await User.find({
    username: req.body.username,
    password: req.body.password,
  });
  if (users.length == 0) {
    return res.status(400).json({ error: "username or password incorrect" });
  }
  const token = jwt.sign({ username: req.body.username }, secret);
  return res.status(200).json({
    token,
  });
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);
