import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FileUploadIcon from "@mui/icons-material/FileUpload";

// function GalleryImage(params: any) {
//   const { image } = params;
//   const cover = false;
//   return (
//     <Card>
//       <CardMedia sx={{ height: 200 }} image={image.url} />
//       <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
//         <IconButton>
//           <DeleteIcon />
//         </IconButton>
//         <IconButton>
//           {cover ? <CheckCircleIcon color="primary" /> : <CheckCircleIcon />}
//         </IconButton>
//       </CardActions>
//     </Card>
//   );
// }

export default function GalleryDetail(params: any) {
  <>
    <div className="mb-2 flex justify-between gap-2">
      <div className="flex w-1/3 flex-col gap-2">
        <TextField
          id="galleryTitle"
          label="Title"
          variant="filled"
          value={params.gallery.title}
        />
        <TextField
          id="galleryDate"
          label="Date"
          variant="filled"
          value={params.gallery.updated_on}
        />
      </div>
      <TextField
        className="w-2/3"
        id="galleryDescription"
        label="Description"
        multiline
        rows={4}
        variant="filled"
        value={params.gallery.description}
      />
    </div>
    <div className="mb-2 flex justify-end">
      <Button variant="contained">Save</Button>
    </div>
    <hr />
    <div className="my-2">
      <Button variant="contained" component="label">
        Upload Images
        <FileUploadIcon />
        <input type="file" accept="image/*" hidden multiple />
      </Button>
    </div>
    <div className="grid grid-cols-3 gap-2">
      {params.gallery.images ? (
        <>
          {params.gallery.images.map((image: any) => (
            <GalleryImage image={image} />
          ))}
        </>
      ) : (
        <p>No Images</p>
      )}
    </div>
  </>;
}
