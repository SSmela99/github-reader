import { useEffect } from "react";
import { Box, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ApplicationBar from "../app-bar.component";
import ApplicationFooter from "../app-footer.component";

const withLayout = (Component: React.ComponentType) => {
  return function WrappedWithLayout(props: unknown) {
    const navigate = useNavigate();
    const token = localStorage.getItem("github_token");

    useEffect(() => {
      if (!token) navigate("/");
    }, [token, navigate]);

    return (
      <Box>
        <p>test</p>
        <ApplicationBar />
        <Box
          sx={{
            background: (theme) => theme.palette.gray.raisin,
            minHeight: "calc(100vh - 64px)",
            py: 4,
          }}
        >
          <Container maxWidth="xl">
            <Component {...props} />
          </Container>
        </Box>
        <ApplicationFooter />
      </Box>
    );
  };
};

export default withLayout;
