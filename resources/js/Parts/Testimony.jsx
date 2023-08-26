import Button from "@/Components/Button";
import Star from "@/Components/Star";
import propsType from "prop-types";

export default function Testimony(props) {
    return (
        <div className="testimony">
            <div className="grid grid-cols-3 h-full w-full justify-start gap-5">
                <div className="col-span-1 relative">
                    <img
                        className="absolute top-0 left-5 w-9/12"
                        src="/images/image-frame-left.png"
                        width={356.131}
                        height={486.75}
                        alt=""
                    />
                    <img
                        className="absolute top-5 right-5 w-9/12"
                        src={props.imageUrl}
                        height={581}
                        width={457}
                        alt=""
                    />
                </div>

                <div className="col-span-2">
                    <div className="testimony-title">Happy Family</div>

                    <Star number={props.rate} height={24} width={24} />

                    <div className="testimony-description">{props.desc}</div>
                    <div className="testimony-user">
                        {props.name}, {props.job}
                    </div>
                    <Button title="Read Their Story" isLarge isPrimary />
                </div>
            </div>
        </div>
    );
}

Testimony.propsType = {
    name: propsType.string,
    job: propsType.string,
    desc: propsType.string,
    rate: propsType.number,
    imageUrl: propsType.string,
};
