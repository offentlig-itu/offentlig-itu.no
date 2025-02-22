import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Custom hook to fetch organization members
const useGithubOrgMembers = (orgName) => {
	const [members, setMembers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchMembers = async () => {
			if (!orgName) {
				setLoading(false);
				return;
			}

			try {
				setLoading(true);
				const response = await fetch(
					`https://api.github.com/orgs/${orgName}/public_members`,
					{
						headers: {
							Accept: "application/vnd.github.v3+json",
						},
					},
				);

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const data = await response.json();
				setMembers(data);
				setError(null);
			} catch (err) {
				setError(err.message);
				setMembers([]);
			} finally {
				setLoading(false);
			}
		};

		fetchMembers();
	}, [orgName]);

	return { members, loading, error };
};
