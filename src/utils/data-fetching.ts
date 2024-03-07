import { Image } from "@/types";
import { Readable } from "stream";
import { ReadableStream } from "stream/web";
import { finished } from "stream/promises";
import fs from "fs";

interface Results<T> {
  data: ({ attributes: T & { image: Image; }; })[];
}

export const fetchData = async <T>(collection: string, withImages?: boolean): Promise<T[] | void> => {
  let res: Response;
  try {
    res = await fetch(
      `http://${process.env.CMS_HOST}:${process.env.CMS_PORT}/api/${collection}?populate=*`,
      {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
        },
      }
    );
  } catch (err: unknown) {
    console.error(err);
    return;
  }

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const results: Results<T> = await res.json();

  if (withImages) {
    for (const member of results.data) {
      if (member.attributes.image?.data) {
        const stream = fs.createWriteStream(
          `public/images/${collection}/${member.attributes.image.data.attributes.name}`
        );
        const response = await fetch(
          `http://${process.env.CMS_HOST}:${process.env.CMS_PORT}${member.attributes.image.data.attributes.url}`
        );

        if (!response.body) {
          throw new Error('fetch failed');
        }

        await finished(Readable.fromWeb(response.body as ReadableStream).pipe(stream));
      }
    }
  }

  return results.data.map(({ attributes }) => attributes);
};
