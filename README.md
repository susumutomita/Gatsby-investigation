# Gatsby-investigation

## Project Description

This project aims to host MarkDown documents using Gatsby, with deployment on GitHub Pages and a development environment using Docker and docker-compose.

## Development Environment Setup

To set up the development environment using Docker and docker-compose, follow these steps:

1. Ensure you have Docker and docker-compose installed on your machine.
2. Clone the repository:
   ```sh
   git clone https://github.com/susumutomita/Gatsby-investigation.git
   cd Gatsby-investigation
   ```
3. Build and start the development environment:
   ```sh
   docker-compose up --build
   ```
4. Open your browser and navigate to `http://localhost:8000` to see the Gatsby site.

## Deployment to GitHub Pages

To deploy the site to GitHub Pages, follow these steps:

1. Ensure you have the `gh-pages` branch created in your repository.
2. Run the deployment script:
   ```sh
   make deploy
   ```
3. Your site should now be live on GitHub Pages.
