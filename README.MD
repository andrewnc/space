## Welcome to the Space Launch management system!

This project represents a semester's worth of web development learning. The backend for this project is written in a domain specific language (DSL) called Wasp [wasp-lang](https://wasp-lang.dev). This DSL allows for the rapid creation of fully functional back end systems. By combining this system with React, I was able to create a reasonably powerful web application that is extensible, maintainable, and functional. 

To run this project locally: 
1. install wasp `curl -sSL http://get.wasp-lang.dev | sh`
2. navigate to the root of the project
3. run `wasp start`
4. view the site on `localhost:3000` or associated port

I explored a number of new topics in this project:

* Animation and drawing with CSS (as found in `LaunchPage.js` and `Main.css`)
* Importing React libraries
* Advanced CSS styling for button hovering
* Create Read and Delete functionality for rocket launches with a persistent Prisma database (see `main.wasp` or `.wasp/server/src` if you have a local build)
* React Effects for interacting with external values (see `WeatherPage.js`)
* State management with React hooks (see `NewLaunchPage.js`)
* Data Fetching for the monitoring of weather on Mars (see `WeatherPage.js`)

The app is live and running at `https://is542-space.netlify.app` for the backend I deployed to Heroku and the front end is on Netlify. 

There are few routes to be aware of. The root shows a custom CSS animation, then `/home` allows for the creation and deletion of new rocket launches by routing to `/new` and using an on-page launch cancelation button. Finally, `/weather` queries NASA data from the Mar's rover and displays the most recent weather on Mars.

The javascript and css code for this project is in the `/ext` folder while the wasp file is the single `main.wasp`. The deployed version of the site can be found in `./wasp/build/web-app/` and `./wasp/build/server` after you follow building instructions on `https://wasp-lang.dev/docs/deploying`. 