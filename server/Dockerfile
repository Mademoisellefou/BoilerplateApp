FROM node:16.3.0-alpine
WORKDIR /app
COPY ./package.json ./
RUN npm i
ARG PORT
ENV PORT $PORT
COPY . /app/
CMD ["npm","start"]