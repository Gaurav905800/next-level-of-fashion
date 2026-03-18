import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Button from "./Button";

const HeroSlider = () => {
  const slides = [
    {
      img: "https://www.plasticsoupfoundation.org/Nieuws/Untitled-design-3.png",
      title: "Sustainable Fashion",
      subtitle: "Discover eco-friendly clothing for a better future",
    },
    {
      img: "https://assets.teenvogue.com/photos/57c8a89df6d677dd6d122740/16:9/w_2560%2Cc_limit/clothing-swap.jpg",
      title: "Swap. Save. Style.",
      subtitle: "Exchange clothes and refresh your wardrobe",
    },
    {
      img: "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2221597444.jpg?c=original",
      title: "Trendy Collections",
      subtitle: "Upgrade your style with the latest fashion",
    },
  ];

  return (
    <div className="w-full h-screen relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            {/* Image */}
            <img
              src={slide.img}
              alt="hero"
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-start px-16 text-white">
              <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
              <p className="text-lg mb-6 max-w-xl">{slide.subtitle}</p>

              {/* <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
                
              </button> */}
              <Button />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
