import Header from "../Parts/HeaderLogo";
import Navigation from "./Booking/Navigation";
import Button from "@/Components/Button";

export default function BookingCompletePage() {
    return (
        <>
            <Header />
            <Navigation pageTitle="Booking Complete" />
            <div className="flex justify-center pt-8 booking-title">
                Yeay!! Complete
            </div>
            <div className="flex justify-center pt-8">
                <img
                    src="/images/image-complete.png"
                    width={362}
                    height={330}
                    alt=""
                />
            </div>
            <div className="flex justify-center pt-2 booking-desc">
                <p className="w-[300px]">
                    We will inform you via email later once the transaction has
                    been accepted
                </p>
            </div>
            <div className="flex justify-center pt-10 booking-title">
                <a href="/">
                    <Button title="Back to home" isLarge isPrimary />
                </a>
            </div>
        </>
    );
}
