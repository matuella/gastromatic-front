var app = angular.module('RDash', ['ui.bootstrap', 'ui.router', 'ngCookies']);

app.value("config", {
    // rootUrl: "http://localhost:8080/gastromatic"
    rootUrl: "https://gastromatic.herokuapp.com"
});