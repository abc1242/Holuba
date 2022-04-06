import React, { useState, useEffect } from "react";
import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

import axios from "axios";

import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

<<<<<<< HEAD
// axios
//   .get("http://3.35.173.223:5050/donation/rank", {
//     headers: {
//       accesstoken: `${localStorage.getItem("accessToken")}`,
//     },
//   })
//   .then((res) => {
//     console.log(res);
//   });

function createData(rank, nickname, amount) {
  return { rank, nickname, amount };
}
=======
const RankingContainer = () => {
  const [rankings, setRankings] = useState([]);
>>>>>>> feature/ranking_event_273

  useEffect(() => {
    axios
      .get("http://3.35.173.223:5050/donation/rank", {
        headers: {
          accessToken: `${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        setRankings(res.data.rankList);
        // console.log(res.data);
      });
  }, []);

  return (
    <div>
      <TableContainer
        component={Paper}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Table
          sx={{
            marginTop: 8,
            width: "800px",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 8,
          }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>랭킹</StyledTableCell>
              <StyledTableCell align="right">닉네임</StyledTableCell>
              {/* <StyledTableCell align="right">기부금액&nbsp;(₩)</StyledTableCell> */}
              <StyledTableCell align="right">기부금액(ETH))</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rankings.map((rank, idx) => (
              <StyledTableRow key={idx}>
                <StyledTableCell component="th" scope="row">
                  {idx + 1}
                </StyledTableCell>
                <StyledTableCell align="right">{rank.nickname}</StyledTableCell>
                <StyledTableCell align="right">{rank.amount}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default RankingContainer;
