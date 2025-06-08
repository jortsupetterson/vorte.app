import buildEdgeRuntime from "../shared/buildEdgeRuntime.js";
import buildBrowserRuntime from "../shared/buildBrowserRuntime.js";
import buildStyleSheet from "../shared/buildStyleSheet.js";

buildEdgeRuntime("./src/edge/handleRequest", "./dist");
buildBrowserRuntime("./src/browser/main/initAuth.js","./dist/assets");
buildBrowserRuntime("./src/browser/dedicated-worker/pkceWorker.js","./dist/assets");
buildStyleSheet("./src/styles/style.css","./dist/assets");