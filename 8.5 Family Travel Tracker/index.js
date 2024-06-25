//importing depeendencies checked 
import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
//defining the constant checked 
const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "manashama_24",
  port: 5432,
});
//connecting to the database checked 
db.connect();
//defining the middlewares checked 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
//defining the current user id and user need to changed for stroing in db 
let currentUserId = 1;

let users = [
  { id: 1, name: "Angela", color: "teal" },
  { id: 2, name: "Jack", color: "powderblue" },
];
//defining the function for checking the visited countries  checked 
async function checkVisisted() {
  const result = await db.query("SELECT country_code FROM visited_countries");
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}
//using the get route 
app.get("/", async (req, res) => {
  const countries = await checkVisisted();
  console.log(countries);
  console.log(countries.length);
  console.log(users);


  res.render("index.ejs", {
    countries: countries,
    total: countries.length,
    users: users,
    color: "teal",
  });
});
//adding another country error not found yet
app.post("/add", async (req, res) => {
  const input = req.body["country"];
  console.log(input);

  try {
    const result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
      [input.toLowerCase()]
    );

    const data = result.rows[0];
    const countryCode = data.country_code;
    try {
      await db.query(
        "INSERT INTO visited_countries (country_code) VALUES ($1)",
        [countryCode]
      );
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
});
//adding another user
app.post("/user", async (req, res) => {});

app.post("/new", async (req, res) => {
  //Hint: The RETURNING keyword can return the data that was inserted.
  //https://www.postgresql.org/docs/current/dml-returning.html
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
