export const addCookie = (name, value) => {
  document.cookie = `${name}=${value}`;
};

export function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

export const deleteCookie = name => {
  const expires = new Date(0);
  document.cookie = `${name}=;expires=${expires.toUTCString()}`;
};
