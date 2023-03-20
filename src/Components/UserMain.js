
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import {
    allUserAction,
    femaleUserAction,
    maleUserAction,
  } from "./store/Actions";

const UserMain = () => {
    const data = useSelector((state) => state.userReducer);

    const dispatch = useDispatch();
    const [allUser, setAllUser] = useState([]);
    const [loads, setLoads] = useState(true);
  
    //for default all users
    useEffect(() => {
      fetch("https://randomuser.me/api/?results=500")
        .then((res) => res.json())
        .then((data) => {
          setAllUser(data.results);
          setLoads(false);
          dispatch(allUserAction({ type: "ALL", payload: data.results }));
        });
      // eslint-disable-next-line
    }, []);

  return (
    <div className="user_container">
      <div className="user_details_container">
        <h3>User Details</h3>
        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
    sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.</p>
    <input type="radio" id="all"
    value="option1"
    onClick={() =>dispatch(allUserAction({ type: "ALL", payload: allUser }))}
    />
    <lable htmlFor="all">ALL</lable>
    <input type="radio" id="male" value="option2"
              onClick={() =>
                dispatch(maleUserAction({ type: "MALE", payload: allUser }))
              }/>
    <lable htmlFor="male">Male</lable>
    <input type="radio" id="female" onClick={() =>
                dispatch(femaleUserAction({ type: "FEMALE", payload: allUser }))
              }/>
    <lable htmlFor="female">Female</lable>
      </div>

      {loads ? (
          <Loading />
        ) : (
        <div className="user_table_container">
            <table id="user_table" rules="rows">
                <thead>
                    <tr>
                        <th>IMAGE</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>GENDER</th>
                    </tr>
                </thead>
                <tbody>
                {data.length > 0 &&
                  data.map((item, ind) => {
                    return (
                      <tr key={ind}>
                        <td>
                          <img
                            src={item.picture.thumbnail}
                            alt={item.name.first}
                          />
                        </td>
                        <td>{item.name.first}</td>
                        <td>{item.email}</td>
                        <td>{item.gender}</td>
                      </tr>
                    );
                  })}
                </tbody>
            </table>

        </div>
     )}
    </div>
  );
};
export default UserMain;
