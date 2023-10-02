import propTypes from "prop-types";

export default function ModalConfirmation(props) {
  const showHideClassName = props.show
    ? "modal display-block"
    : "modal display-none";
  return (
    <div className={showHideClassName}>
      <div className="w-full h-full modal-main relative p-4 max-w-md md:h-auto">
        <div className="relative p-4 text-center bg-white rounded-lg shadow sm:p-5">
          <p className="mb-4 text-gray-900 text-sm">{props.title}</p>
          <div className="flex justify-center items-center space-x-4">
            <button
              type="button"
              onClick={props.handleClose}
              className="py-2 px-3 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10"
            >
              {props.notConfirmedTitle}
            </button>
            <button
              type="submit"
              className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
              onClick={props.handleConfirmed}
            >
              {props.confirmedTitle}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

ModalConfirmation.propTypes = {
  title: propTypes.string,
  positiveTitle: propTypes.string,
  negativeTitle: propTypes.string,
};
