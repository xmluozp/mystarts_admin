import styled from 'styled-components'
import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme();

const scom = (com) => styled(com)`
    padding: ${theme.spacing(3)}px
`

export default scom