# GreenCityClient
## About the project
The main aim of “GreenCity” project is to teach people in a playful and challenging way to have an eco-friendly lifestyle. A user can view on the map places that have some eco-initiatives or suggest discounts for being environmentally aware (for instance, coffee shops that give a discount if a customer comes with their own cup). А user can start doing an environment-friendly habit and track their progress with a habit tracker.

## Where to find back-end part of the project
Here is the back-end part of our project: https://github.com/ita-social-projects/GreenCity.

`dev` branch of the back-end corresponds to `dev` branch on the front-end. The same thing with `master` branches.

## How to contribute
You're encouraged to contribute to our project if you've found any issues or missing functionality that you would want to see. Here you can see [the list of issues](https://github.com/ita-social-projects/GreenCity/issues) and here you can create [a new issue](https://github.com/ita-social-projects/GreenCity/issues/new).

Before sending any pull request, please discuss requirements/changes to be implemented using an existing issue or by creating a new one. All pull requests should be done into `dev` branch.

Though there are two GitHub projects ([GreenCity](https://github.com/ita-social-projects/GreenCity) for back-end part and [GreenCityClient](https://github.com/ita-social-projects/GreenCityClient) for front-end part) all of the issues are listed in the first one - [GreenCity](https://github.com/ita-social-projects/GreenCity).

**IMPORTANT:**
1. If you want to implement (fix) the feature (bug) which includes communication with a server part of the project you should change the `back-end` link at `environments/environment.ts`
`backendLink: 'http://localhost:8080/'` -> `'https://greencity-lv448.herokuapp.com/'`.
**Don't forget to change the link back to 'http://localhost:8080/' before you commit**.
2. Make sure that your code doesn't have any warnings/errors according to tslint (configuration file is present at the project's root). Be aware that some code editors don't highlight warnings/errors in code correctly.
3. Make sure that there are no redundant comments in your code.

## About Angular CLI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. If you are already using port 4200, run `ng serve --port <another port number>`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Travis CI: how to configure an automatic deploy Angular 8 application to github-pages (fork)

1. Sign-up on Travis CI with your GitHub account.
2. To be able to build your project with Travis CI you should have .travis.yml file with build configurations in your project (there is one in GreenCityClient repository).
3. Fork the project from https://github.com/ita-social-projects/GreenCityClient.
4. Go to your GitHub Profile settings -> Developer settings -> Personal access tokens.
5. Generate a new token with a name of your choice (for example TRAVIS_GH_TOKEN) and select the scope of public_repo.
6. Save the value of the token somewhere.
7. Go to https://travis-ci.com/ and login with your GitHub account.
8. Go to Settings (under your profile picture) -> Repositories -> GitHub Apps Integration -> Activate 
9. Check "Only selected repositories" and search for <your-github-name>/GreenCityClient
10. Press "Approve & Install" button
11. Now you should be able to see your <your-github-name>/GreenCityClient repository on Travis dashboard.
12. Go to More options -> Settings -> Environment Variables
13. Add a new one:
    - the `NAME` of the variable must be the same as in the .travis.yml file (github_token);
    - the `VALUE` of the variable is the value of the github token, generated by you earlier;
    - the `BRANCH` is the branch from .travis.yml (on: branch: <branch-name>);
    - Click Add button
14. After that, you should be able to trigger your first build. 
