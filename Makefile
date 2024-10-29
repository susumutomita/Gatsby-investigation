# Makefile for Gatsby-investigation

# Define variables
DOCKER_COMPOSE = docker-compose
DOCKER_IMAGE = gatsby-investigation

# Build the Docker image
build:
	$(DOCKER_COMPOSE) build

# Run the development environment
develop:
	$(DOCKER_COMPOSE) up

# Deploy the site to GitHub Pages
deploy:
	$(DOCKER_COMPOSE) run --rm $(DOCKER_IMAGE) npm run deploy
