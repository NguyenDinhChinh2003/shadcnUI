import Image from "next/image";
import React from "react";
import Header from "@/components/layouts/Header"
import Footer from "@/components/layouts/Footer"

export default function Home() {
  // const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div className="md:container md:mx-auto">
      <div className="header">
        <Header />
      </div>
      
      <div className="footer">
        <Footer />
      </div>
    </div>
    
  );
}
