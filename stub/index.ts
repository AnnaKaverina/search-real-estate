const cors = require('cors');
const express = require('express')
const app = express()
const port = 4000
const realEstateObjects = require('./realEstateObjects')

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json())

app.post('/realEstateObjects', (req, res) => {
    const { start, limit, costs, landplotSquare, withHouse, houseSquare } = req.body
    const [minCost, maxCost] = costs
    const [minLandplotSquare, maxLandplotSquare] = landplotSquare
    const [minHouseSquare, maxHouseSquare] = houseSquare || []
    const filteredArray = realEstateObjects.filter((item) => {
      return item.cost >= minCost * 1_000_000 && item.cost <= maxCost * 1_000_000
      && item.landPlot.square >= minLandplotSquare && item.landPlot.square <= maxLandplotSquare
      && ((item.house && withHouse && item.house.square >= minHouseSquare && item.house.square <= maxHouseSquare) || !item.house && !withHouse)
  })
    res.send({list: filteredArray.slice(start, start + limit), totalSize: filteredArray.length})
  })

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
