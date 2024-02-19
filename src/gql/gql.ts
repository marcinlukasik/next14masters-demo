/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "fragment ProductListItemFragment on Product {\n  name\n  price\n  images {\n    alt\n    url\n  }\n  id\n  description\n  categories {\n    name\n  }\n}": types.ProductListItemFragmentFragmentDoc,
    "query ProductsGetItem($id: ID!) {\n  product(id: $id) {\n    ...ProductListItemFragment\n  }\n}": types.ProductsGetItemDocument,
    "query ProductsGetList($take: Int, $skip: Int) {\n  products(take: $take, skip: $skip) {\n    data {\n      ...ProductListItemFragment\n    }\n  }\n}": types.ProductsGetListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItemFragment on Product {\n  name\n  price\n  images {\n    alt\n    url\n  }\n  id\n  description\n  categories {\n    name\n  }\n}"): typeof import('./graphql').ProductListItemFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetItem($id: ID!) {\n  product(id: $id) {\n    ...ProductListItemFragment\n  }\n}"): typeof import('./graphql').ProductsGetItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($take: Int, $skip: Int) {\n  products(take: $take, skip: $skip) {\n    data {\n      ...ProductListItemFragment\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
