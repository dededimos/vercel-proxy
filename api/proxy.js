export default async function handler(req, res) {
  const response = await fetch("https://secure.fattureincloud.it/situation", {
    headers: {
      "User-Agent": "Mozilla/5.0",
    },
  });

  const html = await response.text();
  res.setHeader("Content-Type", "text/html");
  res.send(html);
}
