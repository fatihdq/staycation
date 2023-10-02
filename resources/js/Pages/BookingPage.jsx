import Header from "../Parts/HeaderLogo";
import Button from "@/Components/Button";
import Navigation from "./Booking/Navigation";
import Input from "@/Components/Input";

export default function DetailPage() {
    return (
        <>
            <Header />
            <Navigation pageTitle="Booking" />
            <div className="flex justify-center pt-8 booking-title">
                Booking Information
            </div>
            <div className="flex justify-center pt-2 booking-desc ">
                Please fill up the blank fields below
            </div>

            <div className="flex justify-center pt-10 gap-x-20">
                <div className="w-[380px] pt-10">
                    <img
                        src="/images/image-category-1.jpg"
                        width={380}
                        height={270}
                        alt=""
                    />
                    <div className="flex justify-between p-2">
                        <div>
                            <div className="item-title pb-1">Podo Wae</div>
                            <div className="item-loc">Madiun, Indonesia</div>
                        </div>
                        <div className="flex items-center item-booking-info">
                            <span className="item-booking-info">
                                $480 USD
                                <span className="item-booking-info-per">
                                    {" "}
                                    per{" "}
                                </span>
                                2 nights
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <hr className=" w-0.5 h-full bg-gray-100 flex items-center" />
                </div>

                <div className="w-[380px]">
                    <form>
                        <Input
                            label="First Name"
                            id="firstname"
                            type="text"
                            placeholder="Please type here"
                        />
                        <Input
                            label="Last Name"
                            id="lastname"
                            type="text"
                            placeholder="Please type here"
                        />
                        <Input
                            label="Email Address"
                            id="email"
                            type="text"
                            placeholder="Please type here"
                        />
                        <Input
                            label="Phone Number"
                            id="phone"
                            type="tel"
                            placeholder="Please type here"
                        />
                    </form>
                </div>
            </div>
            <div className="flex justify-center pt-10 booking-title">
                <a href="/payment">
                    <Button title="Continue to book" isLarge isPrimary />
                </a>
            </div>
            <div className="flex justify-center pt-2 pb-15 booking-title">
                <a href="/detail-page">
                    <Button title="Cencel" isLarge isPassive />
                </a>
            </div>
        </>
    );
}
