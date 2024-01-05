import { images } from "@/data/images";
import styled from "styled-components";
import styles from "@/styles/BrandsStrip.module.css";

export default function BrandsStrip() {
  let count = 0;
  return (
    <div
      className={`${styles.brands_strip} w-[10000px] bg-white h-[10rem] flex justify-start items-center brands-strip`}
    >
      {images.map((image) => {
        return <Image src={image.src} alt={image.alt} key={count++} />;
      })}
    </div>
  );
}

const MyImage = styled.img``;

function Image({ src, alt }: { src: string; alt: string }) {
  return (
    <MyImage
      className="object-contain mx-[3rem]"
      src={src}
      alt={alt}
      width="200px"
    />
  );
}
