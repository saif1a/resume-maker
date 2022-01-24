import React, { createContext, useState, useEffect } from "react";

export const ResumeContext = createContext();

const ResumeContextProvider = (props) => {
  //If there is no data stored in localStorage, then use the default object.
  const [content, setContent] = useState(
    JSON.parse(localStorage.getItem("dataLocal")) || {
      header: {},
      professional: { desc1: ["", "", ""], desc2: ["", "", ""] },
      education: {},
      additional: [],
    }
  );


  //Used to "Right" components know when to use the original state or the fake one (for the "example")
  const [control] = useState(false);

  function updateHeaderData(data) {
    setContent({ ...content, header: data });
  }

  function updateProfessionalData(data) {
    setContent({ ...content, professional: data });
  }

  function updateEducationData(data) {
    setContent({ ...content, education: data });
  }

  function updateAdditionalData(data) {
    setContent({ ...content, additional: Object.values(data) }); //Converting the object to an Array in order to iterate in AdditionalSkillsP.js
  }

  
  useEffect(() => {
    localStorage.setItem("dataLocal", JSON.stringify(content));
  }, [content]);

  return (
    <ResumeContext.Provider
      value={{
        content,
        control,
        setContent,
        updateHeaderData,
        updateProfessionalData,
        updateEducationData,
        updateAdditionalData,
      }}
    >
      {props.children}
    </ResumeContext.Provider>
  );
};

export default ResumeContextProvider;
