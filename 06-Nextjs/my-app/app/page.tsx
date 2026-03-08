import Image from "next/image";
import Link from "next/link";

type Meme = {
  id: string;
  name: string;
  url: string;
  width: number;
  height: number;
  box_count: number
};

async function getMemes() {
  const res = await fetch("https://api.imgflip.com/get_memes", {
    next: { revalidate: 60 }, // ISR (optional)
  });

  const data = await res.json();
  console.log(data);
  
  return data.data.memes;
}

export default async function Home() {
  const memes: Meme[] = await getMemes();

  return (
    <main className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold text-gray-800">Meme Gallery 😂</h1>
        <p className="text-gray-500 mt-2">Trending memes from Imgflip API</p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-10">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {memes.map((meme) => (
            <div
              key={meme.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <div className="relative w-full h-60">
                <Image
                  src={meme.url}
                  alt={meme.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4">
                <h2 className="text-sm font-semibold text-gray-700 line-clamp-2">
                  {meme.name}
                </h2>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                  <Link
                    href={{
                      pathname: "creatememe",
                      query: {
                        url: meme.url,
                        id: meme.id,
                        boxCount: meme.box_count
                      },
                    }}
                  >
                    generate Meme
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
