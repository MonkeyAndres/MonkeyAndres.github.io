# MonkeyAndres Personal Site

Site generated from [piharpi/jekyll-klise](https://github.com/piharpi/jekyll-klise)

## Usage

> [Guide on how to setup Jekyll on M1](https://earthinversion.com/blogging/how-to-install-jekyll-on-appple-m1-macbook/)

Run local server:

```bash
bundle install
bundle exec jekyll serve
```

## Writing posts and drafts

This project uses [jekyll-compose](https://github.com/jekyll/jekyll-compose) that is a ruby gem that helps you manage the posts, drafts and pages very easily.

```bash
# Create draft
bundle exec jekyll draft "My draft"

# Publish draft
bundle exec jekyll publish _drafts/my-draft

# Create post
bundle exec jekyll post "My post"
```