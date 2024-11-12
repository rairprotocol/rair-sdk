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
  serverURL, // URL for backend. Default sandbox URL to try if you haven't deployed your own backend rair-node yet http://35.226.25.117:5000
  socketURL, // URL for socket. http://35.226.25.117:8080
};

const rairSDK = new RairSDK(settings);
```
After Initializng the SDK here are the first things you can do to get a working dApp

## 1. Empty dApp with Authentication working

Follow these code snippets below

*code snippets here* //coming soon
