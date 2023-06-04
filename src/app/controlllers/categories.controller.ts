export async function fetchCategories() {
    try {
      const response = await fetch("/api/categories");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching highlights:", error);
      return [];
    }
  }
  