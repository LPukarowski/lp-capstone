import { IconButton, TableCell, TableRow, Collapse } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { KeyboardArrowDownRounded, KeyboardArrowUpRounded } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
const Row = ({row}) => {
    const [open, setOpen] = useState(false);
   console.log(row)
    return (
      <>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpRounded sx={{color: 'primary.light'}}/> : <KeyboardArrowDownRounded sx={{color: 'primary.light'}}/>}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row" align="center">
          <Link to={`/public/${row.id}`} className="links">
                {row.monster_name}
            </Link>
          </TableCell>
          <TableCell align="right">{row.monster_type}</TableCell>
          <TableCell align="right">{row.monster_cr}</TableCell>
          <TableCell align="right">{row.user_name}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Monster Details
                </Typography>
                <Typography>
                    {row.description}
                </Typography>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    );
  }

  export default Row;