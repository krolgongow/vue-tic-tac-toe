import { createApp } from "vue";
import App from "./App.vue";
import ChoosenField from "./components/ChoosenField.vue";

const app = createApp(App);
app.component("choosen-field", ChoosenField);

app.mount("#app");
