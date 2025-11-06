document.addEventListener('DOMContentLoaded', () => {

    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");
    const root = document.documentElement;
    const searchBtn = document.getElementById('searchBtn');
    const closeSearch = document.getElementById('closeSearch');
    const searchbar = document.getElementById('searchbar');
    const searchBox = document.getElementById('searchBox');
    const suggestedBox = document.getElementById('suggestedBox');
    const accordionContainer = document.getElementById('accordionContainer');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const statsBar = { totalItems: document.getElementById('totalItems'), favoriteCount: document.getElementById('favoriteCount'), recentCount: document.getElementById('recentCount')};
    const toast = document.getElementById('toast');
    const progressIndicator = document.getElementById('progressIndicator');
    const settingsBtn = document.getElementById('settingsBtn');

    let currentFilter = 'all';
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    let recentItems = JSON.parse(localStorage.getItem('recentItems')) || [];
    let viewMode = 'list';


    init();
});   