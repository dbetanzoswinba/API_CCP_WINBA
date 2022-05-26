FROM node:16

# Create app directory
WORKDIR /app

#Instalamos nodemon para ya no tener que reconstriur el contenedor.
RUN npm install --global nodemon

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json .

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

CMD npm start