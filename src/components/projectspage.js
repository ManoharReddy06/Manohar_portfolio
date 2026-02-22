import React from "react";
import "../styles/projectspage.css";
import { motion } from "framer-motion";

export default function Project() {
    const route = (link) => {
        window.location.href = link;
    };

    return (
        <div className="projectDiv" id="projects">
            <motion.div className="projectText" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "linear" }}>
                <div className="projectTop">
                    <p>MY PROJECTS</p>
                </div>
                <div className="projectHead">
                    <p>My Expertise</p>
                </div>
            </motion.div>
            <div className="projectBox">
                <motion.div className="project" onClick={() => route("https://github.com/ManoharReddy06/HospitalManagement-main")} initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "linear" }}>
                    <div className="projectTitle">
                        <div className="projectLogo">
                            <img src="https://uploads-ssl.webflow.com/5f067b661807eb95a36fe56a/5f067b661807eb9b426fe5ac_Development.svg" alt="logo" />
                        </div>
                        <div className="projectName">
                            <p>Doctor Appointment Management System</p>
                        </div>
                    </div>
                    <div className="projectInfo">
                        <p>Online Doctor Appointment & Management System using Django (MVT) and MySQL with features like real-time doctor discovery, secure appointment booking, authentication, protected dashboards, availability tracking, prevention of double bookings, and responsive interface for seamless healthcare management.</p>
                    </div>
                </motion.div>
                <motion.div className="project" onClick={() => route("https://github.com/ManoharReddy06/Gym_Management_System")} initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "linear" }}>
                    <div className="projectTitle">
                        <div className="projectLogo">
                            <img src="https://uploads-ssl.webflow.com/5f067b661807eb95a36fe56a/5f067b661807eb9b426fe5ac_Development.svg" alt="logo" />
                        </div>
                        <div className="projectName">
                            <p>Gym Management System</p>
                        </div>
                    </div>
                    <div className="projectInfo">
                        <p>Multi-User Gym Management Platform with role-based dashboards for Admin, Trainer, and Member, featuring progress tracking, workout scheduling, equipment inventory management, automated scheduling, optimized relational database design, fast query performance, and scalable backend workflows supporting 100+ users.</p>
                    </div>
                </motion.div>
                <motion.div className="project" onClick={() => route("")} initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "linear" }}>
                    <div className="projectTitle">
                        <div className="projectLogo">
                            <img src="https://uploads-ssl.webflow.com/5f067b661807eb95a36fe56a/5f067b661807eb9b426fe5ac_Development.svg" alt="logo" />
                        </div>
                        <div className="projectName">
                            <p>Housing Rental Site</p>
                        </div>
                    </div>
                    <div className="projectInfo">
                        <p>Housing Rental Site using React by focusing on frontend part with responsive to different screen sizes.It shows the proficiency in React and styling the pages.</p>
                    </div>
                </motion.div>
                <motion.div className="project" onClick={() => route("")} initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "linear" }}>
                    <div className="projectTitle">
                        <div className="projectLogo">
                            <img src="https://uploads-ssl.webflow.com/5f067b661807eb95a36fe56a/5f067b661807eb9b426fe5ac_Development.svg" alt="logo" />
                        </div>
                        <div className="projectName">
                            <p>Online File Store</p>
                        </div>
                    </div>
                    <div className="projectInfo">
                        <p>It's an Online File Storage with Dajngo and Some Styling.Which is mainly focusing on Backend functionalites.It helps the users to store the files online with user authentiaction.</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};