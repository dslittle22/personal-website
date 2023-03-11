import SmartLink from "@/components/SmartLink";

export default async function Ssr() {
  // const item = await get_data(url);
  const items = await fetch_n_items(5);
  return (
    <>
      <div>
        Here are five words from{" "}
        <SmartLink href="https://random-word-api.herokuapp.com/word?number=1">
          this
        </SmartLink>{" "}
        web api:
      </div>
      <ul>
        {items.map((item, i) => (
          <li key={`${item}-${i}`}>{item}</li>
        ))}
      </ul>
    </>
  );
}

async function get_data() {
  const url = "https://random-word-api.herokuapp.com/word?number=1";
  const resp = await fetch(url, { cache: "no-cache" });
  if (!resp.ok) {
    throw new Error("Failed to fetch data");
  }
  const json = await resp.json();
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
