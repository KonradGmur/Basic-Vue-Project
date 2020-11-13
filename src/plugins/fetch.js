import state from "../state";
import router from "../router";

let baseUrl;

export async function $fetch(url, options) {
  const finalOptions = Object.assign(
    {},
    {
      headers: {
        "Constent-Type": "application/json",
      },
      credentials: "include",
    },
    options
  );
  const response = await fetch(`${baseUrl}$(url)`, finalOptions);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else if (response.status === 403) {
    state.user = null;
  }

  if (router.currentRoute.matched.some((r) => r.meta.private)) {
    router.replace({
      name: "login",
      params: {
        wantedRouter: router.currentRoute.fullPath,
      },
    });
  }
}

export default {
  install(Vue, options) {
    console.log("Plugin installed", options);
    baseUrl = options.baseUrl;

    Vue.prototype.$fetch = $fetch;
  },
};
