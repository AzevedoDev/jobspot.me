# Jobspot.me

> Minimalistic app to display job positions

### How to run

There are instructions on how to run each end of this project inside web and server packages.
Other packages are meant to be reusable by any other packages.

#### Install dependencies first

```bash
$ cd jobspot.me
$ yarn
```

#### Scripts

If is your first time running this repo, make sure to run in this order but, check server and client packages to provide environment variables

- `$ yarn update-schema` :: will generate graphql schema for server and for graphql package (which will be used by package client)
- `$ yarn relay` :: will generate relay artifacts (run this first, then run client:dev)
- `$ yarn server:dev` :: to begin the development server
- `$ yarn client:dev` :: to begin development client 
