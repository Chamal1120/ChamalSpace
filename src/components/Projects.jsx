import { useState, useEffect } from "react";
import axios from "axios";
import "./Projects.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    purple: {
      main: "#5a133e",
      light: "#751b51",
      dark: "#751b51",
      contrastText: "#fffff",
    },
  },
});

const Projects = () => {
  const [userRepositories, setUserRepositories] = useState([]);

  useEffect(() => {
    const fetchUserRepositories = async () => {
      try {
        const response = await axios.get("https://api.github.com/user/repos", {
          headers: {
            Authorization: "Bearer " +import.meta.env.VITE_GITHUB_API_KEY,
          },
        });
        const repositoriesWithoutForks = response.data.filter(
          (repo) => !repo.fork
        );

        const sortedRepositories = repositoriesWithoutForks.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );

        setUserRepositories(sortedRepositories);
      } catch (error) {
        console.error("Error fetching GitHub repositories:", error);
      }
    };

    fetchUserRepositories();
  }, []);

  const fetchRepoDetails = async (repo) => {
    try {
      const response = await axios.get(
        `https://api.github.com/repos/${repo.owner.login}/${repo.name}`,
        {
          headers: {
            Authorization: "Bearer " +import.meta.env.VITE_GITHUB_API_KEY,
          },
        }
      );

      // Extract date part only
      const dateUpdated = response.data.updated_at.split("T")[0];

      // Update the state with additional information
      setUserRepositories((prevRepositories) =>
        prevRepositories.map((prevRepo) =>
          prevRepo.id === repo.id
            ? {
                ...prevRepo,
                topics: response.data.topics,
                dateUpdated: dateUpdated,
                website: response.data.homepage,
              }
            : prevRepo
        )
      );
    } catch (error) {
      console.error("Error fetching repository details:", error);
    }
  };

  useEffect(() => {
    // Fetch additional details for each repository
    userRepositories.forEach((repo) => fetchRepoDetails(repo));
  }, [userRepositories]);

  return (
    <div className="ProjBgContainer">
      <div className="mainContainer">
        <h2 className="projectsTitle">Projects</h2>
        <div className="projectsContainer">
          {userRepositories.map((repo) => (
            <div key={repo.id} className="projectCard">
              <h3 className="repoName">{repo.name}</h3>
              <p className="repoDiscript">{repo.description}</p>
              <p className="repoTopics">
                Technologies: {repo.topics ? repo.topics.join(", ") : "N/A"}
              </p>
              <p className="repoDateUpdated">
                Last Updated: {repo.dateUpdated}
              </p>
              <p className="repoURL">
                Live Link:{" "}
                {repo.website ? (
                  <a className="repoURL2" href={repo.website}>
                    {repo.website}
                  </a>
                ) : (
                  "N/A"
                )}
              </p>
              <ThemeProvider theme={theme}>
                <Button
                  variant="contained"
                  color="purple"
                  sx={{
                    width: { xs: "8rem", md: "10rem" },
                    height: { xs: "2.5rem", md: "3rem" },
                    padding: "1rem",
                    margin: "2rem 0 1rem 0",
                    fontSize: { xs: "0.7rem", md: "0.8rem" },
                    textAlign: "center",
                  }}
                  disableElevation
                  href={repo.html_url}
                  target="_blank"
                >
                  View on GitHub
                </Button>
              </ThemeProvider>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
