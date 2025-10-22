import clsx from "clsx";
import React, { useState, useEffect } from "react";

interface DataItem {
    label: string;
    values: React.ReactNode[];
}

interface Group {
    title: string;
    data: DataItem[];
}

interface InfoboxProps {
    title: string;
    images: string[];
    groups: Group[];
}

const InfoBox: React.FC<InfoboxProps> = ({ title, images, groups }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) {
            return;
        }

        const timer = setInterval(() => {
            setCurrentImageIndex(
                (prevIndex) => (prevIndex + 1) % images.length
            );
        }, 2000);

        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="float-right md:max-w-[256px] w-full mc-card pt-4 grid gap-4 m-[4px_4px_24px_24px]">
            {/* Main Header */}
            <div className="flex items-center justify-center">
                <h2 className="text-2xl font-bold m-0">{title}</h2>
            </div>

            {/* Main Image Display */}
            {images.length > 0 && (
                <div className="mc-card-reversed p-4 m-1 flex items-center justify-center">
                    <div className="max-w-32 w-full h-32 flex-shrink-0">
                        <img
                            key={currentImageIndex}
                            src={images[currentImageIndex]}
                            alt={`${title} - image ${currentImageIndex + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            )}

            {/* Thumbnails Section */}
            {images.length > 1 && (
                <div className="overflow-x-auto scrollbar scrollbar-track-card-background scrollbar-thumb-card-background-light">
                    <div className="flex gap-1">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="mc-card-reversed p-1 min-w-14 max-w-14 w-full min-h-14 max-h-14 h-full m-1"
                            >
                                <img
                                    src={image}
                                    alt={`Thumbnail ${index + 1}`}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className="w-full h-12 object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Data Groups */}
            {groups.map((group, groupIndex) => (
                <div key={groupIndex}>
                    <div className="py-2">
                        <h3 className="text-base font-bold m-0">
                            {group.title}
                        </h3>
                    </div>
                    <div className="text-sm">
                        {group.data.map((item, itemIndex) => (
                            <div
                                key={itemIndex}
                                className={clsx(
                                    "flex",
                                    itemIndex === group.data.length - 1
                                        ? "mb-0"
                                        : "mb-2"
                                )}
                            >
                                <span className="w-[96px] font-medium mr-2">
                                    {item.label}
                                </span>
                                <ul className="list-none p-0 flex-1 m-0">
                                    {item.values.map((value, valueIndex) => (
                                        <li
                                            key={valueIndex}
                                            className="whitespace-pre-wrap"
                                        >
                                            {value}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default InfoBox;
