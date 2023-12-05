export function removeTrailingSlash(pathname: string) {
  const matchTrailingSlash = /\w+\/$/;
  if (matchTrailingSlash.test(pathname)) return pathname.slice(0, -1);
  return pathname;
}

export function formatDate(date: Date): string {
  // Format the date into 'MMMM DD, YYYY'
  return new Intl.DateTimeFormat("en-US", {
    month: "long", // Full month name
    day: "2-digit", // Two-digit day
    year: "numeric", // Four-digit year
  }).format(date);
}

export function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
}
