/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTablecount = /* GraphQL */ `
  mutation CreateTablecount(
    $input: CreateTablecountInput!
    $condition: ModelTablecountConditionInput
  ) {
    createTablecount(input: $input, condition: $condition) {
      tableName
      filter
      count
      createdAt
      updatedAt
    }
  }
`;
export const updateTablecount = /* GraphQL */ `
  mutation UpdateTablecount(
    $input: UpdateTablecountInput!
    $condition: ModelTablecountConditionInput
  ) {
    updateTablecount(input: $input, condition: $condition) {
      tableName
      filter
      count
      createdAt
      updatedAt
    }
  }
`;
export const deleteTablecount = /* GraphQL */ `
  mutation DeleteTablecount(
    $input: DeleteTablecountInput!
    $condition: ModelTablecountConditionInput
  ) {
    deleteTablecount(input: $input, condition: $condition) {
      tableName
      filter
      count
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
      type
      createdAt
      updatedAt
      voteitems {
        items {
          id
          title
          isActive
          type
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
      type
      createdAt
      updatedAt
      voteitems {
        items {
          id
          title
          isActive
          type
          createdAt
          updatedAt
        }
        nextToken
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
      isActive
      type
      createdAt
      updatedAt
      votetopic {
        id
        title
        description
        type
        createdAt
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
      isActive
      type
      createdAt
      updatedAt
      votetopic {
        id
        title
        description
        type
        createdAt
        updatedAt
        voteitems {
          nextToken
        }
      }
    }
  }
`;
export const createUserBallot = /* GraphQL */ `
  mutation CreateUserBallot(
    $input: CreateUserBallotInput!
    $condition: ModelUserBallotConditionInput
  ) {
    createUserBallot(input: $input, condition: $condition) {
      id
      userID
      PollitemID
      createdAt
      updatedAt
      user {
        id
        email
        familyName
        givenName
        avatar {
          name
        }
        organizations {
          nextToken
        }
        conversations {
          nextToken
        }
        pollitems {
          nextToken
        }
        videos {
          nextToken
        }
        createdAt
        updatedAt
        friends {
          nextToken
        }
        watchs {
          nextToken
        }
        messages {
          nextToken
        }
      }
      Pollitem {
        id
        title
        votecount
        fixcount
        isSuggestion
        users {
          nextToken
        }
        type
        sortNumber
        createdAt
        updatedAt
        polltopic {
          id
          title
          description
          type
          sortNumber
          createdAt
          updatedAt
        }
      }
    }
  }
`;
export const updateUserBallot = /* GraphQL */ `
  mutation UpdateUserBallot(
    $input: UpdateUserBallotInput!
    $condition: ModelUserBallotConditionInput
  ) {
    updateUserBallot(input: $input, condition: $condition) {
      id
      userID
      PollitemID
      createdAt
      updatedAt
      user {
        id
        email
        familyName
        givenName
        avatar {
          name
        }
        organizations {
          nextToken
        }
        conversations {
          nextToken
        }
        pollitems {
          nextToken
        }
        videos {
          nextToken
        }
        createdAt
        updatedAt
        friends {
          nextToken
        }
        watchs {
          nextToken
        }
        messages {
          nextToken
        }
      }
      Pollitem {
        id
        title
        votecount
        fixcount
        isSuggestion
        users {
          nextToken
        }
        type
        sortNumber
        createdAt
        updatedAt
        polltopic {
          id
          title
          description
          type
          sortNumber
          createdAt
          updatedAt
        }
      }
    }
  }
`;
export const deleteUserBallot = /* GraphQL */ `
  mutation DeleteUserBallot(
    $input: DeleteUserBallotInput!
    $condition: ModelUserBallotConditionInput
  ) {
    deleteUserBallot(input: $input, condition: $condition) {
      id
      userID
      PollitemID
      createdAt
      updatedAt
      user {
        id
        email
        familyName
        givenName
        avatar {
          name
        }
        organizations {
          nextToken
        }
        conversations {
          nextToken
        }
        pollitems {
          nextToken
        }
        videos {
          nextToken
        }
        createdAt
        updatedAt
        friends {
          nextToken
        }
        watchs {
          nextToken
        }
        messages {
          nextToken
        }
      }
      Pollitem {
        id
        title
        votecount
        fixcount
        isSuggestion
        users {
          nextToken
        }
        type
        sortNumber
        createdAt
        updatedAt
        polltopic {
          id
          title
          description
          type
          sortNumber
          createdAt
          updatedAt
        }
      }
    }
  }
`;
export const createInvitation = /* GraphQL */ `
  mutation CreateInvitation(
    $input: CreateInvitationInput!
    $condition: ModelInvitationConditionInput
  ) {
    createInvitation(input: $input, condition: $condition) {
      id
      inviteToken
      createdAt
      updatedAt
    }
  }
`;
export const updateInvitation = /* GraphQL */ `
  mutation UpdateInvitation(
    $input: UpdateInvitationInput!
    $condition: ModelInvitationConditionInput
  ) {
    updateInvitation(input: $input, condition: $condition) {
      id
      inviteToken
      createdAt
      updatedAt
    }
  }
`;
export const deleteInvitation = /* GraphQL */ `
  mutation DeleteInvitation(
    $input: DeleteInvitationInput!
    $condition: ModelInvitationConditionInput
  ) {
    deleteInvitation(input: $input, condition: $condition) {
      id
      inviteToken
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
      user {
        id
        email
        familyName
        givenName
        avatar {
          name
        }
        organizations {
          nextToken
        }
        conversations {
          nextToken
        }
        pollitems {
          nextToken
        }
        videos {
          nextToken
        }
        createdAt
        updatedAt
        friends {
          nextToken
        }
        watchs {
          nextToken
        }
        messages {
          nextToken
        }
      }
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
      user {
        id
        email
        familyName
        givenName
        avatar {
          name
        }
        organizations {
          nextToken
        }
        conversations {
          nextToken
        }
        pollitems {
          nextToken
        }
        videos {
          nextToken
        }
        createdAt
        updatedAt
        friends {
          nextToken
        }
        watchs {
          nextToken
        }
        messages {
          nextToken
        }
      }
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
      user {
        id
        email
        familyName
        givenName
        avatar {
          name
        }
        organizations {
          nextToken
        }
        conversations {
          nextToken
        }
        pollitems {
          nextToken
        }
        videos {
          nextToken
        }
        createdAt
        updatedAt
        friends {
          nextToken
        }
        watchs {
          nextToken
        }
        messages {
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
export const createConversationUser = /* GraphQL */ `
  mutation CreateConversationUser(
    $input: CreateConversationUserInput!
    $condition: ModelConversationUserConditionInput
  ) {
    createConversationUser(input: $input, condition: $condition) {
      id
      userID
      conversationID
      createdAt
      updatedAt
      user {
        id
        email
        familyName
        givenName
        avatar {
          name
        }
        organizations {
          nextToken
        }
        conversations {
          nextToken
        }
        pollitems {
          nextToken
        }
        videos {
          nextToken
        }
        createdAt
        updatedAt
        friends {
          nextToken
        }
        watchs {
          nextToken
        }
        messages {
          nextToken
        }
      }
      conversation {
        id
        users {
          nextToken
        }
        members
        createdAt
        updatedAt
        messages {
          nextToken
        }
      }
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
      conversationID
      createdAt
      updatedAt
      user {
        id
        email
        familyName
        givenName
        avatar {
          name
        }
        organizations {
          nextToken
        }
        conversations {
          nextToken
        }
        pollitems {
          nextToken
        }
        videos {
          nextToken
        }
        createdAt
        updatedAt
        friends {
          nextToken
        }
        watchs {
          nextToken
        }
        messages {
          nextToken
        }
      }
      conversation {
        id
        users {
          nextToken
        }
        members
        createdAt
        updatedAt
        messages {
          nextToken
        }
      }
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
      conversationID
      createdAt
      updatedAt
      user {
        id
        email
        familyName
        givenName
        avatar {
          name
        }
        organizations {
          nextToken
        }
        conversations {
          nextToken
        }
        pollitems {
          nextToken
        }
        videos {
          nextToken
        }
        createdAt
        updatedAt
        friends {
          nextToken
        }
        watchs {
          nextToken
        }
        messages {
          nextToken
        }
      }
      conversation {
        id
        users {
          nextToken
        }
        members
        createdAt
        updatedAt
        messages {
          nextToken
        }
      }
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
      isRead
      createdAt
      updatedAt
      receiver {
        id
        email
        familyName
        givenName
        avatar {
          name
        }
        organizations {
          nextToken
        }
        conversations {
          nextToken
        }
        pollitems {
          nextToken
        }
        videos {
          nextToken
        }
        createdAt
        updatedAt
        friends {
          nextToken
        }
        watchs {
          nextToken
        }
        messages {
          nextToken
        }
      }
      sender {
        id
        email
        familyName
        givenName
        avatar {
          name
        }
        organizations {
          nextToken
        }
        conversations {
          nextToken
        }
        pollitems {
          nextToken
        }
        videos {
          nextToken
        }
        createdAt
        updatedAt
        friends {
          nextToken
        }
        watchs {
          nextToken
        }
        messages {
          nextToken
        }
      }
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
      isRead
      createdAt
      updatedAt
      receiver {
        id
        email
        familyName
        givenName
        avatar {
          name
        }
        organizations {
          nextToken
        }
        conversations {
          nextToken
        }
        pollitems {
          nextToken
        }
        videos {
          nextToken
        }
        createdAt
        updatedAt
        friends {
          nextToken
        }
        watchs {
          nextToken
        }
        messages {
          nextToken
        }
      }
      sender {
        id
        email
        familyName
        givenName
        avatar {
          name
        }
        organizations {
          nextToken
        }
        conversations {
          nextToken
        }
        pollitems {
          nextToken
        }
        videos {
          nextToken
        }
        createdAt
        updatedAt
        friends {
          nextToken
        }
        watchs {
          nextToken
        }
        messages {
          nextToken
        }
      }
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
      isRead
      createdAt
      updatedAt
      receiver {
        id
        email
        familyName
        givenName
        avatar {
          name
        }
        organizations {
          nextToken
        }
        conversations {
          nextToken
        }
        pollitems {
          nextToken
        }
        videos {
          nextToken
        }
        createdAt
        updatedAt
        friends {
          nextToken
        }
        watchs {
          nextToken
        }
        messages {
          nextToken
        }
      }
      sender {
        id
        email
        familyName
        givenName
        avatar {
          name
        }
        organizations {
          nextToken
        }
        conversations {
          nextToken
        }
        pollitems {
          nextToken
        }
        videos {
          nextToken
        }
        createdAt
        updatedAt
        friends {
          nextToken
        }
        watchs {
          nextToken
        }
        messages {
          nextToken
        }
      }
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
      createdAt
      updatedAt
      author {
        id
        email
        familyName
        givenName
        avatar {
          name
        }
        organizations {
          nextToken
        }
        conversations {
          nextToken
        }
        pollitems {
          nextToken
        }
        videos {
          nextToken
        }
        createdAt
        updatedAt
        friends {
          nextToken
        }
        watchs {
          nextToken
        }
        messages {
          nextToken
        }
      }
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
      createdAt
      updatedAt
      author {
        id
        email
        familyName
        givenName
        avatar {
          name
        }
        organizations {
          nextToken
        }
        conversations {
          nextToken
        }
        pollitems {
          nextToken
        }
        videos {
          nextToken
        }
        createdAt
        updatedAt
        friends {
          nextToken
        }
        watchs {
          nextToken
        }
        messages {
          nextToken
        }
      }
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
      createdAt
      updatedAt
      author {
        id
        email
        familyName
        givenName
        avatar {
          name
        }
        organizations {
          nextToken
        }
        conversations {
          nextToken
        }
        pollitems {
          nextToken
        }
        videos {
          nextToken
        }
        createdAt
        updatedAt
        friends {
          nextToken
        }
        watchs {
          nextToken
        }
        messages {
          nextToken
        }
      }
    }
  }
