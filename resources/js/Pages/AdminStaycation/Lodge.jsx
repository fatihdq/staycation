import SideBar from "@/Pages/AdminStaycation/SideBar";
import Navbar from "@/Pages/AdminStaycation/Navbar";
import Button from "@/Components/Button";
import Alert from "@/Components/Alert";
import ModalConfirmation from "@/Parts/ModalConfirmation";
import ModalTextConfirmation from "@/Parts/ModalTextConfirmation";

import { capitalize } from "@/untility";
import { usePage, router, useForm } from "@inertiajs/react";
import { useEffect, useState, useRef } from "react";

export default function Lodge({}) {
  const { data, flash } = usePage().props;
  const baseUrl = window.location.href.split("?")[0];
  const [lodges, setLodges] = useState(data["lodge"]["data"]);
  const filterDisabled = new URLSearchParams(window.location.search).get(
    "disabled"
  );
  const pagination = Object.keys(data["lodge"])
    .filter((key) => key !== "data")
    .reduce((obj, key) => {
      obj[key] = data["lodge"][key];
      return obj;
    }, {});

  useEffect(() => {
    setLodges(data["lodge"]["data"]);
  }, [data]);

  const [delConf, setDelConf] = useState({
    id: null,
    name: null,
    show: false,
  });

  const [deactConf, setDeactConf] = useState({
    id: null,
    currentStatus: null,
    name: null,
    show: false,
  });

  const onClickShowDelConf = (show, id) => {
    let name = null;
    if (id !== null) {
      name = lodges.filter((lodge) => lodge.id === id)[0].name;
    }
    setDelConf((values) => ({
      ...values,
      ["id"]: id,
      ["name"]: name,
      ["show"]: show,
    }));
  };

  const onClickDelConfirmed = async (id) => {
    router.post(route("spradm.lodge.destroy", { id: id, _method: "DELETE" }), {
      preserveScroll: true,
    });
    setDelConf((values) => ({
      ...values,
      ["id"]: null,
      ["name"]: null,
      ["show"]: null,
    }));
  };

  const onClickShowDeactConf = (show, id) => {
    let name = null;
    let status = null;
    if (id !== null) {
      const lodge = lodges.filter((lodge) => lodge.id === id)[0];
      name = lodge.name;
      status = lodge.disabled;
    }

    setDeactConf((values) => ({
      ...values,
      ["id"]: id,
      ["currentStatus"]: status,
      ["name"]: name,
      ["show"]: show,
    }));
  };

  const onClickDeactConfirmed = async (id) => {
    router.post(route("spradm.lodge.deactive", { id: id, _method: "PUT" }), {
      disabled: deactConf.currentStatus ? false : true,
    });
    setDeactConf((values) => ({
      ...values,
      ["id"]: null,
      ["currentStatus"]: null,
      ["name"]: null,
      ["show"]: false,
    }));
  };

  const showHIdeAct = (id) => {
    const x = document.getElementById(id);
    if (x.style.display === "none" || x.style.display === "") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };

  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          const x = document.getElementsByName("dropdownAct");
          x.forEach((e) => {
            e.style.display = "none";
          });
        }
      }
      // Bind the event listener
      document.addEventListener("click", handleClickOutside, true);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("click", handleClickOutside, true);
      };
    }, [ref]);
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  return (
    <>
      <main id="react-app" className="admin-main">
        {flash.alertMessage && (
          <Alert status={flash.alertStatus} message={flash.alertMessage} />
        )}
        <section className="container mx-auto pt-2">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-x-3">
                <h2 className="text-lg font-medium text-gray-800">Lodges</h2>

                <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full">
                  240 lodge
                </span>
              </div>

              <p className="mt-1 text-sm text-gray-500">
                These companies have joined with Staycation.
              </p>
            </div>

            <div className="flex items-center mt-4 gap-x-3">
              <a href="/staycation/lodge/create">
                <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600">
                  <img
                    src="/images/icon-add.svg"
                    width={16}
                    height={16}
                    alt=""
                    className="text-white"
                  />

                  <span>Add Lodge</span>
                </button>
              </a>
            </div>
          </div>

          <div className="mt-6 md:flex md:items-center md:justify-between">
            <div className="inline-flex overflow-hidden bg-white border divide-x rounded-lg">
              <a
                className={`px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm ${
                  filterDisabled === null ? "bg-gray-100" : ""
                }`}
                href={baseUrl}
              >
                View all
              </a>

              <a
                className={`px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm ${
                  filterDisabled == "0" ? "bg-gray-100" : ""
                }`}
                href={`${baseUrl}?disabled=0`}
              >
                Active
              </a>

              <a
                className={`px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm ${
                  filterDisabled == "1" ? "bg-gray-100" : ""
                }`}
                href={`${baseUrl}?disabled=1`}
              >
                Deactived
              </a>
            </div>

            <div className="relative flex items-center">
              <img
                src="/images/icon-search.svg"
                height={20}
                width={20}
                alt=""
                className="absolute ml-3"
              />

              <input
                type="text"
                placeholder="Search"
                className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
          </div>

          <div className="flex flex-col mt-6 relative">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="py-4 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                        >
                          No.
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                        >
                          Image
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                        >
                          Type
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                        >
                          Account
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                        >
                          Detail Address
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {lodges.map((lodge, index) => (
                        <tr key={index}>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div className="text-gray-700">{index + 1}</div>
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60">
                              {lodge.disabled === false
                                ? "active"
                                : "deactived"}
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div id="canvas-image"></div>
                            <img
                              src={lodge.imageurl[0]}
                              style={{ height: 4 * 24, width: 6 * 24 }}
                              alt=""
                            />
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div>
                              <h2 className="font-medium text-gray-800">
                                {lodge.name}
                              </h2>
                              <p className="text-sm font-normal text-gray-600">
                                {`${capitalize(
                                  lodge.region.regency.name
                                )}, ${capitalize(lodge.region.provincy.name)}`}
                              </p>
                            </div>
                          </td>

                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div className="text-gray-700">
                              {lodge.lodge_type.name}
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div>
                              <h2 className="font-medium text-gray-800">
                                {lodge.user.phone}
                              </h2>
                              <p className="text-sm font-normal text-gray-600">
                                {lodge.user.email}
                              </p>
                            </div>
                          </td>

                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <p className="text-sm font-normal text-gray-600">
                              {lodge.address}
                            </p>
                          </td>

                          <td className="px-4 py-4 text-sm whitespace-nowrap relative">
                            <button
                              className="block px-1 py-1 w-full h-full flex justify-end text-gray-500 transition-colors duration-200 rounded-lg hover:bg-gray-100"
                              onClick={() => showHIdeAct(`dropdownAct${index}`)}
                            >
                              <img
                                src="/images/icon-options.svg"
                                height={24}
                                width={24}
                                alt=""
                              />
                            </button>

                            <div
                              ref={wrapperRef}
                              id={`dropdownAct${index}`}
                              name="dropdownAct"
                              className={`absolute font-normal bg-white rounded-lg shadow w-36 right-4 top-0 hidden`}
                            >
                              <ul
                                className="py-2 text-sm text-gray-900 dark:text-gray-700"
                                aria-labelledby="dropdownLargeButton"
                              >
                                <li>
                                  <a
                                    href={`/staycation/lodge/${lodge.id}/edit`}
                                  >
                                    <button
                                      type="button"
                                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                    >
                                      Edit
                                    </button>
                                  </a>
                                </li>
                                <li>
                                  <button
                                    type="button"
                                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                    onClick={() =>
                                      onClickShowDeactConf(true, lodge.id)
                                    }
                                  >
                                    {`${
                                      lodge.disabled === true
                                        ? "Activate"
                                        : "Deactivate"
                                    }`}
                                  </button>
                                </li>
                                <li>
                                  <button
                                    type="button"
                                    className="block w-full text-red-800 text-left px-4 py-2 hover:bg-gray-100"
                                    onClick={() =>
                                      onClickShowDelConf(true, lodge.id)
                                    }
                                  >
                                    Delete
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:flex sm:items-center sm:justify-end ">
            <div className="flex items-center mt-4 gap-x-2 sm:mt-0">
              <a
                href={pagination["prev_page_url"]}
                className={`flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100
                    ${pagination["prev_page_url"] === null ? "hidden" : ""}
                `}
              >
                <img src="/images/icon-previous.svg" height={4} width={20} />

                <span>previous</span>
              </a>

              <div className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100">
                <span>{pagination.current_page}</span>
              </div>

              <a
                href={pagination["next_page_url"]}
                className={`flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100
                    ${pagination["next_page_url"] === null ? "hidden" : ""}
                `}
              >
                <span>Next</span>

                <img src="/images/icon-next.svg" height={4} width={20} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Navbar />
      <SideBar pageTitle={data.pageTitle} />
      <ModalTextConfirmation
        title={`Are you sure you want to delete ${delConf.name} ?`}
        confirmedTitle="Delete"
        notConfirmedTitle="Cancel"
        textConf="delete"
        show={delConf.show}
        handleClose={() => onClickShowDelConf(false, null)}
        handleConfirmed={() => onClickDelConfirmed(delConf.id)}
      />
      <ModalConfirmation
        title={`Are you sure you want to ${
          deactConf.currentStatus ? "activate" : "deactivate"
        } ${deactConf.name} ?`}
        confirmedTitle="Yes, I'm sure"
        notConfirmedTitle="No, cancel"
        show={deactConf.show}
        handleClose={() => onClickShowDeactConf(false, null)}
        handleConfirmed={() => onClickDeactConfirmed(deactConf.id)}
      />
    </>
  );
}
