import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="content">
      <div>
        <img
          className="content-pict"
          alt="content"
          src="https://img3.goodfon.ru/wallpaper/nbig/1/b1/art-kartinka-skachyat.jpg"
        />
      </div>
      <div className="content_user">
        <div>
          <img
            className="user_img"
            alt="cat"
            src="https://avatars.mds.yandex.net/i?id=2e71a60a70fa89357f90016ab2e9085e-5419733-images-thumbs&n=13"
          />
        </div>

        <div>
          <ul>
            <li className="user_name">Artem Teplygin</li>
            <li>Date of Birth: 17.03.2000</li>
            <li>City: Minsk</li>
            <li>Education: BSUIR</li>
            <li>Link: tg.123213123</li>
          </ul>
        </div>

        <div className="content_new-post">
          <div className="new-post_text">My post</div>
          <div className="new-post_write">
            <input type="text"></input>
            {/* <input type="button">Send</input> */}
          </div>
        </div>
        <div className="content_history">
          <div className="item">post1</div>
          <div className="item">post2</div>
          <div className="item">post3</div>
          <div className="item">post4</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
