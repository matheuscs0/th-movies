"use client";

import { ApiTypeTMDB } from "@/types/ApiTypeTMDB";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import axios from "axios";

interface ApiTMDBContextType {
  nowPlaying: ApiTypeTMDB[] | null;
  popular: ApiTypeTMDB[] | null;
  topRated: ApiTypeTMDB[] | null;
  setNowPlaying: React.Dispatch<React.SetStateAction<ApiTypeTMDB[] | null>>;
  setPopular: React.Dispatch<React.SetStateAction<ApiTypeTMDB[] | null>>;
  setTopRated: React.Dispatch<React.SetStateAction<ApiTypeTMDB[] | null>>;
}

const ApiTMDBContext = createContext<ApiTMDBContextType | undefined>(undefined);

type ApiTMDBProviderProps = {
  children: ReactNode;
};

export const ApiTMDBProvider = ({ children }: ApiTMDBProviderProps) => {
  const [nowPlaying, setNowPlaying] = useState<ApiTypeTMDB[] | null>(null);
  const [popular, setPopular] = useState<ApiTypeTMDB[] | null>(null);
  const [topRated, setTopRated] = useState<ApiTypeTMDB[] | null>(null);

  const headers = {
    accept: 'application/json',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTVhNDgzNDZjY2UwODcyZDI2ZDk4MzJjYjkzNDRiYiIsIm5iZiI6MTcyMTY4MjkzMS45NjExNjMsInN1YiI6IjY0NGMyZmI5NzI2ZmIxMDVjODA2NDE2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M1dBy6j6DIbmL7-l0s5x7LN5m_C1oe8nyE6S3keFqVE`
  };

  useEffect(() => {
    const fetchNowPlaying = () => {
      axios.get(`https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&video=true`, { headers })
        .then(response => {
          console.log(response.data.results);
          setNowPlaying(response.data.results);
        })
        .catch(error => {
          console.error("Erro ao buscar filmes em cartaz:", error);
        });
    };

    const fetchPopular = () => {
      axios.get(`https://api.themoviedb.org/3/movie/popular?language=pt-BR`, { headers })
        .then(response => {
          setPopular(response.data.results);
        })
        .catch(error => {
          console.error("Erro ao buscar filmes populares:", error);
        });
    };

    const fetchTopRated = () => {
      axios.get(`https://api.themoviedb.org/3/movie/top_rated?language=pt-BR`, { headers })
        .then(response => {
          setTopRated(response.data.results);
        })
        .catch(error => {
          console.error("Erro ao buscar filmes mais bem avaliados:", error);
        });
    };

    fetchNowPlaying();
    fetchPopular();
    fetchTopRated();
  }, []);

  return (
    <ApiTMDBContext.Provider value={{ nowPlaying, popular, topRated, setNowPlaying, setPopular, setTopRated }}>
      {children}
    </ApiTMDBContext.Provider>
  );
};

export const useAPiTMDB = () => {
  const context = useContext(ApiTMDBContext);
  if (!context) {
    throw new Error("useAPiTMDB must be used within an ApiTMDBProvider");
  }
  return context;
};
