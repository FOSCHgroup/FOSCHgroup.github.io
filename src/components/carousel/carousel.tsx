"use client";

import CardMedia from "@/ui/card-media/card-media";
import Link from "@/ui/link/link";
import Slider from "react-slick";
import styles from "./carousel.module.css";

interface Talk {
  date?: string;
  image?: string;
  link?: string;
  section: string;
  title: string;
  video?: string;
  details?: string;
}

interface Props {
  data: Talk[];
}

export default function Carousel({ data }: Props) {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings} className={styles.slider}>
      {data.map((talk, index) => (
        <div key={index}>
          <div style={{ margin: "0 0.25em" }}>
            <div className="card">
              <CardMedia image={talk.image} video={talk.video} />
              <div className="card-content">
                <p className="title is-6">
                  <Link href={talk.link}>{talk.title}</Link>
                </p>
                <p>{talk.date}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
