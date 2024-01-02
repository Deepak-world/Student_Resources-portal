const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
require("./db/conn");
const Register = require("./models/registers");
const bodyparser = require("body-parser");
// const { log } = require("console");
// const { send } = require("process");

const port = process.env.PORT || 3000; // Use uppercase "PORT"
const static_path = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", templates_path);
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req,res) =>{
  res.render("login")
});   
app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/task", (req, res) => {
  res.render("task");
});

app.post("/register", async (req, res) => {
  try {
    const password = req.body.password;
    const cpassword = req.body.confirmPassword; // Correct the field name
    console.log(req.body.password);
    if (password === cpassword) {
     

      const registerStudent = new Register({
        fullName: req.body.fullName,
        username: req.body.username,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        RegdNumber: req.body.RegdNumber,
        gender: req.body.gender,
        Password: req.body.password, // Correct the field name
        confirmPassword: req.body.confirmPassword


      });
        console.log("The Success part" + registerStudent);
      // const token = await registerStudent.generateAuthToken();
      
      const Registered = await registerStudent.save();
        // const Registered= await registerStudent.insert(registerStudent);

      // The res.cookie() function is use to set the cookie name to value.
      //The value parameter may be a string or object converted to JSON.
      // res.cookie("jwt", token);
      // console.log("cookies :", cookie);

      res.status(201).render("index"); // Correct the route name

    } else {
      res.send("Password is not matching");
    }

  } catch (error) {
    res.status(400).send(error);
  }
});

//login check
app.post("/login", async (req, res) => {
  try {
    const Email = req.body.email;
    const Password = req.body.password;
    const user = await Register.findOne({ email: Email }); // Ensure that 'email' matches your database field name
    if (user) {
      // User found, you can compare passwords or perform login logic here
      res.status(201).render("index");
    } else {
      res.status(400).send("Invalid Email or Password");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});


app.listen(port, () => {
  console.log(`Server is running at port no ${port}`);
});
