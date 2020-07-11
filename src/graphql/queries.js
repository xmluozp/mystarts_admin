/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTablecount = /* GraphQL */ `
  query GetTablecount($id: ID!) {
    getTablecount(id: $id) {
      tableName
      filter
      count
      createdAt
      updatedAt
    }
  }
`;
export const listTablecounts = /* GraphQL */ `
  query ListTablecounts(
    $filter: ModelTablecountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTablecounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        tableName
        filter
        count
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
      inviteToken
      createdAt
      updatedAt
    }
  }
`;
export const listInvitations = /* GraphQL */ `
  query ListInvitations(
    $filter: ModelInvitationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInvitations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        inviteToken
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
export const getNotification = /* GraphQL */ `
  query GetNotification($id: ID!) {
    getNotification(id: $id) {
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
        isRead
        createdAt
        updatedAt
        receiver {
          id
          email
          familyName
          givenName
          createdAt
          updatedAt
        }
        sender {
          id
          email
          familyName
          givenName
          createdAt
          updatedAt
        }
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
        createdAt
        updatedAt
        author {
          id
          email
          familyName
          givenName
          createdAt
          updatedAt
        }
      }
      nextToken
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
      nextToken
    }
  }
`;
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
        type
        createdAt
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
export const listVotetopicWithSort = /* GraphQL */ `
  query ListVotetopicWithSort(
    $type: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelVotetopicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVotetopicWithSort(
      type: $type
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
        type
        createdAt
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
        }
      }
      nextToken
    }
  }
`;
export const listVoteitemWithSort = /* GraphQL */ `
  query ListVoteitemWithSort(
    $type: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelVoteitemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVoteitemWithSort(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        }
      }
      nextToken
    }
  }
`;
export const listPollperiods = /* GraphQL */ `
  query ListPollperiods(
    $filter: ModelPollperiodFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPollperiods(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPollperiod = /* GraphQL */ `
  query GetPollperiod($id: ID!) {
    getPollperiod(id: $id) {
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
export const listPollperiodWithSort = /* GraphQL */ `
  query ListPollperiodWithSort(
    $type: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPollperiodFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPollperiodWithSort(
      type: $type
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
        fromDate
        toDate
        type
        createdAt
        updatedAt
        polltopics {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const listPolltopics = /* GraphQL */ `
  query ListPolltopics(
    $filter: ModelPolltopicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPolltopics(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPolltopic = /* GraphQL */ `
  query GetPolltopic($id: ID!) {
    getPolltopic(id: $id) {
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
export const listPolltopicWithSort = /* GraphQL */ `
  query ListPolltopicWithSort(
    $type: String
    $sortNumber: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPolltopicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPolltopicWithSort(
      type: $type
      sortNumber: $sortNumber
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listPollitems = /* GraphQL */ `
  query ListPollitems(
    $filter: ModelPollitemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPollitems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPollitem = /* GraphQL */ `
  query GetPollitem($id: ID!) {
    getPollitem(id: $id) {
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
export const listPollitemWithSort = /* GraphQL */ `
  query ListPollitemWithSort(
    $type: String
    $sortNumber: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPollitemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPollitemWithSort(
      type: $type
      sortNumber: $sortNumber
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getConvo = /* GraphQL */ `
  query GetConvo($id: ID!) {
    getConvo(id: $id) {
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
