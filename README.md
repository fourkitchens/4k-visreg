# 4k-visreg

[![CircleCI](https://circleci.com/gh/fourkitchens/4k-visreg.svg?style=shield)](https://circleci.com/gh/fourkitchens/4k-visreg)
[![Dashboard 4k-visreg](https://img.shields.io/badge/dashboard-4k_visreg-yellow.svg)](https://dashboard.pantheon.io/sites/9f59a79f-0b1e-4958-93bc-d6fecf91f743#dev/code)
[![Dev Site 4k-visreg](https://img.shields.io/badge/site-4k_visreg-blue.svg)](http://dev-4k-visreg.pantheonsite.io/)


## Local Dev use and setup

This Drupal 8 site run on pantheon, has tools scripted in node, and local dev in Lando. Make sure you install all prerequisites.

### Prerequisites:
- [**lando:** Virtualized local server manager](https://docs.devwithlando.io/installation/installing.html) - Lets us our own local version of Pantheon hosting as close as possible to their config

#### Pantheon requirements:
 1. Login to your Pantheon dashboard and [create a new machine token](https://dashboard.pantheon.io/users#account/tokens/create) named "Lando Development"
 1. Click "Generate Token", and save the token string in a text file somewhere safe. This will allow Lando to operate on your behalf across all sites you have access to on Pantheon. You should only have to do this once.

#### Local Set-up process:
 1. Run: `composer install` - to install dependencies.
 1. Run: `lando start` - to start local machine.
 1. Run: `lando terminus auth:login --machine-token=[MACHINETOKEN]` - To authorize before getting assets.
 1. Run: `lando pull --code=none --database=dev --files=dev` - Get the latest assets. Its suggested you pull from 'dev'.
 1. Run: `lando drush cr` - Clear cache.
 1. Login: `lando drush uli`

View site: https://4kvisreg.lndo.site/
