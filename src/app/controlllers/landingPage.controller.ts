export async function fetchActivities() {
    try {
      const response = await fetch("/api/activities");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching highlights:", error);
      return [];
    }
  }
  