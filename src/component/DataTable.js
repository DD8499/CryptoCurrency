import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function DataTable({coin}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {/* <StyledTableCell>Key</StyledTableCell> */}
            <StyledTableCell align="center">Image</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Symbol</StyledTableCell>
            <StyledTableCell align="center">MarketCap</StyledTableCell>
            <StyledTableCell align="center">Price</StyledTableCell>
            <StyledTableCell align="center">PriceRange</StyledTableCell>
            <StyledTableCell align="center">Volume</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {coin?.map((coin) => (
            <StyledTableRow key={coin?.id}>
              {/* <StyledTableCell component="th" scope="row">
                {22}
              </StyledTableCell> */}
               <img src={coin?.image} alt="crypto"  style={{height : '20px',width : '20px',margin : '20px'}}/>
              <StyledTableCell align="center">{coin?.name}</StyledTableCell>
              <StyledTableCell align="center">{coin?.symbol}</StyledTableCell>
              <StyledTableCell align="center">{coin?.market_cap}</StyledTableCell>
              <StyledTableCell align="center">{coin?.current_price}</StyledTableCell>
              <StyledTableCell align="center">{coin?.price_change_percentage_24h}</StyledTableCell>
              <StyledTableCell align="center">{coin?.total_volume}</StyledTableCell>
            </StyledTableRow>
           ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
