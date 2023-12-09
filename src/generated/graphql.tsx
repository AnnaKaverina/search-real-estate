import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Query = {
  __typename?: 'Query';
  todo?: Maybe<Todo>;
  todos?: Maybe<Array<Maybe<Todo>>>;
};


export type QueryTodoArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTodosArgs = {
  limit?: Scalars['Int']['input'];
  start?: Scalars['Int']['input'];
};

export type Todo = {
  __typename?: 'Todo';
  completed?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type GetTodosQueryVariables = Exact<{
  limit: Scalars['Int']['input'];
  start: Scalars['Int']['input'];
}>;


export type GetTodosQuery = { __typename?: 'Query', todos?: Array<{ __typename?: 'Todo', id?: number | null, userId?: number | null, title?: string | null, completed?: boolean | null } | null> | null };

export type GetTwoTodoQueryVariables = Exact<{
  firstId?: InputMaybe<Scalars['String']['input']>;
  secondId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetTwoTodoQuery = { __typename?: 'Query', firstTodo?: { __typename?: 'Todo', id?: number | null, userId?: number | null, title?: string | null, completed?: boolean | null } | null, secondTodo?: { __typename?: 'Todo', id?: number | null, userId?: number | null, title?: string | null, completed?: boolean | null } | null };

export type TodoFragment = { __typename?: 'Todo', id?: number | null, userId?: number | null, title?: string | null, completed?: boolean | null };

export const TodoFragmentDoc = gql`
    fragment Todo on Todo {
  id
  userId
  title
  completed
}
    `;
export const GetTodosDocument = gql`
    query GetTodos($limit: Int!, $start: Int!) {
  todos(limit: $limit, start: $start) {
    id
    userId
    title
    completed
  }
}
    `;

/**
 * __useGetTodosQuery__
 *
 * To run a query within a React component, call `useGetTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodosQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      start: // value for 'start'
 *   },
 * });
 */
export function useGetTodosQuery(baseOptions: Apollo.QueryHookOptions<GetTodosQuery, GetTodosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTodosQuery, GetTodosQueryVariables>(GetTodosDocument, options);
      }
export function useGetTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTodosQuery, GetTodosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTodosQuery, GetTodosQueryVariables>(GetTodosDocument, options);
        }
export function useGetTodosSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTodosQuery, GetTodosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTodosQuery, GetTodosQueryVariables>(GetTodosDocument, options);
        }
export type GetTodosQueryHookResult = ReturnType<typeof useGetTodosQuery>;
export type GetTodosLazyQueryHookResult = ReturnType<typeof useGetTodosLazyQuery>;
export type GetTodosSuspenseQueryHookResult = ReturnType<typeof useGetTodosSuspenseQuery>;
export type GetTodosQueryResult = Apollo.QueryResult<GetTodosQuery, GetTodosQueryVariables>;
export const GetTwoTodoDocument = gql`
    query GetTwoTodo($firstId: String, $secondId: String) {
  firstTodo: todo(id: $firstId) {
    ...Todo
  }
  secondTodo: todo(id: $secondId) {
    ...Todo
  }
}
    ${TodoFragmentDoc}`;

/**
 * __useGetTwoTodoQuery__
 *
 * To run a query within a React component, call `useGetTwoTodoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTwoTodoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTwoTodoQuery({
 *   variables: {
 *      firstId: // value for 'firstId'
 *      secondId: // value for 'secondId'
 *   },
 * });
 */
export function useGetTwoTodoQuery(baseOptions?: Apollo.QueryHookOptions<GetTwoTodoQuery, GetTwoTodoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTwoTodoQuery, GetTwoTodoQueryVariables>(GetTwoTodoDocument, options);
      }
export function useGetTwoTodoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTwoTodoQuery, GetTwoTodoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTwoTodoQuery, GetTwoTodoQueryVariables>(GetTwoTodoDocument, options);
        }
export function useGetTwoTodoSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTwoTodoQuery, GetTwoTodoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTwoTodoQuery, GetTwoTodoQueryVariables>(GetTwoTodoDocument, options);
        }
export type GetTwoTodoQueryHookResult = ReturnType<typeof useGetTwoTodoQuery>;
export type GetTwoTodoLazyQueryHookResult = ReturnType<typeof useGetTwoTodoLazyQuery>;
export type GetTwoTodoSuspenseQueryHookResult = ReturnType<typeof useGetTwoTodoSuspenseQuery>;
export type GetTwoTodoQueryResult = Apollo.QueryResult<GetTwoTodoQuery, GetTwoTodoQueryVariables>;