import axios from "axios";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import userStyle from "./User.module.css";
import femaleUser from "../../assets/woman.svg";
import maleUser from "../../assets/man.svg";
import userMail from "../../assets/mail.svg";
import manAge from "../../assets/growing-up-man.svg";
import womanAge from "../../assets/growing-up-woman.svg";
import userLocation from "../../assets/map.svg";
import userPhone from "../../assets/phone.svg";
import userPassword from "../../assets/padlock.svg";
import UserDisplay from "../UserDisplay/UserDisplay";

const User = () => {
  const [user, setUser] = useState("");
  const [addedUser, setAddedUser] = useState([]);
  const [hoveredElement, setHoveredElement] = useState({
    name: false,
    email: false,
    age: false,
    location: false,
    phone: false,
    login: false,
  });

  const getUser = () => {
    axios.get("https://randomuser.me/api").then((res) => {
      setUser(res.data.results);
    });
  };

  const displayHandler = () => {
    const newUser = [...user, ...addedUser];
    setAddedUser(newUser);
  };

  useEffect(() => {
    getUser();
  }, []);

  return !user ? (
    <div className="wrapper">
      <Button getUser={getUser} />
    </div>
  ) : (
    <div className={userStyle.wrapper}>
      <img src={user[0].picture.large} className={userStyle.img} alt="" />
      <div id="displayer-div" className={userStyle.displayer}>
        <div className="mt-3">
          {hoveredElement.name && (
            <>
              <h3>Name</h3>
              <p>
                {user[0].name.title} {user[0].name.first} {user[0].name.last}{" "}
              </p>
            </>
          )}

          {hoveredElement.email && (
            <>
              <h3>Email</h3>
              <p>{user[0].email} </p>
            </>
          )}

          {hoveredElement.age && (
            <>
              <h3>Age</h3>
              <p>{user[0].dob.age} </p>
            </>
          )}

          {hoveredElement.location && (
            <>
              <h3>Residency</h3>
              <p>
                {user[0].location.city} {user[0].location.country}{" "}
              </p>
            </>
          )}

          {hoveredElement.phone && (
            <>
              <h3>Phone</h3>
              <p>{user[0].phone}</p>
            </>
          )}
          {hoveredElement.login && (
            <>
              <h3>Username</h3>
              <p>{user[0].login.username}</p>
            </>
          )}
        </div>
      </div>
      <div className={userStyle.icons}>
        {user[0].gender === "female" ? (
          <img
            src={femaleUser}
            alt=""
            className={userStyle.avatar}
            onMouseEnter={() => {
              setHoveredElement({ ...hoveredElement, name: true });
            }}
            onMouseLeave={() => {
              setHoveredElement({ ...hoveredElement, name: false });
            }}
          />
        ) : (
          <img
            className={userStyle.avatar}
            src={maleUser}
            alt=""
            onMouseEnter={() => {
              setHoveredElement({ ...hoveredElement, name: true });
            }}
            onMouseLeave={() => {
              setHoveredElement({ ...hoveredElement, name: false });
            }}
          />
        )}
        <img
          src={userMail}
          onMouseEnter={() => {
            setHoveredElement({ ...hoveredElement, email: true });
          }}
          onMouseLeave={() => {
            setHoveredElement({ ...hoveredElement, email: false });
          }}
          alt=""
        />
        {user[0].gender === "female" ? (
          <img
            src={womanAge}
            onMouseEnter={() => {
              setHoveredElement({ ...hoveredElement, age: true });
            }}
            onMouseLeave={() => {
              setHoveredElement({ ...hoveredElement, age: false });
            }}
            alt=""
          />
        ) : (
          <img
            src={manAge}
            alt=""
            onMouseEnter={() => {
              setHoveredElement({ ...hoveredElement, age: true });
            }}
            onMouseLeave={() => {
              setHoveredElement({ ...hoveredElement, age: false });
            }}
          />
        )}
        <img
          src={userLocation}
          onMouseEnter={() => {
            setHoveredElement({ ...hoveredElement, location: true });
          }}
          onMouseLeave={() => {
            setHoveredElement({ ...hoveredElement, location: false });
          }}
          alt=""
        />
        <img
          src={userPhone}
          onMouseEnter={() => {
            setHoveredElement({ ...hoveredElement, phone: true });
          }}
          onMouseLeave={() => {
            setHoveredElement({ ...hoveredElement, phone: false });
          }}
          alt=""
        />
        <img
          src={userPassword}
          onMouseEnter={() => {
            setHoveredElement({ ...hoveredElement, login: true });
          }}
          onMouseLeave={() => {
            setHoveredElement({ ...hoveredElement, login: false });
          }}
          alt=""
        />
      </div>
      <Button getUser={getUser} />
      <button onClick={displayHandler} className={userStyle.btn}>
        Add User
      </button>
      <UserDisplay addedUser={addedUser} />
    </div>
  );
};

export default User;
