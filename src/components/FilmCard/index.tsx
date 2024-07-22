import { ApiTypeTMDB } from "@/types/ApiTypeTMDB";
import Link from "next/link";

type FilmCardProps = {
  film: ApiTypeTMDB;
};

const FilmCard = ({ film }: FilmCardProps) => {
  return (
    <Link href='' className="w-52 h-72 flex overflow-hidden rounded-3xl shadow-lg shadow-black/25">
      <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={film.title}  className="w-full h-full object-cover rounded-3xl "/>
    </Link>
  );
};

export default FilmCard;
