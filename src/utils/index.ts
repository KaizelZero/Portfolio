export function removeTrailingSlash(pathname: string) {
  const matchTrailingSlash = /\w+\/$/;
  if (matchTrailingSlash.test(pathname)) return pathname.slice(0, -1);
  return pathname;
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-GB").format(date);
}