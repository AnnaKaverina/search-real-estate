import { Stack, Typography } from '@mui/material'
import { RealEstateObject } from '../../types/realEstateObjects'
import SearchItem from '../search-item'

const SearchResults = ({ list }: { list: RealEstateObject[] }) => {

    return (
        <Stack margin="60px 0 20px" spacing={2}>
            {list.length ? list.map((item) => {
                return (
                    <SearchItem key={item.id} {...item} />
                )
            }) : (
                <Typography>
                    Нет подходящих результатов, попробуйте изменить параметры поиска
                </Typography>
            )}
        </Stack>
    )

}

export default SearchResults