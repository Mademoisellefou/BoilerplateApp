FROM node:16.3.0-alpine
WORKDIR /app
COPY ./app/package.json ./
RUN npm i
ARG REACT_APP_BACKEND_URL
ENV REACT_APP_BACKEND_URL $REACT_APP_BACKEND_URL
RUN echo "========================"
RUN echo $REACT_APP_BACKEND_URL
COPY ./app/ .
CMD ["npm", "start"]