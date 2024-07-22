"use client";
import { useAPiTMDB } from "@/contexts/ApiContextTMDB";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import FilmCarousel from "@/components/FilmsCarousel";
import { useRef, useState } from "react";
import { FilmNowPlayingCard } from "@/components/FilmNowPlayingCard";
import { MdNavigateNext } from "react-icons/md";
import "./page.css";

export default function Home() {
  const { nowPlaying, popular, topRated } = useAPiTMDB();
  const [step, setStep] = useState(1);
  const swiperRef = useRef<any>(null);

  return (
    <main className="w-full flex h-full flex-col p-10 overflow-hidden">
      <div className="w-full flex gap-10 text-[#76737a] text-lg">
        <p
          className={`${step === 1 ? "text-white" : ""}`}
          onClick={() => setStep(1)}
        >
          Home
        </p>
        <p
          className={`${step === 2 ? "text-white" : ""}`}
          onClick={() => setStep(2)}
        >
          Series
        </p>
        <p
          className={`${step === 3 ? "text-white" : ""}`}
          onClick={() => setStep(3)}
        >
          TV Show
        </p>
      </div>
      <div className="w-full flex flex-col h-full overflow-hidden">
        <div className="w-full flex flex-col mt-4 gap-2">
          <div className="w-full flex justify-between items-center">
            <h2 className="text-lg font-bold">Now Playing 🍿</h2>
            <div className="flex gap-2">
              <button
                className="custom-swiper-button-prev rounded-full flex items-center justify-center text-3xl rotate-180 text-white bg-[#113995]"
                onClick={() => swiperRef.current?.swiper.slidePrev()}
              >
                <MdNavigateNext />
              </button>
              <button
                className="custom-swiper-button-next rounded-full flex items-center justify-center text-3xl text-white bg-[#113995]"
                onClick={() => swiperRef.current?.swiper.slideNext()}
              >
                <MdNavigateNext />
              </button>
            </div>
          </div>
          <Swiper
            spaceBetween={30}
            slidesPerView={"auto"}
            centeredSlides={false}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation={{
              nextEl: ".custom-swiper-button-next",
              prevEl: ".custom-swiper-button-prev",
            }}
            ref={swiperRef}
          >
            {nowPlaying &&
              nowPlaying.map((film) => (
                <SwiperSlide style={{width: 800}} key={film.id}>
                  <FilmNowPlayingCard film={film} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>

        {popular && <FilmCarousel title="Popular 🔥" films={popular} />}
        {topRated && <FilmCarousel title="Top Rated 🌟" films={topRated} />}
      </div>
    </main>
  );
}
