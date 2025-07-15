// global import
const express = require("express");
const bodyPasrser = require("body-parser");
const path = require("path");

// local import
const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");

const app = express();
app.use(bodyPasrser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRouter);
app.use(shopRouter);

app.use((req, res, next) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, "views", "page-not-found.html"));
});

app.listen(5000);

// console.log("Hello world");
// const fs = require("fs");
// const http = require("http");
// // fs.writeFileSync("hello.txt", "Yeeeeeee i did it");

// const server = http.createServer((req, res) => {
//   const url = req.url;
//   if (url === "/") {
//     res.setHeader("Content-Type", "text/html");
//     res.write("<html>");
//     res.write("<head><title>Assignment 1</title></head>");
//     res.write(
//       '<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>'
//     );
//     res.write("</html>");
//     return res.end();
//   }
//   if (url === "/users") {
//     res.setHeader("Content-Type", "text/html");
//     res.write("<html>");
//     res.write("<head><title>Assignment 1</title></head>");
//     res.write("<body><ul><li>User 1</li><li>User 2</li></ul></body>");
//     res.write("</html>");
//     return res.end();
//   }
//   // Send a HTML response with some "Page not found text
//   if (url === "/create-user") {
//     const body = [];
//     req.on("data", (chunk) => {
//       body.push(chunk);
//     });
//     req.on("end", () => {
//       const parsedBody = Buffer.concat(body).toString();
//       console.log(parsedBody.split("=")[1]); // username=whatever-the-user-entered
//       const data = parsedBody.split("=")[1];
//       fs.writeFileSync("data.txt", data);
//     });
//     res.statusCode = 302;
//     res.setHeader("Location", "/");
//     res.end();
//   }
// });

// server.listen(3000);
