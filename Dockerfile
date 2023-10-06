# Add lockfile and package.json's of isolated subworkspace
FROM node:18.16.0-alpine AS builder

WORKDIR /app

COPY . .

# Install dependencies
RUN yarn install --frozen-lockfile

COPY .env.production .env
RUN yarn build

FROM nginx:1.25.1 as production

COPY --from=builder /app/build /usr/share/nginx/html
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf