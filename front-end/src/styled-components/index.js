import styled, {keyframes} from "styled-components";

export const reveal = keyframes`
  from {width: 0}
  to {width: 200px}
`

export const HeaderContainer = styled.div`
    height: 10vh;
    background: #232429;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2%;
`;

export const Navigation = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    width: 30%;

`;

export const NavLinks = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.8rem;
  &:hover {
    color: #F7CE74;
    cursor: pointer;
  }
`;

export const Logo = styled.img`
  width: 75px;
`;

export const HeroTitle = styled.h1`
  font-family: "Nunito Sans", sans-serif;
  font-size: 3.2rem;
  font-weight: extra-bold;
`;

export const MainPageContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: rgb(230,137,89);
  background: linear-gradient(0deg, rgba(230,137,89,1) 0%, rgba(236,165,100,1) 50%, rgba(247,206,116,1) 100%);
`;

export const FormContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  padding-top: 5%;
  color: #fff;
`;

export const FormLogo = styled.img`
  width: 200px;
  text-align: center;
  margin: 0 auto;
  // background: #232429;
  // border-radius: 20px;
  margin-bottom: 15px;
`

export const FormHeading = styled.h2`
  font-size: 2.6rem;
  color: #ECA564;
  font-weight: bolder;
`

export const FormButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #232429;
  color: #fff;
  padding: 10px 0;
  border-radius: 10px;
  font-size: 1.8rem;
  font-weight: bolder;

  &:hover {
    background: #F7CE74;
    cursor: pointer;
  }
`

export const FormFooter = styled.p`
  font-size: 1.6rem;
  color: #ECA564;
  padding-top: 15px;
  text-align: center;
`

export const MenuButton = styled.div`
  margin: 0 auto;
  padding: 0.5rem 1rem;
  color: #fff;
  background: #232429;
  width: 20rem;
  border-radius: 5px;
  text-align: center;

  &:hover {
    cursor: pointer;
    background: #F7CE74;
    color: #000;
  }
`;

export const FormLabel = styled.label`
 
  font-size:25px;
  margin: 10px;
  font-family: Nunito Sans
  font-weight: Extra Bold
  color: #232429;
`;
export const FormSpacing = styled.form`
  display: flex;

  flex-direction: column;
`;

export const TruckFormContainer = styled.div`
  width: 60%;
  margin: 10px auto;
`;
export const InputStyle = styled.input`
  color: #6fb03e;
  max-width: 450px;
  background: #f8f6ee;
  padding: 10px;
  margin: 10px auto;
  box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.35);
  border-radius: 10px;
  border: 6px solid #232429;
`;
export const TextArea = styled.textarea`

  color: #6fb03e
  max-width: 450px;
	background: #F8F6EE;
	padding: 10px;
	margin: 5px ;
	box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.35);
	border-radius: 10px;
	border: 6px solid #232429;
