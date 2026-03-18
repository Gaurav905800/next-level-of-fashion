export interface Shoe {
  id: number;
  brand: "Nike" | "Puma";
  name: string;
  title: string;
  description: string;
  price: number;
  category: string;
  colors: string[];
  imageUrl: string;
  rating: number;
  inStock: boolean;
}

export const shoesData: Shoe[] = [
  {
    id: 1,
    brand: "Nike",
    name: "Air Max 270",
    title: "Nike Air Max 270",
    description:
      "The Nike Air Max 270 delivers visible air and comfortable cushioning inspired by the Air Max 180 and Air Max 93.",
    price: 150,
    category: "Running",
    colors: ["Black", "White", "Red"],
    imageUrl:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTAQIqD2qhotjwXc1a-WuR30AJmzoIV5gfyOKlbLD94-A-wFrxAeuyT8BzVCdn9WK2f7l6JTd01FZybvtremol1TlSLoObWWIrYpXsAkgX7c2_Vx2udLI6LPQ",
    rating: 4.5,
    inStock: true,
  },
  {
    id: 2,
    brand: "Nike",
    name: "Air Force 1 '07",
    title: "Nike Air Force 1 '07",
    description:
      "The radiance lives on in the Nike Air Force 1 '07, the b-ball OG that puts a fresh spin on what you know best.",
    price: 110,
    category: "Lifestyle",
    colors: ["White", "Black"],
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS0Y2NhZFh1YAK6VxqiVDbU0PfPwE30GjZAew2PhCvPU4RSylcst4dID0dBKfB6CbPilIUaanj6WkWoxKW6SaEBLbGkctND",
    rating: 4.8,
    inStock: true,
  },
  {
    id: 3,
    brand: "Nike",
    name: "Air Jordan 1 Mid",
    title: "Air Jordan 1 Mid",
    description:
      "Inspired by the original AJ1, the Air Jordan 1 Mid offers casual comfort and classic style.",
    price: 125,
    category: "Basketball",
    colors: ["Red", "Black", "White"],
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS0Os28qPhPpkOo8vrnPqW_L-CccCg8ArUQ6kUm6thU6AW5EMo-ykFCkHvf00c4RPR0aNiMb4-2YH1frEE1oXfW-neL1_FZYX9XWYG-CJmfkndvcNoMBWPrT6E8",
    rating: 4.7,
    inStock: true,
  },
  {
    id: 4,
    brand: "Nike",
    name: "React Infinity Run",
    title: "Nike React Infinity Run",
    description:
      "The Nike React Infinity Run helps keep you running with a soft, stable feel that reduces injury risk.",
    price: 160,
    category: "Running",
    colors: ["Blue", "Pink", "Black"],
    imageUrl:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS8CDKv5jWyOQTS1qAS5AjuPEdFijFPqpnz0xHBPi9ovWbR2fFSrE1abGpTuoXFYL7cwsScV6bjckN6iFkzxmwCPA-fUyuDz3ExcDfZNet0pX2rwiMVxYcGWA",
    rating: 4.4,
    inStock: false,
  },
  {
    id: 5,
    brand: "Nike",
    name: "Pegasus 39",
    title: "Nike Air Zoom Pegasus 39",
    description:
      "Workhorse with a world-class feel, the Pegasus 39 has responsive Zoom Air units and a comfortable fit.",
    price: 130,
    category: "Running",
    colors: ["Grey", "Green", "Black"],
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT0t8uYT2eySlwzvrmmouIk5UdKV2nrjH_r3BayF-BiV2cQ2Psvi2VffFVbCpbjJuagnpiQkjiz2VWfhKq13y7kyb5_pv0MdoVGMZosqQuUgfoqnpa5beDDJeE",
    rating: 4.6,
    inStock: true,
  },

  // Puma Shoes
  {
    id: 6,
    brand: "Puma",
    name: "RS-X",
    title: "Puma RS-X",
    description:
      "The RS-X reinvents the running system with bold colors, chunky silhouettes, and maximum comfort.",
    price: 120,
    category: "Lifestyle",
    colors: ["White", "Blue", "Red"],
    imageUrl:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/369413/01/sv01/fnd/IND/w/1000/h/1000/fmt/png",
    rating: 4.3,
    inStock: true,
  },
  {
    id: 7,
    brand: "Puma",
    name: "Suede Classic",
    title: "Puma Suede Classic XXI",
    description:
      "The iconic Puma Suede has been a staple since 1968, offering timeless style and premium suede construction.",
    price: 80,
    category: "Lifestyle",
    colors: ["Black", "Red", "Navy"],
    imageUrl:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/374915/01/sv01/fnd/IND/w/1000/h/1000/fmt/png",
    rating: 4.9,
    inStock: true,
  },
  {
    id: 8,
    brand: "Puma",
    name: "Future Rider",
    title: "Puma Future Rider",
    description:
      "The Future Rider brings back the spirit of the 80s with its lightweight feel and Federbein cushioning.",
    price: 90,
    category: "Lifestyle",
    colors: ["Yellow", "Black", "White"],
    imageUrl:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/371348/01/sv01/fnd/IND/w/1000/h/1000/fmt/png",
    rating: 4.2,
    inStock: true,
  },
  {
    id: 9,
    brand: "Puma",
    name: "Deviate Nitro",
    title: "Puma Deviate Nitro",
    description:
      "Experience the future of running with Deviate Nitro, featuring nitrogen-infused foam and a carbon plate.",
    price: 180,
    category: "Running",
    colors: ["Orange", "Black"],
    imageUrl:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/194807/01/sv01/fnd/IND/w/1000/h/1000/fmt/png",
    rating: 4.7,
    inStock: false,
  },
  {
    id: 10,
    brand: "Puma",
    name: "Clyde All-Pro",
    title: "Puma Clyde All-Pro",
    description:
      "Inspired by basketball legend Walt 'Clyde' Frazier, these shoes offer premium materials and court-ready performance.",
    price: 140,
    category: "Basketball",
    colors: ["Green", "White", "Purple"],
    imageUrl:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/377050/01/sv01/fnd/IND/w/1000/h/1000/fmt/png",
    rating: 4.5,
    inStock: true,
  },
];
