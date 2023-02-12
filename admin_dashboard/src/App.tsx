import GalleryPage from "./galleryPage";
import Navigation from "./components/navigation";


function App() {
    return (
        <div className="flex flex-col w-screen h-screen">
            <Navigation />
            <GalleryPage />

        </div>
    );
}

export default App;
