/*
 * API routes
 *
 * * name: generates a method name
 * * path: url
 * * required: required parameters
 * * optional: optional parameters
 * * placeholder: replace a placeholder in the url
 * * auth: if authentication is necessary
 */

module.exports = {
  'get': [
    {name: "Feed", path: "/feed", optional: ["personalized", "since"], auth: true},

    {name: "Comments", path: "/comments", required: ["commentable_type", "commentable_id"], auth: true},

    {name: "Users", path: "/users/:id", placeholder: ["id"], optional: ["include_details"], auth: true},
    {name: "UsersRoles", path: "/users/:id/roles", placeholder: ["id"], auth: true},
    {name: "UsersBatch", path: "/users", required: ["ids"], auth: true},
    {name: "UsersSearch", path: "/users", optional: ["slug", "md5"], auth: true},
    {name: "Me", path: "/me", auth: true},

    {name: "UsersFollowers", path: "/users/:id/followers", placeholder: ["id"], auth: true},
    {name: "UsersFollowersIds", path: "/users/:id/followers/ids", placeholder: ["id"], auth: true},
    {name: "UsersFollowing", path: "/users/:id/following", placeholder: ["id"], optional: ["type"], auth: true},
    {name: "UsersFollowingIds", path: "/users/:id/following/ids", placeholder: ["id"], optional: ["type"], auth: true},
    {name: "FollowsRelationship", path: "/follows/relationship", required: ["source_id", "target_type", "target_id"], auth: true},
    {name: "FollowsBatch", path: "/follows/batch", required: ["ids"], auth: true},

    {name: "Jobs", path: "/jobs", auth: true},
    {name: "Job", path: "/jobs/:id", placeholder: ["id"], auth: true},

    {name: "Likes", path: "/likes", required: ["likable_type", "likable_id"], auth: true},

    {name: "Messages", path: "/messages", optional: ["view"], auth: true},
    {name: "MessagesThread", path: "/messages/:id", placeholder: ["id"], auth: true},

    {name: "Paths", path: "/paths", optional: ["user_ids", "startup_ids", "direction"], auth: true},

    {name: "StartupPress", path: "/press", required: ["startup_id"], auth: true},
    {name: "Press", path: "/press/:id", placeholder: ["id"], auth: true},

    {name: "Reviews", path: "/reviews", optional: ["user_id"], auth: true},
    {name: "Review", path: "/reviews/:id", placeholder: ["id"], auth: true},

    {name: "Search", path: "/search", required: ["query"], optional: ["type"], auth: true},
    {name: "SearchSlugs", path: "/search/slugs", required: ["query"], auth: true},

    {name: "Startups", path: "/startups/:id", placeholder: ["id"], auth: true},
    {name: "StartupsComments", path: "/startups/:id/comments", placeholder: ["id"], auth: true},
    {name: "StartupsRoles", path: "/startups/:id/roles", placeholder: ["id"], optional: ["direction"], auth: true},
    {name: "StartupsFollowers", path: "/startups/:id/followers", placeholder: ["id"], auth: true},
    {name: "StartupsFollowersIds", path: "/startups/:id/followers/ids", placeholder: ["id"], auth: true},
    {name: "StartupsJobs", path: "/startups/:id/jobs", placeholder: ["id"], auth: true},
    {name: "StartupsBatch", path: "/startups/batch", required: ["ids"], auth: true},
    {name: "StartupsSearch", path: "/startups/search", optional: ["slug", "domain"], auth: true},

    {name: "Tags", path: "/tags/:id", placeholder: ["id"], auth: true},
    {name: "TagsChildren", path: "/tags/:id/children", placeholder: ["id"], auth: true},
    {name: "TagsParents", path: "/tags/:id/parents", placeholder: ["id"], auth: true},
    {name: "TagsJobs", path: "/tags/:id/jobs", placeholder: ["id"], auth: true},
    {name: "TagsStartups", path: "/tags/:id/startups", placeholder: ["id"], optional: ["order"], auth: true},
    {name: "TagsUsers", path: "/tags/:id/users", placeholder: ["id"], optional: ["include_children", "include_parents", "investors"], auth: true},

    {name: "StartupRoles", path: "/startup_roles", required: ["v"], optional: ["user_id", "startup_id", "role", "direction"], auth: true},

    {name: "StatusUpdates", path: "/status_updates", optional: ["user_id", "startup_id"], auth: true},

    {name: "TalentStartups", path: "/talent/startups", auth: true},
    {name: "TalentCandidates", path: "/talent/candidates", required: ["startup_id"], auth: true}
  ],
  'post': [
    {name: "Comments", path: "/comments", required: ["commentable_type", "commentable_id", "comment"], auth: true},
    {name: "Follows", path: "/follows", required: ["type", "id"], auth: true},
    {name: "Likes", path: "/likes", required: ["likable_type", "likable_id"], auth: true},
    {name: "Messages", path: "/messages", required: ["body"], optional: ["thread_id", "recipient_id"], auth: true},
    {name: "MessagesMark", path: "/messages/mark", required: ["thread_ids"], auth: true},
    {name: "StatusUpdates", path: "/status_updates", required: ["message"], optional: ["startup_id"], auth: true},
    {name: "TalentPairing", path: "/talent/pairing", required: ["startup_id"], optional: ["user_id", "startup_note", "startup_interested", "user_note", "user_interested"], auth: true},
    {name: "TalentStar", path: "/talent/star", required: ["startup_id"], optional: ["user_id", "star"], auth: true}
  ],
  'delete': [
    {name: "Comments", path: "/comments/:id", placeholder: ["id"], auth: true},
    {name: "Follows", path: "/follows/", required: ["type", "id"], auth: true},
    {name: "Likes", path: "/likes/:id", placeholder: ["id"], auth: true},
    {name: "StatusUpdates", path: "/status_updates/:id", placeholder: ["id"], auth: true}
  ]
};
