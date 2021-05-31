const PostData = async ({ url, data }) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Auth-Token': 12345,
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export default PostData;
