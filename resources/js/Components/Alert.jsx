import { useMemo } from "react";

export default function Alert(props) {
    const { status, message } = props;
    const className = useMemo(() => {
        switch (status) {
            case "success":
                return "text-green-800  bg-green-50";
            case "warning":
                return "text-yellow-800 bg-yellow-50";
            case "danger":
                return "text-red-800  bg-red-50";
            case "info":
                return "text-blue-800 bg-blue-50";
            case "dark":
                return "text-gray-800 bg-gray-50";
            default:
                return "text-blue-800 bg-blue-50";
        }
    }, [status]);
    return (
        <div
            className={`flex items-center gap-x-2 p-4 mb-4 text-sm rounded-lg ${className}`}
            role="alert"
        >
            <img src="/images/icon-alert.svg" width={16} height={16} alt="" />
            <span className="sr-only">{status}</span>
            <div>
                <span className="font-medium">{status}</span> {message}
            </div>
        </div>
    );
}
