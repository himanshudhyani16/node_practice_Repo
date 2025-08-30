const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");

const app = express();
const PORT = 8001;

app.use(express.urlencoded({ extended: false }));

//routes
app.get("/users", (req, res) => {
  const html = `<ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>`;

  res.send(html);
});
// REST API
app.get("/api/users", (req, res) => {
  return res.json(users);
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id == id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.json(user);
  })
  .patch((req, res) => {
    const body = req.body;
    const id = Number(req.params.id);
    const user = users.find((user) => user.id == id);
    const index = users.findIndex((user) => user.id === id);

    if (index === -1) {
      return res.status(404).json({ error: "User not found" });
    }
    // merge old user with updates
    const updatedUser = { ...users[index], ...body };
    // console.log("req.body", updatedUser);
    users[index] = updatedUser; // replace in array
    // Object.assign(user, req.body);
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (error, result) => {
      return res.json({
        status: "success",
        message: "User updated successfully",
        updatedUser,
      });
    });
  })
  .delete((req, res) => {
    const id = Number(req.params.id);
    const index = users.findIndex((user) => user.id == id);
    if (index === -1) {
      return res.status(404).json({ error: "User not found" });
    }
    users.splice(index, 1);
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (error, result) => {
      return res.json({
        status: "success",
        message: "User deleted successfully",
        id: id,
      });
    });
  });

app.post("/api/users", (req, res) => {
  const newUser = req.body;
  console.log("USer:->", newUser);
  users.push({
    ...newUser,
    id: users.length + 1,
  });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (error, result) => {
    return res.json({
      status: "Success",
      id: users.length,
    });
  });
});

app.listen(PORT, () => console.log(`Server Working On PORT : ${PORT}`));
