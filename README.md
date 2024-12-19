# kimavi-qr-code-popup

**kimavi-qr-code-popup** is a React component that replicates the behavior of a QR code popup initially provided via a `<script>` tag by https://www.kimavi.com/qr.

this was the earlier script example

```js
<script
  src="https://www.kimavi.com/js/qrCodeView.js"
  data-img="https://firebasestorage.googleapis.com/v0/b/json-storage-bed47.appspot.com/o/public%2FEaj26XpxMmXEkHm2HSbEQRWGN933%2F0048c975-489a-4c28-9eda-b30080a4b0a6.png?alt=media&token=6f0eef3c-c097-4dcf-b9b9-011ead325e6d"
  data-uid="Eaj26XpxMmXEkHm2HSbEQRWGN933"
  data-qrid="0048c975-489a-4c28-9eda-b30080a4b0a6"
  data-message="Scan this QR code to talk to our agent via your phone"
  data-timer="20"
  data-position="bottom-right"
  async
></script>
```

Instead of embedding a script in your HTML, you can now integrate the same functionality directly into your React application.

This component allows you to display a QR code in a popup on your webpage. The popup can show after a specified timer, include a marketing message, and be positioned at various locations on the screen. It mirrors the exact parameters (`img`, `uid`, `qrid`, `message`, `timer`, `position`) you'd pass to the `<script>` tag, but now as React props.

## Features

- **Exact replication of script embed:** Provide the same parameters as the `<script>` tag (`data-img`, `data-uid`, `data-qrid`, `data-message`, `data-timer`, `data-position`) directly as React props.
- **No external script needed:** The logic that was in `qrCodeView.js` is now encapsulated in this React component.
- **Configurable position, timer, and marketing message:** Control where and when the popup appears.
- **Runs fully within React:** Ideal for React or Next.js applications, no DOM manipulation needed outside of React.

## Position Options are

- bottom-right
- bottom-left
- middle-bottom-right
- top-right
- top-left
- middle-top-right

## Installation

```bash
npm install my-qr-popup
```

## Usage

Import the component and provide the required props. These props correspond to the data-attributes you’d otherwise place in the script tag.

- **img** (string): URL to the QR code image (was `data-img`).
- **uid** (string): User ID (was `data-uid`).
- **qrid** (string): QR code ID (was `data-qrid`).
- **message** (string): Marketing message (was `data-message`).
- **timer** (number): Timer in seconds (was `data-timer`, default 20).
- **position** (string): Popup position (was `data-position`, default "bottom-right").

### Example

```jsx
import React from "react";
import { QRCodePopUp } from "my-qr-popup";

function App() {
  return (
    <div>
      <QRCodePopUp
        img="https://firebasestorage.googleapis.com/v0/b/json-storage-bed47.appspot.com/o/public%2FEaj26XpxMmXEkHm2HSbEQRWGN933%2F0048c975-489a-4c28-9eda-b30080a4b0a6.png?alt=media&token=6f0eef3c-c097-4dcf-b9b9-011ead325e6d"
        uid="Eaj26XpxMmXEkHm2HSbEQRWGN933"
        qrid="0048c975-489a-4c28-9eda-b30080a4b0a6"
        message="Scan this QR code to talk to our agent via your phone"
        timer={20}
        position="bottom-right"
      />
    </div>
  );
}

export default App;
```

### Screenshot

![QR Code Example](https://firebasestorage.googleapis.com/v0/b/json-storage-bed47.appspot.com/o/public%2FEaj26XpxMmXEkHm2HSbEQRWGN933%2F0048c975-489a-4c28-9eda-b30080a4b0a6.png?alt=media)

### Parameters

- **img** (string, required): URL of the QR code image.
- **uid** (string, required): User ID.
- **qrid** (string, required): QR code ID.
- **message** (string, required): Marketing message text.
- **timer** (number, optional): Auto-hide timer in seconds. Default 20.
- **position** (string, optional): Popup position. Default "bottom-right".

### Why kimavi-qr-code-popup?

- Eliminates need for external script.
- Straightforward configuration via React props.
- Ideal for integrating QR code popups into any React or Next.js application.

## License

[MIT](LICENSE)

_(Ensure Firebase Storage URL and tokens are updated to your environment as needed.)_

```

```
