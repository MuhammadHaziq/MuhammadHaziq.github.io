# Step 1. Build the static export (next.config.js sets output: "export" -> /app/out)
FROM node:22-alpine AS builder

WORKDIR /app

ARG CONTACT_EMAIL
ENV CONTACT_EMAIL=$CONTACT_EMAIL
ARG CONTACT_WHATSAPP
ENV CONTACT_WHATSAPP=$CONTACT_WHATSAPP

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

RUN npm run build


# Step 2. Serve the static files with Nginx
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 80
