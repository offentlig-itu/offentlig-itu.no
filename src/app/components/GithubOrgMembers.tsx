const GithubOrgMembers = ({ orgName }) => {
	const { members, loading, error } = useGithubOrgMembers(orgName);

	if (loading) {
		return (
			<Card className="w-full max-w-2xl">
				<CardContent className="p-6">
					<div className="text-center">Loading members...</div>
				</CardContent>
			</Card>
		);
	}

	if (error) {
		return (
			<Card className="w-full max-w-2xl">
				<CardContent className="p-6">
					<div className="text-red-500">Error: {error}</div>
				</CardContent>
			</Card>
		);
	}

	if (!members.length) {
		return (
			<Card className="w-full max-w-2xl">
				<CardContent className="p-6">
					<div className="text-center">No public members found.</div>
				</CardContent>
			</Card>
		);
	}

	return (
		<Card className="w-full max-w-2xl">
			<CardHeader>
				<CardTitle>Members of {orgName}</CardTitle>
			</CardHeader>
			<CardContent>
				<ul className="space-y-2">
					{members.map((member) => (
						<li key={member.id} className="flex items-center space-x-4">
							<img
								src={member.avatar_url}
								alt={`${member.login}'s avatar`}
								className="w-8 h-8 rounded-full"
							/>
							<a
								href={member.html_url}
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-600 hover:text-blue-800 hover:underline"
							>
								{member.login}
							</a>
						</li>
					))}
				</ul>
			</CardContent>
		</Card>
	);
};

export default GithubOrgMembers;
