import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { IncomingMessage } from 'http';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    '/web_feed/getWebList',
    createProxyMiddleware({
      target: 'https://r.inews.qq.com/',
      changeOrigin: true,
      onProxyReq: async (proxyReq, req, res) => {
        if (req.body) {
        }
      },
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      onProxyRes: async (proxyRes, req, res) => {},
    }),
  );
  await app.listen(3000);
}
bootstrap();

function getBody(proxyRes: IncomingMessage) {
  return new Promise((resolve, reject) => {
    const body = [];
    proxyRes.on('data', function (chunk) {
      body.push(chunk);
    });
    let bodyStr = '';
    proxyRes.on('end', function () {
      bodyStr = Buffer.concat(body).toString();
      resolve(bodyStr);
    });
  });
}
