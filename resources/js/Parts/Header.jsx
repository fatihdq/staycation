export default function Header(props) {
    return (
        <nav className="header sticky top-0">
            <div className="bg-white shadow-lg py-5">
                <div className="content-header">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-2 label">
                            <a href="/">
                                Stay<span className="staycation">cation</span>
                            </a>
                        </div>
                        <nav className="nav">
                            <ul className="grid grid-cols-4 gap-1 justify-items-center">
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>Browser by</li>
                                <li>Stories</li>
                                <li>Agents</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </nav>
    );
}
