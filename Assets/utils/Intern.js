const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, email, school, id) {
        super(name, email, id)
        this.title = 'Intern';
        this.school = school;
    }

    getRole() {
        //returns title of 'Intern'
        return this.title;
    }

    getSchool() {
        //returns intern's school
        return this.school;
    }

    //makes HTML for intern card
    makeHTML() {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-body intern-card">
            <h5 class="card-title">Name: ${this.getName()}</h5>
            <p class="card-text">Title: ${this.title}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Employee ID: ${this.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
            <li class="list-group-item">School: ${this.school}</li>
        </ul>
        </div>`
    }
}

// const int1 = new Intern('Plop', 'Miller', 'Lackawana College')
// console.log(int1);

module.exports = Intern