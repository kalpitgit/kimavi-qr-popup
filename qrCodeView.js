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
    popup.style.width = "220px";
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
        popup.style.bottom = "10px";
        popup.style.right = "10px";
    }

    // Top container for the close button (X)
    const topContainer = document.createElement("div");
    topContainer.style.display = "flex";
    topContainer.style.justifyContent = "flex-end";
    topContainer.style.alignItems = "center";
    topContainer.style.padding = "5px";
    topContainer.style.backgroundColor = "#f9f9f9";
    topContainer.style.borderBottom = "1px solid #ccc";

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "X";
    closeBtn.style.backgroundColor = "black";
    closeBtn.style.color = "#fff";
    closeBtn.style.border = "none";
    closeBtn.style.fontSize = "14px";
    closeBtn.style.cursor = "pointer";
    closeBtn.style.fontWeight = "bold";
    closeBtn.style.borderRadius = "3px";
    closeBtn.style.padding = "0 5px";
    closeBtn.addEventListener("click", () => {
      if (popup && popup.parentNode) {
        popup.parentNode.removeChild(popup);
      }
    });

    topContainer.appendChild(closeBtn);

    // Container for the QR image
    const imgContainer = document.createElement("div");
    imgContainer.style.display = "flex";
    imgContainer.style.flexDirection = "column";
    imgContainer.style.alignItems = "center";
    imgContainer.style.justifyContent = "center";
    imgContainer.style.padding = "10px 5px";
    imgContainer.style.borderBottom = "1px solid #ccc";

    const img = document.createElement("img");
    img.src = qrImageUrl;
    img.style.width = "80%";
    img.style.height = "auto";
    img.style.objectFit = "contain";
    imgContainer.appendChild(img);

    // Marketing message
    const textContainer = document.createElement("div");
    textContainer.style.padding = "5px";
    textContainer.style.textAlign = "center";
    textContainer.style.fontSize = "12px";
    textContainer.style.lineHeight = "1.2";
    textContainer.textContent = marketingMessage;

    // Footer link container
    const footerContainer = document.createElement("div");
    footerContainer.style.textAlign = "center";
    footerContainer.style.paddingBottom = "5px";
    footerContainer.style.marginTop = "auto"; // Push footer to bottom

    const poweredByLink = document.createElement("a");
    poweredByLink.href = "https://www.kimavi.com/qr";
    poweredByLink.target = "_blank";
    poweredByLink.style.color = "grey";
    poweredByLink.style.textDecoration = "underline";
    poweredByLink.style.fontSize = "8px"; // increased by 2px from original 6px
    poweredByLink.textContent = "Powered by Kimavi";

    footerContainer.appendChild(poweredByLink);

    popup.appendChild(topContainer);
    popup.appendChild(imgContainer);
    popup.appendChild(textContainer);
    popup.appendChild(footerContainer);

    document.body.appendChild(popup);

    const autoRemove = setTimeout(() => {
      if (popup && popup.parentNode) {
        popup.parentNode.removeChild(popup);
      }
    }, timer * 1000);

    closeBtn.addEventListener("click", () => clearTimeout(autoRemove));
  });
})();
