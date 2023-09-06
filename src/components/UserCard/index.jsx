import React from "react";
import style from "./Userscard.module.css";

function UsersCard(props) {
  const { user } = props;
  return (
    <div>
      <div className={style.card}>
        <img src={user.avatar_url} alt="User avatar" className={style.image} />
        <div className={style.description}>
          <div className={style.username}>
            <h3>{user.login}</h3>
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
}

export default UsersCard;
