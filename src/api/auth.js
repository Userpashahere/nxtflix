const API_URL = "https://serverless-api-teal.vercel.app/api/auth/signin";

export async function signIn(email, password) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || data.error || "Login failed");
  }

  return data;
}