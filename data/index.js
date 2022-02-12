const recipes = require('./recipe-data.json');
const cookbooks = require('./cookbook-data.json');

module.exports = () => ({
  recipes: recipes,
  cookbooks: cookbooks
});