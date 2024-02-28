# Stage 1: Build the project
FROM node:16 AS builder

WORKDIR /app

# Copy package.json and package-lock.json for installing dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the project
RUN npm run build

# Run Prisma migrations
# RUN npx prisma migrate deploy

# Stage 2: Run the built application
FROM node:16-slim

WORKDIR /app

# Copy built files and dependencies from the builder stage
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/prisma ./prisma

RUN apt-get update -y && apt-get install -y openssl

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
# CMD ["node", "build/index.js"]