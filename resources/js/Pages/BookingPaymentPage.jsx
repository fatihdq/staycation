import Header from "../Parts/HeaderLogo";
import Navigation from "./Booking/Navigation";
import Input from "@/Components/Input";
import Button from "@/Components/Button";
export default function Payment() {
    return (
        <>
            <Header />
            <Navigation pageTitle="Booking Payment" />
            <div className="flex justify-center pt-8 booking-title">
                Payment
            </div>
            <div className="flex justify-center pt-2 booking-desc ">
                Kindly follow the instructions below
            </div>
            <div className="flex justify-center pt-10 gap-x-20">
                <div className="payment-info-text w-[280px]">
                    <div className="payment-info-text-bold pb-3">
                        Transfer Pembayaran:
                    </div>
                    <div>
                        Tax: <span className="payment-info-text-bold">10%</span>
                    </div>
                    <div>
                        Sub total:{" "}
                        <span className="payment-info-text-bold">$480 USD</span>
                    </div>
                    <div>
                        Total:{" "}
                        <span className="payment-info-text-bold">$580 USD</span>
                    </div>
                    <div className="flex justify-start items-center gap-x-5 pt-5">
                        <div className="w-[89px] flex justify-center items-center">
                            <img
                                src="/images/image-bca.png"
                                width={50}
                                height={50}
                                alt=""
                            />
                        </div>

                        <div>
                            <div>Bank Central Asia</div>
                            <div>2208 1996</div>
                            <div>Fatih Assidhiqi</div>
                        </div>
                    </div>
                    <div className="flex justify-start items-center gap-x-5 pt-2">
                        <div className="w-[89px] flex justify-center items-center">
                            <img
                                src="/images/image-mandiri.png"
                                width={64}
                                height={64}
                                alt=""
                            />
                        </div>
                        <div>
                            <div>Bank Mandiri</div>
                            <div>2208 1996</div>
                            <div>Fatih Assidhiqi</div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <hr className=" w-0.5 h-full bg-gray-100 flex items-center" />
                </div>
                <div className="w-[280px]">
                    <form>
                        <Input
                            label="First Name"
                            id="firstname"
                            type="file"
                            placeholder="Please type here"
                        />
                        <Input
                            label="Nama Bank"
                            id="bank"
                            type="text"
                            placeholder="Please type here"
                        />
                        <Input
                            label="Nama Pengirim"
                            id="sendername"
                            type="text"
                            placeholder="Please type here"
                        />
                    </form>
                </div>
            </div>
            <div className="flex justify-center pt-10 booking-title">
                <a href="/complete">
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
