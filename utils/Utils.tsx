export const DecodeHTMLEntities = (text: string) => {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&cent;/g, "¢")
    .replace(/&pound;/g, "£")
    .replace(/&yen;/g, "¥")
    .replace(/&euro;/g, "€")
    .replace(/&copy;/g, "©")
    .replace(/&reg;/g, "®");
};

export const CapitalizeFirstLetter = (text: string | undefined) => {
  if (!text) return "";
  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const blurHashCode =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
