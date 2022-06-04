import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect  } from "react";
import SEO from "../components/SEO";

const Home = ({ results }) => {
  /* Replaced by getServerSideProps() */
  /* const [movies, setMovies] = useState();
  
  const fetchMovie = async () => {
    const { results } = await (
      await fetch("/api/movies")
    ).json();
    setMovies(results);
  };

  useEffect(() => {
    fetchMovie();
  }, []) */

  const router = useRouter();

  const onClick = (id, title) => {
    router.push(
      {
        pathname: `/movies/${title}/${id}`,
        query: {
          id: id,
          title: title
        }
      },
      `/movies/${title}/${id}` /* Hide Query (http://localhost:3000/movies/338953?id=338953&title=Potato → http://localhost:3000/movies/338953) */
    );
  }

  return (
    <div className="container">
      <SEO title="Home" />
      {/* !movies && <h4>Loading...</h4> */ /* Unnecessary When the Server Renders */}
      {/* movies */ results?.map(movie =>
        <div key={movie.id} className="movie" onClick={() => onClick(movie.id, movie.original_title)}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Movie Image" />
            <h4>
              <Link
                href={{
                  pathname: `/movies/${movie.original_title}/${movie.id}`,
                  query: {
                    id: movie.id,
                    title: movie.original_title
                  }
                }}
                as={`/movies/${movie.original_title}/${movie.id}`}>
                <a>{movie.original_title}</a>
              </Link>
            </h4>
        </div>
          
      )}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default Home;

export async function getServerSideProps() {
  const { results } = await (
    await fetch("http://localhost:3000/api/movies")
  ).json();

  return {
    props: {
      results
    }
  }
};