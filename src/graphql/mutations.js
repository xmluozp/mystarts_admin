/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const registerUser = /* GraphQL */ `
  mutation RegisterUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    registerUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const createVotetopic = /* GraphQL */ `
  mutation CreateVotetopic(
    $input: CreateVotetopicInput!
    $condition: ModelVotetopicConditionInput
  ) {
    createVotetopic(input: $input, condition: $condition) {
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
export const updateVotetopic = /* GraphQL */ `
  mutation UpdateVotetopic(
    $input: UpdateVotetopicInput!
    $condition: ModelVotetopicConditionInput
  ) {
    updateVotetopic(input: $input, condition: $condition) {
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
export const deleteVotetopic = /* GraphQL */ `
  mutation DeleteVotetopic(
    $input: DeleteVotetopicInput!
    $condition: ModelVotetopicConditionInput
  ) {
    deleteVotetopic(input: $input, condition: $condition) {
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
export const createVoteitem = /* GraphQL */ `
  mutation CreateVoteitem(
    $input: CreateVoteitemInput!
    $condition: ModelVoteitemConditionInput
  ) {
    createVoteitem(input: $input, condition: $condition) {
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
export const updateVoteitem = /* GraphQL */ `
  mutation UpdateVoteitem(
    $input: UpdateVoteitemInput!
    $condition: ModelVoteitemConditionInput
  ) {
    updateVoteitem(input: $input, condition: $condition) {
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
export const deleteVoteitem = /* GraphQL */ `
  mutation DeleteVoteitem(
    $input: DeleteVoteitemInput!
    $condition: ModelVoteitemConditionInput
  ) {
    deleteVoteitem(input: $input, condition: $condition) {
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
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
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
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
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
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
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
