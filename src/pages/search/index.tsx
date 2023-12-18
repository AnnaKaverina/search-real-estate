import React, { useEffect, useState, useMemo } from 'react';
import { Typography, Container, Radio, RadioGroup, FormControlLabel, CircularProgress, Pagination, Stack } from '@mui/material';
import { UsePaginationProps } from '@mui/material/usePagination/usePagination';
import ProgressInput from '../../components/progress-input';
import { useDelay } from '../../hooks/useDelay';
import SearchResults from '../../components/search-results';
import { useLazyGetRealEstateObjectsQuery } from '../../services/realEstateObject';

const SearchPage = () => {
  const limit = 5
  const [fetch, { data: results, isLoading }] = useLazyGetRealEstateObjectsQuery()

  const [page, setPage] = useState(0)
  const [withHouse, setWithHouse] = useState(false)
  const [costThumbs, setCostThumbs] = useState([0, 10])
  const [landplotSquareThumbs, setLandplotSquareThumbs] = useState([0, 50])
  const [houseSquareThumbs, setHouseSquareThumbs] = useState([0, 200])
  const delayedPage = useDelay(page)
  const delayedWithHouse = useDelay(withHouse)
  const delayedCostThumbs = useDelay(costThumbs)
  const delayedLandplotSquareThumbs = useDelay(landplotSquareThumbs)
  const delayedHouseSquareThumbs = useDelay(houseSquareThumbs)

  useEffect(() => {
    if(delayedCostThumbs && delayedLandplotSquareThumbs) {
      fetch({
        start: (delayedPage || 0) * limit,
        limit,
        withHouse: delayedWithHouse,
        costs: delayedCostThumbs,
        landplotSquare: delayedLandplotSquareThumbs,
        houseSquare: delayedHouseSquareThumbs
      })
    }
  }, [delayedCostThumbs, delayedLandplotSquareThumbs, delayedWithHouse, delayedHouseSquareThumbs, delayedPage])

  const resultsToRender = useMemo(() => {
    return results?.list ? <SearchResults list={results.list} /> : null
  }, [results])

  const onChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWithHouse(event.target.value === 'true')
  }

  const onChangePagination: UsePaginationProps['onChange'] = (_, page) => {
    setPage(page - 1)
  }

  return (
    <Container
      maxWidth="sm"
    >
      <Typography
        variant='h2'
        marginBottom='30px'
        marginTop='30px'
      >
        Поиск
      </Typography>
      <RadioGroup
        defaultValue="false"
        onChange={onChangeRadio}
      >
        <FormControlLabel value="false" control={<Radio />} label="Участок" />
        <FormControlLabel value="true" control={<Radio />} label="Дом" />
      </RadioGroup>
      <ProgressInput
        min={0}
        max={20}
        minimalDistance={0.5}
        title='Стоимость'
        unitTitle='млн. руб'
        thumbs={costThumbs}
        setThumbs={setCostThumbs}
      />
      <ProgressInput
        min={0}
        max={100}
        minimalDistance={1}
        title='Площадь участка'
        unitTitle='соток'
        thumbs={landplotSquareThumbs}
        setThumbs={setLandplotSquareThumbs}
      />
      {withHouse && <ProgressInput
        min={0}
        max={400}
        minimalDistance={10}
        title='Площадь дома'
        unitTitle='кв.м.'
        thumbs={houseSquareThumbs}
        setThumbs={setHouseSquareThumbs}
      />}
      {isLoading ? <CircularProgress /> : resultsToRender}
      <Stack margin="20px 0">
        <Pagination
          onChange={onChangePagination}
          count={Math.ceil((results?.totalSize || 0) / limit)}
          color="primary"
        />
      </Stack>
    </Container>
  );
};

export default SearchPage;
