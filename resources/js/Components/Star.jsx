import propTypes from "prop-types";

export default function Star(props) {
    let starAmount = [];
    for (let i = 1; i <= props.number; i++) {
        starAmount.push(
            <img
                key={i}
                src="/images/icon-star.svg"
                height={props.height}
                width={props.width}
                alt=""
            />
        );
    }
    return <div className={`flex items-center gap-2`}>{starAmount}</div>;
}

Star.propTypes = {
    number: propTypes.number,
    height: propTypes.number,
    width: propTypes.number,
};
