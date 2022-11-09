import React from "react";
import Posts from "./Posts/Posts";
import PR from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={PR.content}>
      <div>
        <img
          className={PR.content_pict}
          alt="content"
          src="https://img3.goodfon.ru/wallpaper/nbig/1/b1/art-kartinka-skachyat.jpg"
        />
      </div>
      <div className={PR.content_user}>
        <div>
          <img
            className={PR.user_img}
            alt="cat"
            src="https://avatars.mds.yandex.net/i?id=2e71a60a70fa89357f90016ab2e9085e-5419733-images-thumbs&n=13"
          />
        </div>

        <div>
          <ul>
            <li className={PR.user_name}>Artem Teplygin</li>
            <li>Date of Birth: 17.03.2000</li>
            <li>City: Minsk</li>
            <li>Education: BSUIR</li>
            <li>Link: tg.123213123</li>
          </ul>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
