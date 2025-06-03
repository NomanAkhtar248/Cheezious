import mydata from "@/app/data/logindata.json"
import { Button } from "@/components/ui/button";
import { PhoneCall } from 'lucide-react';
import Link from 'next/link';
import { MessageSquareText } from 'lucide-react';
export default function PhoneNumberPage() {
  return (
          <div>
               {mydata.map((login) => (
                   <div key={login.id} className="flex flex-col lg:flex-row h-screen overflow-hidden">
   
                       {/* Left Side - Content */}
                       <div className="w-full lg:w-3/5 flex flex-col lg:justify-between p-6 lg:p-10">                          
                         
                           <div className="mb-4 lg:mb-0">
                               <img
                                   src="/mainLogo.webp"
                                   alt="Cheezious"
                                   width={160}
                                   height={42}
                                   className="lg:mx-0"
                               />
                           </div>
   
                           {/* Responsive Centered Text + Buttons */}
                           <div className="flex-grow flex items-center justify-center mt-20">
                               <div className="text-center space-y-6 w-full max-w-md">
                                   <h1 className="text-2xl md:text-3xl font-bold">{login.phone}</h1>
                                   <p className="text-lg text-gray-600">{login.text2}</p>
                                   <div className="flex flex-col space-y-4 w-full">
                                       <div className="flex gap-1 sm:px-1 lg:px-8 overflow-hidden mb-4">
                                       <p className="bg-gray-100 rounded-lg h-10 w-16 items-center px-3 py-2 text-center">+92</p>
                                       <input type="text" 
                                       placeholder="322xxxxxxx"
                                       className="h-10 bg-gray-100 items-center  px-3 py-4 border-2 border-gray-200 rounded-lg "
                                       />
                                       </div>
                                       <Button
                                           variant="ghost"
                                           className='bg-yellow-400 hover:bg-gray-600 px-4 py-6 font-bold text-lg flex items-center justify-center cursor-pointer'>                                            <MessageSquareText  className="h-8 w-8 mr-2 fill-black" />
                                           SEND OTP
                                       </Button>                                                                        
                                                                            
                                   </div>
                               </div>
                           </div> 
                          
                       </div>   
                       {/* Right Side - Image (hidden on md and below) */}
                       <div className="w-2/5 h-screen hidden lg:block">
                           <img
                               src={login.imgUrl}
                               alt="Visual"
                               className="w-full h-full object-cover"
                           />
                       </div>
                   </div>
               ))}
           </div>
  );
}