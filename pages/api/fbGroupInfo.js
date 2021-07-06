export default (req, res) => {
  console.log(process.env.FB_ACCESS_TOKEN);
  fetch(
    `https://graph.facebook.com/kindervongestern/feed?limit=5&fields=message,created_time,attachments&access_token=${process.env.FB_ACCESS_TOKEN}`
  ).then(async (fbRes) => {
    const data = await fbRes.json();
    console.log(data);
    res.status(200).json(data);
  });
};
