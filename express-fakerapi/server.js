const express = require("express");
const faker = require("faker");
const app = express();
const port = 8000;


app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});

class User {
    constructor(){
        this._id = faker.datatype.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
class Company {
    constructor(){
        this._id = faker.datatype.number();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

app.get("/api/users/new", (req, res) => {
        res.json(new User() );
});

app.get("/api/companies/new", (req, res) => {
        res.json(new Company() );
});


app.get("/api/user/company", (req, res) => {
        res.json([new Company(), new User()]);

});



// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );