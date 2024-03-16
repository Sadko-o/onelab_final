import { useSelector } from "react-redux";
//import { useDispatch } from "react-redux";
//import { useNavigate } from "react-router-dom";
import { useState } from "react";
//import { addPage } from "../actions/Action";

export default function Home(){
    const pages = useSelector((state) => state.pages);
    //const dispatch = useDispatch();
    //const navigateTo = useNavigate();

    const [company, setCompany] = useState("")
    const [location, setLocation] = useState("")
    const [experience, setExperience] = useState("")
    const [annualSalary, setAnnualSalary] = useState("")
    const [date, setDate] = useState("")
    const [specialization, setSpecialization] = useState("")
    
    const handleCompanyChange = (event) => {
        setCompany(event.target.value);
    }
    const handleLoctionChange = (event) => {
        setLocation(event.target.value);
    }
    const handleExperienceChange = (event) => {
        setExperience(event.target.value);
    }
    const handleAnnualSalaryChange = (event) => {
        setAnnualSalary(event.target.value);
    }
    const handleDateChange = (event) => {
        setDate(event.target.value);
    }
    const handleSpecializationChange = (event) => {
        setSpecialization(event.target.value);
    }
    return (
        <div className="navigation-menu">
            <div className="table-menu">
                <input value={company} onChange={handleCompanyChange} type="text" name="company" placeholder="Company Name" className="myInputs"/>
                <input value={location} onChange={handleLoctionChange} type="text" name="location" placeholder="Location" className="myInputs"/>
                <input value={experience} onChange={handleExperienceChange} type="text" name="experience" placeholder="Experience" className="myInputs"/>
                <input value={annualSalary} onChange={handleAnnualSalaryChange} type="text" name="annualSalary" placeholder="Annual Salary" className="myInputs"/>
                <input value={date} onChange={handleDateChange} type="text" name="date" placeholder="Date" className="myInputs"/>
                <input value={specialization} onChange={handleSpecializationChange} type="text" name="specialization" placeholder="Specialization" className="myInputs"/>
                <table>
                    <tr>  
                        <td className="columns">Company</td>
                        <td className="columns">Location</td>
                        <td className="columns">Experience</td>
                        <td className="columns">Annual Salary</td>
                        <td className="columns">Date</td>
                        <td className="columns">Specialization</td>
                    </tr>
                </table>
                <div class="scroll">
                    {pages?.map((pages) => (
                        <p key={pages.company} className="person">
                            <p>{pages.location}</p>
                            <p>{pages.experience}</p>
                            <p>{pages.annualSalary}</p>
                            <p>{pages.date}</p>
                            <p>{pages.specialization}</p>
                            </p>
                            )
                    )}
                </div>
            </div>
        </div>
    );
}