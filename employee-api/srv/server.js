const express = require("express");
const PEOPLE = require("../data/people");
const COMPANIES = require("../data/companies");

const app = express();
const port = 3000;

app.get("/health", (_req, res) => {
  res.send("Working...");
});

app.get("/employed-people", (_req, res) => {
  const companyMap = new Map();
  COMPANIES.forEach((company) => {
    companyMap.set(company.id, company.name);
  });

  const employedPeople = PEOPLE.filter((person) => person.employedAtId !== null)
    .map((person) => ({
      name: person.name,
      employedAt: companyMap.get(person.employedAtId),
    }))
    .sort((a, b) => a.employedAt.localeCompare(b.employedAt));

  res.json(employedPeople);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

module.exports = app;
