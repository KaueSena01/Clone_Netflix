<div align="center">
<img src="https://github.com/KaueSena01/Lista_de_Tarefas/blob/master/assets/reactjs.png" width="120px"/>
</div>

# Cloning the Netflix Interface 🎬

📷 Demo photo

<img src="https://github.com/KaueSena01/Clone_Netflix/blob/master/assets/Img.png" width="100%"/>
   
   
## Tools

The project uses [ReactJs](https://pt-br.reactjs.org/) and [ReactDom](https://pt-br.reactjs.org/docs/react-dom.html).

In addition, the project uses the [ThemovieDB](https://www.themoviedb.org/?language=pt-BR) website API.

<a href="https://pt-br.reactjs.org/">More about ReactJs</a>

## API documentation and import

### ThemovieDB (API)

* Importing requests and API key:

<img src="https://github.com/KaueSena01/Clone_Netflix/blob/master/assets/Tela1.png" width=100%/>

```
const API_KEY = '7dec57a4061f330743f4f25d4353665e';
const API_BASE = 'https://api.themoviedb.org/3';
```

* Returning a JSON with API information:

```
const basicFetch = async (endpoint) => {
      const req = await fetch(`${API_BASE}${endpoint}`);
      const json = await req.json();
      return json;
}
```

* Processing all data:

```
export default {
    getHomeList: async () => {
	return [
		{
			slug: 'originals',
			title: 'Originais do Netflix',
			items: await
			basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=
			${API_KEY}`)
		},
		{
			slug: 'trending',
			title: 'Recomendados para Você',
			items: await
			basicFetch(`/trending/all/week?language=pt-BR&api_key=
			${API_KEY}`)
		},
		{
			slug: 'toprated',
			title: 'Em alta',
			items: await
			basicFetch(`/movie/top_rated?language=pt-BR&api_key=
			${API_KEY}`)
		},
		{
			slug: 'action',
			title: 'Ação',
			items: await
			basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=
			${API_KEY}`)
		},
		{
			slug: 'comedy',
			title: 'Comédia',
			items: await
			basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=
			${API_KEY}`)
		},
		{
			slug: 'horror',
			title: 'Terror',
			items: await
			basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=
			${API_KEY}`)
		},
		{
			slug: 'romance',
			title: 'Romance',
			items: await
			basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=
			${API_KEY}`)
		},
		{
			slug: 'documentary',
			title: 'Documentários',
			items: await
			basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=
			${API_KEY}`)
		}
	];
},
```

* Using "Switch" for cases of movies or TV shows:

```
getMovieInfo: async (movieId, type) => {
 	let info = {};
		if(movieId) {
			switch(type) {
			case 'movie':
				info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=
				${API_KEY}`);
			break;

			case 'tv':
				info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=
				${API_KEY}`);
			break;

			default:
				info = null;
			break;
		}
	}

	return info;
        }
}
```

## Example of a requisition
![](https://raw.githubusercontent.com/KaueSena01/Clone_Netflix/master/assets/Tela2.png)

##
