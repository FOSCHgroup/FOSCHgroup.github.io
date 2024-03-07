interface Props {
  title: string;
}

export default function Hero({ title }: Props) {
  return (
    <div className="hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1">{title}</h1>
        </div>
      </div>
    </div>
  );
}
