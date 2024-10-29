# Use the official Node.js image as the base image
FROM node:14

# Install Gatsby CLI globally
RUN npm install -g gatsby-cli

# Set the working directory
WORKDIR /app

# Copy the project files into the container
COPY . .

# Install project dependencies
RUN yarn install

# Define the command to run the development server
CMD ["yarn", "develop"]
