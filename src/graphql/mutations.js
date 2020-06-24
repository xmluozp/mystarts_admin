/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMyType = /* GraphQL */ `
  mutation CreateMyType(
    $input: CreateMyTypeInput!
    $condition: ModelMyTypeConditionInput
  ) {
    createMyType(input: $input, condition: $condition) {
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
export const updateMyType = /* GraphQL */ `
  mutation UpdateMyType(
    $input: UpdateMyTypeInput!
    $condition: ModelMyTypeConditionInput
  ) {
    updateMyType(input: $input, condition: $condition) {
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
export const deleteMyType = /* GraphQL */ `
  mutation DeleteMyType(
    $input: DeleteMyTypeInput!
    $condition: ModelMyTypeConditionInput
  ) {
    deleteMyType(input: $input, condition: $condition) {
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
export const createInvitation = /* GraphQL */ `
  mutation CreateInvitation(
    $input: CreateInvitationInput!
    $condition: ModelinvitationConditionInput
  ) {
    createInvitation(input: $input, condition: $condition) {
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
export const updateInvitation = /* GraphQL */ `
  mutation UpdateInvitation(
    $input: UpdateInvitationInput!
    $condition: ModelinvitationConditionInput
  ) {
    updateInvitation(input: $input, condition: $condition) {
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
export const deleteInvitation = /* GraphQL */ `
  mutation DeleteInvitation(
    $input: DeleteInvitationInput!
    $condition: ModelinvitationConditionInput
  ) {
    deleteInvitation(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createOrganization = /* GraphQL */ `
  mutation CreateOrganization(
    $input: CreateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    createOrganization(input: $input, condition: $condition) {
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
export const updateOrganization = /* GraphQL */ `
  mutation UpdateOrganization(
    $input: UpdateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    updateOrganization(input: $input, condition: $condition) {
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
export const deleteOrganization = /* GraphQL */ `
  mutation DeleteOrganization(
    $input: DeleteOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    deleteOrganization(input: $input, condition: $condition) {
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
export const createUserOrganization = /* GraphQL */ `
  mutation CreateUserOrganization(
    $input: CreateUserOrganizationInput!
    $condition: ModelUserOrganizationConditionInput
  ) {
    createUserOrganization(input: $input, condition: $condition) {
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
export const updateUserOrganization = /* GraphQL */ `
  mutation UpdateUserOrganization(
    $input: UpdateUserOrganizationInput!
    $condition: ModelUserOrganizationConditionInput
  ) {
    updateUserOrganization(input: $input, condition: $condition) {
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
export const deleteUserOrganization = /* GraphQL */ `
  mutation DeleteUserOrganization(
    $input: DeleteUserOrganizationInput!
    $condition: ModelUserOrganizationConditionInput
  ) {
    deleteUserOrganization(input: $input, condition: $condition) {
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
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
      id
      name
      isActive
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
      createdAt
      updatedAt
    }
  }
`;
export const createConvo = /* GraphQL */ `
  mutation CreateConvo(
    $input: CreateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    createConvo(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      content
      authorId
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
      messageConversationId
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      content
      authorId
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
      messageConversationId
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      content
      authorId
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
      messageConversationId
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
export const createConversationUser = /* GraphQL */ `
  mutation CreateConversationUser(
    $input: CreateConversationUserInput!
    $condition: ModelConversationUserConditionInput
  ) {
    createConversationUser(input: $input, condition: $condition) {
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
export const updateConversationUser = /* GraphQL */ `
  mutation UpdateConversationUser(
    $input: UpdateConversationUserInput!
    $condition: ModelConversationUserConditionInput
  ) {
    updateConversationUser(input: $input, condition: $condition) {
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
export const deleteConversationUser = /* GraphQL */ `
  mutation DeleteConversationUser(
    $input: DeleteConversationUserInput!
    $condition: ModelConversationUserConditionInput
  ) {
    deleteConversationUser(input: $input, condition: $condition) {
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
export const createNotification = /* GraphQL */ `
  mutation CreateNotification(
    $input: CreateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    createNotification(input: $input, condition: $condition) {
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
export const updateNotification = /* GraphQL */ `
  mutation UpdateNotification(
    $input: UpdateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    updateNotification(input: $input, condition: $condition) {
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
export const deleteNotification = /* GraphQL */ `
  mutation DeleteNotification(
    $input: DeleteNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    deleteNotification(input: $input, condition: $condition) {
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
export const createVideo = /* GraphQL */ `
  mutation CreateVideo(
    $input: CreateVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    createVideo(input: $input, condition: $condition) {
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
export const updateVideo = /* GraphQL */ `
  mutation UpdateVideo(
    $input: UpdateVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    updateVideo(input: $input, condition: $condition) {
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
export const deleteVideo = /* GraphQL */ `
  mutation DeleteVideo(
    $input: DeleteVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    deleteVideo(input: $input, condition: $condition) {
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
