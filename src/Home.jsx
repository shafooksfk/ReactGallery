import React, { useState } from 'react';
import Activities from './Components/Activities';
import Academics from './Components/Academics';
import Campus from './Components/Campus';


export default function Home() {
    const [showAcademics, setshowAcademics] = useState(true);
    const [showActivities, setshowActivities] = useState(false);
    const [showCampus, setshowCampus] = useState(false);
    function showComponents(name) {
        switch (name) {
            case "Activities":
                setshowActivities(true);
                setshowAcademics(false);
                setshowCampus(false);
                break;
            case "Academics":
                setshowActivities(false);
                setshowAcademics(true);
                setshowCampus(false);
                break;
            case "Campus":
                setshowActivities(false);
                setshowAcademics(false);
                setshowCampus(true);
                break;
            default:
                break;
        }
    }
    var state = {
        Academics: true,
        Activities: false,
        Campus: false
    }
    const [styling1, setstyling1] = useState(state);
    function setActive(val) {
        switch (val) {
            case "Academics":
                setstyling1({ ...styling1, Academics: true, Activities: false, Campus: false });
                break;

            case "Activities":
                setstyling1({ ...styling1, Academics: false, Activities: true, Campus: false });
                break;
            case "Campus":
                setstyling1({ ...styling1, Academics: false, Activities: false, Campus: true });
                break;
            default:
                break;
        }
    }
    return (
        <>

            <div className="galleryButtons">
                <button type="button" id="button" value="button" className={`buttonclass ${styling1.Academics ? " active" : ""}`} onClick={() => { showComponents("Academics"); setActive("Academics") }}>Academics</button>
                <button type="button" id="button2" value="button" className={`buttonclass ${styling1.Activities ? " active" : ""}`} onClick={() => {
                    showComponents("Activities"); setActive("Activities")
                }}>Activities</button>
                <button type="button" id="button3" value="button" className={`buttonclass ${styling1.Campus ? " active" : ""}`} onClick={() => {
                    showComponents("Campus"); setActive("Campus")
                }}>Campus</button>

            </div>
            <div className="container">

                {showAcademics && <Academics />}
                {showActivities && <Activities />}
                {showCampus && <Campus />}
            </div>
        </>
    )
}
