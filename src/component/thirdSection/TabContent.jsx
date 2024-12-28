const TabContent = ({ title, description, image, isActive }) => {
    return (
        <div className={`rounded-lg dark:bg-gray-800 ${isActive ? 'block' : 'hidden'}`}>
            <div className="flex flex-col lg:flex-row justify-center">
                <div className="lg:w-1/2 flex flex-col justify-center items-center gap-6">
                    <h1 className="text-4xl font-semibold">{title}</h1>
                    <p>{description}</p>
                </div>
                <div className="lg:w-1/2">
                    <img src={image} alt={title} />
                </div>
            </div>
        </div>
    );
};

export default TabContent