export type DummyUser = {
  id: number;
  name: string;
  image: string;
  pendingMessages: number;
  isOnline: boolean;
};

export const dummyUsers: DummyUser[] = [
  {
    id: 1,
    name: "Aarav Sharma",
    image: "https://i.pravatar.cc/150?img=1",
    pendingMessages: 2,
    isOnline: true,
  },
  {
    id: 2,
    name: "Riya Verma",
    image: "https://i.pravatar.cc/150?img=2",
    pendingMessages: 0,
    isOnline: false,
  },
  {
    id: 3,
    name: "Karan Mehta",
    image: "https://i.pravatar.cc/150?img=3",
    pendingMessages: 5,
    isOnline: true,
  },
  {
    id: 4,
    name: "Sneha Patel",
    image: "https://i.pravatar.cc/150?img=4",
    pendingMessages: 1,
    isOnline: false,
  },
  {
    id: 5,
    name: "Rahul Singh",
    image: "https://i.pravatar.cc/150?img=5",
    pendingMessages: 3,
    isOnline: true,
  },
  {
    id: 6,
    name: "Ananya Iyer",
    image: "https://i.pravatar.cc/150?img=6",
    pendingMessages: 0,
    isOnline: true,
  },
];
