# Jobspot.me Server

### Mutations

## Create

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


## Update


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
