# Amisend Node.js SDK

Node.js library for the Amisend API.

## Complete documentation

This library is an implementation made in javascript of the Email Service [API](http://url.cl/)

### Install

Npm:

```bash
npm install --save amisend
```

Or using Yarn:

```bash
yarn add amisend
```

## Getting started

### Authenticate with your Api Key

Create an account at [amisend](https://amisend.com) and get your **API Key**.

```js
// CommonJS
const Amisend = require("amisend");

// ES6 / Typescript
import Amisend from "amisend";

const amisend = new Amisend({
  apiKey: "YOUR_API_KEY",
});
```

## Usage

### Emails

#### List emails

```js
amisend.emails
  .list({ page: 1, limit: 10 })
  .then((emails) => {
    // Handle emails
  })
  .catch((error) => console.log(error));
```

#### Send email

```js
amisend.emails
  .send({
    from: "Example <example@domain.com>",
    to: ["example@hotmail.com"],
    subject: "hello world",
    html: "<p>It works!</p>",
  })
  .then((response) => {
    // Handle response
  })
  .catch((error) => console.log(error));
```

### Contacts

#### List contacts in an audience

```js
amisend.contacts
  .list({ audienceId: "audience-id", page: 1, limit: 10 })
  .then((contacts) => {
    // Handle contacts
  })
  .catch((error) => console.log(error));
```

#### Create a contact

```js
amisend.contacts
  .create({
    audienceId: "audience-id",
    name: "Sebastián",
    email: "example@hotmail.com",
  })
  .then((response) => {
    // Handle response
  })
  .catch((error) => console.log(error));
```

#### Update a contact

```js
amisend.contacts
  .update({
    audienceId: "audience-id",
    contactId: "contact-id",
    name: "Sebastián Updated",
  })
  .then((response) => {
    // Handle response
  })
  .catch((error) => console.log(error));
```

#### Delete a contact

```js
amisend.contacts
  .delete({ audienceId: "audience-id", contactId: "contact-id" })
  .then((response) => {
    // Handle response
  })
  .catch((error) => console.log(error));
```

### Domains

#### List domains

```js
amisend.domains
  .list({})
  .then((domains) => {
    // Handle domains
  })
  .catch((error) => console.log(error));
```

#### Create a domain

```js
amisend.domains
  .create({ name: "example.com" })
  .then((domain) => {
    // Handle domain
  })
  .catch((error) => console.log(error));
```

#### Retrieve a domain

```js
amisend.domains
  .retrieve({ domainId: "domain-id" })
  .then((domain) => {
    // Handle domain
  })
  .catch((error) => console.log(error));
```

#### Delete a domain

```js
amisend.domains
  .delete({ domainId: "domain-id" })
  .then((response) => {
    // Handle response
  })
  .catch((error) => console.log(error));
```

#### Check a domain

```js
amisend.domains
  .check({ domainId: "domain-id" })
  .then((result) => {
    // Handle result
  })
  .catch((error) => console.log(error));
```

### Audiences

#### List audiences

```js
amisend.audiences
  .list({ page: 1, limit: 10 })
  .then((audiences) => {
    // Handle audiences
  })
  .catch((error) => console.log(error));
```

#### Create an audience

```js
amisend.audiences
  .create({ name: "Newsletter" })
  .then((audience) => {
    // Handle audience
  })
  .catch((error) => console.log(error));
```

#### Retrieve an audience

```js
amisend.audiences
  .retrieve({ audienceId: "audience-id" })
  .then((audience) => {
    // Handle audience
  })
  .catch((error) => console.log(error));
```

#### Delete an audience

```js
amisend.audiences
  .delete({ audienceId: "audience-id" })
  .then((response) => {
    // Handle response
  })
  .catch((error) => console.log(error));
```

### API Keys

#### List API keys

```js
amisend.apiKeys
  .list()
  .then((apiKeys) => {
    // Handle API keys
  })
  .catch((error) => console.log(error));
```

#### Create an API key

```js
amisend.apiKeys
  .create({ name: "My Key" })
  .then((apiKey) => {
    // Handle API key
  })
  .catch((error) => console.log(error));
```

#### Delete an API key

```js
amisend.apiKeys
  .delete({ apiKeyId: "api-key-id" })
  .then((response) => {
    // Handle response
  })
  .catch((error) => console.log(error));
```

### Broadcasts

#### List broadcasts

```js
amisend.broadcasts
  .list({ page: 1, limit: 10 })
  .then((broadcasts) => {
    // Handle broadcasts
  })
  .catch((error) => console.log(error));
```

#### Create a broadcast

```js
amisend.broadcasts
  .create({
    name: "Promo",
    from: "Example <example@domain.com>",
    audience: "audience-id",
    subject: "Promo subject",
    html: "<p>Promo content</p>",
  })
  .then((broadcast) => {
    // Handle broadcast
  })
  .catch((error) => console.log(error));
```

#### Retrieve a broadcast

```js
amisend.broadcasts
  .retrieve({ broadcastId: "broadcast-id" })
  .then((broadcast) => {
    // Handle broadcast
  })
  .catch((error) => console.log(error));
```

#### Update a broadcast

```js
amisend.broadcasts
  .update({ broadcastId: "broadcast-id", subject: "New subject" })
  .then((broadcast) => {
    // Handle broadcast
  })
  .catch((error) => console.log(error));
```

#### Delete a broadcast

```js
amisend.broadcasts
  .delete({ broadcastId: "broadcast-id" })
  .then((response) => {
    // Handle response
  })
  .catch((error) => console.log(error));
```

#### Send a broadcast

```js
amisend.broadcasts
  .send({ broadcastId: "broadcast-id" })
  .then((result) => {
    // Handle result
  })
  .catch((error) => console.log(error));
```

#### Unsubscribe a contact from a broadcast

```js
amisend.broadcasts
  .unsubscribe({ broadcastId: "broadcast-id", contactId: "contact-id" })
  .then((result) => {
    // Handle result
  })
  .catch((error) => console.log(error));
```

---

> See the [official documentation](https://amisend.com) for more details and advanced use cases.
