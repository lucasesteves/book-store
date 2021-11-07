# Book Store running project

## Running develop mode

- Runs the app with `yarn start` or `npm start`
- Open [http://localhost:3000](http://localhost:3000)

## Running with docker

- Verify if you have docker installed in your machine
- To generate image run `docker build -t bookstore .`
- Once the image is created, run `docker run -p 3000:3000 -d bookstore`
- Open [http://localhost:3000](http://localhost:3000)
