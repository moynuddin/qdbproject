import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  font-size: 25px;
  text-align: center;
  color: #000;
  margin-top: 20px;
`;

const BtnWrapper = styled.div`
  text-align: center;
`;

const Button = styled.button`
  background-color: #000;
  padding: 10px 25px;
  color: #fff;
  margin-top: 20px;
`;

const Links = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

const Dashboard = () => {
  return (
    <>
      <Container>
        <Title>Welcome to my Blog Post</Title>
        <BtnWrapper>
          <Button>
            <Links to="/">Go to Blogs</Links>
          </Button>
        </BtnWrapper>
      </Container>
    </>
  );
};

export default Dashboard;
