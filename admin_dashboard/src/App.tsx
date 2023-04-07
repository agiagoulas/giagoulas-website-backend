import GalleryPage from "./galleryPage";
import Navigation from "./components/navigation";

function App() {
  return (
    <div className="flex h-screen w-screen flex-col">
      <Navigation />
      <GalleryPage />
    </div>
  );
}

export default App;
