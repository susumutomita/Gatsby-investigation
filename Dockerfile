# Use the official Node.js image as the base image
FROM node:20-slim

# Set the working directory
WORKDIR /app

# 必要な依存関係をインストール
RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip \
    build-essential \
    procps \
    git \
    g++ \
    make \
    gcc \
    libc6-dev \
    && rm -rf /var/lib/apt/lists/*

# Install Gatsby CLI
RUN npm install -g gatsby-cli

# Copy package files
COPY src/package*.json ./src/

# パッケージのインストール時にオプショナルな依存関係も含める
RUN npm install --include=optional --prefix ./src

# Copy the rest of the application
COPY . .

# Expose port 8000 for development server
EXPOSE 8000

# Set host to allow external connections
ENV GATSBY_HOST=0.0.0.0
