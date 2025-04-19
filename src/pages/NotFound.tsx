import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {


  return (
    <main className="min-h-screen ">
      <Navbar />

      <div className="mt-40 mb-20 flex items-center flex-col justify-center ">
        <div className="text-center">
          <h1 className="text-9xl italic font-bold mb-4 flex items-center justify-center gap-5">
            <span className="h-fit w-fit rounded-sm bg-primary">4</span>
            <span className="h-fit w-fit rounded-sm bg-primary">0</span>
            <span className="h-fit w-fit rounded-sm bg-primary">4</span>

          </h1>
          <p className="text-3xl text-gray-600 mb-4">Oops! Page not found</p>
          <Button size="lg" variant="outline" className="bg-primary text-white hover:bg-primary/80 transition-all duration-300">
            <Link to="/">Home</Link>
            {/* Return to Home */}
          </Button>
        </div>
      </div>
      <Footer />
    </main>

  );
};

export default NotFound;
