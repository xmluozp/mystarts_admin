/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($id: String) {
    onCreateUser(id: $id) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($id: String) {
    onUpdateUser(id: $id) {
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
export const onCreateVotetopic = /* GraphQL */ `
  subscription OnCreateVotetopic($owners: String) {
    onCreateVotetopic(owners: $owners) {
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
export const onUpdateVotetopic = /* GraphQL */ `
  subscription OnUpdateVotetopic($owners: String) {
    onUpdateVotetopic(owners: $owners) {
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
export const onDeleteVotetopic = /* GraphQL */ `
  subscription OnDeleteVotetopic($owners: String) {
    onDeleteVotetopic(owners: $owners) {
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
export const onCreateVoteitem = /* GraphQL */ `
  subscription OnCreateVoteitem($owners: String) {
    onCreateVoteitem(owners: $owners) {
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
export const onUpdateVoteitem = /* GraphQL */ `
  subscription OnUpdateVoteitem($owners: String) {
    onUpdateVoteitem(owners: $owners) {
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
export const onDeleteVoteitem = /* GraphQL */ `
  subscription OnDeleteVoteitem($owners: String) {
    onDeleteVoteitem(owners: $owners) {
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
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag($owners: String) {
    onCreateTag(owners: $owners) {
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
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag($owners: String) {
    onUpdateTag(owners: $owners) {
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
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag($owners: String) {
    onDeleteTag(owners: $owners) {
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
