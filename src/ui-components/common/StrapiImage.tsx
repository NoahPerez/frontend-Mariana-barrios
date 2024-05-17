import Image from "next/image";

type Props = {
  src?: string | null;
  alt: string;
  height: number;
  width: number;
  className?: string;
}

export function StrapiImage({ src, alt, height = 100, width = 100, className }: Props) {
    console.log({src})
    let img = src;
    if(!src || src === 'undefined' ) {
        img = `/images/noimage.png`;
    }else{
        img = src
    }
    return (
        <Image
            src={img}
            alt={alt}
            height={height}
            width={width}
            className={className}
        />
    );
}
