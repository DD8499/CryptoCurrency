import { Grid } from '@material-ui/core'
import React from 'react'
import { useCoin } from '../hooks/useCoin'
import DataTable from './DataTable'

export const Coin = () => {
    const {coins}=useCoin()
  return (
    <Grid>
<DataTable coin={coins}/>
    </Grid>
  )
}
