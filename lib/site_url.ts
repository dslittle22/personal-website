import isLocal from "./local";

let rel_url = "https://dannylittle.com";
if (isLocal()) {
  rel_url = "localhost:3000";
}
export const relative_url = rel_url;

export const prod_url = "https://dannylittle.com";
