export const siteTitle = "Danny Little";

export default function Head() {
  return (
    <>
      <title>{siteTitle}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Generated by create next app" />
      <link rel="shortcut icon" href="public/favicon/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="favicon/favicon-16x16.png"
      />
    </>
  );
}