`;

export const TruckButton = styled.button`
  background: linear-gradient(to bottom, #f0c911 5%, #f2ab1e 100%);
  background-color: #f0c911;
  border-radius: 6px;
  border: 1px solid #232429;
  display: flex;
  justify-content: center;
  cursor: pointer;
  color: #c92200;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 10px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ded17c;
`;

export const CardImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

export const MenuText = styled.p`
  text-align: center;
`;
export const MenuH2 = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

export const Body = styled.div`
min-height: 100vh;
background: #ECA564;
padding: 10px;
display:flex;
justify-content:center;
flex-direction:column;
`;

export const DinerBody = styled.div`
width: 100vw;
min-height: 100vh;
max-height: 100vh;
background: #ECA564;
padding: 10px;
overflow-x: scroll;
overflox-y: hidden;
padding-top: 20px;
border: none;
`;

export const OperatorBody = styled.div`
min-height: 100vh;
max-height: 100vh;
background-image: url('https://github.com/agyin3/images/blob/master/food-truck-trackr/food-bg.jpg?raw=true');
background-color: #f8f6ee;
background-blend-mode: multiply;
background-size: contain;
background-repeat: repeat;
background-position: center;
clip-path: polygon(0 3%, 100% 0%, 100% 100%, 0% 100%);
padding: 10px;
width: 100vw;
overflow: scroll;
padding-top: 20px;
`;

export const MyH2 = styled.h2`
color: #fff; 
font-family: Nunito Sans
font-weight: Extra Bold  
 

font-size: 3.6rem; 

 
line-height: 4.4rem;  
text-align: center;
margin: 0 0 12px;
`;
export const MyH3 = styled.h3`
color: #232429; 
font-family: Nunito Sans
font-weight: Extra Bold
font-size: 3.6rem; 
line-height: 4.4rem; 
text-align: left;
margin 0 0 12px;
`;

export const OperatorText = styled.p`
color: #000; 
font-family: 'Droid serif', serif; 
font-size: 2.4rem; 
font-weight: 400; 
font-style: italic; 
line-height: 4.4rem; 
text-align: center;
margin 0 0 12px;
`;

export const TruckCardImg = styled.img`
  width: 200px;
  height: 200px;
  padding: 5px;
`;

export const CardInfo = styled.div`
    tex-align: left;
    font-family: Nunito Sans
    font-weight: Extra Bold
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 90%;
    margin: 0 auto;
    color: #232429;
    min-height: 200px;
`;

export const Card = styled.div`
  width: 50vw;
  padding: 10px;
  box-shadow: 1px 1px 5px black;
  border-radius: 10px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  border: solid 2px #232429;
`;

export const CardButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  &:hover {
    cursor: pointer;
    color: #E68959;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${props => props.width || '80%'};
  padding 0 1%;
  margin: 0 auto;
`;

export const ComponentContainer = styled.div`
  display: flex;
`

export const SidePanel = styled.div`
  width: 25vw;
  background: #232429;
  color: #fff; 
  max-height: 100vh;
`

export const PanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-top: 15px;
  height: 60%;
`

export const AddButton = styled.div`
  background: #232429;
  width: 100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center; 
  padding: 10px 0;
  border-radius: 10px;
  font-size: 1.4rem;
  color: #fff;

  &:hover{
    cursor: pointer;
    background: #F7CE74;
    color: #000;
  }
`

export const MenuCard = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 25px 0;
`

export const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
`

export const DinerCardWrapper = styled.div`
  width: 22%;
  border-radius: 5px;
  box-shadow: 0px 5px 5px #232429;
  align-self: stretch;
  margin-bottom: 25px;
  min-height: 350px;
`

export const DinerCardGroup = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const DinerCardImg = styled.div`
  background: url(${props => props.src}) rgba(0, 0, 0, 0.3);
  background-blend-mode: multiply;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 200px;
  display: flex;
  align-items: flex-end;
  color: #fff;
  padding-left: 10px;
  padding-bottom: 20px;
  font-size: 1.8rem;
  font-weight: 600;
`

export const Button = styled.button`
  display: flex; 
  align-items: center;
  justify-content: center;
  font-size: ${props => props.fontSize || '1.4rem'};
  padding: ${props => props.padding || '5px 10px'};
  color: ${props => props.color || '#fff'};
  border-radius: ${props => props.borderRadius || '5px'};
  background: ${props => props.background || '#E68959'}

  &:hover {
    color: ${props => props.hoverColor || '#000'};
    background: ${props => props.hoverBackground || '#F7CE74'};
    cursor: pointer;
  }
`

export const Segment = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent || 'space-between'};
  align-items: center;
  width: ${props => props.width || '90%'};
  margin: 0 auto;
  padding: 2.5rem 0;
`

export const SearchInput = styled.input`
  width: 50px;
  height: 30px;
  border-radius: 0 25px 25px 0;
  border: 3px solid #000;
  padding-left: 10px;
  transition: width 0.5s ease-in-out

  &:focus {
    width: 200px;
    outline: none;
  }
`


