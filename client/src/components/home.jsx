import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import shoe1 from "../assets/shoe1.avif";
import shoe2 from "../assets/shoe2.avif";
import shoe3 from "../assets/shoe3.avif";
import shoe4 from "../assets/shoe4.avif";
import shoe5 from "../assets/shoe5.avif";
import shoe6 from "../assets/shoe6.jpeg";





const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>    
    <div className="flex h-[100%] w-[100%] ">
      <div className="w-[40%]   flex  flex-col items-center p-4 gap-4 ">
        <span className="text-5xl mt-20 font-bold ">Welcome To the world of Footware</span>
        <p className="mt-6 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          quaerat laudantium provident eveniet. Minus dolor temporibus harum
          fugiat voluptas facere?
        </p>
      </div>

      <div className="w-[60%]   h-120">
        <Slider {...sliderSettings}>
          <div>
            <img src={shoe2} alt="Shoe 1" className=" w-[100%]  h-110  " />
          </div>
          <div>
            <img src={shoe3} alt="Shoe 2" className="  w-[100%] h-110  "/>
          </div>
          <div>
            <img src={shoe4} alt="Shoe 3" className="   w-[100%]  h-110  " />
          </div>
          <div>
            <img src={shoe5} alt="Shoe 3" className="   w-[100%]  h-110   " />
          </div>
          <div>
            <img src={shoe6} alt="Shoe 3" className="   w-[100%]  h-120   " />
          </div>
        </Slider>
      </div>
    </div>
  
    {/* <div className="h-50 w-312 border-4">
      <img src={shoeBanner} alt="" srcset="" className="h-45 w-full" />
    </div> */}
    </>
   
  );
};

export default Home;













