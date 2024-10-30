# Use the official Node.js image as the base image
FROM node:20-slim

# Set the working directory
WORKDIR /app

# Install Gatsby CLI
RUN npm install -g gatsby-cli

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose port 8000 for development server
EXPOSE 8000

# Set host to allow external connections
ENV GATSBY_HOST=0.0.0.0
