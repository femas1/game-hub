import { Card, SkeletonText } from '@chakra-ui/react'
import { CardBody } from '@chakra-ui/react'
import { Skeleton } from '@chakra-ui/react'


const GameCardSkeleton = () => {
  return (
    <Card>
        <Skeleton/>
        <CardBody>
            <SkeletonText />
        </CardBody>
    </Card>
  )
}

export default GameCardSkeleton;
