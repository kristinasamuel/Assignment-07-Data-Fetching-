// Home //Contact Page

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen bg-gray-400 flex flex-col items-center justify-center gap-10 p-4">
      <h2 className="font-bold text-[42px]  self-center md:self-start lg:self-start ml-[0px] md:ml-[60px] lg:ml-[60px] ">
        Contact Me:
      </h2>

      <div className="bg-slate-200 p-6 rounded-lg shadow-lg w-full max-w-lg">
        {/*Contact me Form  */}
        <form className="w-full">
          <Label className="font-Poppins font-medium text-[16px] text-left w-full">
            Your name
          </Label>
          <Input
            type="text"
            placeholder="Your Name"
            className="text-[16px] font-Poppins text-[#9F9F9F] mt-2 rounded-[10px] h-[55px] w-full border border-solid border-[#9F9F9F] mb-4 px-4"
          />
          <Label className="font-Poppins font-medium text-[16px] text-left w-full">
            Email 
          </Label>
          <Input
            type="text"
            placeholder="Your Email"
            className="text-[16px] font-Poppins text-[#9F9F9F] mt-2 rounded-[10px] h-[55px] w-full border border-solid border-[#9F9F9F] mb-4 px-4"
          />
          <Label className="font-Poppins font-medium text-[16px] text-left w-full">
            Message
          </Label>
          <Input
            type="text"
            placeholder="Message"
            className="text-[16px] font-Poppins text-[#9F9F9F] mt-2 rounded-[10px] h-[55px] w-full border border-solid border-[#9F9F9F] mb-6 px-4"
          />
          {/* send message button */}
          <Button className="bg-[#B88E2F] text-[#FFFFFF] hover:bg-[#dab561] text-[17px] rounded-[10px] mt-4">
            Send
          </Button>
        </form>
      </div>
      <div>
        {/* Thank you Message */}
        <p className="text-lg  font-medium italic text-center">
          I'm available 24/7 to assist you,your convenience is my priority.
          Thank you
        </p>
      </div>
    </div>
  );
}
