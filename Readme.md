# Amisend Node.js SDK

Node.js library for the Amisend API.

## Complete documentation

This library is an implementation made in javascript of the Email Service [API](http://url.cl/)

### Install

Npm:

```bash
npm install --save amisend
```

Yarn:

```bash
yarn add amisend
```

## Getting started

### Authenticate with your Api Key

Make sure you have created your free account on [amisend](https://amisend.com) and that you have your **Credentials**.

```javascript
// CommonJS
const Amisend = require("amisend");

// ES6 / Typescript
import Amisend from "amisend";

const amisend = new Amisend({
  apiKey: "YOUR_API_KEY",
});
```

### Emails

#### send email

```javascript
amisend.emails
  .send({
    from: "Example <example@domain.com>",
    to: "example@hotmail.com",
    subject: "hello world",
    html: "<p>it works!</p>",
  })
  .then((response) => {})
  .catch((error) => console.log(error)); // Handle the error.
```

### Contacts

#### create contact

````javascript
amisend.contacts.create({
  name: "Sebastián",
  email: "example@hotmail.com",
  audienceId: ''
})
.then((response) => {})
.catch((error) => console.log(error)); // Handle the error.
```


## Publish

```cli
npm publish
````
