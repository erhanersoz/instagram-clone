module.exports = {
  js2svg: {
    pretty: true,
  },
  plugins: [
    {
      name: 'removeAttrs',
      params: {
        attrs: 'xmlns|class|stroke',
      },
    },
  ],
};
