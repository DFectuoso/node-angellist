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
    {name: "Feed", path: "/feed", optional: ["personalized", "since"]},

    {name: "Comments", path: "/comments", required: ["commentable_type", "commentable_id"]},

    {name: "Users", path: "/users/:id", placeholder: ["id"], optional: ["include_details"]},
    {name: "UsersRoles", path: "/users/:id/roles", placeholder: ["id"]},
    {name: "UsersBatch", path: "/users/batch", required: ["ids"]},
    {name: "UsersSearch", path: "/users/search", optional: ["slug", "md5"]},
    {name: "Me", path: "/me", auth: true},

    {name: "UsersFollowers", path: "/users/:id/followers", placeholder: ["id"]},
    {name: "UsersFollowersIds", path: "/users/:id/followers/ids", placeholder: ["id"]},
    {name: "UsersFollowing", path: "/users/:id/following", placeholder: ["id"], optional: ["type"]},
    {name: "UsersFollowingIds", path: "/users/:id/following/ids", placeholder: ["id"], optional: ["type"]},
    {name: "FollowsRelationship", path: "/follows/relationship", required: ["source_id", "target_type", "target_id"]},
    {name: "FollowsBatch", path: "/follows/batch", required: ["ids"]},

    {name: "Jobs", path: "/jobs"},
    {name: "Job", path: "/jobs/:id", placeholder: ["id"]},

    {name: "Likes", path: "/likes", required: ["likable_type", "likable_id"]},

    {name: "Messages", path: "/messages", optional: ["view"], auth: true},
    {name: "MessagesThread", path: "/messages/:id", placeholder: ["id"], auth: true},

    {name: "Paths", path: "/paths", optional: ["user_ids", "startup_ids", "direction"], auth: true},

    {name: "StartupPress", path: "/press", required: ["startup_id"]},
    {name: "Press", path: "/press/:id", placeholder: ["id"]},

    {name: "Reviews", path: "/reviews", optional: ["user_id"]},
    {name: "Review", path: "/reviews/:id", placeholder: ["id"]},

    {name: "Search", path: "/search", required: ["query"], optional: ["type"]},
    {name: "SearchSlugs", path: "/search/slugs", required: ["query"]},

    {name: "Startups", path: "/startups/:id", placeholder: ["id"]},
    {name: "StartupsComments", path: "/startups/:id/comments", placeholder: ["id"]},
    {name: "StartupsRoles", path: "/startups/:id/roles", placeholder: ["id"], optional: ["direction"]},
    {name: "StartupsFollowers", path: "/startups/:id/followers", placeholder: ["id"]},
    {name: "StartupsFollowersIds", path: "/startups/:id/followers/ids", placeholder: ["id"]},
    {name: "StartupsJobs", path: "/startups/:id/jobs", placeholder: ["id"]},
    {name: "StartupsBatch", path: "/startups/batch", required: ["ids"]},
    {name: "StartupsSearch", path: "/startups/search", optional: ["slug", "domain"]},

    {name: "Tags", path: "/tags/:id", placeholder: ["id"]},
    {name: "TagsChildren", path: "/tags/:id/children", placeholder: ["id"]},
    {name: "TagsParents", path: "/tags/:id/parents", placeholder: ["id"]},
    {name: "TagsJobs", path: "/tags/:id/jobs", placeholder: ["id"]},
    {name: "TagsStartups", path: "/tags/:id/startups", placeholder: ["id"], optional: ["order"]},
    {name: "TagsUsers", path: "/tags/:id/users", placeholder: ["id"], optional: ["include_children", "include_parents", "investors"]},

    {name: "StartupRoles", path: "/startup_roles", required: ["v"], optional: ["user_id", "startup_id", "role", "direction"]},

    {name: "StatusUpdates", path: "/status_updates", optional: ["user_id", "startup_id"]},

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


