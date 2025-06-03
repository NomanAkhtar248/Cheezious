"use client";
import React, { useState, useEffect } from "react";
import data from "@/app/data/menucard.json";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const uniqueCategories = [...new Set(data.map((item) => item.category))];

export default function Menubar() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleItems, setVisibleItems] = useState(6);
    const [selectedCategory, setSelectedCategory] = useState(uniqueCategories[0]);
    // Responsive category count
    useEffect(() => {
        const updateVisibleItems = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setVisibleItems(2);
            } else if (width < 1024) {
                setVisibleItems(4);
            } else {
                setVisibleItems(6);
            }
        };

        updateVisibleItems();
        window.addEventListener("resize", updateVisibleItems);
        return () => window.removeEventListener("resize", updateVisibleItems);
    }, []);

    const totalCategories = uniqueCategories.length;

    const scrollLeft = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    };
    const scrollRight = () => {
        if (currentIndex + visibleItems < totalCategories) {
            setCurrentIndex((prev) => prev + 1);
        }
    };
    const scrollToCategory = (category) => {
        const categoryElement = document.getElementById(category);
        setSelectedCategory(category);
        if (categoryElement) {
            const offset = 160;
            const elementPosition = categoryElement.offsetTop;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="w-full px-2 sm:px-4 md:px-6 lg:px-10">
            <div className="relative w-full flex items-center bg-gray-100 px-4 py-3 rounded-lg overflow-hidden">

                {/* Left Scroll Button */}
                <Button
                    variant="outline"
                    size="icon"
                    onClick={scrollLeft}
                    className="group absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-white border-orange-600 rounded-full shadow-md cursor-pointer hover:bg-orange-400"
                >
                    <ChevronLeft className="text-orange-600 group-hover:text-white transition-colors duration-200" />
                </Button>

                {/* Category List */}
                <div className="w-full flex justify-center items-center space-x-3 overflow-hidden mx-10 sm:mx-12 md:mx-16 lg:mx-20">
                    {uniqueCategories
                        .slice(currentIndex, currentIndex + visibleItems)
                        .map((category, index) => (
                            <div
                                key={index}
                                onClick={() => scrollToCategory(category)}
                                className={`flex-grow text-center whitespace-nowrap px-4 py-2 rounded-lg font-semibold text-md cursor-pointer transition-all duration-200 ${selectedCategory === category
                                    ? "bg-yellow-300 text-black"
                                    : "bg-white text-black hover:bg-yellow-300"
                                    }`}
                            >
                                {category}
                            </div>
                        ))}
                </div>

                {/* Right Scroll Button */}
                <Button variant="outline" size="icon"
                    onClick={scrollRight}
                    className="group absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-white border-orange-600 rounded-full shadow-md cursor-pointer hover:bg-amber-400">
                    <ChevronRight className="text-orange-600 group-hover:text-white" />
                </Button>
            </div>
        </div>
    );
}
