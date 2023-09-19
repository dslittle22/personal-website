import SmartLink from "@/components/SmartLink";

export default async function Ssr() {
  const items = await get_data();
  return (
    <>
      <div>Here are five words from a web API:</div>
      <ul>
        {items.map((item: string, i: number) => (
          <li key={`${item}-${i}`}>{item}</li>
        ))}
      </ul>
    </>
  );
}

async function get_data() {
  const url = "https://random-word-api.vercel.app/api?words=5";
  const resp = await fetch(url, { cache: "no-cache" });
  if (!resp.ok) {
    throw new Error("Failed to fetch data");
  }
  const json = await resp.json();
  console.log(json);
  return json;
}

async function fetch_n_items(n: number) {
  const items = [];
  for (let i = 0; i < n; i++) {
    items.push(get_data());
  }
  const fetched_items = await Promise.all(items);
  return fetched_items;
}
