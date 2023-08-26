import React, { useState } from "react";
export default function InputDatePicker() {
    return (
        <div className="flex date-pick">
            <img className="date-pick-img" src="/images/icon-calendar.svg" />
            <div className="txt flex-initial w-60 pt-2">20 Jan - 22 Jan</div>
        </div>
    );
}
