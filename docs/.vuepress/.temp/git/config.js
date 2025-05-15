import { GitContributors } from "C:/Users/42075/Desktop/工程/个人博客/ybyllc.github.io/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "C:/Users/42075/Desktop/工程/个人博客/ybyllc.github.io/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
