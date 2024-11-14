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

export const rairSDK = new RairSDK(settings);
```
After Initializng the SDK here are the first things you can do to get a working dApp

## 1. Empty dApp with Authentication working (default frontend)

Follow these steps below to deploy our existing sample application

```ts
const getChallenge = async (userAddress: Hex, ownerAddress?: Hex) => {
  const responseData = await rairSDK.auth.getChallenge({  // use getChallenge from auth folder
    userAddress: userAddress,
    intent: "login",
    ownerAddress: ownerAddress || userAddress,
  });
  return responseData.response;
};
```
All requests what you need to use you can find in `src/API`


Some example:
For user lists
```ts
const { data } = await rairSDK.users.listUsers();
```
Request with arguments
```ts
const responseData = await rairSDK.notifications.listNotifications({
      pageNum: pageNum,
    });
```

To use the SDK you need to use rairSDK(exported above), select the desired file with requests and select the request 
Example: 
file - `src/API/users` 
request - `findUserByUserAddress` 

Result: 
```ts
const userDataResponse = await rairSDK.users.findUserByUserAddress({ publicAddress: loginData.userAddress, });
```
`publicAddress` is a required argument in this request



## 2. Example of deploying your own frontend that interacts with our SDK to make a new dApp

How dev dapp works. 
