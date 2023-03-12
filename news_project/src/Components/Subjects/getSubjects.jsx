import React, { useEffect, useState } from "react";
import { GetSubjectsFromServer } from "../../Services/SubjectsFromDB";

import "../../Style/subjects.css";

export const GetSubjects = () => {
  const [Subjects, setSubjects] = useState([]);

  const HandleSubjects = async () => {
    let subs = await GetSubjectsFromServer();
    setSubjects(subs);
  };
  useEffect(() => {
    HandleSubjects();
  }, []);
  console.log(Subjects);
  return (
    <div className="subjects-container">
      {Subjects.length > 0 &&
        Subjects.map((s) => {
          return (
            <button className="btn btn-lg btn-primary btn-subject-size">
              {s.name}
            </button>
          );
        })}
    </div>
  );
};
