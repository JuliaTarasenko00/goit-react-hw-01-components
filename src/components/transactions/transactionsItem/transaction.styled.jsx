import styled from '@emotion/styled'

export const Transactions = styled.tbody`
text-align: center;
height: 30px;
:nth-of-type(2n){
    background-color: #88888870;
}
:hover:nth-of-type(2n + 1){
    background-color: #fad2fc
}
:hover:nth-of-type(2n){
    background-color: #004aff3b;
}
`