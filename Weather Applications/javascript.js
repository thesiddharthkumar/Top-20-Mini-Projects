const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const GEOCODE_URL = 'https://api.openweathermap.org/geo/1.0/direct';
const REVERSE_GEOCODE_URL = 'https://api.openweathermap.org/geo/1.0/reverse';

const elements = {
    city: document.querySelector('.city'),
    region: document.querySelector('.region'),
    country: document.querySelector('.country'),
    date: document.querySelector('.date'),
    time: document.querySelector('.time'),
    temperature: document.querySelector('.temperature'),
    weatherIcon: document.querySelector('.weather-icon'),
    description: document.querySelector('.description'),
    feelsLike: document.querySelector('.feels-like'),
    highTemp: document.querySelector('.high'),
    lowTemp: document.querySelector('.low'),
    visibility: document.querySelector('.visibility'),
    humidity: document.querySelector('.humidity'),
    windSpeed: document.querySelector('.wind-speed'),
    pressure: document.querySelector('.pressure'),
    hourlyContainer: document.querySelector('.hourly-container'),
    dailyContainer: document.querySelector('.daily-container'),
    searchBtn: document.querySelector('.search-btn'),
    closeSearch: document.querySelector('.close-search'),
    searchOverlay: document.querySelector('.search-overlay'),
    searchInput: document.querySelector('.search-input'),
    searchResults: document.querySelector('.search-results'),
    searchSuggestions: document.querySelector('.search-suggestions'),
    clearSearch: document.querySelector('.clear-search'),
    unitBtns: document.querySelectorAll('.unit-btn'),
    loadingScreen: document.querySelector('.loading-screen'),
    themeToggle: document.querySelector('.theme-toggle'),
    locationPrompt: document.querySelector('.location-prompt'),
    allowLocationBtn: document.querySelector('.allow-btn'),
    denyLocationBtn: document.querySelector('.deny-btn'),
    hoursToggle: document.querySelector('.hours-toggle')
};

// Starting..