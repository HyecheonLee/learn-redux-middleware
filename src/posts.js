const sleep = n => new Promise(resolve => setTimeout(resolve, n));

const posts = [
  {
    id: 1,
    title: "title1",
    body: "body test1"
  },
  {
    id: 2,
    title: "title2",
    body: "body test2"
  },
  {
    id: 3,
    title: "title3",
    body: "body test3"
  },
  {
    id: 4,
    title: "title4",
    body: "body test4"
  }
];

export const getPosts = async () => {
  await sleep(500);
  return posts;
};

export const getPostsById = async id => {
  await sleep(500);
  return posts.find(post => post.id === id);
};
