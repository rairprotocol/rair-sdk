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

## 1. Empty dApp with Authentication working (default frontend)

Follow these steps below to deploy our existing sample application

```ts
const getChallenge = async (userAddress: Hex, ownerAddress?: Hex) => {
  const responseData = await rairSDK.auth.getChallenge({
    userAddress: userAddress,
    intent: "login",
    ownerAddress: ownerAddress || userAddress,
  });
  return responseData.response;
};
```

```ts
const respondChallenge = async (challenge, signedChallenge) => {
  const loginResponse = await rFetch("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({
      MetaMessage: JSON.parse(challenge).message.challenge,
      MetaSignature: signedChallenge,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const { success, user } = loginResponse;

  if (!success) {
    Swal.fire("Error", `Login failed`, "error");
    return;
  }
  return { success, user };
};
```

## 2. Example of deploying your own frontend that interacts with our SDK to make a new dApp

How dev dapp works. 
