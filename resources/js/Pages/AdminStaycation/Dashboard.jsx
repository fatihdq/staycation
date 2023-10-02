import SideBar from "@/Pages/AdminStaycation/SideBar";
import Navbar from "@/Pages/AdminStaycation/Navbar";
import { usePage } from "@inertiajs/react";

export default function Dashboard() {
    const { data } = usePage().props;
    return (
        <>
            <Navbar />
            <SideBar pageTitle={data.pageTitle} />

            <main className="admin-main">hello</main>
        </>
    );
}
