import useGenres, { Genre } from "../hooks/useGenres";
import { List, ListItem, HStack, Image, Heading, Spinner, Button } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onselectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}


const GenreList = ({ selectedGenre, onselectGenre }: Props) => {
    const { data, isLoading, error } = useGenres();

    // if(error) return null;
    if(isLoading) return <Spinner/>

  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={5}>Genres</Heading>
      <List>
        {data.map(genre => 
            <ListItem key={genre.id} paddingY="5px">
                  <HStack>
                    <Image 
                        objectFit="cover"
                        boxSize="32px" 
                        borderRadius={8} 
                        src={getCroppedImageUrl(genre.image_background)} 
                    />
                    <Button 
                        whiteSpace='normal'
                        textAlign='left'
                        fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
                        onClick={() => onselectGenre(genre)}
                        fontSize="lg"
                        variant="link"
                    >{genre.name}
                    </Button>
                  </HStack>
                </ListItem> 
            )}
      </List>
    </>
  )
}

export default GenreList
