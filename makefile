# Makefile for Grace's React Portfolio

# Default target
.PHONY: all
all: start

# Install dependencies
.PHONY: install
install:
	npm install

# Start development server
.PHONY: start
start:
	npm start

# Build production version
.PHONY: build
build:
	npm run build

# Run tests (if any)
.PHONY: test
test:
	npm test

# Clean node_modules (reinstall dependencies)
.PHONY: clean
clean:
	rm -rf node_modules package-lock.json
	npm install

# Optional: Deploy to GitHub Pages (requires gh-pages package)
.PHONY: deploy
deploy:
	npm run build
	npm install --save-dev gh-pages
	npm run deploy
