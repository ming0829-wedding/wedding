import express from "express";
import fs from "fs";
import path from "path";
import ReactDOMServer from "react-dom/server";
import App from "../src/App";
import { ServerStyleSheet } from "styled-components";

const sheet = new ServerStyleSheet();
const app = express();
// 클라이언트 사이드에서 빌드된 html을 읽어와 사용
const html = fs.readFileSync(path.resolve(__dirname, "../client/index.html"), "utf-8");

app.get("/", (req, res) => {
  const renderString = ReactDOMServer.renderToString(sheet.collectStyles(<App />));
  const styleTags = sheet.getStyleTags();
  const result = html
    .replace('<div id="root"></div>', `<div id="root">${renderString}</div>`)
    .replace("__STYLE_FROM_SERVER__", styleTags);
  res.send(result);
});
// 위의 / 이외의 경로로 요청할 경우(js, css 등)
// dist/client 폴더에 있는 파일들 제공
app.use("/", express.static("dist/client"));

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
