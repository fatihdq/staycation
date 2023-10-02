export default function Navbar() {
    return (
        <div className="admin-nav">
            <div className="bg-white">
                <div className="flex-col flex">
                    <div className="w-full border-b-2 border-gray-200">
                        <div className="bg-white h-16 justify-between items-center mx-auto px-4 flex">
                            <div className="logo pl-8">
                                Stay<span className="staycation">cation</span>
                            </div>
                            <div className="lg:block mr-auto ml-32 hidden relative max-w-xs">
                                <p className="pl-3 items-center flex absolute inset-y-0 left-0 pointer-events-none">
                                    <span className="justify-center items-center flex">
                                        <span className="justify-center items-center flex">
                                            <span className="items-center justify-center flex">
                                                <img
                                                    src="/images/icon-search.svg"
                                                    height={24}
                                                    width={24}
                                                    alt=""
                                                />
                                            </span>
                                        </span>
                                    </span>
                                </p>
                                <input
                                    placeholder="Type to search"
                                    type="search"
                                    className="border border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm w-full rounded-lg pt-2 pb-2 pl-10 px-3 py-2"
                                />
                            </div>
                            <div className="md:space-x-6 justify-end items-center ml-auto flex space-x-3">
                                <div className="relative">
                                    <p className="pt-1 pr-1 pb-1 pl-1 bg-white text-gray-700 rounded-full transition-all duration-200 hover:text-gray-900 focus:outline-none hover:bg-gray-100">
                                        <span className="justify-center items-center flex">
                                            <span className="justify-center items-center flex">
                                                <span className="items-center justify-center flex">
                                                    <img
                                                        src="/images/icon-notification.svg"
                                                        width={25}
                                                        height={25}
                                                        alt=""
                                                    />
                                                </span>
                                            </span>
                                        </span>
                                    </p>
                                    <p className="px-1.5 py-0.5 font-semibold text-xs items-center bg-indigo-600 text-white rounded-full inline-flex absolute -top-px -right-1">
                                        2
                                    </p>
                                </div>
                                <div className="justify-center items-center flex relative pr-10">
                                    <img
                                        src="/images/default-profile-picture.jpeg"
                                        className="object-cover btn- h-9 w-9 rounded-full mr-2 bg-gray-300"
                                        alt=""
                                    />
                                    <p className="font-semibold text-sm">
                                        Fatih Assidhiqi
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
