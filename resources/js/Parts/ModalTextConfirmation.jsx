import propTypes from "prop-types";
import Input from "@/Components/Input";
import { useState, useMemo } from "react";

export default function ModalTextConfirmation(props) {
  const [textConf, setTextConf] = useState("");
  const [hiddenAlert, setHiddenAlert] = useState(true);

  const showHideClassName = props.show
    ? "modal display-block"
    : "modal display-none";

  const onClickConfirmed = () => {
    if (textConf === props.textConf) {
      props.handleConfirmed();
      setTextConf("");
      setHiddenAlert(true);
    } else {
      setHiddenAlert(false);
    }
  };

  const onClickNotConfirmed = () => {
    props.handleClose();
    setTextConf("");
    setHiddenAlert(true);
  };

  useMemo(() => {
    setHiddenAlert(true);
  }, [textConf]);

  return (
    <div className={showHideClassName}>
      <div className="w-full h-full modal-main relative p-4 max-w-md md:h-auto">
        <div className="relative p-4text-center bg-white rounded-lg shadow sm:p-5">
          <p className="mb-4 text-sm text-gray-900 px-4">{props.title}</p>
          <div className="mx-4 mb-6">
            <label className="block mb-2 text-xs">
              *Confirm deletion by typing{" "}
              <span className="font-bold">delete</span>
            </label>
            <input
              className="block w-full text-sm border rounded-lg cursor-pointer focus:outline-none"
              id="confirmation"
              type="text"
              placeholder="Delete"
              value={textConf}
              onChange={(e) => {
                setTextConf(e.target.value);
              }}
              required
            />
            <div
              className={`pt-0.5 text-xs text-red-800 ${
                hiddenAlert ? "hidden" : ""
              }`}
            >
              *Wrong input confirmation
            </div>
          </div>

          <div className="flex justify-center items-center space-x-4">
            <button
              type="button"
              onClick={onClickNotConfirmed}
              className="py-2 px-3 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10"
            >
              {props.notConfirmedTitle}
            </button>
            <button
              type="submit"
              className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
              onClick={onClickConfirmed}
            >
              {props.confirmedTitle}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

ModalTextConfirmation.propTypes = {
  title: propTypes.string,
  textConf: propTypes.string,
  positiveTitle: propTypes.string,
  negativeTitle: propTypes.string,
};
