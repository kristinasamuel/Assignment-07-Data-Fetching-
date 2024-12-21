// Home // client side rendering
"use client";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
// interface
interface IProduct {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
  category: string;
}
export default function ClientSideRendering() {
  const [data, setData] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  // fetching data form Api
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
  
        if (!response.ok) {
          console.error("Unable to load products. Please refresh the page and try again.");
        }
        const parsedResponse: IProduct[] = await response.json();
        setData(parsedResponse);
        console.log("New Products >>>>", parsedResponse);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-400 ">
      <h1 className="font-bold text-[44px] italic text-center mt-10">
        Client Side Data Fetching
      </h1>
      <h4 className="text-[32px] font-medium mt-10 text-center text-gray-900">
        "Explore Our Full Range of New Products"
      </h4>
      {loading ? (
        <div className="flex items-center justify-center mt-20">
          <p className="text-[24px] font-medium text-gray-700">
            Loading Please Wait....
          </p>
        </div>
      ) : (
        <div
          className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4
          gap-5 items-center justify-center mt-10 p-4"
        >
          {/* Display Products detail ,images in card */}
          {data.map((products, index) => (
            <Card
              key={index}
              className="flex flex-col border border-black p-4 mb-10"
            >
              <Image
                src={products.image}
                alt={products.title}
                width={200}
                height={200}
                className="w-full h-40 object-contain"
              />
              <p className="font-semibold text-[18px] mt-3 text-center">
                {products.title}
              </p>
              <p className="font-semibold text-[14px] mt-2 text-center">
                Price: ${products.price}
              </p>
              <p className="font-semibold text-[14px] mt-2 text-center">
                Category: {products.category}
              </p>
              <Button className="bg-blue-400 hover:bg-blue-500 text-white text-[18px] w-full mt-3">
                Add To Cart
              </Button>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
