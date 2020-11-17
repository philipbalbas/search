import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import fuse from "fuse.js";

import DropdownSelect from './DropdownSelect'
import './index.css'

const App = () => {
  const [selectedSchool, setSelectedSchool] = useState();

  const handleSearch = (value) => {
    setSelectedSchool(value)
  }

  useEffect(() => {
    const offersDiv = document.getElementById("offers")
    if (offersDiv) {
      offersDiv.innerHTML = ""
    }
    const script = document.createElement("script")
    script.async = true
    script.defer = true
    script.src = "https://api.lincx.com/ad"
    script.setAttribute("data-zone-id", "idaq0b")
    offersDiv?.appendChild(script)
    if (selectedSchool?.opeid) {
      script.setAttribute("data-opeid", selectedSchool.opeid)
    }
  }, [selectedSchool])

  return (
    <div className="container">
      <DropdownSelect setValue={handleSearch} value={selectedSchool} placeholder="Search for another school" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
