import { createContext, useState } from "react";

export const TutorsContext = createContext();

export const TutorsProvider = ({ children }) => {
  const [tutors, setTutors] = useState([]);

  const addTutor = (tutor) => {
    setTutors((prevTutors) => [...prevTutors, tutor]);
  };

  return (
    <TutorsContext.Provider value={{ tutors, addTutor }}>
      {children}
    </TutorsContext.Provider>
  );
};