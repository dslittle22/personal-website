export function formatDate(date: Date) {
  return date.toLocaleDateString(undefined, {
    weekday: undefined,
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
