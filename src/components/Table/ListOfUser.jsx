import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

function createData(id, name, email, github) {
  return { id, name, email, github };
}

const rows = [
  createData(1, "Jessica", "Jessica@gmail.com", "Jessica23"),
  createData(2, "Daniela", "Daniela@gmail.com", "Daniela34"),
  createData(3, "Estefania", "Estefania@gmail.com", "Estefania56"),
  createData(4, "Carolina", "Carolina@gmail.com", "Carolina23"),
  createData(5, "Cristina", "Cristina@gmail.com", "Cristina12"),
];

export default function ListOfUser() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">github</TableCell>
            <TableCell align="right">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>

              <TableCell
                align="right"
                style={{ display: "flex", alignItems: "center" }}
              >
                <img
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    borderRight: "8px",
                  }}
                  src={`https://unavatar.io/github/${row.github}`}
                  alt={row.name}
                ></img>
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.github}</TableCell>
              <TableCell align="right">
                <button type="button">
                  <FontAwesomeIcon icon={faPenToSquare} />
                </button>
                <button type="button">
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
