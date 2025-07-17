import Image from "next/image";

type SelectImageProps = {
  images_thumbnails: Array<string>;
  setImage: (image: string) => void;
};

export default function SelectImage({
  images_thumbnails,
  setImage,
}: SelectImageProps) {
  return (
    <div className="flex flex-row gap-8 justify-between w-full p-2">
      {images_thumbnails.map((e) => {
        return (
          <Image
            src={e}
            alt="Product Photo Thumbnail"
            className="rounded-2xl hover:border-amber-600 hover:border-2 hover:opacity-60"
            key={e}
            width={80}
            height={80}
            onClick={() => setImage(e.replace("-thumbnail", ""))}
          />
        );
      })}
    </div>
  );
}
