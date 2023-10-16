# DevCycle NextJS Getting Started

Getting started with DevCycle Feature Flags on NextJS

## Setup

Install a compatable veresion of nodejs. Current using lts/hydrogen.

If you use nvm to manage your node version you can just run:

```
nvm use
```

and it will install the correct version of nodejs for you.

Make sure `yarn` is installed:

```
npm install -g yarn
```

Now install the necessary packages using `yarn`:

```
yarn
```

## Getting Started

Setup the `.env` file with the DevCycle client key from the Development environment for your project.

```
NEXT_PUBLIC_DVC_SDK_KEY=dvc_client_...
```

Create a `.env.local` file based upon an app configured in [Auth0](https://manage.auth0.com/#/applications)

```
AUTH0_SECRET='use [openssl rand -hex 32] to generate a 32 bytes value'
AUTH0_BASE_URL=
AUTH0_ISSUER_BASE_URL=
AUTH0_CLIENT_ID=
AUTH0_CLIENT_SECRET=
```

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Mark Allen - [@markcallen](https://www.linkedin.com/in/markcallen/)

Project Link: [https://github.com/DevCycleHQ/devcycle-use-cases](https://github.com/DevCycleHQ/devcycle-use-cases)
