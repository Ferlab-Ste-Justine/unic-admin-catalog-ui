# unic-admin-catalog-ui

## Pre-requisites

- Node 18+

## Get Started

### Certificates

1. Make sure you have mkcert install

##### Install mkcert tool - macOS; you can see the mkcert repo for details

```git
brew install mkcert
```

##### Install nss (only needed if you use Firefox)

```git
brew install nss
```

##### Setup mkcert on your machine (creates a CA)

```git
mkcert -install
```

2. Install your cerficate with the script from package.json

```git
npm run cert
```
