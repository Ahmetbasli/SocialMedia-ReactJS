import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import TextsmsIcon from "@material-ui/icons/Textsms";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { authentication } from "./firebase";
import { logout, selectUser } from "./features/userSlice";

function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const logoutOfApp = () => {
    dispatch(logout());
    authentication.signOut();
    fetch("http://api.ipify.org/?format=json")
      .then((results) => results.json())
      .then(console.log);
  };

  return (
    <div>
      <div className="header">
        <div className="header__left">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAAD
            hCAMAAAAJbSJIAAAAbFBMVEUCdLP///8Aa6/G2+q30uUAcrIqg7sAbrHp
            8/hBjsAAb7EAaK2Yv9p+rNDa6/MAcLGvzeIAd7W/1+j4/P7P4u6Csd
            Nupcxjn8mlxt/f7PR1qs/n8feOuNdRlcQ2iL7w+PtYmcYif7moyN9G
            kMF7pxAZAAAGNklEQVR4nO3d25KiMBAGYBKMKDgGRBAFRdf3f8dF5
            +QB6cZxNt1s/1VbNReL8lWEhJzw1FXKpc89y/Ka5H3/mcb7RA8hyT
            5OW4R1ZrX1hpFGUqW3wtgExvWJvTAm8EbXwk3k+pxenmhzKdxr1+f
            zC9H7b2E+RGBDzD+FxfB+ou+JindhOah7zGVMUJ6Fq9D1mfxawtVJ
            WA7zInyPLhvhLHB9Gr+YYNYId0NpybTF7pRXh0O9z5xiwtqbD/kyb
            C7EuecPXOh7i4ELF95o4MKRCLlHhPwjQv4RIf+IkH9EyD+9hSYMAx2
            Els1Tcz+h1eEur4q4qPKx1jyQfYSh3o/qrzGrSXxkMVSFF5robXI9
            8qjWq4h+OaKFerpW91keyHcmY4VR1uI7DRuvqN+JkcLzCEd7MuJE
            nLADqFRFe+AKJdRVB1CpnPSoAEZot51ApcaUaw2E0OjbWuI2S8q
            XIkIYzACgUhvChQgLjUlB4YRwIcLC8EFNeJUV3UKEhXqOEBIe3Y
            GFCQKoUo9sAxUU2hwjVFu+wqCrOfOdimwLHBTqBUoYk70QQWG0R
            Anp3mpgIeZWSrlZ86oyZCzUPkpIt0sSFsYoYUH2CQquDzGNtuYZ
            kW9tYaco4Zhvje8F0NPhKWuylyGm5f0HISQ8vRHxfLhDCJN/dL
            pPBPGMj2i3/aH7I0X104whYEq4CFF9bRrqqNmQrSo8bH9pd8uNb
            nvmFJTQ2K4aY057IBHXq28Pj4lzQxqIHZkx3qMf6oL6ahTs6JrR
            7b0ZFelr8BT0CKnR0/tiXIzJA/uM49vouLjs/q7jMYNB7n5zMYxO
            VoVf1mm99mdbQ/se+pm+82lsoCMdNv8C4rfQr8icKP4RIf+IkH9E
            yD8idBXTNJle02oiJzTndmFgzTixpz+bNqL9EZWU0FgdHFazxbz+
            eIZpmvjLUbUa24b57IdihCYA0t7VBhx0d8pWm1Vc3j2Dnh/UltVU
            PznnGtNfeihm3anavvsAHLS9PiiMjnHn5KtJsdPPrKt/SY9w3TJq
            AY5ZzS5L3uocMZo+39yX/L8RTn4oNNG2bRJ52zflUV8jBWGY4Ga0
            nDPf9bwxuheaKIcnP16m56xr50KDnChwEb9X/ehaaBLcbJarlH3m
            CToW2gQzhn5PPOCJboXmUAP/6xERX4pOhcZ7qgRPmaM7o10KDTAu
            2ZkYe0d1KAz630UvkyOrfofCaPUToEqRy1jdCSvdr6K/C3LSrjth
            Bi9UAYLbo8yd8Ml64iI+6mbjTviCoAqRtRB1JbIWoqbT8RZmiMlY
            vIWY+fO8hQrxjMFc+AbfTZkLEUt1mAvTwQvVFPyZ0hKmTfodkbER
            pn61PySB1mEyzRZ4JmL6LwnhMjf6Y9si41mrw7uNYh4FXuhBQVhu
            o5shFxMCG1V8BV6ATEBYtA2bGX3E/VR39IXZg16zEPcB4E4AzoXZ
            w8fYANWPAy6xdi1cdDynRyP4eHi5jmNh3VkCBvEJYLvNsbB7YeaD
            2fNXAfdbdytcd/clwd/cfDfUHeVWCO1rg+j2B9veToUpNLcCs3MM
            VOU7FcIzeRA/U6g3yqkQXgCu4X5jaI21UyHcy4K4EI/QtexQiFgA
            jqgvoJ1xXAoRr52wb6yFM7g/1+7BT4Ga3i6FiFFcxFJ5ykK4FwlT
            XVAWIsZVjAd+CmUhYrYoYsM/aKm8Q2GK2UsjBLuk3ugKa8z4Jmth
            iRmGh/eOISwEHg4HIJyLUIQiFKEIRShCEYpQhCIUoQhFKEIRilCE
            IhShCEUoQhGKUIQiFKEIRShCEYpQhCIUoQhFKEIRilCEIhShCEX4
            pLBtVb09QkehViOE4CJSaEcz1JsDxlDaDkrAozC7cxrwU5Kfrz88
            v2yiOy88qvenvGBvE+YRIf+IkH9EyD8i5B8R8o8I+UeE/NMIEbsN
            c472/wMhYrsmztFrL+XyDvGnYkzqqeOghUflqWLIP1NdNMI6GG4h
            mrBuhCrD7PbDM0GmTsLa9Xn8YtKzUI36vTSRT6LT2zHP+4X1fC8k
            l0Tnfc/fd0TLh0iMcvUtbEpxaDdUE33sXP+5q90iGVa1qBNfXQtV
            WpknXwxNL1Z71ddufRc7E6bxPtFDSLIfXexGeLP3Yrn0uWd58/ry
            v5KollP4mtphAAAAAElFTkSuQmCC"
            alt=""
          />

          <div className="header__search">
            <SearchIcon />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="header__right">
          <HeaderOption Icon={HomeIcon} title="home" />
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
          <HeaderOption Icon={TextsmsIcon} title="Message" />
          <HeaderOption Icon={BusinessCenterIcon} title="My Bussines" />
          <HeaderOption Icon={NotificationsIcon} title="Notifications" />
          <div onClick={logoutOfApp}>
            <HeaderOption
              avatar={
                user
                  ? user.photoUrl
                    ? user.photoUrl
                    : user.displayName
                    ? user.displayName[0]
                    : ""
                  : null
              }
              title="me"
            ></HeaderOption>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
