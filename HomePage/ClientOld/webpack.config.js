/// <binding ProjectOpened='Run - Development' />

module.exports = function (env) {
  return require(`./webpack.${env}.js`);
};
