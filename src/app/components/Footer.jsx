import React from 'react';
import footer from '@/app/data/footer.json';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
      <div className="px-4 py-10 overflow-hidden">
        {footer.map((chezfooter) => (
          <div key={chezfooter.id} className="rounded-lg overflow-hidden">
            <div
              className="hidden lg:flex h-[450px] w-full rounded-lg items-center px-10"
              style={{
                backgroundImage: `url(${chezfooter.imgUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="max-w-2xl px-30">
                <h1 className="text-4xl font-bold mb-4 text-red-500 max-w-70">{chezfooter.title}</h1>
                <p className="text-xl mb-6">{chezfooter.subtext}</p>
                <div className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Enter Email Address"
                    className="rounded-lg border-2 px-4 py-3 w-full sm:w-auto"
                  />
                  <Button variant="secondary"
                    className="bg-yellow-500 text-black hover:bg-gray-700 px-6 py-3 w-35 cursor-pointer" >
                    SUBSCRIBE
                  </Button>
                </div>
              </div>
            </div>
            <div className="block lg:hidden rounded-lg text-center items-center">
              <h1 className="text-2xl font-bold text-red-600 mb-4">{chezfooter.title}</h1>
              <p className="text-base mb-6 text-gray-700">{chezfooter.subtext}</p>
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Enter Email Address"
                  className="rounded-lg border-2 px-4 py-3 w-full"
                />
                <Button
                  variant="secondary"
                  className="bg-yellow-500 text-black font-semibold hover:bg-gray-700 px-6 py-3 w-30 cursor-pointer"
                >
                  SUBSCRIBE
                </Button>
              </div>
            </div>

          </div>
        ))}
      </div>
      <div className="flex flex-col bg-gray-100 justify-center px-4 items-center text-sm text-center py-5 text-gray-600 gap-2">
        <h2>Cheezious Copyright © 2025. All Rights Reserved.</h2>
        <Link href='/privacy-policy'>
        <h4>TERMS & CONDITIONS | PRIVACY POLICY</h4>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
