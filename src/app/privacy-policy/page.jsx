import React from 'react';
import mydata from "@/app/data/privacy.json";

const Page = () => {
    return (
        <div>
            <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-40 py-8 max-w-7xl mx-auto">
                {mydata.map((data) => (
                    <div key={data.id}>
                        <div className="flex items-center justify-center">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-6 text-center">{data.title}</h1>
                        </div>

                        <div className="space-y-4 mt-6 text-justify">
                            <p className="font-semibold text-base sm:text-lg">{data.text}</p>
                            <p className="text-base sm:text-lg">{data.para}</p>

                            <h2 className="font-bold text-lg">{data.h1}</h2>
                            <p>{data.text1}</p>

                            <h2 className="font-bold text-lg">{data.h2}</h2>
                            <p>{data.text2}</p>

                            <h2 className="font-bold text-lg">{data.h3}</h2>
                            <h3 className="font-semibold text-lg">{data.headding1}</h3>
                            <p>{data.text3}</p>

                            <h2 className="font-bold text-lg">{data.h4}</h2>
                            <p>{data.text4}</p>

                            <h2 className="font-bold text-lg">{data.h5}</h2>
                            <p>{data.text5}</p>

                            <h2 className="font-bold text-lg">{data.h6}</h2>
                            <p>{data.text6}</p>

                            <h2 className="font-bold text-lg">{data.h7}</h2>
                            <p>{data.text7}</p>

                            <h2 className="font-bold text-lg">{data.h8}</h2>
                            <h3 className="font-semibold text-lg">{data.headding1}</h3>
                            <p>{data.text8}</p>

                            <h2 className="font-bold text-lg">{data.h9}</h2>
                            <p>{data.text9}</p>

                            <h2 className="font-bold text-lg">{data.h10}</h2>
                            <p>{data.text10}</p>

                            <h2 className="font-bold text-lg">{data.h11}</h2>
                            <h3 className="font-semibold text-lg">{data.headding1}</h3>
                            <p>{data.text11}</p>

                            <h2 className="font-bold text-lg">{data.h12}</h2>
                            <p>{data.text12}</p>

                            <h2 className="font-bold text-lg">{data.h13}</h2>
                            <p>{data.text13}</p>

                            <h2 className="font-bold text-lg">{data.h14}</h2>
                            <p>{data.text14}</p>

                            <h2 className="font-bold text-lg">{data.h15}</h2>
                            <p>{data.text15}</p>

                            <h2 className="font-bold text-lg">{data.h16}</h2>
                            <p>{data.text16}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex flex-col bg-gray-100 justify-center px-4 items-center text-sm text-center py-5 text-gray-600 gap-2">
                <h2>Cheezious Copyright © 2025. All Rights Reserved.</h2>
                <h4>TERMS & CONDITIONS | PRIVACY POLICY</h4>
            </div>
        </div>
    );
};

export default Page;
