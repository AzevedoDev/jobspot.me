import { Variables } from 'react-relay';
import { RequestParameters } from 'relay-runtime';

// import { getToken } from '../utils/token';

export const GRAPHQL_URL = process.env.GRAPHQL_ENDPOINT;

if (!GRAPHQL_URL) {
  throw new Error('You probably forgot to provide GRAPHQL_ENDPOINT variable');
}

const fetchQuery = async (request: RequestParameters, variables: Variables) => {
  const body = JSON.stringify({
    name: request.name, // used by graphql mock on tests
    query: request.text, // GraphQL text from input
    variables,
  });
  const headers = {
    Accept: 'application/json',
    'Content-type': 'application/json',
    // Authorization: getToken(),
  };

  const response = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers,
    body,
  });

  return response.json();
};

export default fetchQuery;
