import remark from 'remark';
import footnotes from 'remark-footnotes';
import html from 'remark-html';
import prism from 'remark-prism';

export default async function markdownToHTML(markdown) {
  const rawHTMLstring = await remark()
    .use(html)
    .use(prism)
    .use(footnotes, { inlineNotes: true })
    .process(markdown);

  return rawHTMLstring.toString();
}
