# BSc (Hons) in Creative Computing - Year 4

## ☁️ Cloud Application Development - CA#2 Scenario 2 Client

### Description

A Vue.JS application built in conjunction with a Serverless AWS application.

The application utilizes AWS Cognito for Authentication, and allows CRUD functionality for Festivals, Shows, Preformers and Stages once a user is authenticated.

### Documentation

A full list of possible API requests are published [here](https://documenter.getpostman.com/view/9152223/Tz5tYG2M).

### What you need to run this code

1. Node (14.15.4)
2. NPM (7.5.2)
3. A Serverless application already set up and running, [instructions here](https://github.com/eoanodea/iadty4-cloudapp-serverless-aws)

### How to run this code

1. Clone this repository to your local machine.
2. Make sure you have a serverless application running, [instructions here](https://github.com/eoanodea/iadty4-cloudapp-serverless-aws)
3. Run `cp example.env .env` and fill in your AWS Cognito environment variables
4. Run `npm install` to install the application's dependencies
5. Run `npm run serve` to run the application in development mode
6. Run `npm run build` to build the application for production