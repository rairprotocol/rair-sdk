# rair-sdk

Simple developer SDK for RAIRprotocol

## Getting started

```
npm install @rair-protocol/sdk
```

After installing, you can import and initialize the SDK:

```ts
import { RairSDK } from "@rair-prototocol/sdk";

const settings = {
  serverURL, // URL for backend
  socketURL, // URL for socket
};

const rairSDK = new RairSDK(settings);
```
