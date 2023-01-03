const formatColor = require('./formatColor');

module.exports = (options) => {
  if (!options) {
    throw new Error('No options available. Check your config!');
  }
  const finalColorSet = {};

  options.forEach((theme) => {
    const { colors, name } = theme;
    const finalColors = {};

    Object.entries(colors).forEach((color) => {
      if (typeof color[1] === 'string') {
        finalColors[`--c-${color[0]}`] = formatColor(color[1]);
      }

      if (typeof color[1] === 'object') {
        const colorName = color[0];
        Object.entries(color[1]).forEach((color) => {
          finalColors[`--c-${colorName}-${color[0]}`] = formatColor(color[1]);
        });
      }
    });

    if (name === 'default') {
      finalColorSet[':root'] = finalColors;
    }

    finalColorSet[`[data-theme="${name}"]`] = finalColors;
  });

  return finalColorSet;
};
