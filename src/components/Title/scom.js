import styled from 'styled-components'
import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme();

const scom = (com) => styled(com)`
    border-bottom: 1px solid #E0E0E0;
    min-height: 58px;
    margin-bottom: ${theme.spacing(2)}px;
    padding-left: 0px;
    padding-right: 0px;
    & i {
        margin-right: ${theme.spacing(1)}px;
    }
`

export default scom