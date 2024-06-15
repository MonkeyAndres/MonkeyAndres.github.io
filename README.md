# MonkeyAndres Personal Site

Site generated from [piharpi/jekyll-klise](https://github.com/piharpi/jekyll-klise)

## Setup environment

```bash
devbox install
devbox shell
```

## Usage

Inside the devbox's shell run:

```bash
# Install dependencies
bundle install

# Serve the site
jekyll serve

# Build the site
jekyll build
```

## Writing posts and drafts

This project uses [jekyll-compose](https://github.com/jekyll/jekyll-compose) that is a ruby gem that helps you manage the posts, drafts and pages very easily.

```bash
# Create draft
jekyll draft "My draft"

# Publish draft
jekyll publish _drafts/my-draft

# Create post
jekyll post "My post"
```