# MOVIE BOX - HNG TASK 2
## Running locally
This app was built with **React** <br>
Before installing all the necesssary packages, make sure you have the `package.json` file <br>
Next, run `npm install` <br>
To run locally, open the command line in this directory and run the following command
`npm start`

This will open your app on the browser, most likely on **localhost:3000**

## Building and deploying
The app was deployed on GitHub pages <br>
First, the GitHub pages dependency was installed using 
`npm install gh-pages`

The **package.json** file was then modifed in the following areas: <br>
` "homepage": "http://churchillv.github.io/hng-task-2",` <br>
*This was a standalone property added to the **package.json** file*

```
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

*These two properties were added to the scripts section*

Your scripts property should look like this:

```
 "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
```

Commit and push these changes to Github <br>
After making these changes, run `npm deploy build` in the command line <br>
This will create a build folder in your root directory

Don't forget to install react-router-dom using `npm install react-router-dom` <br>

Afterwards, within your **index.js** file, import `HashRouter` as shown below : <br>
`import { HashRouter as Router } from "react-router-dom";`

Then, wrap your `<App/>` component within the `Router` components like so: <br>
```
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);
```
As always, push all these changes to your Github repo <br>
After this, you should be able to view your app live via Github pages <br>
Head on to `Settings` in your Repo page, head to `Pages` and you should see the link to your app

## That's all Folks ✌️
For a more detailed tutorial on hosting with Github pages, visit [LogRocket's Page](https://blog.logrocket.com/deploying-react-apps-github-pages/)