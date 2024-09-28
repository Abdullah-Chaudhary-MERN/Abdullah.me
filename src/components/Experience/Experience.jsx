import React, { useContext, useEffect, useState } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // State variables to store the counting numbers
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [companies, setCompanies] = useState(0);

  // Counting animation effect
  useEffect(() => {
    // Function to handle the counting logic
    const countUp = (endValue, setState, duration) => {
      let startValue = 0;
      const increment = endValue / (duration / 10); // Determines the speed
      const timer = setInterval(() => {
        startValue += increment;
        if (startValue >= endValue) {
          setState(endValue);
          clearInterval(timer);
        } else {
          setState(Math.round(startValue));
        }
      }, 10); // Interval every 10ms
    };

    // Function to start counting
    const startCounting = () => {
      setYears(0);
      setProjects(0);
      setCompanies(0);
      
      countUp(1, setYears, 1000);    // 1 year over 1 second
      countUp(20, setProjects, 2000); // 20 projects over 2 seconds
      countUp(2, setCompanies, 1500); // 2 companies over 1.5 seconds
    };

    startCounting(); // Start counting immediately when the component mounts

    // Set an interval to auto-restart counting every 10 seconds
    const interval = setInterval(() => {
      startCounting(); // Restart counting after 10 seconds
    }, 5000); // 10 seconds interval

    return () => clearInterval(interval); // Cleanup the interval on unmount

  }, []); // Runs only once when the component mounts

  return (
    <div className="experience" id="experience">
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{ color: darkMode ? "var(--orange)" : "" }}>
          {years}+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>years</span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{ color: darkMode ? "var(--orange)" : "" }}>
          {projects}+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>completed</span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{ color: darkMode ? "var(--orange)" : "" }}>
          {companies}+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>companies</span>
        <span>Work</span>
      </div>
    </div>
  );
};

export default Experience;
