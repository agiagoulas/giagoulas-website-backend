import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

export default function GalleryList(params: any) {
  const { galleries, setCurrentSelectedGallery } = params;
  if (galleries.loading) {
    return <div>Loading..</div>;
  }

  return (
    <List>
      {galleries.galleries && (
        <>
          {galleries.galleries.map((gallery: any) => (
            <ListItem
              key={gallery._id}
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
              disablePadding
              className="mb-2 rounded-md border bg-gray-200"
            >
              <ListItemButton
                onClick={() => setCurrentSelectedGallery(gallery._id)}
              >
                <ListItemText
                  primary={gallery.title}
                  secondary={gallery.updated_on}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </>
      )}
      <Button variant="contained">Add Gallery</Button>
    </List>
  );
}
