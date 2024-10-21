// 配置编译环境和线上环境之间的切换
const env = import.meta.env;

if (env.DEV) {
  //开发环境
} else if (env.PROD) {
}

export {};
