import { config } from "dotenv";
config({ path: ".env.local" });

export default function isLocal() {
  return process.env.LOCAL === "true";
}
