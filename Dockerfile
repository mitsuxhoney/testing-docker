# # syntax=docker/dockerfile:1
# ARG NODE_VERSION=20.19.5

# FROM node:${NODE_VERSION}-alpine as base
# WORKDIR /usr/src/app

# # ---------- deps ----------
# FROM base as deps
# RUN --mount=type=bind,source=package.json,target=package.json \
#     --mount=type=bind,source=package-lock.json,target=package-lock.json \
#     --mount=type=cache,target=/root/.npm \
#     npm ci --omit=dev

# # ---------- build ----------
# FROM deps as build
# RUN --mount=type=bind,source=package.json,target=package.json \
#     --mount=type=bind,source=package-lock.json,target=package-lock.json \
#     --mount=type=cache,target=/root/.npm \
#     npm ci
# COPY . .
# RUN npm run build

# # ---------- final ----------
# FROM node:${NODE_VERSION}-alpine as final
# WORKDIR /usr/src/app
# ENV NODE_ENV=production
# USER node

# # Only copy what’s needed to run
# COPY package.json .
# COPY --from=deps /usr/src/app/node_modules ./node_modules
# COPY --from=build /usr/src/app/dist ./dist

# # Install a tiny static file server
# RUN npm install -g serve

# EXPOSE 5173
# CMD ["npx", "serve", "-s", "dist", "-l", "5173"]

# syntax=docker/dockerfile:1

ARG NODE_VERSION=20.19.5

FROM node:${NODE_VERSION}-alpine as base
WORKDIR /usr/src/app

# ---------- deps ----------
FROM base as deps
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

# ---------- build ----------
FROM deps as build
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci
COPY . .
RUN npm run build

# ---------- final ----------
FROM node:${NODE_VERSION}-alpine as final
WORKDIR /usr/src/app
ENV NODE_ENV=production

# Install serve globally BEFORE switching to node user
RUN npm install -g serve

# Now switch to node user
USER node

# Only copy what's needed to run
COPY package.json .
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist

EXPOSE 5173
CMD ["serve", "-s", "dist", "-l", "5173"]