class EmployeePayrollData{

    get id() { return this._id;}
    set id(id) {
        this._id = id;
    }

    get name() { return this._name;}
    set name(name){
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$')
        if(nameRegex.test(name))
            this._name = name;
        else throw 'Name is incorrect';
    }

    get profilePic(){ return this._profilePic;}
    set profilePic(profilePic){
        this._profilePic = profilePic;
    }

    get gender(){ return this._gender;}
    set gender(gender){
        this._gender = gender;
    }

    get department(){ return this._department;}
    set department(department){
        this._department = department;
    }

    get salary(){return this._salary;}
    set salary(salary){
        this._salary = salary;
    }

    set note(){return this._note;}
    get note(note){
        this._note = note;
    }

    get startDate() { return this._startDate; }
    set startDate(startDate) {
        let currentDate = new Date();
        var diff = Math.abs(currentDate.getTime())-Math.abs(startDate.getTime());
        if (startDate>currentDate) {
            throw 'Start date is a future date!';
        } else if(diff/(1000*24*60*60) > 30) {
            throw 'Start date is beyond 30 days';
        }else{
            this._startDate = startDate;
        }
    }
    // method
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate == undefined ? "undefined" :
            this.startDate.toLocaleDateString("en-US", options);
        return "id = " + this.id + ", name = " + this.name +
            ", gender = " + this.gender + ", profilePic = " + this.profilePic +
            ", department=" + this.department + ", salary = " + this.salary +
            ", startDate = " + empDate + ", note=" + this.note;
    }
}