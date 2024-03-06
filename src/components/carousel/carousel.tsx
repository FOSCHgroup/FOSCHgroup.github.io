"use client";

import Card from "@/ui/card/card";
import CardContent from "@/ui/card-content/card-content";
import CardMedia from "@/ui/card-media/card-media";
import Link from "@/ui/link/link";
import Slider from "react-slick";
import Typography from "@/ui/typography/typography";
import styles from "./carousel.module.css";

export default function Carousel({ data }) {
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
            <Card>
              <CardMedia image={talk.image} video={talk.video} />
              <CardContent>
                <Typography>
                  <Link href={talk.link}>{talk.title}</Link>
                </Typography>
                <Typography color="secondary">{talk.date}</Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      ))}
    </Slider>
  );
}
