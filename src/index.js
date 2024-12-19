import React, { useEffect } from "react";

function showQRCodePopup({
  qrid,
  uid,
  img,
  message = "Scan this QR code",
  timer = 20,
  position = "bottom-right",
}) {
  if (!qrid || !uid || !img) return;

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

  const imageElement = document.createElement("img");
  imageElement.src = img;
  imageElement.style.width = "100%";
  imageElement.style.height = "auto";
  imageElement.style.objectFit = "contain";
  imgContainer.appendChild(imageElement);

  const textContainer = document.createElement("div");
  textContainer.style.padding = "5px";
  textContainer.style.textAlign = "center";
  textContainer.style.fontSize = "12px";
  textContainer.style.lineHeight = "1.2";
  textContainer.textContent = message;

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

  // Return a cleanup function
  return () => {
    clearTimeout(autoRemove);
    if (popup && popup.parentNode) {
      popup.parentNode.removeChild(popup);
    }
  };
}

export const QRCodePopUp = ({ qrid, uid, img, message, timer, position }) => {
  useEffect(() => {
    const cleanup = showQRCodePopup({
      qrid,
      uid,
      img,
      message,
      timer,
      position,
    });
    return cleanup;
  }, [qrid, uid, img, message, timer, position]);

  return null; // This component doesn't render anything, just manages the popup lifecycle.
};
