export default async function Ssr() {
  const items = await get_data();
  return (
    <>
      <p>Here are five random words fetched from a web API (on the server!):</p>
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
  return json;
}
