FROM node:20-alpine3.18 as build

WORKDIR /app/frontend
COPY . .

RUN npm install
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
