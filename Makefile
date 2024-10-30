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
	$(ECHO) "Building Docker image..."
	$(DOCKER_COMPOSE) build
	$(ECHO) "Build completed successfully."

# Install dependencies
.PHONY: install
install:
	$(ECHO) "Installing dependencies..."
	$(DC_RUN) npm install
	$(ECHO) "Installation completed successfully."

# Run the development environment
.PHONY: up
up:
	$(ECHO) "Starting development environment..."
	$(DOCKER_COMPOSE) up
	$(ECHO) "Development environment is up and running."

# Deploy the site to GitHub Pages
.PHONY: deploy
deploy:
	$(ECHO) "Deploying the site to GitHub Pages..."
	$(DC_RUN) npm run deploy
	$(ECHO) "Deployment completed successfully."

# Clean up
.PHONY: clean
clean:
	$(ECHO) "Cleaning up..."
	$(DOCKER_COMPOSE) down
	$(ECHO) "Clean up completed successfully."
