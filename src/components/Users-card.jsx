import React, { useEffect, useState } from "react";
import style from "./Users-card.module.css";

function UsersCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    try {
      const response = await fetch("https://api.github.com/users");
      const users = await response.json(response)
      setData(users);
    } catch (error) {
      console.log("Error in response : ",error);
    }
  };
  return data.map((each,index) => {
    return (
      <div key={index}>
        <div className={style.card}>
          <img
            src={each.avatar_url}
            alt="User avatar"
            className={style.image}
          />
          <div className={style.description}>
            <div className={style.username}>
              <h3>{each.login}</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className={style.numbers}>
              <div>
                <span className={style.span}>Articles</span>
                <br />
                <span className={style.figures}>89</span>
              </div>
              <div>
                <span className={style.span}>Followers</span>
                <br />
                <span className={style.figures}>45</span>
              </div>
              <div>
                <span className={style.span}>Ratings</span>
                <br />
                <span className={style.figures}>89</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
}

export default UsersCard;
