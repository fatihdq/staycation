import React, { useState } from "react";
import propTypes from "prop-types";
import { usePage, router } from "@inertiajs/react";
import ModalConfirmation from "@/Parts/ModalConfirmation";

export default function SideBar(props) {
  const { pageTitle } = props;

  const [showConfirmation, setShowConfirmation] = useState(false);
  const onClickShowConfirmation = (value) => {
    setShowConfirmation(value);
  };

  const onClickConfirmed = async (e) => {
    e.preventDefault();
    router.get(route("logout"));
  };

  return (
    <>
      <div className="admin-siderbar w-1/6">
        <div className="border-r-2 h-screen flex flex-col bg-white pt-5 justify-between px-4 ">
          <div className="space-y-4">
            <div className="bg-top bg-cover space-y-1">
              <a
                href="/staycation/dashboard"
                className={`font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex transition-all duration-200 hover:bg-gray-200 group cursor-pointer ${
                  pageTitle == "dashboard" ? "bg-gray-200" : ""
                }`}
              >
                <div className="justify-center items-center flex gap-x-4">
                  <img
                    src="/images/icon-dashboard.svg"
                    height={20}
                    width={20}
                    alt=""
                  />

                  <span>Dashboard</span>
                </div>
              </a>
            </div>
            <div>
              <p className="px-4 font-semibold text-xs tracking-widest text-gray-400 uppercase">
                Product
              </p>
              <div className="mt-4 bg-top bg-cover space-y-1">
                <a
                  href="/staycation/lodge"
                  className={`font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex transition-all duration-200 hover:bg-gray-200 group cursor-pointer ${
                    pageTitle == "lodge" ? "bg-gray-200" : ""
                  }`}
                >
                  <div className="justify-center items-center flex gap-x-4">
                    <img
                      src="/images/icon-home.svg"
                      height={20}
                      width={20}
                      alt=""
                    />

                    <span>Lodge</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="pb-24">
            <div className="bg-top bg-cover space-y-1">
              <a
                href="#"
                className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
              >
                <div className="justify-center items-center flex gap-x-4">
                  <img
                    src="/images/icon-settings.svg"
                    height={30}
                    width={20}
                    alt=""
                  />

                  <span>Settings</span>
                </div>
              </a>
            </div>
            <div className="bg-top bg-cover space-y-1">
              <button
                className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                type="button"
                onClick={() => onClickShowConfirmation(true)}
              >
                <div className="justify-center items-center flex gap-x-4">
                  <img
                    src="/images/icon-logout.svg"
                    height={20}
                    width={20}
                    alt=""
                  />

                  <span>Logout</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <ModalConfirmation
        title="Are you sure you want to logout?"
        confirmedTitle="Yes, I'm sure"
        notConfirmedTitle="No, cancel"
        show={showConfirmation}
        handleClose={() => onClickShowConfirmation(false)}
        handleConfirmed={onClickConfirmed}
      />
    </>
  );
}

SideBar.propTypes = {
  pageTitle: propTypes.string,
};
