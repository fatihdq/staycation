import propTypes from "prop-types";

export default function Button(props) {
    const onClickScrollView = props.onClickScrollView;
    const handleClickScrollView = () => {
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
    if (props.isSmall) className.push("btn-sm");
    if (props.isPrimary) className.push("btn-primary");
    if (props.isSuccess) className.push("btn-success");
    if (props.isWarning) className.push("btn-warning");
    if (props.isDanger) className.push("btn-danger");
    if (props.isPassive) className.push("btn-passive");
    return (
        <button
            type={props.type}
            onClick={props.onClick ? props.onClick : handleClickScrollView}
            className={`btn` + className.join(" ")}
        >
            {props.title}
        </button>
    );
}
Button.defaultProps = {
    onClickScrollView: "",
    type: "",
};
Button.propTypes = {
    title: propTypes.string,
    onClickScrollView: propTypes.string,
    className: propTypes.string,
    isFull: propTypes.bool,
    isLarge: propTypes.bool,
    isMedium: propTypes.bool,
    isSmall: propTypes.bool,
    isPrimary: propTypes.bool,
    isSuccess: propTypes.bool,
    isWarning: propTypes.bool,
    isDanger: propTypes.bool,
    isPassive: propTypes.bool,
    type: propTypes.string,
};
