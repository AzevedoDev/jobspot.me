# Jobspot Server

## Mutations

### Create a user

```graphql
  mutation CreateUser($UserRegister: UserRegisterWithEmailInput!) {
    UserRegisterWithEmail(input: $UserRegister) {
      me {
        name
        email
      }
      token
      error
      success
    }
  }
```

variables:

```json
{
  "UserRegister": {
    "name": "jonathan",
    "email": "jonathan@galdino.dev",
    "password": "jonathan"
  },
}
```

### Login

```graphql
mutation LoginWithEmail($LoginWithEmail: UserLoginWithEmailInput!) {
  UserLoginWithEmail(input: $LoginWithEmail) {
    me {
      name
      email
    }
    token
    error
  }
}
```

variables:

```json
{
  "LoginWithEmail": {
    "email": "jonathan@galdino.dev",
    "password": "jonathan"
  }
}
```


### Create a Job

```graphql
  mutation CreateJob($AddJobInput:JobAddInput!) {
    JobAddMutation(input: $AddJobInput) {
      job {
        title
        description
        seniority
        salary
      }
      success
      error
    }
  }
```

Variables:

```json
{
  "AddJobInput": {
    "title": "Software Engineer",
    "seniority": "Senior",
    "description": "Precisa saber redux",
    "salary": 2000
  }
}
```


### Update a Job


```graphql
  mutation EditJob($EditJobInput: JobEditInput!) {
    JobEditMutation(input: $EditJobInput) {
      job {
        title
        description
        seniority
        salary
      }
      success
      error
    }
  }
```

Variables:

```json
{
  "EditJobInput": {
    "id": "5f1a05deba51702a9456c8d6",
    "job": {
      "title": "Frontend Engineer",
      "seniority": "Senior",
      "description": "Precisa saber redux",
      "salary": 5000
    }
  }
}
```

### Delete a job

```graphql
  mutation DeleteJob {
    JobDeleteMutation(input: { id: "5f1a05deba51702a9456c8d6" }) {
      success
      error
    }
  }
```
