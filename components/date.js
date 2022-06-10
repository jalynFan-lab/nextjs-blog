import dateFormat, { masks } from "dateformat";

export default function Date({ dateString }) {
  const date = dateFormat(dateString, "mmmm dS, yyyy");
  return <time dateTime={dateString}>{date}</time>;
}
