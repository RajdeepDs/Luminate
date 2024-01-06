export function formatDate(input: any): string {
  const timestampString = input?.toString();
  const timestamp = parseInt(timestampString, 10);
  const date = new Date(timestamp);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function formatTime(input: any): string {
  const timestampString = input?.toString();
  const timestamp = parseInt(timestampString, 10);
  const date = new Date(timestamp);
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });
}

export async function fetchLocation() {
  try {
    const response = await fetch("http://ip-api.com/json");
    const data = await response.json();
    const location = `${data.city}, ${data.countryCode}`;
    return location;
  } catch (error) {
    console.error("Error fetching location:", error);
  }
}
