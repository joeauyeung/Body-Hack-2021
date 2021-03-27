import React from 'react';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function Stories() {
    const [ story, setStories ] = useState([]);
    const fetchStories = async() => {
        const response= db.collection("recordings");
        const data = await response.get();
        data.docs.forEach(item => {
            setStories([ ...stories, item.data() ])
        })
    }
    useEffect(() => {
        fetchStories();
    }, []);
}

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell> Testing</TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </TableContainer>
    )

export default Stories;
