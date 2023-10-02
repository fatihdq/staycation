import HeaderLogo from "../Parts/HeaderLogo";
import Button from "@/Components/Button";
import Input from "@/Components/Input";

import React, { useState } from "react";
import { usePage, router } from "@inertiajs/react";

export default function RegisterPage() {
    const { errors } = usePage().props;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const postLogin = async (e) => {
        e.preventDefault();

        router.post("login/postLogin", {
            email: email,
            password: password,
        });
    };

    return (
        <>
            <HeaderLogo />
            <div className="flex justify-center pt-12 auth-title">
                Register Staycation
            </div>
            <div className="flex justify-center pt-2 auth-desc ">
                Please fill up the blank fields below
            </div>
            <div className="flex justify-center  pt-14 pb-20">
                <div className="border border-gray-200 rounded-md p-12">
                    <form onSubmit={postLogin}>
                        <div className="flex justify-center ">
                            <div>
                                <Input
                                    label="Email"
                                    type="text"
                                    id="email"
                                    placeholder="Please input your email"
                                    handleOnChange={(value) => setEmail(value)}
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
                                />
                                {errors.password && (
                                    <p className="text-red-500 text-xs italic pb-2">
                                        {errors.password}
                                    </p>
                                )}
                            </div>
                        </div>

                        <a className="flex justify-start pt-8" href="/">
                            <Button
                                type="submit"
                                title="Login"
                                isPrimary
                                isFull
                            />
                        </a>
                    </form>
                    <a className="flex justify-start pt-4" href="/register">
                        <Button title="Register" isPassive isFull />
                    </a>
                </div>
            </div>
        </>
    );
}
