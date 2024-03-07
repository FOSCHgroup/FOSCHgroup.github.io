export interface Image {
  data: {
    attributes: {
      name: string;
      url: string;
    };
  };
}

export interface Error {
  message: string;
}
