import propTypes from "prop-types";

export default function Button(props) {
    const onClickScrollView = props.onClickScrollView;
    const handleClickScroll = () => {
        if (!onClickScrollView == "") {
            const element = document.getElementById(onClickScrollView);
            if (element) {
                // 👇 Will scroll smoothly to the top of the next section
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };
    const className = [props.className];

    if (props.isFull) className.push("btn-full");
    if (props.isLarge) className.push("btn-lg");
    if (props.isMedium) className.push("btn-md");
    if (props.isPrimary) className.push("btn-primary");
    return (
        <button
            onClick={handleClickScroll}
            className={`btn` + className.join(" ")}
        >
            {props.title}
        </button>
    );
}
Button.defaultProps = {
    onClickScrollView: "",
};
Button.propTypes = {
    title: propTypes.string,
    onClickScrollView: propTypes.string,
    className: propTypes.string,
    isFull: propTypes.bool,
    isLarge: propTypes.bool,
    isMedium: propTypes.bool,
    isPrimary: propTypes.bool,
};
