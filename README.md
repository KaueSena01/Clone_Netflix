<div align="center">
<img src="https://github.com/KaueSena01/Lista_de_Tarefas/blob/master/assets/reactjs.png" width="120px"/>
</div>

# Cloning to Netflix Interface 🎬

📷 Demo video

<img src="https://raw.githubusercontent.com/KaueSena01/Lista_de_Tarefas/master/assets/gif.gif" width="100%"/>
   
<a href="https://pt-br.reactjs.org/">More about ReactJs</a>


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)




## Tools

The project uses [ReactJs](https://pt-br.reactjs.org/) and [ReactDom](https://pt-br.reactjs.org/docs/react-dom.html).

In addition, the project uses the [ThemovieDB](https://www.themoviedb.org/?language=pt-BR) website API.

## API documentation and import

### ThemovieDB (API)

* Import of requests and API key:

<img src="https://github.com/KaueSena01/Clone_Netflix/blob/master/assets/Tela1.png" width=100%/>

```
const API_KEY = '7dec57a4061f330743f4f25d4353665e';
const API_BASE = 'https://api.themoviedb.org/3';
```

* Request through API_BASE

```
const basicFetch = async (endpoint) => {
	const req = await fetch(`${API_BASE}${endpoint}`);
	const json = await req.json();
	return json;
}
```

* Processing all requests

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

* Using "Switch" for cases of movies or TV shows

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

## Insomnia's screenshoot 
![](https://raw.githubusercontent.com/tgmarinho/meetapp/master/screenshots/insomnia-api.png)


## Authors

| ![Thiago Marinho](https://avatars2.githubusercontent.com/u/380327?s=150&v=3)|
|:---------------------:|
|  [Thiago Marinho](https://github.com/tgmarinho/)   |


Thanks!
