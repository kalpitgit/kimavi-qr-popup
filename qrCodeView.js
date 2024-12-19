// qrCodeView.js

(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const scriptTag = document.querySelector(
      "script[data-qrid][data-uid][data-timer][data-img][data-message][data-position]"
    );
    if (!scriptTag) return;

    const qrid = scriptTag.getAttribute("data-qrid");
    const uid = scriptTag.getAttribute("data-uid");
    const timer = parseInt(scriptTag.getAttribute("data-timer"), 10) || 20;
    const qrImageUrl = scriptTag.getAttribute("data-img");
    const marketingMessage =
      scriptTag.getAttribute("data-message") || "Scan this QR code";
    const position = scriptTag.getAttribute("data-position") || "bottom-right";

    if (!qrid || !uid || !qrImageUrl) return;

    const popup = document.createElement("div");
    popup.style.position = "fixed";
    popup.style.width = "200px";
    popup.style.height = "280px";
    popup.style.backgroundColor = "#fff";
    popup.style.border = "1px solid #ccc";
    popup.style.borderRadius = "8px";
    popup.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
    popup.style.zIndex = "9999";
    popup.style.display = "flex";
    popup.style.flexDirection = "column";
    popup.style.overflow = "hidden";
    popup.style.fontFamily = "sans-serif";

    // Position logic
    // You can define these positions as needed
    switch (position) {
      case "bottom-right":
        popup.style.bottom = "10px";
        popup.style.right = "10px";
        break;
      case "bottom-left":
        popup.style.bottom = "10px";
        popup.style.left = "10px";
        break;
      case "middle-bottom-right":
        popup.style.bottom = "10px";
        popup.style.right = "10px";
        popup.style.transform = "translateY(-50%)";
        break;
      case "top-right":
        popup.style.top = "10px";
        popup.style.right = "10px";
        break;
      case "top-left":
        popup.style.top = "10px";
        popup.style.left = "10px";
        break;
      case "middle-top-right":
        popup.style.top = "50%";
        popup.style.right = "10px";
        popup.style.transform = "translateY(-50%)";
        break;
      default:
        // fallback to bottom-right
        popup.style.bottom = "10px";
        popup.style.right = "10px";
    }

    const closeBtnContainer = document.createElement("div");
    closeBtnContainer.style.display = "flex";
    closeBtnContainer.style.justifyContent = "flex-end";
    closeBtnContainer.style.padding = "5px";

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "X";
    closeBtn.style.background = "none";
    closeBtn.style.border = "none";
    closeBtn.style.fontSize = "14px";
    closeBtn.style.cursor = "pointer";
    closeBtn.style.fontWeight = "bold";
    closeBtn.addEventListener("click", () => {
      if (popup && popup.parentNode) {
        popup.parentNode.removeChild(popup);
      }
    });

    closeBtnContainer.appendChild(closeBtn);

    const imgContainer = document.createElement("div");
    imgContainer.style.flex = "1";
    imgContainer.style.display = "flex";
    imgContainer.style.alignItems = "center";
    imgContainer.style.justifyContent = "center";
    imgContainer.style.padding = "5px";

    const img = document.createElement("img");
    img.src = qrImageUrl;
    img.style.width = "100%";
    img.style.height = "auto";
    img.style.objectFit = "contain";
    imgContainer.appendChild(img);

    const textContainer = document.createElement("div");
    textContainer.style.padding = "5px";
    textContainer.style.textAlign = "center";
    textContainer.style.fontSize = "12px";
    textContainer.style.lineHeight = "1.2";
    textContainer.textContent = marketingMessage;

    popup.appendChild(closeBtnContainer);
    popup.appendChild(imgContainer);
    popup.appendChild(textContainer);
    document.body.appendChild(popup);

    const autoRemove = setTimeout(() => {
      if (popup && popup.parentNode) {
        popup.parentNode.removeChild(popup);
      }
    }, timer * 1000);

    closeBtn.addEventListener("click", () => clearTimeout(autoRemove));
  });
})();
