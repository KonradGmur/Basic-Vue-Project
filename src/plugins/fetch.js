let baseUrl;

export default {
  install(options) {
    console.log("Plugin installed", options);
    baseUrl = options.baseUrl;
  },
};
