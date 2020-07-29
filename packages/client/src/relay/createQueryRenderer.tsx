/* eslint-disable react/prefer-stateless-function */
/* eslint-disable @typescript-eslint/ban-types */
import * as React from 'react';
import {
  GraphQLTaggedNode,
  Variables,
  QueryRenderer,
  Container,
} from 'react-relay';

import Environment from './Environment';

type Config = {
  query: GraphQLTaggedNode;
  queriesParams?: (props: object) => Variables;
  variables?: Variables;
  getFragmentProps?: (fragmentProps: object) => object;
  loadingView?: React.ReactNode | null;
};

export default function createQueryRenderer(
  FragmentComponent: Container<any>,
  config: Config,
) {
  const { query, queriesParams, getFragmentProps } = config;

  class QueryRendererWrapper extends React.Component {
    render() {
      const variables = queriesParams
        ? queriesParams(this.props)
        : config.variables;

      return (
        <QueryRenderer
          environment={Environment}
          query={query}
          variables={variables}
          render={({ error, props }) => {
            if (error) {
              return <span>{error.toString()}</span>;
            }

            if (props) {
              const fragmentProps = getFragmentProps
                ? getFragmentProps(props)
                : { query: props };

              return <FragmentComponent {...this.props} {...fragmentProps} />;
            }

            return <span>loading</span>;
          }}
        />
      );
    }
  }
  return QueryRendererWrapper;
}