`;
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
      pollitems {
        items {
          id
          userID
          PollitemID
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
      createdAt
      updatedAt
      friends {
        items {
          id
          email
          familyName
          givenName
          createdAt
          updatedAt
        }
        nextToken
      }
      watchs {
        items {
          id
          email
          familyName
          givenName
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
      pollitems {
        items {
          id
          userID
          PollitemID
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
      createdAt
      updatedAt
      friends {
        items {
          id
          email
          familyName
          givenName
          createdAt
          updatedAt
        }
        nextToken
      }
      watchs {
        items {
          id
          email
          familyName
          givenName
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
      type
      createdAt
      updatedAt
      voteitems {
        items {
          id
          title
          isActive
          type
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
      isActive
      type
      createdAt
      updatedAt
      votetopic {
        id
        title
        description
        type
        createdAt
        updatedAt
        voteitems {
          nextToken
        }
      }
    }
  }
`;
export const createPollperiod = /* GraphQL */ `
  mutation CreatePollperiod(
    $input: CreatePollperiodInput!
    $condition: ModelPollperiodConditionInput
  ) {
    createPollperiod(input: $input, condition: $condition) {
      id
      title
      description
      fromDate
      toDate
      type
      createdAt
      updatedAt
      polltopics {
        items {
          id
          title
          description
          type
          sortNumber
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const updatePollperiod = /* GraphQL */ `
  mutation UpdatePollperiod(
    $input: UpdatePollperiodInput!
    $condition: ModelPollperiodConditionInput
  ) {
    updatePollperiod(input: $input, condition: $condition) {
      id
      title
      description
      fromDate
      toDate
      type
      createdAt
      updatedAt
      polltopics {
        items {
          id
          title
          description
          type
          sortNumber
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deletePollperiod = /* GraphQL */ `
  mutation DeletePollperiod(
    $input: DeletePollperiodInput!
    $condition: ModelPollperiodConditionInput
  ) {
    deletePollperiod(input: $input, condition: $condition) {
      id
      title
      description
      fromDate
      toDate
      type
      createdAt
      updatedAt
      polltopics {
        items {
          id
          title
          description
          type
          sortNumber
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createPolltopic = /* GraphQL */ `
  mutation CreatePolltopic(
    $input: CreatePolltopicInput!
    $condition: ModelPolltopicConditionInput
  ) {
    createPolltopic(input: $input, condition: $condition) {
      id
      title
      description
      type
      sortNumber
      createdAt
      updatedAt
      pollperiod {
        id
        title
        description
        fromDate
        toDate
        type
        createdAt
        updatedAt
        polltopics {
          nextToken
        }
      }
      pollitems {
        items {
          id
          title
          votecount
          fixcount
          isSuggestion
          type
          sortNumber
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const updatePolltopic = /* GraphQL */ `
  mutation UpdatePolltopic(
    $input: UpdatePolltopicInput!
    $condition: ModelPolltopicConditionInput
  ) {
    updatePolltopic(input: $input, condition: $condition) {
      id
      title
      description
      type
      sortNumber
      createdAt
      updatedAt
      pollperiod {
        id
        title
        description
        fromDate
        toDate
        type
        createdAt
        updatedAt
        polltopics {
          nextToken
        }
      }
      pollitems {
        items {
          id
          title
          votecount
          fixcount
          isSuggestion
          type
          sortNumber
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deletePolltopic = /* GraphQL */ `
  mutation DeletePolltopic(
    $input: DeletePolltopicInput!
    $condition: ModelPolltopicConditionInput
  ) {
    deletePolltopic(input: $input, condition: $condition) {
      id
      title
      description
      type
      sortNumber
      createdAt
      updatedAt
      pollperiod {
        id
        title
        description
        fromDate
        toDate
        type
        createdAt
        updatedAt
        polltopics {
          nextToken
        }
      }
      pollitems {
        items {
          id
          title
          votecount
          fixcount
          isSuggestion
          type
          sortNumber
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createPollitem = /* GraphQL */ `
  mutation CreatePollitem(
    $input: CreatePollitemInput!
    $condition: ModelPollitemConditionInput
  ) {
    createPollitem(input: $input, condition: $condition) {
      id
      title
      votecount
      fixcount
      isSuggestion
      users {
        items {
          id
          userID
          PollitemID
          createdAt
          updatedAt
        }
        nextToken
      }
      type
      sortNumber
      createdAt
      updatedAt
      polltopic {
        id
        title
        description
        type
        sortNumber
        createdAt
        updatedAt
        pollperiod {
          id
          title
          description
          fromDate
          toDate
          type
          createdAt
          updatedAt
        }
        pollitems {
          nextToken
        }
      }
    }
  }
`;
export const updatePollitem = /* GraphQL */ `
  mutation UpdatePollitem(
    $input: UpdatePollitemInput!
    $condition: ModelPollitemConditionInput
  ) {
    updatePollitem(input: $input, condition: $condition) {
      id
      title
      votecount
      fixcount
      isSuggestion
      users {
        items {
          id
          userID
          PollitemID
          createdAt
          updatedAt
        }
        nextToken
      }
      type
      sortNumber
      createdAt
      updatedAt
      polltopic {
        id
        title
        description
        type
        sortNumber
        createdAt
        updatedAt
        pollperiod {
          id
          title
          description
          fromDate
          toDate
          type
          createdAt
          updatedAt
        }
        pollitems {
          nextToken
        }
      }
    }
  }
`;
export const deletePollitem = /* GraphQL */ `
  mutation DeletePollitem(
    $input: DeletePollitemInput!
    $condition: ModelPollitemConditionInput
  ) {
    deletePollitem(input: $input, condition: $condition) {
      id
      title
      votecount
      fixcount
      isSuggestion
      users {
        items {
          id
          userID
          PollitemID
          createdAt
          updatedAt
        }
        nextToken
      }
      type
      sortNumber
      createdAt
      updatedAt
      polltopic {
        id
        title
        description
        type
        sortNumber
        createdAt
        updatedAt
        pollperiod {
          id
          title
          description
          fromDate
          toDate
          type
          createdAt
          updatedAt
        }
        pollitems {
          nextToken
        }
      }
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
      messageConversationId
      createdAt
      updatedAt
      author {
        id
        email
        familyName
        givenName
        avatar {
          name
        }
        organizations {
          nextToken
        }
        conversations {
          nextToken
        }
        pollitems {
          nextToken
        }
        videos {
          nextToken
        }
        createdAt
        updatedAt
        friends {
          nextToken
        }
        watchs {
          nextToken
        }
        messages {
          nextToken
        }
      }
      conversation {
        id
        users {
          nextToken
        }
        members
        createdAt
        updatedAt
        messages {
          nextToken
        }
      }
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
      messageConversationId
      createdAt
      updatedAt
      author {
        id
        email
        familyName
        givenName
        avatar {
          name
        }
        organizations {
          nextToken
        }
        conversations {
          nextToken
        }
        pollitems {
          nextToken
        }
        videos {
          nextToken
        }
        createdAt
        updatedAt
        friends {
          nextToken
        }
        watchs {
          nextToken
        }
        messages {
          nextToken
        }
      }
      conversation {
        id
        users {
          nextToken
        }
        members
        createdAt
        updatedAt
        messages {
          nextToken
        }
      }
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
      messageConversationId
      createdAt
      updatedAt
      author {
        id
        email
        familyName
        givenName
        avatar {
          name
        }
        organizations {
          nextToken
        }
        conversations {
          nextToken
        }
        pollitems {
          nextToken
        }
        videos {
          nextToken
        }
        createdAt
        updatedAt
        friends {
          nextToken
        }
        watchs {
          nextToken
        }
        messages {
          nextToken
        }
      }
      conversation {
        id
        users {
          nextToken
        }
        members
        createdAt
        updatedAt
        messages {
          nextToken
        }
      }
    }
  }
`;
