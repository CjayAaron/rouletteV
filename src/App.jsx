import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "assets/Build/WebGLBuild.js",
    dataUrl: "assets/Build/WebGLBuild.data",
    frameworkUrl: "assets/Build/WebGLBuild.framework.js",
    codeUrl: "assets/Build/WebGLBuild.wasm",
  });

  return <Unity unityProvider={unityProvider} />;
}

export default App
