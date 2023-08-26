export default function Footer(props) {
    return (
        <div className="footer">
            <div className="line" />
            <div className="footer-content grid grid-cols-5 gap-4 pt-10">
                <div className="col-span-2 pl-8 pr-32">
                    <div className="logo">
                        Stay<span className="staycation">cation.</span>
                    </div>
                    <div className="item-description">
                        We kaboom your beauty holiday instantly and memorable.
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="title-item">For Beginners</div>
                    <div className="item">New Account</div>
                    <div className="item">Start Booking a Room</div>
                    <div className="item">Use Payments</div>
                </div>
                <div className="col-span-1">
                    <div className="title-item">For Beginners</div>
                    <div className="item">New Account</div>
                    <div className="item">Start Booking a Room</div>
                    <div className="item">Use Payments</div>
                </div>
                <div className="col-span-1">
                    <div className="title-item">For Beginners</div>
                    <div className="item">New Account</div>
                    <div className="item">Start Booking a Room</div>
                    <div className="item">Use Payments</div>
                </div>
            </div>
            <div className="copyright">
                Copyright 2019 • All rights reserved • Staycation
            </div>
        </div>
    );
}
