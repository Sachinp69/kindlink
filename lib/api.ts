export async function fetchDonationRequests() {
  try {
    const res = await fetch("/api/requests", { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch donation requests");
    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}
