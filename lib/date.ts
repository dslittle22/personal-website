export function formatDateString(dateString: string) {
  return new Date(dateString).toLocaleDateString(undefined, {
    weekday: undefined,
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
