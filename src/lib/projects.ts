import logos from "./logos";

type ProjectName =
  | "adidas"
  | "paytmmall"

export type StackType = { label: string; logo: string; invert?: boolean };

export type ProjectType = {
  title: string;
  description: string[];
  images: {
    webm?: string;
    mp4?: string;
    main?: { link: string; height: number; width: number };
    poster?: string;
    vidHeight?: number;
    vidWidth?: number;
  };
  links: { github?: string; live: string };
  stack: StackType[];
  special?: { text: string; link: string };
};

type Projects = {
  [K in ProjectName]: ProjectType;
};

const projects: Projects = {
  paytmmall: {
    title: "Paytm-mall",
    description: [
      "**Adidas website clone**. Adidas Originals is a brand of a line of casual and sportswear created by **German multinational corporation Adidas**.",
      "It consists of a heritage line, specializing in athletic shoes, t-shirts, jackets, bags, sunglasses and other accessories."
    ],
    images: {
      main: {
        link: "/project/paytmmall/paytm-mall.png",
        width: 979,
        height: 892,
      },
    },
    stack: [
      logos.javascript,
    ],
    links: {
      live: "",
      github: "https://github.com/haldaranup/adidas-clone",
    },
  },
  adidas: {
    title: "Adidas",
    description: [
      "**Adidas website clone**. Adidas Originals is a brand of a line of casual and sportswear created by **German multinational corporation Adidas**.",
      "It consists of a heritage line, specializing in athletic shoes, t-shirts, jackets, bags, sunglasses and other accessories."
    ],
    images: {
      main: {
        link: "/project/adidas/adidas.png",
        width: 979,
        height: 892,
      },
    },
    stack: [
      logos.javascript,
    ],
    links: {
      live: "",
      github: "https://github.com/haldaranup/adidas-clone",
    },
  }
  
};

export default projects;
