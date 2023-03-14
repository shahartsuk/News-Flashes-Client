
import React, { useEffect, useState } from "react";
import { GetSubjectsFromServer } from "../../Services/SubjectsFromDB";

import "../../Style/subjects.css";

export const GetSubjects = () => {
  const [Subjects, setSubjects] = useState([]);
  const [checkedList, setCheckedList] = useState([]);
  const HandleSubjects = async () => {
    let subs = await GetSubjectsFromServer();
    setSubjects(subs);
  };
  const handleSelect = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    console.log("value:",value);
    console.log(isChecked);


    if (isChecked) {
      //Add checked item into checkList
      setCheckedList([...checkedList, value]);
    } else {
      //Remove unchecked item from checkList
      const filteredList = checkedList.filter((item) => item !== value);
      setCheckedList(filteredList);
    }
  };
  useEffect(() => {
    HandleSubjects();
  }, []);
  console.log(Subjects);
  console.log(checkedList);
  return (
    <div>
    <div  className="subjects-container" >
      {Subjects.length > 0 &&
        Subjects.map((s) => {
          return (
                  <div className="card" >
                  <div key={s.id} className="card-body">
                    <h5 className="card-title">{s.name}</h5>
                    <input
                      type="checkbox"
                      value={s.name}
                      onChange={(event)=>handleSelect(event)}
                    />
                  </div>
              </div>
          );
        })}
        <button className="btn btn-secondary" disabled={checkedList.length>3 || checkedList.length<=0 } >Save</button>
        </div>
    </div>
  );
};
