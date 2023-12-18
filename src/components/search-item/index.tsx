import { Typography, Button } from '@mui/material'
import { RealEstateObject } from '../../types/realEstateObjects'
import { Card, CardContent, CardActions } from '@mui/material'

const SearchItem = ({ type, cost, house, landPlot, shortDescription }: RealEstateObject) => {

    return (
        <Card>
            <CardContent>
                <Typography>{`${house ? 'Дом, ' : 'Участок, '} ${house ? `${house.square} м², ` : ''} ${landPlot.square} соток`}</Typography>
                <Typography
                    variant="body2"
                    marginTop="10px"
                >
                    {shortDescription}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Подробнее</Button>
            </CardActions>
        </Card>
    )

}

export default SearchItem