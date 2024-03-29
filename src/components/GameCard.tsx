import CriticScore from './CriticScore'
import { HStack } from '@chakra-ui/react'

import { Game } from '../hooks/useGames'
import { Card } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { CardBody } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import getCroppedImageUrl from '../services/image-url'
import Emoji from './Emoji'

interface Props {
    game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
        <Image src={getCroppedImageUrl(game.background_image)}/>
        <CardBody>
            <HStack marginBottom={3} justifyContent='space-between'>
              <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}></PlatformIconList>
              <CriticScore score={game.metacritic} />
            </HStack>
            <Heading fontSize='2xl'>{game.name} <Emoji rating={game.rating_top} /> </Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard
