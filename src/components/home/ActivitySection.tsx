import Image from "next/image";
import Link from "next/link";
import ProductSection from "./ProductSection";

const activities = [
  {
    id: 1,
    name: "Camping",
    image: "https://d1yutv2xslo29o.cloudfront.net/806d41f2-7872-46ab-b035-2b57c869c7cf.jpg",
    link: "/products?activity=1",
  },
  {
    id: 2,
    name: "Riding",
    image: "https://d1yutv2xslo29o.cloudfront.net/b924bbb2-3a5c-4d5b-8fce-9df7528a9254.jpg",
    link: "/products?activity=8",
  },
  {
    id: 3,
    name: "Hiking",
    image: "https://d1yutv2xslo29o.cloudfront.net/fbddccec-3f58-4606-8070-d0c649783893.jpg",
    link: "/products?activity=7",
  },
  {
    id: 4,
    name: "Running",
    image: "https://d1yutv2xslo29o.cloudfront.net/e048e5d2-ac48-4339-9df8-ec78165b2185.jpg",
    link: "/products?activity=10",
  },
  {
    id: 5,
    name: "Field Trip",
    image: "https://d1yutv2xslo29o.cloudfront.net/d5f2a3d2-a35b-414e-ad41-fb095dac4e70.jpg",
    link: "/products?activity=13",
  },
  {
    id: 6,
    name: "Traveling",
    image: "https://d1yutv2xslo29o.cloudfront.net/28520aeb-7d59-49a1-a50d-aef86bd783e3.jpg",
    link: "/products?activity=14",
  },
];

const ActivitySection = () => {
  return (
    <ProductSection title="ACTIVITY" viewAllLink="/products">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {activities.map((activity) => (
          <Link key={activity.id} href={activity.link} className="group">
            <div className="rounded-lg overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src={activity.image}
                  alt={activity.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">{activity.name}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </ProductSection>
  );
};

export default ActivitySection;
