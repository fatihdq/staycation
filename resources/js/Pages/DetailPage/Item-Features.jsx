import propTypes from "prop-types";

export default function ItemFeatures(props) {
    return (
        <div className="item-features">
            <img
                className="pb-2"
                src={props.imageUrl}
                height={48}
                width={48}
                alt=""
            />
            <div className="num">
                {props.amount} <span className="feature">{props.desc}</span>
            </div>
        </div>
    );
}

ItemFeatures.propTypes = {
    imageUrl: propTypes.string,
    amount: propTypes.number,
    desc: propTypes.string,
};
