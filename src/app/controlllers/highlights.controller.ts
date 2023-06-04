export async function fetchHighlights() {
  try {
    const response = await fetch("/api/highlights");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching highlights:", error);
    return [];
  }
}
