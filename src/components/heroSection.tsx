// Home / HeroSection
//Data Fetching   
export default function HeroSection() {
  return (
    <div className="w-full bg-gray-400 min-h-screen flex flex-col justify-center p-4">
    <h3 className="font-bold text-[36px] sm:text-[48px] text-center mt-10">
      Exploring Data Fetching
    </h3>
    <p className="font-medium text-[22px] sm:text-[24px] text-center mt-4">
      Data fetching refers to the process of getting data from an external source (like an API or database).
    </p>
    <div className="flex flex-col lg:flex-row justify-center items-center mt-10 space-y-5 lg:space-y-0 lg:space-x-8">
      <div className="p-4 max-w-xl w-full sm:w-auto">
        <h1 className="font-semibold text-[24px] sm:text-[32px]">1. Server-Side Data Fetching</h1>
        <p className="font-medium text-[16px] sm:text-[18px] mt-4">
          Server-side data fetching is a process where data is retrieved from a server,
          and a fully rendered page is sent to the browser. It ensures users get a complete page
          with all necessary information.
        </p>
      </div>
      <div className="p-4 max-w-xl w-full sm:w-auto">
        <h2 className="font-semibold text-[24px] sm:text-[32px]">2. Client-Side Data Fetching</h2>
        <p className="font-medium text-[16px] sm:text-[18px] mt-4">
        Client-side data fetching is the process where the browser retrieves data from a server and displays it dynamically. 
        It is commonly used to fetch and render data from a server or database directly in the browser.
        </p>
      </div>
    </div>
  </div>
  );
}
