type PillProps = {
    label: string;
    active: boolean;
    onClick: () => void;
};

const Pill: React.FC<PillProps> = ({ label, active, onClick }) => {
    return (
        <button
            className={`px-4 py-2 rounded-full border ${active ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-700 border-gray-300"
                } hover:bg-blue-500 hover:text-white transition`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};


export default Pill