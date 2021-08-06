import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';
// useEffect -> Executa a função que eu quero 
// quando a tela é carregada

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      // Pegando a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // Pegando o filme em destaque -> featured
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * 
      (originals[0].items.results.length -1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      
      setFeaturedData(chosenInfo);
      // console.log(chosenInfo);
    }

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10){
        setBlackHeader(true);
      }else{
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener)

    return() => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, []);

  return (
      <div className="page">
      <Header black={blackHeader}/>

        { featuredData &&
          <FeaturedMovie item={featuredData}/>
        }

        <section className="list">
          {movieList.map((item, key) =>(

              <MovieRow key={key} title={item.title} items={item.items}/>

          ))}
        </section>

        <footer>
          <p>Clone da <a href="#">Netflix</a></p>
          <a href="https://www.themoviedb.org/documentation/api?language=pt-BR">API do Themoviedb</a>
          <p>&copy; Kauê Sena 2021</p>
        </footer>

        {movieList.length <= 0 && 
        <div className="loading">
          <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Carregando"/>
        </div>
        }
      </div>
    );
}