/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMyType = /* GraphQL */ `
  subscription OnCreateMyType {
    onCreateMyType {
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
export const onUpdateMyType = /* GraphQL */ `
  subscription OnUpdateMyType {
    onUpdateMyType {
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
export const onDeleteMyType = /* GraphQL */ `
  subscription OnDeleteMyType {
    onDeleteMyType {
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
export const onCreateInvitation = /* GraphQL */ `
  subscription OnCreateInvitation {
    onCreateInvitation {
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
export const onUpdateInvitation = /* GraphQL */ `
  subscription OnUpdateInvitation {
    onUpdateInvitation {
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
export const onDeleteInvitation = /* GraphQL */ `
  subscription OnDeleteInvitation {
    onDeleteInvitation {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($id: String) {
    onCreateUser(id: $id) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($id: String) {
    onUpdateUser(id: $id) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($id: String) {
    onDeleteUser(id: $id) {
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
export const onCreateOrganization = /* GraphQL */ `
  subscription OnCreateOrganization {
    onCreateOrganization {
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
export const onUpdateOrganization = /* GraphQL */ `
  subscription OnUpdateOrganization {
    onUpdateOrganization {
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
export const onDeleteOrganization = /* GraphQL */ `
  subscription OnDeleteOrganization {
    onDeleteOrganization {
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
export const onCreateUserOrganization = /* GraphQL */ `
  subscription OnCreateUserOrganization {
    onCreateUserOrganization {
      id
      userID
      user {
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
      organizationID
      organization {
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
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserOrganization = /* GraphQL */ `
  subscription OnUpdateUserOrganization {
    onUpdateUserOrganization {
      id
      userID
      user {
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
      organizationID
      organization {
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
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserOrganization = /* GraphQL */ `
  subscription OnDeleteUserOrganization {
    onDeleteUserOrganization {
      id
      userID
      user {
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
      organizationID
      organization {
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
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag {
    onCreateTag {
      id
      name
      isActive
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag {
    onUpdateTag {
      id
      name
      isActive
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag {
    onDeleteTag {
      id
      name
      isActive
      createdAt
      updatedAt
    }
  }
`;
export const onCreateConversationUser = /* GraphQL */ `
  subscription OnCreateConversationUser {
    onCreateConversationUser {
      id
      userID
      user {
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
      conversationID
      conversation {
        id
        messages {
          nextToken
        }
        users {
          nextToken
        }
        members
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateConversationUser = /* GraphQL */ `
  subscription OnUpdateConversationUser {
    onUpdateConversationUser {
      id
      userID
      user {
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
      conversationID
      conversation {
        id
        messages {
          nextToken
        }
        users {
          nextToken
        }
        members
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteConversationUser = /* GraphQL */ `
  subscription OnDeleteConversationUser {
    onDeleteConversationUser {
      id
      userID
      user {
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
      conversationID
      conversation {
        id
        messages {
          nextToken
        }
        users {
          nextToken
        }
        members
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateNotification = /* GraphQL */ `
  subscription OnCreateNotification {
    onCreateNotification {
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
export const onUpdateNotification = /* GraphQL */ `
  subscription OnUpdateNotification {
    onUpdateNotification {
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
export const onDeleteNotification = /* GraphQL */ `
  subscription OnDeleteNotification {
    onDeleteNotification {
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
export const onCreateVideo = /* GraphQL */ `
  subscription OnCreateVideo {
    onCreateVideo {
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
export const onUpdateVideo = /* GraphQL */ `
  subscription OnUpdateVideo {
    onUpdateVideo {
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
export const onDeleteVideo = /* GraphQL */ `
  subscription OnDeleteVideo {
    onDeleteVideo {
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
