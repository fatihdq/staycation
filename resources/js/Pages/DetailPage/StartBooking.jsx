import Button from "@/Components/Button";
import ButtonNightStay from "@/Components/ButtonNightStay";
import InputDatePicker from "@/Components/InputDatePicker";

export default function StartBooking() {
    return (
        <div className="start-booking">
            <div className="mx-20 my-20">
                <div className="title"> Start Booking </div>
                <div className="basic-pc-hg pb-4">
                    $280 <span className="basic-pc">per night</span>
                </div>
                <div className="sub-title pb-2">How long you will stay</div>
                <ButtonNightStay />

                <div className="sub-title pb-2 pt-2">Pick a date</div>
                <InputDatePicker />
                <div className="disc-text pt-4 pb-6">
                    You will pay <span className="disc-text-hg">$480</span> per{" "}
                    <span className="disc-text-hg">2 night</span>
                </div>
                <Button
                    title="Continue to book"
                    className=""
                    isFull
                    isPrimary
                />
            </div>
        </div>
    );
}
