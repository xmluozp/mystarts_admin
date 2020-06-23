import styled from 'styled-components'

const scom = (com) => styled(com)`
    background-color: #6772e5;
    color: #fff;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    padding: 7px 14px;
    &:hover {
        background-color: #5469d4;
    }
    & .MuiInputBase-input {
        border: 5px solid #ff00ff;
    }
`

export default scom