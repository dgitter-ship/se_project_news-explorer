function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

const createMockResponse = (data, delay = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(data),
      });
    }, delay);
  });
};

// Your stubbed signin function
export const signin = ({ email,  }) => {
  // Instead of real fetch, return mock response
  return createMockResponse({
    token: "fake-jwt-token-12345",
    user: { name: "John Doe", email, _id: "fake-user-id-123" },
  }).then(checkResponse);
};

// Your stubbed signup function
export const signup = ({ name, avatar, email, }) => {
  return createMockResponse({
    user: { name, avatar, email, _id: "fake-user-id-456" },
  }).then(checkResponse);
};
