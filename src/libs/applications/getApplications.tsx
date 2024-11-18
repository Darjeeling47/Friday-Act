export default async function getApplications() {
    try {
        const tokeneiei = process.env.NEXT_PUBLIC_TOKEN
        const response = await fetch(`${process.env.PUBLIC_BACKEND_URL}/api/v1/applications`, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokeneiei}`,
            },
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch applications ${response.statusText}`);
        }
        return await response.json();
    } catch (err) {
        console.error("Error fetching applications:", err)
        return null
    }
}