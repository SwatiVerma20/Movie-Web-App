# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

About Creating Movie Web App

I have created the movie web app as per requirements. This app will cover below points:

1. A search page where users can search for movies by title, year, or IMDb ID.
2. A results page that displays the search results using cards, each card should include the
   movie title, year, IMDb rating, and a brief plot summary.
3. The results page should also have the following features:
   !"Filters: Users should be able to filter the results by year, genre, and IMDb rating.
   !"Sorting: Users should be able to sort the results by title, year, and IMDb rating.
4. A detail page that displays more information about the selected movie, including the image,
   full plot, ratings from different platforms and the cast.
5. Users should be able to navigate through multiple pages of results.
6. User can search in two ways:
   ! Click on the search button
   ! Once you write a movie name, users can press enter to get the movie results. However, it will only work for searches by movie name with category options.

Challenges:
The first challenge I had was about how to create the structure of the project. I was thinking in terms of the scalability of the project and broke it into multiple sections. Component folder will contain common files of the project whereas the 'Container' folder will contain all the provider files where we can create the redux store structure. As the project moved forward, I added the Images, reducer and requester folders.0 Each folder contained the same functionality type of files. The Request folder will contain all axios or API calls.

Second challenge I had was regarding how to display movie cards. I did some research and decided on the look and feel and started working on the same. Adding css was a big challenge (I haven't used any css library). Initially I created the normal card in the grid display but I wasn't satisfied so I added the mouse hover to give it extra look and feel for the user. It gives it extra highlights.

Extra thoughts:

1. I don't have prior experience in hooks but I thought let me try it out in this project. I used hook useState for showing the movie details.
2. I have created the .env file to save the API key
3. As a bonus feature I have added the pagination in the web app.
4. As a bonus feature I have added the Dark Mode on website.
5. I haven't used any CSS library. I have written all the css in the App.css file.

Note:
I have added the Api key in .env file, please let me know if API_Key is not working.
