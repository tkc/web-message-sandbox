// 認証URL
export const AuthServerURL = "http://localhost:8080/authorize";

// iframeを生成しbodyにappendする
export function CreateIframe() {
  let url = AuthServerURL;
  url += "?response_mode=web_message";
  url += "&response_type=code";
  url += "&prompt=none";

  const iframe = document.createElement("iframe");
  iframe.setAttribute("src", url);
  iframe.style.width = "0px";
  iframe.style.height = "0px";
  document.body.appendChild(iframe);
}
