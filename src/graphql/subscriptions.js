/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTablecount = /* GraphQL */ `
  subscription OnCreateTablecount {
    onCreateTablecount {
      tableName
      filter
      count
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTablecount = /* GraphQL */ `
  subscription OnUpdateTablecount {
    onUpdateTablecount {
      tableName
      filter
      count
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTablecount = /* GraphQL */ `
  subscription OnDeleteTablecount {
    onDeleteTablecount {
      tableName
      filter
      count
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUserBallot = /* GraphQL */ `
  subscription OnCreateUserBallot {
    onCreateUserBallot {
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
export const onUpdateUserBallot = /* GraphQL */ `
  subscription OnUpdateUserBallot {
    onUpdateUserBallot {
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
export const onDeleteUserBallot = /* GraphQL */ `
  subscription OnDeleteUserBallot {
    onDeleteUserBallot {
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
export const onCreateInvitation = /* GraphQL */ `
  subscription OnCreateInvitation {
    onCreateInvitation {
      id
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
      inviteToken
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
export const onUpdateUserOrganization = /* GraphQL */ `
  subscription OnUpdateUserOrganization {
    onUpdateUserOrganization {
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
export const onDeleteUserOrganization = /* GraphQL */ `
  subscription OnDeleteUserOrganization {
    onDeleteUserOrganization {
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
export const onUpdateConversationUser = /* GraphQL */ `
  subscription OnUpdateConversationUser {
    onUpdateConversationUser {
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
export const onDeleteConversationUser = /* GraphQL */ `
  subscription OnDeleteConversationUser {
    onDeleteConversationUser {
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
export const onCreateNotification = /* GraphQL */ `
  subscription OnCreateNotification {
    onCreateNotification {
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
export const onUpdateNotification = /* GraphQL */ `
  subscription OnUpdateNotification {
    onUpdateNotification {
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
export const onDeleteNotification = /* GraphQL */ `
  subscription OnDeleteNotification {
    onDeleteNotification {
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
export const onCreateVotetopic = /* GraphQL */ `
  subscription OnCreateVotetopic {
    onCreateVotetopic {
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
export const onUpdateVotetopic = /* GraphQL */ `
  subscription OnUpdateVotetopic {
    onUpdateVotetopic {
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
export const onDeleteVotetopic = /* GraphQL */ `
  subscription OnDeleteVotetopic {
    onDeleteVotetopic {
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
export const onCreateVoteitem = /* GraphQL */ `
  subscription OnCreateVoteitem {
    onCreateVoteitem {
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
export const onUpdateVoteitem = /* GraphQL */ `
  subscription OnUpdateVoteitem {
    onUpdateVoteitem {
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
export const onDeleteVoteitem = /* GraphQL */ `
  subscription OnDeleteVoteitem {
    onDeleteVoteitem {
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
export const onCreatePollperiod = /* GraphQL */ `
  subscription OnCreatePollperiod {
    onCreatePollperiod {
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
export const onUpdatePollperiod = /* GraphQL */ `
  subscription OnUpdatePollperiod {
    onUpdatePollperiod {
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
export const onDeletePollperiod = /* GraphQL */ `
  subscription OnDeletePollperiod {
    onDeletePollperiod {
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
export const onCreatePolltopic = /* GraphQL */ `
  subscription OnCreatePolltopic {
    onCreatePolltopic {
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
export const onUpdatePolltopic = /* GraphQL */ `
  subscription OnUpdatePolltopic {
    onUpdatePolltopic {
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
export const onDeletePolltopic = /* GraphQL */ `
  subscription OnDeletePolltopic {
    onDeletePolltopic {
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
export const onCreatePollitem = /* GraphQL */ `
  subscription OnCreatePollitem {
    onCreatePollitem {
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
export const onUpdatePollitem = /* GraphQL */ `
  subscription OnUpdatePollitem {
    onUpdatePollitem {
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
export const onDeletePollitem = /* GraphQL */ `
  subscription OnDeletePollitem {
    onDeletePollitem {
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
