import Map from "@/components/Map";
import Products from "@/components/Products";
import Slider from "@/components/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <main className="home-page">
      <div className="banner">
        <video
          src="/assets/videos/Home-Banner-video.mp4"
          autoPlay
          loop
          muted
          className="banner-bg-video"
        ></video>
      </div>
      <Slider />
      <Products />
      <Map />
    </main>
  );
}
