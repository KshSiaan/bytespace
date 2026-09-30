import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { avatars } from "@/lib/data/data";

export default function Testimonial() {
  return (
    <div className="overflow-hidden py-12 lg:py-24">
      <section className="relative min-h-[80dvh] px-[5dvw] grid lg:grid-cols-2 gap-4 overflow-visible">
        {/* Full-section gradient */}
        <div className="pointer-events-none absolute left-0 inset-0 -z-10">
          <div className="absolute left-[-80dvw] bottom-[-40dvh] h-[150%] w-[150dvw] bg-radial from-[#003BE250] via-transparent to-transparent" />
        </div>
        <div className="pointer-events-none absolute left-0 inset-0 -z-10">
          <div className="absolute right-[-80dvw] top-[-20dvh] h-[150%] w-[150dvw] bg-radial from-[#CBFC0160] via-transparent to-transparent" />
        </div>
        <div className="pointer-events-none absolute left-0 inset-0 -z-10">
          <div className="absolute  top-[-15dvh] h-full w-dvw bg-radial from-[#CBFC0160] via-transparent to-transparent" />
        </div>
        {/* COntent: */}
        <div className="flex flex-col justify-start items-start h-min pt-0 lg:pt-12">
          <h2 className="text-2xl lg:text-[2.5rem] xl:text-[3rem] font-bold text-left">
            Discover What Our <br /> Community Is Saying
          </h2>
        </div>
        <p className="text-lg h-min pt-0 lg:pt-12">
          At ByteSpace, our vibrant community of learners and creators is at the
          heart of what we do. Hear directly from those who have experienced the
          transformative journey of learning and creating on our platform.
          Explore testimonials that reflect the diverse perspectives of
          enthusiastic learners and accomplished creators.
        </p>
        <div className="lg:col-span-2 w-full grid lg:grid-cols-3 gap-6 mt-6 lg:mt-24">
          {[
            {
              avatar: avatars[2],
              name: "Sarah M.",
              role: "Enthusiastic Learner",
              description:
                "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
            },
            {
              avatar: avatars[1],
              name: "James L.",
              role: "Lifelong Learner",
              description:
                "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
            },
            {
              avatar: avatars[0],
              name: "Alex B.",
              role: "Inspired Creator",
              description:
                "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
            },
          ].map((item, index) => (
            <Card key={item.name} className="gap-2 lg:gap-6">
              <CardHeader>
                <Avatar className="size-12 lg:size-18">
                  <AvatarImage src={item.avatar} alt="Avatar" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </CardHeader>
              <CardContent className="space-y-0 gap-0">
                <CardTitle className="text-lg font-semibold">
                  {item.name}
                </CardTitle>
                <CardDescription>Enthusiastic Learner</CardDescription>
              </CardContent>
              <CardContent className="text-sm sm:text-base lg:text-lg">
                "{item.description}"
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
