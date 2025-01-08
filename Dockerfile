# Použi oficiálny Node.js image ako základ
FROM node:18

# Nastav pracovný adresár v kontajneri
WORKDIR /usr/src/app

# Skopíruj package.json a package-lock.json do pracovného adresára
COPY package*.json ./

# Nainštaluj závislosti
RUN npm install

# Skopíruj všetky súbory projektu do kontajnera
COPY . .

# Otvor port (uprav, ak tvoj projekt používa iný port)
EXPOSE 3001

# Spusti aplikáciu
CMD ["npm", "start"]
