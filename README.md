![](https://lh3.googleusercontent.com/rVduSg1MkKOFJCTY2mzz1q30wSEk8VmhpH7_cJuz-Y9CX_JRuUvvtiFF79wKLNmbN1XNEj44JYe5dSE=w3200-h1746-rw)
luxe-react-redux-rxjs
=======================
A consumer facing marketing template. Following currently under active development:
- API for Ecomm
- Redux + Google Maps Store Locator

#### Contents

1. [Prerequisites](#Prerequisites)
1. [Getting Started](#Getting)
1. [Development](#development)
1. [Deployment](#deployment)
1. [About](#about)

Prerequisites
-------------

- [Node.js 6.0+](http://nodejs.org)
- Command Line Tools
 - <img src="http://dc942d419843af05523b-ff74ae13537a01be6cfec5927837dcfe.r14.cf1.rackcdn.com/wp-content/uploads/windows-8-50x50.jpg" height="17">&nbsp;**Windows:** [Visual Studio](https://www.visualstudio.com/products/visual-studio-community-vs)
 - <img src="https://lh5.googleusercontent.com/-2YS1ceHWyys/AAAAAAAAAAI/AAAAAAAAAAc/0LCb_tsTvmU/s46-c-k/photo.jpg" height="17">&nbsp;**Ubuntu** / <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Logo_Linux_Mint.png" height="17">&nbsp;**Linux Mint:** `sudo apt-get install build-essential`
  - [create-react-app](https://www.react.js)🙌

**Note:** If you are new to Node or Express, check out the
[Node.js and Express 101](https://www.youtube.com/watch?v=BN0JlMZCtNU)
screencast by Alex Ford that teaches Node and Express from scratch. Alternatively,
here is another great tutorial for complete beginners - [Getting Started With Node.js, Express, MongoDB](http://cwbuecheler.com/web/tutorials/2013/node-express-mongo/).

**Note:** If you are new to React, RxJS, and Redux, check out OG React documentation, as well as [TODO] this live React+Redux / Node testing workshop by Kent C. Dodds, showcasing [how a React+Redux and Node stacks work with TDD](https://www.youtube.com/watch?v=DdqiXcYDv-8).

Getting Started
-------------
The easiest way to get started is to clone the repository:

```bash
# 0. Request for the .env file.

# Get the latest snapshot
git clone --depth=1 https://github.com/nadinagerlach/luxe-react-redux-rxjs.git

# Change directory
cd luxe-react-redux-rxjs

# Install NPM dependencies and run the app in development mode
npm i -s && npm run start

# Visit localhost:3000 on your browser to begin. The page will reload if you make edits.
[http://localhost:3000](http://localhost:3000)

```

### Building
- webpack ^3.x

`npm run build`

### Development
- webpack-dev-server ^2.x
- react-dev-utils ^4.x
- react-error-overlay ^3.x
- react-hot-loader ^3.x

`npm start`

### Tests
- jest ^22.x
- enzyme ^3.x

`npm test`
`npm run test:watch`

### Browser Automation
- nightwatch ^0.9
- selenium ^3.4

`npm run test:automation` (with dev-server already running)
`npm run test:automation:start` (start dev-server, run tests and exit)

A note on API Keys
------------------

To use Facebook's API, visit FB to obtain appropriate credentials. If including on Github, use dotenv to protect your credentials from spammers. :)

- Visit <a href="https://developers.facebook.com/" target="_blank">Facebook Developers</a>
- Click **My Apps**, then select **Add a New App* from the dropdown menu
- Select **Website** platform and enter a new name for your app
- Click on the **Create New Facebook App ID** button
- Choose a **Category** that best describes your app
- Click on **Create App ID** button
- In the upper right corner click on **Skip Quick Start**
- Copy and paste *App ID* and *App Secret* keys into `.env`
 - **Note:** *App ID* is **clientID**, *App Secret* is **clientSecret**
- Click on the *Settings* tab in the left nav, then click on **+ Add Platform**
- Select **Website**
- Enter `http://localhost:3000` under *Site URL*

Deployment
------------------
Finished ripping for your own purposes? Here's an easy build & deploy pipeline with AWS. For the project to build correctly:

* **These files must exist with exact filenames**: `dist/index.html` (page template) && `dist/scripts` (JavaScript entry point).
* **Put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.
* **Only files inside `dist`** can be used from `dist/index.html`

```sh
# Create the AWS S3; requires account at https://aws.amazon.com/free/
# Install AWS command line; requires

# Deploy static files from dist/ directory

# Optional: Add deploy script to package.json

## Build by bundling in production mode, optimizing for performance.  
npm run deploy

# Develop your app locally using `npm start`
# Then build, commit, & deploy ♻️
```

About
----------------
### List of Packages

| Package                         | Description                                                           |
| ------------------------------- | --------------------------------------------------------------------- |
| instagram-node                  | Instagram API library.                                                |
| express                         | Simplified HTTP request library.    |                           
| node                             | Simplified HTTP request library.   |
| graphQL                            | Simplified HTTP request library.   |
| MySQL                             | Simplified HTTP request library.   |
| sequelize                             | Simplified HTTP request library.   |
| lodash                          | Handy JavaScript utlities library.     |                      
| mocha                           | Test framework.                                                       |
| chai                            | BDD/TDD assertion library.                                            |
| supertest                       | HTTP assertion library.                                               |
| express                         | backend framework.                                                    |
| react                           | frontendframework.                                                    |
| redux                           | predictable state container for JavaScript apps.                      |
|  rxjs                           | library for reactive programming using Observables.                   |
| webpack                          | Simplified HTTP request library.   |
| react-helmet                          | Simplified HTTP request library.   |
| Adobe Creative Suite                           | Simplified HTTP request library.   |

Made with :heart: by [Nadina Gerlach](https://github.com/nadinagerlach)
