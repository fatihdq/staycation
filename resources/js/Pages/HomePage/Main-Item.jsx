export default function MainItem() {
    return (
        <div id="most-picked" className="content-item-main">
            <div className="title">Most Picked</div>
            <div className="grid grid-rows-2 grid-flow-col justify-items-start gap-4">
                <a href="/detail-page" className="row-span-2">
                    <div className="h-[460px] w-[361px] relative">
                        <img
                            src="/images/image-mostpicked-1.jpg"
                            height={460}
                            width={361}
                            alt=""
                        />
                        <div className="badges absolute top-0 right-0 w-full">
                            <div className="text">
                                $50{" "}
                                <span className="text-nominal">per night</span>
                            </div>
                        </div>
                        <div className="absolute h-[460px] w-[361px] bottom-0 w-full content-img"></div>
                        <div className="absolute bottom-0 w-full">
                            <div className="content-title ">
                                Blue Origin Farm
                            </div>
                            <div className="content-loc">
                                Jakarta, Indonesia
                            </div>
                        </div>
                    </div>
                </a>
                <a href="/detail-page" className="row-span-1 col-span-1">
                    <div className="h-[215px] w-[361px] relative ">
                        <img
                            src="/images/image-mostpicked-2.jpg"
                            height={215}
                            width={361}
                            alt=""
                        />
                        <div className="badges absolute top-0 right-0 w-full">
                            <div className="text">
                                $22{" "}
                                <span className="text-nominal">per night</span>
                            </div>
                        </div>
                        <div className="absolute h-[215px] w-[361px] bottom-0 w-full content-img"></div>
                        <div className="absolute bottom-0 w-full">
                            <div className="content-title ">Ocean Land</div>
                            <div className="content-loc">
                                Bandung, Indonesia
                            </div>
                        </div>
                    </div>
                </a>
                <a href="/detail-page" className="row-span-1 col-span-1">
                    <div className="h-[215px] w-[361px] relative">
                        <img
                            src="/images/image-mostpicked-3.jpg"
                            height={215}
                            width={361}
                            alt=""
                        />
                        <div className="badges absolute top-0 right-0 w-full">
                            <div className="text">
                                $62{" "}
                                <span className="text-nominal">per night</span>
                            </div>
                        </div>
                        <div className="absolute h-[215px] w-[361px] bottom-0 w-full content-img"></div>
                        <div className="absolute bottom-0 w-full">
                            <div className="content-title ">Vinna Villa</div>
                            <div className="content-loc">Malang, Indonesia</div>
                        </div>
                    </div>
                </a>
                <a href="/detail-page" className="row-span-1 col-span-1">
                    <div className="h-[215px] w-[361px] relative">
                        <img
                            src="/images/image-mostpicked-4.jpg"
                            height={215}
                            width={361}
                            alt=""
                        />
                        <div className="badges absolute top-0 right-0 w-full">
                            <div className="text">
                                $856{" "}
                                <span className="text-nominal">per night</span>
                            </div>
                        </div>
                        <div className="absolute h-[215px] w-[361px] bottom-0 w-full content-img"></div>
                        <div className="absolute bottom-0 w-full">
                            <div className="content-title ">Stark House</div>
                            <div className="content-loc">Malang, Indonesia</div>
                        </div>
                    </div>
                </a>
                <a href="/detail-page" className="row-span-1 col-span-1">
                    <div className="h-[215px] w-[361px] relative">
                        <img
                            className="content-img"
                            src="/images/image-mostpicked-5.jpg"
                            height={215}
                            width={361}
                            alt=""
                        />
                        <div className="badges absolute top-0 right-0 w-full">
                            <div className="text">
                                $72{" "}
                                <span className="text-nominal">per night</span>
                            </div>
                        </div>
                        <div className="absolute h-[215px] w-[361px] bottom-0 w-full content-img"></div>
                        <div className="absolute bottom-0 w-full">
                            <div className="content-title ">Bobox</div>
                            <div className="content-loc">Medan, Indonesia</div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}
