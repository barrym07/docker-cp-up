FROM node:14-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY package*.json .

RUN npm install

COPY . /src/app

EXPOSE 3001
# EXPOSE 5432


CMD [ "npm", "start" ]







# `docker run -d -p 8080:8080 -v $(pwd):/src/app --name survey_container survey`

#docker run --rm --name db -e POSTGRES_PASSWORD=docker -d -p 5433:5432  -v $HOME/docker-cp-up/server/db/volumes/postgres:/var/lib/postgresql/data postgres




# # What image do you want to start building on?
# FROM node:latest

# # Make a folder in your image where your app's source code can live
# RUN mkdir -p /src/app

# # Tell your container where your app's source code will live
# WORKDIR /src/app

# # What source code do you want to copy, and where to put it?
# COPY . /src/app

# # Does your app have any dependencies that should be installed?
# RUN yarn install

# # What port will the container talk to the outside world with once created?
# EXPOSE 3000

# # How do you start your app?
# CMD [ "npm", "start" ]

# CMD ["executable","param1","param2"] (exec form, preferred)
# CMD ["param1","param2"] (sets additional default parameters for ENTRYPOINT in exec form)
# CMD command param1 param2 (shell form)