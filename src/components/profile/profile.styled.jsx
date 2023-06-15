import styled from '@emotion/styled'

export const ContainerProfile = styled.div`
margin: 0 auto;
width: 300px;
text-align: center;
background: #d7ebf58f;
border: 1px solid;
border-radius: 20px;
box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
0 5px 80px rgba(0, 0, 0, 0.12);
`
export const ProfileImg = styled.img`
margin-top: 20px;
border-radius: 50%;
border: 1px solid;
margin-bottom: 20px;
background-color: white;
:hover {
  transform: scale(1.2);
}
`
export const ProfileName = styled.h1`
font-weight: 700;
font-size: 24px;
line-height: 1.17;
margin-bottom: 10px
`
export const ProfileText = styled.p`
margin-bottom: 10px
`
export const ProfileList = styled.ul`
display: flex;
background: #d7ebf58f;
border: transparent;
border-radius: 0 0 20px 20px;
justify-content: center;
border-top: 1px solid;
`
export const ProfileItem = styled.li`
display: flex;
flex-direction: column;
width: 40%;
justify-content: center;
height: 60px;
:not(:last-child){
    border-right: 1px solid;
  }
`
export const ProfileSpan = styled.span`
font-weight: 700;
`