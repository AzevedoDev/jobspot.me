# Jobspot.me

> Minimalistic app to display job positions

## Informative

This is not a actual product. I'm using this design to learn new things o/

## How to run

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

## Demo (WIP)

This project follows the UI provided by [Pavan Penurkar](https://www.uplabs.com/posts/job-portal-dashboard-6549160e-13cd-4254-8c33-496ef1dab3f6). This design challenged me, and still does, in many ways. Thanks Mr. Penurkar.

![Demo](https://user-images.githubusercontent.com/13936071/88820504-c4307b80-d197-11ea-8b0e-486338324d39.JPG)


## Things to be done

- [ ] Add formik
- [ ] Create a search to filter jobs by title
- [ ] Create a filter to filter jobs by seniority and/or salary
- [ ] Automatically update the job offers card
- [ ] Responsivity is always awesome
- [ ] Not rushing, but I want to explore more about relay-hooks and the original hooks from relay@experimental
