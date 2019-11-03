# Jeopardy Web App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.14.

## Devlopment Process

The Jeopardy-trivia web app uses the jservice.io/api/ to search through jeopardy questions and display them in a jeopardy styled grid. The Angular.js framework was used in the development of the webapp and the app is currently hosted on Github Pages. 
Over the course of development of this project, I was able to develop my skills in html, css, and typescript, as well as in general deployment of web apps. Though I was able to envision the visual aspects of web app relatively easily, solving the various challenges associated with the problem was more intimidating. The biggest obstacle was giving the user the ability to search category names even though the api was only able to search for categories through their id’s. My solution to this problem was to get all 184 pages of category titles and their id’s when the website initially loaded and uses Angular’s autocomplete to give users the ability to search within the known category titles. While searching through all 184 pages took some time to load in the beginning. It was decided that the user experience would be better if getting all of the categories was a one time occurence, instead of something that would have to run after every search query. Another issue was cross origin errors of https and http of github pages and the api. To get around this issue, like detailed on the mindsumo forum, the cors anywhere service was used, enabling the cross origin request to go through. However, one limitation of this decision was that the cors anywhere service can only make calls 200 times per hour. 


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
