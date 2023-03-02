let rel_url = "https://dlittle.me";
if (process.env.LOCAL === "true") {
  rel_url = "localhost:3000";
}
export const relative_url = rel_url;

export const prod_url = "dlittle.me";
