export default (req, res) => {

  fetch(
    `https://graph.facebook.com/kindervongestern?fields=hours&access_token=${process.env.FB_ACCESS_TOKEN}`
  ).then(async (fbRes) => {
    const data = await fbRes.json();
    res.status(200).json(data.hours);
  });
};
