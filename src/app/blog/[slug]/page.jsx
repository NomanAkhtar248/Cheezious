"use client";
import blogdata from "@/app/data/blogdata.json";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  const slug = params.slug;
  const product = blogdata.find((product) => product.slug === slug);

  if (!product) {
    return <div>Data not found</div>;
  }

  return (
    <div>
      <div key={product.slug}>
        {/* Title Section */}
        <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-6 flex flex-col">
          <h1 className="text-2xl sm:text-3xl md:text-6xl  text-center">
            {product.title}
          </h1>
        </div>

        {/* Image Section */}
        <div className="px-4 sm:px-6 md:px-10 lg:px-20">
          <img
            src={product.imgUrl1}
            alt="Blog Cover"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Content Section */}
        <div className="px-4 sm:px-6 md:px-10 lg:px-64 py-8 text-justify">
          <h2 className="text-xl font-bold mb-4">{product.title}</h2>
          <p className="mb-6">{product.text}</p>

          <h2 className="text-lg font-bold mb-2">{product.headding1}</h2>
          <p className="mb-6">{product.text1}</p>

          <h2 className="text-lg font-bold mb-2">{product.headding2}</h2>
          <p className="mb-6">{product.text2}</p>

          <h2 className="text-lg font-bold mb-2">{product.headding3}</h2>
          <p className="mb-6">{product.text3}</p>

          <h2 className="text-lg font-bold mb-2">{product.headding4}</h2>
          <p className="mb-6">{product.text4}</p>

          <h2 className="text-lg font-bold mb-2">{product.headding5}</h2>
          <p className="mb-6">{product.text5}</p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col bg-gray-100 justify-center items-center text-sm text-center py-5 text-gray-600 gap-2 px-4">
        <h2>Cheezious Copyright © 2025. All Rights Reserved.</h2>
        <h4>TERMS & CONDITIONS | PRIVACY POLICY</h4>
      </div>
    </div>
  );
}
