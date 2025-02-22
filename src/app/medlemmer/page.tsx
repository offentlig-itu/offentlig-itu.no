"use client";

import React from "react";
import GithubOrgMembers from "../components/GithubOrgMembers";

const MembersPage = () => {
	return (
		<div className="max-w-4xl mx-auto p-6">
			<h1 className="text-4xl font-bold mb-8">Medlemmer</h1>
			<GithubOrgMembers />
		</div>
	);
};

export default MembersPage;
