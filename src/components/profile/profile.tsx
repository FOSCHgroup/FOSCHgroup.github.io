import { Image } from "@/types";

interface User {
  area: string;
  biography: string;
  image?: Image;
  link: string;
  name: string;
  position: string;
  title: string;
}

interface Props {
  user: User;
}

export default function Profile({ user }: Props) {
  const { name, image, link, area, position, biography, title } = user;

  return (
    <div className="card">
      <div className="card-content">
        {image && (
          <div className="media is-align-items-center">
            <div className="media-left">
              <figure className="image is-128x128">
                <img
                  className="is-rounded"
                  src={`/images/members/${image.data.attributes.name}`}
                  alt={name}
                  style={{ aspectRatio: 1, objectFit: "cover" }}
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-5">
                <a href={link} target="_blank" rel="noreferrer">
                  {title ? `${title} ${name}` : name}
                </a>
              </p>
              {position && <p className="subtitle is-6 mb-2">{position}</p>}
              <span
                className="tag has-text-white"
                style={{ backgroundColor: `var(--${area.toLowerCase()})` }}
              >
                {area}
              </span>
            </div>
          </div>
        )}
        {biography && <p>{biography}</p>}
      </div>
    </div>
  );
}
