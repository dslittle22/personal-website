import SmartLink from "@/components/SmartLink";

type MusicItem = {
  title: string;
  description: string;
  href: string;
};

function MusicLink({
  music: { href, title, description },
}: {
  music: MusicItem;
}) {
  return (
    <li>
      <SmartLink href={href} style={{ display: "inline" }}>
        <h4 style={{ display: "inline" }}>{title}</h4>
      </SmartLink>
      <br />
      <small>{description}</small>
    </li>
  );
}

export default function Music() {
  const musics: MusicItem[] = [
    {
      title: "Senior recital",
      description:
        "I had this recital in my senior year, and all of the pieces are original compositions.",
      href: "https://www.youtube.com/watch?v=26DEsGal9ho",
    },
    {
      title: "Junior recital",
      description: "This was the advanced recital from my junior year.",
      href: "https://www.youtube.com/watch?v=EvdAOEdoqzI",
    },
    {
      title: "Disco Dream",
      description: '"nice1!" - Jack Stratton, Vulfpeck',
      href: "https://youtu.be/o9qnCKs6MhQ",
    },
    {
      title: "The Bus Rides Remote",
      description: "An virtually-recorded mashup recorded for Polarjam.",
      href: "https://www.youtube.com/watch?v=fjPQucGGwSs",
    },
    {
      title: "Sir Duke Cover feat. Emma Hatt",
      description: "A harmonious duet recorded for Polarjam.",
      href: "https://www.youtube.com/watch?v=FYtORZtBxFE",
    },
  ];

  return (
    <div>
      <h2>Music</h2>
      <section>
        <p>
          {`I'm tenor saxophone player, but I also play baritone/alto/soprano
          saxophones. I can get away with playing drums, bass, or guitar,
          but those aren't my strong suit. I mostly play jazz, funk, and R&B.`}
        </p>
        <p>
          {`I'm a bit of a theory nerd, and I enjoy really arranging and
          transcribing music. Toward the end of college, I had the chance to
          put together two jazz concerts: the first was mostly covers, but the second was
          all original compositions. These are some of the most gratifying projects
          I've ever taken on, and I'm incredibly grateful that they were recorded in good quality!
          You can listen to the concerts, as well as other musical escapades, below.`}
        </p>
      </section>
      <section>
        <ul className="musicList">
          {musics.map((music) => (
            <MusicLink music={music} key={music.href} />
          ))}
        </ul>
      </section>
    </div>
  );
}
