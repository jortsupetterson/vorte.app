import buildEdgeRuntime from "../shared/buildEdgeRuntime.js";
import buildBrowserRuntime from "../shared/buildBrowserRuntime.js";
import buildStyleSheet from "../shared/buildStyleSheet.js";

buildEdgeRuntime("./src/edge/handleRequest", "./dist");
buildStyleSheet("./src/styles/style.css","./dist/assets/home");

