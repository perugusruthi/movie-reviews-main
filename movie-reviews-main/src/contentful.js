// const client = require("contentful").createClient({
//   space: "wbbhf1qd7970",
//   accessToken: "-W1IoA-JTS3yA3py_FyXDdG42P02SFq5vLBff-KXfrQ"
// });

const client = require("contentful").createClient({
  space: "0ddm4rvw6i7a",
  accessToken: "yHmtCUbhLo9zWOSqAgCztSItnzxGd_6-VYNoCor26qc"
});

const getBlogPosts = () => client.getEntries().then(response => response.items);

const getSinglePost = slug =>
  client
    .getEntries({
      "fields.slug": slug,
      content_type: "blogPost"
    })
    .then(response => response.items);

export { getBlogPosts, getSinglePost };
