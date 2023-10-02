import HeaderLogo from "../Parts/HeaderLogo";
import Button from "@/Components/Button";
import Input from "@/Components/Input";

import React, { useState } from "react";
import { usePage } from "@inertiajs/react";
import { router } from "@inertiajs/react";

export default function RegistrationPage() {
    const { errors } = usePage().props;
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");

    const postRegister = async (e) => {
        e.preventDefault();

        router.post("register/store", {
            firstname: firstname,
            lastname: lastname,
            phone: phone,
            email: email,
            password: password,
        });
    };

    let passwordNotif = [];
    if (password !== repassword && repassword !== "") {
        passwordNotif.push(
            <p className="text-red-500 text-xs italic pb-2">wrong password</p>
        );
    } else {
        passwordNotif = [];
    }
    return (
        <>
            <HeaderLogo />
            <div className="flex justify-center pt-12 auth-title">
                Registration Staycation
            </div>
            <div className="flex justify-center pt-2 auth-desc ">
                Please fill up the blank fields below
            </div>
            <div className="flex justify-center pt-14 pb-20">
                <div className="border border-gray-200 rounded-md p-12">
                    <form onSubmit={postRegister}>
                        <div className="flex justify-center ">
                            <div>
                                <Input
                                    label="First Name"
                                    type="text"
                                    id="firstname"
                                    placeholder="Please input your first name"
                                    handleOnChange={(value) =>
                                        setFirstname(value)
                                    }
                                    required
                                />
                                {errors.firstname && (
                                    <p className="text-red-500 text-xs italic pb-2">
                                        {errors.firstname}
                                    </p>
                                )}
                                <Input
                                    label="LastName"
                                    type="text"
                                    id="lastname"
                                    placeholder="Please input your last name"
                                    handleOnChange={(value) =>
                                        setLastname(value)
                                    }
                                    required
                                />
                                {errors.lastname && (
                                    <p className="text-red-500 text-xs italic pb-2">
                                        {errors.lastname}
                                    </p>
                                )}
                                <Input
                                    label="Phone Number"
                                    type="tel"
                                    id="phone"
                                    placeholder="Please input your phone"
                                    handleOnChange={(value) => setPhone(value)}
                                    required
                                />
                                {errors.phone && (
                                    <p className="text-red-500 text-xs italic pb-2">
                                        {errors.phone}
                                    </p>
                                )}
                                <Input
                                    label="Email"
                                    type="text"
                                    id="email"
                                    placeholder="Please input your email"
                                    handleOnChange={(value) => setEmail(value)}
                                    required
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-xs italic pb-2">
                                        {errors.email}
                                    </p>
                                )}
                                <Input
                                    label="Password"
                                    type="password"
                                    id="password"
                                    placeholder="Please input your password"
                                    handleOnChange={(value) =>
                                        setPassword(value)
                                    }
                                    required
                                />
                                {errors.password && (
                                    <p className="text-red-500 text-xs italic pb-2">
                                        {errors.password}
                                    </p>
                                )}
                                <Input
                                    label="re-Password"
                                    type="password"
                                    id="re-password"
                                    placeholder="Confirmation your password"
                                    handleOnChange={(value) =>
                                        setRepassword(value)
                                    }
                                    required
                                />

                                {passwordNotif}
                            </div>
                        </div>
                        <Button
                            type="submit"
                            title="Register"
                            isPrimary
                            isFull
                        />
                    </form>

                    <a className="flex justify-start pt-4" href="/login">
                        <Button title="Login" isPassive isFull />
                    </a>
                </div>
            </div>
        </>
    );
}
