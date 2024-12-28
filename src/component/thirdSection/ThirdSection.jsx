import image1 from '../../assets/1mdm-product-1.png'
import image2 from '../../assets/1mdm-product-image-4.png'
import image3 from '../../assets/1mdm-product-2.png'
import image4 from '../../assets/1mdm-product-3.png'
import { useState } from "react";
import TabContent from "./TabContent";

const ThirdSection = () => {
    const [activeTab, setActiveTab] = useState('profile');

    // Tabs Data
    const tabs = [
        { id: 'profile', label: 'Custom storefront', title: 'Set up a store that showcases your brand', description: 'Differentiate yourself from the competition with a full store dedicated to your products- no coding or design skills necessary!', image: image1 },
        { id: 'dashboard', label: 'Advertising tools', title: 'Increase exposure by up to 120% with a suite of smart advertising tools.', description: 'Get your products placed in the right spots to be noticed by the exact audience you are targeting.', image: image4 },
        { id: 'settings', label: 'Data and analytics', title: 'Optimize your every move with in-depth data and customer insights', description: 'Improve performance with dashboards detailing product exposure, click volume, spend, average cost, store visits, and more.', image: image2 },
        { id: 'contacts', label: 'Customer support', title: 'Know you’re supported throughout your journey', description: 'From onboarding help to online chats to local support during business hours and account optimization tips -- we’re here for you.', image: image3 },
    ];

    return (
        <div>
            <h1 className="h-48 flex justify-center items-center text-2xl text-[#a10005] text-center lg:text-4xl font-semibold">
                Grow your business with a <br className="block lg:hidden" />
                suite of tools built for you
            </h1>
            <div className="flex flex-col lg:flex-row w-3/4 mx-auto">
                {/* Tabs Section */}
                <div className="lg:w-1/4 border-gray-200 dark:border-gray-700 mb-4">
                    <ul className="flex flex-col text-sm font-medium text-left" id="default-tab" role="tablist">
                        {tabs.map((tab) => (
                            <li key={tab.id} role="presentation">
                                <button
                                    className={`block w-full text-xl font-semibold p-4 border-l-2 ${
                                        activeTab === tab.id
                                            ? 'text-gray-800 border-[#ed1c24] dark:text-white'
                                            : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                                    }`}
                                    id={`${tab.id}-tab`}
                                    onClick={() => setActiveTab(tab.id)}
                                    type="button"
                                    role="tab"
                                    aria-controls={tab.id}
                                    aria-selected={activeTab === tab.id}
                                >
                                    {tab.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Content Section */}
                <div className="lg:w-3/4">
                    {tabs.map((tab) => (
                        <TabContent
                            key={tab.id}
                            title={tab.title}
                            description={tab.description}
                            image={tab.image}
                            isActive={activeTab === tab.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ThirdSection;
