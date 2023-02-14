module.exports = (options) => {
  if (!options) {
    throw new Error('No options available. Check your config!');
  }
  const finalThemeNames = {};

  options.forEach((theme) => {
    const { name } = theme;

    finalThemeNames[`theme-${name}`] = `theme="${name}"`;
  });

  return finalThemeNames;
};
