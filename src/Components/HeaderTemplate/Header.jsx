import { useContext } from "react";
import "./Header.css";
import { ThemeContext } from "../../ThemeContext";

import { BiSearch } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { RiSettingsLine } from "react-icons/ri";

import { IoAnalytics } from "react-icons/io5";
import { TbMessages } from "react-icons/tb";

import { HiOutlineMoon, HiOutlineLogout } from "react-icons/hi";

const Header = () => {
  const { DarkTheme, setDarkTheme } = useContext(ThemeContext);

  function changeTheme() {
    setDarkTheme(!DarkTheme);
  }

  return (
    <header className={`${DarkTheme && "dark"}`}>
      <div className="search-bar">
        <input type="text" placeholder="search..." />
        <BiSearch className="icon" />
      </div>

      <div className="tools">
        <AiOutlineUser className="icon" />
        <TbMessages className="icon" />
        <IoAnalytics className="icon" />

        <div className="divider"></div>

        <HiOutlineMoon className="icon" onClick={changeTheme} />
        <RiSettingsLine className="icon" />
        <HiOutlineLogout className="icon" />

        <div className="divider"></div>

        {/* Admin Profile Img  */}
        <div className="user">
          <img
            src="https://previews.123rf.com/images/shirokumadesign/shirokumadesign2110/shirokumadesign211000017/175301007-businesswoman-cartoon-character-people-face-profiles-avatars-and-icons-close-up-image-of-smiling.jpg"
            alt=""
            className="profile-img"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
