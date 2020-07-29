# Jobspot.me Web Client

## Instructions to run the client

- Copy .env.example and rename it to .env
- Provide the necessary environment variables
- Run the development server using the script `$ yarn start`

*The webpack development server will, by default, use port 4001, you can change manually change it in webpack.config.js or provide a PORT env when running webpack*

We have a `webpack.prod.config.js` which is the config used for generating the build. You can use the script `$ yarn build` to generate it.
