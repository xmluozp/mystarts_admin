/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      familyName
      givenName
      avatar {
        name
        image {
          bucket
          region
          key
        }
        preview {
          bucket
          region
          key
        }
      }
      pk
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        familyName
        givenName
        avatar {
          name
        }
        pk
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listUserOrderbyCreatedAt = /* GraphQL */ `
  query ListUserOrderbyCreatedAt(
    $pk: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserOrderbyCreatedAt(
      pk: $pk
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        email
        familyName
        givenName
        avatar {
          name
        }
        pk
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listVotetopics = /* GraphQL */ `
  query ListVotetopics(
    $filter: ModelVotetopicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVotetopics(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        pk
        createdAt
        owners
        updatedAt
        voteitems {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getVotetopic = /* GraphQL */ `
  query GetVotetopic($id: ID!) {
    getVotetopic(id: $id) {
      id
      title
      description
      pk
      createdAt
      owners
      updatedAt
      voteitems {
        items {
          id
          title
          votetopicID
          isActive
          sortNumber
          owners
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listVotetopicOrderbyCreatedAt = /* GraphQL */ `
  query ListVotetopicOrderbyCreatedAt(
    $pk: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelVotetopicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVotetopicOrderbyCreatedAt(
      pk: $pk
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        description
        pk
        createdAt
        owners
        updatedAt
        voteitems {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getVoteitem = /* GraphQL */ `
  query GetVoteitem($id: ID!) {
    getVoteitem(id: $id) {
      id
      title
      votetopicID
      isActive
      sortNumber
      owners
      createdAt
      updatedAt
      votetopic {
        id
        title
        description
        pk
        createdAt
        owners
        updatedAt
        voteitems {
          nextToken
        }
      }
    }
  }
`;
export const listVoteitems = /* GraphQL */ `
  query ListVoteitems(
    $filter: ModelVoteitemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVoteitems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        votetopicID
        isActive
        sortNumber
        owners
        createdAt
        updatedAt
        votetopic {
          id
          title
          description
          pk
          createdAt
          owners
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const listVoteitemByVotetopic = /* GraphQL */ `
  query ListVoteitemByVotetopic(
    $votetopicID: ID
    $sortNumber: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelVoteitemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVoteitemByVotetopic(
      votetopicID: $votetopicID
      sortNumber: $sortNumber
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        votetopicID
        isActive
        sortNumber
        owners
        createdAt
        updatedAt
        votetopic {
          id
          title
          description
          pk
          createdAt
          owners
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
      id
      name
      isActive
      pk
      sortNumber
      owners
      createdAt
      updatedAt
    }
  }
`;
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        isActive
        pk
        sortNumber
        owners
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listTagOrderbySortNumber = /* GraphQL */ `
  query ListTagOrderbySortNumber(
    $pk: String
    $sortNumber: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTagOrderbySortNumber(
      pk: $pk
      sortNumber: $sortNumber
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        isActive
        pk
        sortNumber
        owners
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
