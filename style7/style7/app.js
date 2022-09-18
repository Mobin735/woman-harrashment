const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


const app = express();
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect('mongodb://localhost:27017/womenharassment')

const reportScama = new mongoose.Schema
    ({
        Name_of_Complainant: String,
        Address_of_Complainant: String,
        State_of_Complainant: String,
        district_of_Complainant: String,
        pincode_of_Complainant: Number,
        email_of_Complainant: String,
        mobileNo_of_Complainant: Number,
        sex_of_Complainant: String,
        // Details of Victim
        IsvictimComplen: String,
        Name_of_Victim: String,
        address_of_Victim: String,
        state_of_Victim: String,
        district_of_Victim: String,
        pincode_of_Victim: Number,
        email_of_Victim: String,
        mobileNo_of_Victim: Number,
        sex_of_Victim: String,
        DOB_of_Victim: Date,
        religion_of_Victim: String,
        caste_of_Victim: String,
        abled_of_Victim: String,
        Name_of_Respondent: String,
        address_of_Respondent: String,
        state_of_Respondent: String,
        district_of_Respondent: String,
        pincode_of_Respondent: Number,
        email_of_Respondent: String,
        mobileNo_of_Respondent: Number,
        sex_of_Respondent: String,
        // 4 Details of Complaint 
        department_of_the_respondent: String,
        Date_of_Incident: Date,
        pending_courtcase: String,
        case_number: Number,
        pending_womencourt: String,
        women_court_case_number: String,
        // 5 Insert complete details of the incident
        details_of_incident: String
    });

    const report = mongoose.model('report', reportScama);
app.get("/", function (req, res) {
    res.sendFile(__dirname + "index.html")
})

app.post("/", function (req, res) {

    console.log(req.body.Name_of_Complainant);
    const details = new report({
        Name_of_Complainant: req.body.Name_of_Complainant,
        Address_of_Complainant: req.body.Address_of_Complainant,
        State_of_Complainant: req.body.State_of_Complainant,
        district_of_Complainant: req.body.district_of_Complainant,
        pincode_of_Complainant: req.body.pincode_of_Complainant,
        email_of_Complainant: req.body.email_of_Complainant,
        mobileNo_of_Complainant: req.body.mobileNo_of_Complainant,
        sex_of_Complainant: req.body.sex_of_Complainant,
        // Details of Victim
        IsvictimComplen: req.body.IsvictimComplen,
        Name_of_Victim: req.body.Name_of_Victim,
        address_of_Victim: req.body.address_of_Victim,
        state_of_Victim: req.body.state_of_Victim,
        district_of_Victim: req.body.district_of_Victim,
        pincode_of_Victim: req.body.pincode_of_Victim,
        email_of_Victim: req.body.email_of_Victim,
        mobileNo_of_Victim: req.body.mobileNo_of_Victim,
        sex_of_Victim: req.body.sex_of_Victim,
        DOB_of_Victim: req.body.DOB_of_Victim,
        religion_of_Victim: req.body.religion_of_Victim,
        caste_of_Victim: req.body.caste_of_Victim,
        abled_of_Victim: req.body.abled_of_Victim,
        Name_of_Respondent: req.body.Name_of_Respondent,
        address_of_Respondent: req.body.address_of_Respondent,
        state_of_Respondent: req.body.state_of_Respondent,
        district_of_Respondent: req.body.district_of_Respondent,
        pincode_of_Respondent: req.body.pincode_of_Respondent,
        email_of_Respondent: req.body.email_of_Respondent,
        mobileNo_of_Respondent: req.body.mobileNo_of_Respondent,
        sex_of_Respondent: req.body.sex_of_Respondent,
        // 4 Details of Complaint 
        department_of_the_respondent: req.body.department_of_the_respondent,
        Date_of_Incident: req.body.Date_of_Incident,
        pending_courtcase: req.body.pending_courtcase,
        case_number: req.body.case_number,
        pending_womencourt: req.body.pending_womencourt,
        women_court_case_number: req.body.women_court_case_number,
        // 5 Insert complete details of the incident
        details_of_incident: req.body.details_of_incident
    });

    details.save();

    res.redirect("/");

})


app.listen(3000, function () {
    console.log("listening on port 3000!");
})