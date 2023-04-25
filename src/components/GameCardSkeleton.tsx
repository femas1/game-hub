import { Card, SkeletonText } from '@chakra-ui/react'
import { CardBody } from '@chakra-ui/react'
import { Skeleton } from '@chakra-ui/react'


const GameCardSkeleton = () => {
  return (
    <Card>
        <Skeleton width='300px' height='200px' borderRadius={10} overflow='hidden'/>
        <CardBody>
            <SkeletonText />
        </CardBody>
    </Card>
  )
}

export default GameCardSkeleton
