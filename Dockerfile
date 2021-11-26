FROM node:16

ARG BASE_PATH
ENV PUBLIC_URL=$BASE_PATH

ARG GIT_SHA
ENV REACT_APP_GIT_SHA=$GIT_SHA

# Setup
COPY package* ./
RUN npm ci --only=production
COPY . .

RUN npm run build

EXPOSE 8000

CMD ["npm", "run", "start:prod"]
