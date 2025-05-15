import { CodeTabs } from "C:/Users/42075/Desktop/工程/个人博客/ybyllc.github.io/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "C:/Users/42075/Desktop/工程/个人博客/ybyllc.github.io/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "C:/Users/42075/Desktop/工程/个人博客/ybyllc.github.io/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
