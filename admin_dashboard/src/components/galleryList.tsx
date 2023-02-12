import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';


export const GalleryList: any = (params: any) => {
    if (params.galleries.loading) {
        return <div>Loading..</div>
    } else {

        return (
            <>
                <List>
                    {params.galleries.galleries &&
                        <>
                            {
                                params.galleries.galleries.map((gallery: any, index: any) =>
                                    <ListItem
                                        key={index}
                                        secondaryAction={
                                            <IconButton edge="end" aria-label="delete">
                                                <DeleteIcon />
                                            </IconButton>
                                        }
                                        disablePadding
                                        className="bg-gray-200 border rounded-md mb-2"
                                    >
                                        <ListItemButton
                                            onClick={() => params.setCurrentSelectedGallery(gallery._id)}>
                                            <ListItemText
                                                primary={gallery.title}
                                                secondary={gallery.updated_on}
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                )
                            }
                        </>
                    }
                    <Button variant="contained">
                        Add Gallery
                    </Button>
                </List>
            </>
        );
    }
}
