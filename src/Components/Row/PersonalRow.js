import { IconButton, TableCell, TableRow, Collapse } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { KeyboardArrowDownRounded, KeyboardArrowUpRounded } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";

const PersonalRow = ({monster}) => {
    const [open, setOpen] = useState(false);
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
          <TableCell component="th" scope="row" align="left" sx={{fontSize: '16px'}}>
          <Link to={`/public/${monster.id}`} className="links">
                {monster.monster_name}
            </Link>
          </TableCell>
          <TableCell align="left">{monster.monster_type}</TableCell>
          <TableCell align="left">{monster.monster_size}</TableCell>
          <TableCell align="left">{monster.monster_cr}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h5" gutterBottom component="div" sx={{color: 'primary.light'}}>
                  Description
                </Typography>
                <Typography>
                    {monster.description}
                </Typography>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    );
  }

  export default PersonalRow;