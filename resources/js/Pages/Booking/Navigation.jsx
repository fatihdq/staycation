import propTypes from "prop-types";

export default function Navigation(props) {
    const nav1 = [];
    const nav2 = [];
    const nav3 = [];
    if (props.pageTitle === "Booking") {
        nav1.push(
            <div className="nav-circle-border-active  flex items-center justify-center">
                <div className="nav-circle flex items-center">
                    <p className="w-full text-center nav-circle-text">1</p>
                </div>
            </div>
        );
        nav2.push(
            <div className="nav-circle-border  flex items-center justify-center">
                <div className="nav-circle flex items-center">
                    <p className="w-full text-center nav-circle-text">2</p>
                </div>
            </div>
        );
        nav3.push(
            <div className="nav-circle-border flex items-center justify-center">
                <div className="nav-circle flex items-center">
                    <p className="w-full text-center nav-circle-text">3</p>
                </div>
            </div>
        );
    } else if (props.pageTitle === "Booking Payment") {
        nav1.push(
            <div className="nav-circle-border flex items-center justify-center">
                <img src="/images/icon-complete.svg" />
            </div>
        );
        nav2.push(
            <div className="nav-circle-border-active  flex items-center justify-center">
                <div className="nav-circle flex items-center">
                    <p className="w-full text-center nav-circle-text">2</p>
                </div>
            </div>
        );
        nav3.push(
            <div className="nav-circle-border flex items-center justify-center">
                <div className="nav-circle flex items-center">
                    <p className="w-full text-center nav-circle-text">3</p>
                </div>
            </div>
        );
    } else if (props.pageTitle === "Booking Complete") {
        nav1.push(
            <div className="nav-circle-border flex items-center justify-center">
                <img src="/images/icon-complete.svg" />
            </div>
        );
        nav2.push(
            <div className="nav-circle-border flex items-center justify-center">
                <img src="/images/icon-complete.svg" />
            </div>
        );
        nav3.push(
            <div className="nav-circle-border flex items-center justify-center">
                <img src="/images/icon-complete.svg" />
            </div>
        );
    }
    return (
        <div className="flex justify-center pt-6">
            {nav1}
            <div className="flex items-center justify-center">
                <hr className="w-10 h-0.2 bg-gray-100 flex items-center" />
            </div>
            {nav2}
            <div className="flex items-center justify-center">
                <hr className="w-10 h-0.2 bg-gray-100 flex items-center" />
            </div>
            {nav3}
        </div>
    );
}

Navigation.propTypes = {
    pageTitle: propTypes.string,
};
