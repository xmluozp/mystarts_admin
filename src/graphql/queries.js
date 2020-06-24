/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMyType = /* GraphQL */ `
  query GetMyType($id: ID!) {
    getMyType(id: $id) {
      id
      title
      content
      price
      rating
      createdAt
      updatedAt
    }
  }
`;
export const listMyTypes = /* GraphQL */ `
  query ListMyTypes(
    $filter: ModelMyTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMyTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        price
        rating
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getInvitation = /* GraphQL */ `
  query GetInvitation($id: ID!) {
    getInvitation(id: $id) {
      id
      dafaultFriends {
        items {
          id
          fullName
          email
          createdAt
          updatedAt
        }
        nextToken
      }
      fromUser {
        id
        fullName
        email
        avatar {
          name
        }
        organizations {
          nextToken
        }
        conversations {
          nextToken
        }
        messages {
          nextToken
        }
        videos {
          nextToken
        }
        friends {
          nextToken
        }
        watchs {
          nextToken
        }
        createdAt
        updatedAt
      }
      inviteToken
      createdAt
      updatedAt
    }
  }
`;
export const listInvitations = /* GraphQL */ `
  query ListInvitations(
    $filter: ModelinvitationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInvitations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        dafaultFriends {
          nextToken
        }
        fromUser {
          id
          fullName
          email
          createdAt
          updatedAt
        }
        inviteToken
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      fullName
      email
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
      organizations {
        items {
          id
          userID
          organizationID
          createdAt
          updatedAt
        }
        nextToken
      }
      conversations {
        items {
          id
          userID
          conversationID
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          content
          authorId
          messageConversationId
          createdAt
          updatedAt
        }
        nextToken
      }
      videos {
        items {
          id
          name
          brief
          url
          createdAt
          updatedAt
        }
        nextToken
      }
      friends {
        items {
          id
          fullName
          email
          createdAt
          updatedAt
        }
        nextToken
      }
      watchs {
        items {
          id
          fullName
          email
          createdAt
          updatedAt
        }
        nextToken
      }
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
        fullName
        email
        avatar {
          name
        }
        organizations {
          nextToken
        }
        conversations {
          nextToken
        }
        messages {
          nextToken
        }
        videos {
          nextToken
        }
        friends {
          nextToken
        }
        watchs {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOrganization = /* GraphQL */ `
  query GetOrganization($id: ID!) {
    getOrganization(id: $id) {
      id
      name
      brief
      logo {
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
      bp {
        bucket
        region
        key
      }
      tags
      members {
        items {
          id
          userID
          organizationID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listOrganizations = /* GraphQL */ `
  query ListOrganizations(
    $filter: ModelOrganizationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganizations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        brief
        logo {
          name
        }
        bp {
          bucket
          region
          key
        }
        tags
        members {
          nextToken
        }
        createdAt
        updatedAt
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getConvo = /* GraphQL */ `
  query GetConvo($id: ID!) {
    getConvo(id: $id) {
      id
      messages {
        items {
          id
          content
          authorId
          messageConversationId
          createdAt
          updatedAt
        }
        nextToken
      }
      users {
        items {
          id
          userID
          conversationID
          createdAt
          updatedAt
        }
        nextToken
      }
      members
      createdAt
      updatedAt
    }
  }
`;
export const getNotification = /* GraphQL */ `
  query GetNotification($id: ID!) {
    getNotification(id: $id) {
      id
      content
      type
      action
      receiverID
      receiver {
        id
        fullName
        email
        avatar {
          name
        }
        organizations {
          nextToken
        }
        conversations {
          nextToken
        }
        messages {
          nextToken
        }
        videos {
          nextToken
        }
        friends {
          nextToken
        }
        watchs {
          nextToken
        }
        createdAt
        updatedAt
      }
      sender {
        id
        fullName
        email
        avatar {
          name
        }
        organizations {
          nextToken
        }
        conversations {
          nextToken
        }
        messages {
          nextToken
        }
        videos {
          nextToken
        }
        friends {
          nextToken
        }
        watchs {
          nextToken
        }
        createdAt
        updatedAt
      }
      isRead
      createdAt
      updatedAt
    }
  }
`;
export const listNotifications = /* GraphQL */ `
  query ListNotifications(
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        type
        action
        receiverID
        receiver {
          id
          fullName
          email
          createdAt
          updatedAt
        }
        sender {
          id
          fullName
          email
          createdAt
          updatedAt
        }
        isRead
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getVideo = /* GraphQL */ `
  query GetVideo($id: ID!) {
    getVideo(id: $id) {
      id
      name
      brief
      url
      preview {
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
      author {
        id
        fullName
        email
        avatar {
          name
        }
        organizations {
          nextToken
        }
        conversations {
          nextToken
        }
        messages {
          nextToken
        }
        videos {
          nextToken
        }
        friends {
          nextToken
        }
        watchs {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listVideos = /* GraphQL */ `
  query ListVideos(
    $filter: ModelVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVideos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        brief
        url
        preview {
          name
        }
        author {
          id
          fullName
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
