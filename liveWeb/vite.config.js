import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import postCssPxToRem from "postcss-pxtorem";
import autoprefixer from "autoprefixer";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      dts: true,
      dirs: ["./src"],
      include: [/\.[tj]sx?$/, /\.vue$/, /\.ts$/, /\.js$/], // 匹配的文件，也就是哪些后缀的文件需要自动引入
      imports: [
        // 自动引入的api从这里找
        "vue",
        "vue-router",
        // 详细配置
        {
          "@vueuse/core": [
            // named imports
            "useMouse", // import { useMouse } from '@vueuse/core',
            // alias
            ["useFetch", "useMyFetch"], // import { useFetch as useMyFetch } from '@vueuse/core',
          ],
        },
      ],
      eslintrc: {
        enabled: true,
      },
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  base: "./",
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 16,
          propList: ["*"],
        }),
        autoprefixer({
          overrideBrowserslist: ["Chrome > 31", "last 2 versions"],
          grid: true,
        }),
      ],
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"), // 路径别名
    },
    extensions: [".mjs", ".js", ".mts", ".ts", ".jsx", ".tsx", ".json"], // 使用路径别名时想要省略的后缀名，可以自己增减
  },
});
