import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "./index.css";
import { MdNavigateNext } from "react-icons/md";
import { ApiTypeTMDB } from "@/types/ApiTypeTMDB";
import { useRef } from "react";
import FilmCard from "../FilmCard";

type FilmCarouselProps = {
  title: string;
  films: ApiTypeTMDB[];
};

const FilmCarousel = ({ title, films }: FilmCarouselProps) => {
  const swiperRef = useRef<any>(null);

  return (
    <div className="w-full flex justify-start flex-col gap-2 mt-10">
      <div className="w-full flex justify-between items-center">
        <h2 className="text-lg font-bold">{title}</h2>
        <div className="flex gap-2">
          <button
            className="custom-swiper-button-prev rounded-full items-center justify-center flex text-3xl rotate-180 text-white bg-[#113995] shadow-lg shadow-black/25"
            onClick={() => swiperRef.current?.swiper.slidePrev()}
          >
            <MdNavigateNext />
          </button>
          <button
            className="custom-swiper-button-next rounded-full items-center justify-center flex text-3xl text-white bg-[#113995] shadow-lg shadow-black/25"
            onClick={() => swiperRef.current?.swiper.slideNext()}
          >
            <MdNavigateNext />
          </button>
        </div>
      </div>
      <div className="w-full flex">
        <Swiper
          spaceBetween={20}
          slidesPerView={"auto"}
          centeredSlides={false}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          ref={swiperRef}
        >
          {films.map((film) => (
            <SwiperSlide className="swiper-slide-custom" key={film.id}>
              <FilmCard key={film.id} film={film} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FilmCarousel;
