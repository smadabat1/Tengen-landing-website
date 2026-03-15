export async function fetchRawGitHubFile(path: string) {
    const baseUrl = "https://raw.githubusercontent.com/smadabat1/Tengen/main";
    try {
        const response = await fetch(`${baseUrl}/${path}`, {
            next: { revalidate: 3600 }, // Cache for 1 hour
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch ${path}: ${response.statusText}`);
        }
        return await response.text();
    } catch (error) {
        console.error(`Error fetching ${path} from GitHub:`, error);
        throw error;
    }
}
