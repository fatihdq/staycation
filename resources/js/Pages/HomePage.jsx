import Header from "@/Parts/Header";
import Hero from "./HomePage/Hero";
import MainItem from "./HomePage/Main-Item";
import Item from "./HomePage/Item";
import Testimony from "../Parts/Testimony";
import Footer from "@/Parts/Footer";

import data from "../data-item.json";

export default function HomePage() {
    return (
        <>
            <div className="c-container">
                <Hero />
                <MainItem />
                <Item />
                <Testimony
                    name={data["testimony"]["name"]}
                    job={data["testimony"]["job"]}
                    desc={data["testimony"]["description"]}
                    rate={data["testimony"]["rate"]}
                    imageUrl={data["testimony"]["imageUrl"]}
                />
            </div>
            <Footer />
            <Header />
        </>
    );
}
