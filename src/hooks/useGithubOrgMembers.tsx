import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Custom hook to fetch organization members
export const useGithubOrgMembers = () => {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const [members, setMembers] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchMembers = async () => {
			try {
				const response = await fetch(
					"https://api.github.com/orgs/offentlig-itu/members",
				);
				if (!response.ok) throw new Error("Failed to fetch members");
				const data = await response.json();
				setMembers(data);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchMembers();
	}, []);

	return { members, loading, error };
};
