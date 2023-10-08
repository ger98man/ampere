const request = require("supertest");
const app = require("../srv/server.js");

const RESPONSE_EXAMPLE = [
  {
    name: "Person_3",
    employedAt: "Company_1",
  },
  {
    name: "Person_7",
    employedAt: "Company_1",
  },
  {
    name: "Person_1",
    employedAt: "Company_3",
  },
  {
    name: "Person_2",
    employedAt: "Company_3",
  },
  {
    name: "Person_5",
    employedAt: "Company_4",
  },
];

describe("Employee API", () => {
  it('should return "Working..." when hitting the / endpoint', async () => {
    const response = await request(app).get("/health");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Working...");
  });

  it("should return a 404 status when hitting an undefined route", async () => {
    const response = await request(app).get("/nonexistent-route");
    expect(response.status).toBe(404);
  });

  it("should return an array of employeed people", async () => {
    const response = await request(app).get("/employed-people");
    expect(response.text).toBe(JSON.stringify(RESPONSE_EXAMPLE));
  });
});
