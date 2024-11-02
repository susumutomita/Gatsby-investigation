# Makefile for Gatsby-investigation

# Define variables
DOCKER_COMPOSE := docker compose
DOCKER_SERVICE := gatsby
ECHO := @echo

# Common docker compose run command
DC_RUN := $(DOCKER_COMPOSE) run --rm $(DOCKER_SERVICE)

# Build the Docker image
.PHONY: build
build:
	$(ECHO) "Building ..."
	npm run build
	$(ECHO) "Build completed successfully."

# Build the Docker image
.PHONY: build-gatsby
build-gatsby:
	$(ECHO) "Building in Docker container..."
	$(DC_RUN) sh -c "cd src && npm run build"
	$(ECHO) "Build completed successfully."

# Build the Docker image
.PHONY: docker-build
docker-build:
	$(ECHO) "Building Docker image..."
	$(DOCKER_COMPOSE) build
	$(ECHO) "Build completed successfully."

# Install dependencies
.PHONY: install
install:
	$(ECHO) "Installing dependencies..."
	cd src && npm install
	$(ECHO) "Installation completed successfully."

# Run the development environment
.PHONY: docker-up
docker-up:
	$(ECHO) "Starting development environment..."
	$(DOCKER_COMPOSE) up
	$(ECHO) "Development environment is up and running."

# Deploy the site to GitHub Pages
.PHONY: docker-deploy
docker-deploy:
	$(ECHO) "Deploying the site to GitHub Pages..."
	$(DC_RUN) npm run deploy
	$(ECHO) "Deployment completed successfully."

# Deploy the site to GitHub Pages
.PHONY: docker-logs
docker-logs:
	$(DOCKER_COMPOSE) logs -f gatsby

.PHONY: docker-connect
docker-connect:
	$(DOCKER_COMPOSE) exec -it gatsby bash

# Clean up
.PHONY: docker-clean
docker-clean:
	$(ECHO) "Cleaning up..."
	$(DOCKER_COMPOSE) down -v
	$(ECHO) "Clean up completed successfully."
