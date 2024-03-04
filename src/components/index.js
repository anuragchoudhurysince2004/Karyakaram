// src/assets/images/index.js
const images = {};
function importAll(r) {
  r.keys().forEach((key) => (images[key] = r(key)));
}
importAll(
  require.context(
    "../../public/assets/img/about_carousel/",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

export default images;
