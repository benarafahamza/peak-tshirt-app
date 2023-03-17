import TshirtCard from "TshirtCard";

const tshirt = {
  id: 1,
  name: "T-shirt 'Lune'",
  imageUrl: "1.jpg",
  description: "T-shirt noir avec un motif de lune imprimé sur le devant.",
  size: "M",
  styleId: 2,
  price: 20.99,
};

export default function TshirtPage() {
  return <TshirtCard {...tshirt} />;
}
