import React, { useState } from "react";
import { usePage, router } from "@inertiajs/react";
import ModalConfirmation from "@/Parts/ModalConfirmation";

export default function Header(props) {
  const { user } = usePage().props;
  const [profileMenu, setProfileMenu] = useState("hidden");
  const profileClick = () => {
    if (profileMenu === "hidden") {
      setProfileMenu("");
    } else if (profileMenu === "") {
      setProfileMenu("hidden");
    }
  };
  const userNav = [];
  if (user) {
    userNav.push(
      <div className="flex gap-x-2 items-center" key={1}>
        <img
          className="rounded-full"
          src="/images/default-profile-picture.jpeg"
          width={28}
          height={28}
          alt=""
        />
        <button onClick={profileClick} className="nav-text">
          {user["name"]}
        </button>
        {/* Dropdown menu  */}
      </div>
    );
  } else {
    userNav.push(
      <div className="nav-item" key={0}>
        <a href="/login">Login</a>
      </div>
    );
  }

  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };
  return (
    <>
      <nav className="header sticky top-0">
        <div className="bg-white shadow-lg py-5">
          <div className="content-header">
            <div className="flex justify-between items-center gap-x-4">
              <div className="label">
                <a href="/">
                  Stay
                  <span className="staycation">cation</span>
                </a>
              </div>
              <nav className="flex gap-x-8">
                <ul className="flex justify-center items-center gap-x-5">
                  <li className="nav-item">
                    <a className="active" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/">Browser by</a>
                  </li>
                  <li className="nav-item">
                    <a href="/">Stories</a>
                  </li>
                  <li className="nav-item">
                    <a href="/">Agents</a>
                  </li>
                </ul>

                <div className="flex gap-x-5 items-center">
                  <hr className="w-0.5 h-full bg-gray-300" />
                  {userNav}
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex justify-end pr-28">
          <div
            id="dropdownNavbar"
            className={`z-10 font-normal bg-white rounded-lg shadow w-44 ${profileMenu}`}
          >
            <ul
              className="py-2 text-sm text-gray-900 dark:text-gray-700"
              aria-labelledby="dropdownLargeButton"
            >
              <li>
                <a
                  href="/toUserProfile"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Profile
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={showModal}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Sign out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <ModalConfirmation
        title="Are you sure you want to logout?"
        show={show}
        handleClose={hideModal}
      />
    </>
  );
}
