import Image from "next/image";

export default function ExternalElements() {
  return (
    <>
      <Image
        src="/illustration/Cone.png"
        height={400}
        width={400}
        alt="Cone"
        className="absolute hidden md:block bottom-12 left-24 size-[40dvh] motion-translate-y-loop-[25px] drop-shadow-2xl motion-delay-1000 motion-duration-[5s] motion-ease-in-out"
      />
      <Image
        src="/illustration/Image.png"
        height={400}
        width={400}
        alt="Cone"
        className="absolute hidden md:block bottom-1/2 left-1/4 -translate-x-1/3 size-[15dvh]  motion-translate-y-loop-[25px] drop-shadow-2xl motion-delay-1000 motion-duration-[10s] motion-ease-in-out"
      />
      <Image
        src="/illustration/spring.png"
        height={400}
        width={400}
        alt="Cone"
        className="absolute hidden md:block bottom-1/2 left-0  size-[40dvh] aspect-square object-contain object-left motion-translate-y-loop-[25px] drop-shadow-2xl motion-delay-1000 motion-duration-[15s] motion-ease-in-out"
      />
      <Image
        src="/illustration/spring-2.png"
        height={400}
        width={400}
        alt="Cone"
        className="absolute hidden md:block bottom-12 right-24 size-[40dvh] motion-translate-y-loop-[25px] drop-shadow-2xl motion-delay-1000 motion-duration-[5s] motion-ease-in-out"
      />
      <Image
        src="/illustration/pyramid.png"
        height={400}
        width={400}
        alt="Cone"
        className="absolute hidden md:block bottom-1/2 right-1/5 -translate-x-1/3 size-[15dvh]  motion-translate-y-loop-[25px] drop-shadow-2xl motion-delay-1000 motion-duration-[10s] motion-ease-in-out"
      />
      <Image
        src="/illustration/cylinder.png"
        height={400}
        width={400}
        alt="Cone"
        className="absolute hidden md:block bottom-1/2 right-0 size-[40dvh] aspect-square object-contain object-right motion-translate-y-loop-[25px] drop-shadow-2xl motion-delay-1000 motion-duration-[15s] motion-ease-in-out"
      />
    </>
  );
}
