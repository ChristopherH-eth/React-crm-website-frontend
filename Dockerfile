# Stage 1: Create CRM App production build
# Pull Node OS
FROM node:alpine3.18 AS builder

# Add yarn package manager
RUN apk add --no-cache yarn

# Set working directoy
WORKDIR /app

# Copy package.json and yarn.lock files to working directory
COPY package*.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy source code into working directory
COPY . .

# Create production build
RUN yarn build

# Stage 2: Set production build for service
# Pull Node OS
FROM node:alpine3.18

# Set working directory
WORKDIR /app

# Copy production build from Stage 1
COPY --from=builder /app/build ./build

# Expose port to connect on
EXPOSE 3000