const baseUrl = process.argv[2] ?? process.env.SMOKE_BASE_URL ?? "http://127.0.0.1:3000";

const required = [
  "TEYA Beauty",
  "L’art de sublimer vos ongles.",
  "Nos prestations",
  "Ongles, manucure & nail art",
];

const run = async () => {
  const response = await fetch(baseUrl, {
    headers: {
      "user-agent": "teya-smoke/1.0",
    },
  });

  if (!response.ok) {
    throw new Error(`Smoke failed for ${baseUrl}: HTTP ${response.status}`);
  }

  const html = await response.text();
  const normalizedHtml = html
    .replaceAll("&amp;", "&")
    .replaceAll("&#x27;", "'")
    .replaceAll("&quot;", '"')
    .replaceAll("&nbsp;", " ");

  for (const needle of required) {
    if (!normalizedHtml.includes(needle)) {
      throw new Error(`Smoke failed for ${baseUrl}: missing "${needle}"`);
    }
  }

  console.log(`Smoke passed for ${baseUrl}`);
};

run().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
