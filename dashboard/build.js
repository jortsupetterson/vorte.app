import buildEdgeRuntime from "../shared/buildEdgeRuntime.js";
import buildStyleSheet from "../shared/buildStyleSheet.js";
import buildBrowserRuntime from "../shared/buildBrowserRuntime.js"

buildEdgeRuntime("./src/edge/handleRequest", "./dist");
buildBrowserRuntime("./src/styles/style.css","./dist/assets/dash")
buildStyleSheet("./src/browser/main/attachEvents.js","./dist/assets/dash");