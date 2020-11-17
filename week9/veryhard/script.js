function run() {
    console.log('This exersise is running');
}

function fetchJob() {
    console.log (this.name + " " + "is a " +  this.job);
}


function person (name, job, age) {
    this.name = "Brian";
    this.job = "Coder";
    this.age = 25;
    run();
    fetchJob();
}

person();

function Programmer(name, job, age, languages) {
    this.name = "Brian"
    this.job = "Coder";
    this.age = 25;
    this.languages = ("English", "Spanish")
}

Programmer();
console.log (Programmer[0, 1, 2, 3])