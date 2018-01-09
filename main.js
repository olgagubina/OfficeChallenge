//write your code here to make the tests pass
var Office = function () {
    this.documents = [];
    this.managers = [];
    this.cleaners = [];
}

var Document = function(name) {
    this.employeeName = name;
}

var Cleaner = function(name){
    this.name = name;
}

var Manager = function (name){
    this.name = name;
    this.employees = [];
}

var Employee = function (name) {
    this.name = name;
}

Office.prototype.hireCleaner = function(name) {
    var newCleaner = new Cleaner(name);
    this.cleaners.push(newCleaner);
}

Office.prototype.hireManager = function(name) {
    var newManager = new Manager(name);
    this.managers.push(newManager);
}

Manager.prototype.hireEmployee = function(name) {
    var newEmployee = new Employee(name);
    this.employees.push(newEmployee);
}

Manager.prototype.askEmployeesToWork = function(officeName) {
    for (var i=0; i < this.employees.length; i++){
        this.employees[i].work(officeName);
    }
}

Employee.prototype.work = function(officeName) {
    var employeeName = this.name;
    for (var i=0; i<10; i++) {
        var newDocument = new Document(employeeName);
        officeName.documents.push(newDocument);
    }
}

Cleaner.prototype.clean = function() {
    console.log("Clean");
}

Office.prototype.startWorkDay= function() {
    debugger;
    for (var i=0; i<this.managers.length; i++) {
        this.managers[i].askEmployeesToWork(this);
    }
    for (var i=0; i<this.cleaners.length; i++) {
        this.cleaners[i].clean();
    }
}

