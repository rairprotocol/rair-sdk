# rair-sdk

Simple developer SDK for RAIRprotocol

## Getting started

```
npm install @rair-protocol/sdk
```

After installing, you can import and initialize the SDK:

```ts
import { RairSDK } from "@rair-protocol/sdk";

const settings = {
  serverURL, // URL for backend. Default example URLs to try if you haven't deployed your own backend rair-node yet http://1.1.1.1:5000
  socketURL, // URL for socket http://1.1.1.1:8080
};

const rairSDK = new RairSDK(settings);
```
