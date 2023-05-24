export async function requestTest(url) {
  const response = await fetch(url);
  const responseJSON = await response.json();

  return responseJSON;
}
