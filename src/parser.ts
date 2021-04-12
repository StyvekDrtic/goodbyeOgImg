import { IncomingMessage } from "http";
import { parse } from "url";

export function parseReqs(req: IncomingMessage) {
  const { query = {} } = parse(req.url || "", true);
  const { zesnuly, datum, image } = query;

  if (Array.isArray(zesnuly)) {
    throw new Error("Author must be string");
  }
  if (Array.isArray(datum)) {
    throw new Error("Author must be string");
  }
  if (Array.isArray(image)) {
    throw new Error("Image must be string");
  }

  const parsedReqs: ParsedReqs = {
    zesnuly,
    datum,
    image
  };

  console.log(JSON.stringify(parsedReqs));

  return parsedReqs;
}
