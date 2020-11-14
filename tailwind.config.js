module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      height: theme => ({
        almostscreen: "90vh",
      }),
      inset: {
        100: "100%",
        negative: "-1000px",
      },
    },
  },
  variants: {},
  plugins: [],
}
