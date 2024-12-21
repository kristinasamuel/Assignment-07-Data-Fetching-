// Home 
// Server side redering
import React from "react";
import { Card } from "@/components/ui/card";

//Interface 
interface IBooks {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

const ServerSideRendering = async () => {
  // Fetching Data from api (Books) 
  const responce = await fetch("https://simple-books-api.glitch.me/books/");
  const parsedResponce: IBooks[] = await responce.json();
  console.log("Books", parsedResponce);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-400 ">
      <h1 className="font-bold text-[42px] italic text-center mt-10 ">
        Server Side Data Fetching
      </h1>
      <h4 className="text-[32px] font-medium mt-10 text-center text-gray-900 ">"Discover the New Collection of Books"</h4>

      <div className="grid grid-col-1 md:grid-cols-3 lg:grid-cols-3 gap-4 items-center justify-center mt-5 p-4">
        {/*Card, display books details in cards*/}
        {parsedResponce.map((Books, index) => (
          <Card
            key={index}
            className="flex flex-col border border-black p-3 mb-10 bg-[#eeee6544]"
          >
            <p className="font-semibold text-[18px] mt-3 text-center">
              Name:{Books.name}
            </p>
            <p className="font-semibold text-[14px] mt-2 text-center">
              Type:{Books.type}
            </p>
            <p className="font-semibold text-[14px] mt-2 text-center">
              Available : {Books.available ? "Yes" : "No"}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServerSideRendering;
