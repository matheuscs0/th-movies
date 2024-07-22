import { ApiTypeTMDB } from "@/types/ApiTypeTMDB";
import Link from "next/link";

type FilmCardProps = {
  film: ApiTypeTMDB;
};

export const FilmNowPlayingCard = ({ film }: FilmCardProps) => {
  return (
    <Link
      href=""
      className="w-[800px] h-[400px] flex overflow-hidden rounded-3xl shadow-lg shadow-black/25 relative "
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
        alt={film.title}
        className="w-full h-full object-cover rounded-3xl filter blur-sm"
      />
      <div className="w-full h-full overflow-hidden rounded-3xl shadow-lg shadow-black/25 absolute top-2 left-10 flex ">
        <img
          src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
          alt={film.title}
          className="w-60 h-[380px] rounded-3xl z-10 shadow-lg shadow-black/25 top-2 left-10"
        />
        <div className="flex w-full h-full ml-10 justify-center flex-col gap-2">
            <h1 className="text-3xl font-bold ">{film.title}</h1> 
            <p>{film.release_date}</p>
            <p className="text-xs w-2/3">{film.overview}</p>
        </div>
      </div>
    </Link>
  );
};
