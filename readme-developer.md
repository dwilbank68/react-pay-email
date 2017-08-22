### Development Mode

    There are two servers - 'client' and 'server'.
    
    The 'client' server (create-react-app) is only useful during
    development (for live-reload, etc).
    
    Start them both from the server directory with 'npm run dev'.
    
### Production Mode

    There will only be one server.
    Before every deployment, inside the client folder, compile your
    react app to the 'build' folder with "npm run build"
    
    Tell Express that if there are any routes it does not recognize,
    they are intended for React-Router. That is, forward the route to
    the build/static/index.html document so that main.js can handle it.
    (see bottom of server/index.js)
    
    devcenter.heroku.com/articles/nodejs-support#customizing-the-build-process
    
    "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false 
                            npm install --prefix client &&
                             npm run build --prefix client"
    
       
    if react-scripts is not found during deployment post-build,
    
     // client directory
     
    npm uninstall --save-dev react-scripts
    npm i --save react-scripts
    
    HEROKU ENV VARIABLES
    
    COOKIE_KEY
    GOOGLE_CLIENT_ID
    GOOGLE_CLIENT_SECRET
    MONGO_URI
    STRIPE_PUBLISHABLE_KEY
    STRIPE_SECRET_KEY
    REACT_APP_STRIPE_KEY
    