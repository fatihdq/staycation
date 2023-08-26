import Button from "@/Components/Button";

export default function Hero() {
    return (
        <div className="grid grid-cols-2 justify-items-center gap-10">
            <div className="grid grid-rows-4 gap-5">
                <div className="title-hero">
                    Forget Busy Work, <br />
                    Start Next Vacation
                </div>
                <div className="description-hero">
                    <p>
                        We provide what you need to enjoy your holiday with
                        family. Time to make another memorable moments.
                    </p>
                </div>
                <div>
                    <Button
                        title="Show Me Now"
                        onClickScrollView="most-picked"
                        isLarge
                        isPrimary
                    />
                </div>
                <div className="grid grid-cols-4 justify-items-start">
                    <div>
                        <img
                            className="pb-1"
                            src="/images/icon-traveler.svg"
                            width={32}
                            height={32}
                            alt=""
                        />
                        <div className="sts">
                            <span className="sts-number">80.900</span>
                            Traveler
                        </div>
                    </div>
                    <div>
                        <img
                            className="pb-1"
                            src="/images/icon-treasure.svg"
                            width={32}
                            height={32}
                            alt=""
                        />
                        <div className="sts">
                            <span className="sts-number">862</span>
                            Treasure
                        </div>
                    </div>
                    <div>
                        <img
                            className="pb-1"
                            src="/images/icon-cities.svg"
                            width={32}
                            height={32}
                            alt=""
                        />
                        <div className="sts">
                            <span className="sts-number">1.492</span>
                            Cities
                        </div>
                    </div>
                </div>
            </div>

            <img
                src="/images/image-hero.svg"
                height={396.25}
                width={504}
                alt=""
            ></img>
        </div>
    );
}
