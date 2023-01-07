const appId = 'No6xjeOV6L9eg8TkvJgU';
const baseLink = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}`;
const foodBase = 'https://www.themealdb.com/api/json/v1/1/';
const searchUrl = `${foodBase}search.php?s=`;
const catUrl = `${foodBase}filter.php?c=`;
const menuIco = document.querySelector('.menu-ico');
const navMenu = document.querySelector('.main-menu');
const catBeef = document.getElementById('cat-beef');
const catSeafood = document.getElementById('cat-seafood');
const catDessert = document.getElementById('cat-dessert');
const searchCount = document.getElementById('search-count');
const searchCountHeading = document.getElementById('search-count-heading');
export {
  appId,
  baseLink,
  menuIco,
  navMenu,
  catBeef,
  catSeafood,
  catDessert,
  foodBase,
  searchUrl,
  catUrl,
  searchCount,
  searchCountHeading,
};
