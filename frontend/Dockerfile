FROM node:16.3.0-alpine
WORKDIR /app
COPY ./package.json ./
RUN npm i
RUN mkdir ./node_modules/.cache && chmod -R 777 ./node_modules/.cache
ARG REACT_APP_BACKEND_URL
ENV REACT_APP_BACKEND_URL $REACT_APP_BACKEND_URL
COPY . .
CMD ["npm", "start"]