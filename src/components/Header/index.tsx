import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, GithubLogo, SearchForm } from "./styles";
import { ThemeName } from "../../styles";

interface IProps {
  themeName: ThemeName;
  setThemeName: (newName: ThemeName) => void;
}

const Header: React.FC<IProps> = ({ themeName, setThemeName }) => {
  const [search, setSearch] = useState<string>();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    return navigate(`/${search?.toLowerCase().trim()}`);
  };

  const toggleTheme = () =>
    setThemeName(themeName === "light" ? "dark" : "light");

  return (
    <Container>
      <GithubLogo onClick={toggleTheme} />
      <SearchForm onSubmit={handleSubmit}>
        <input
          placeholder="Enter username or repo..."
          value={search}
          onChange={(event) => setSearch(event.currentTarget.value)}
        />
      </SearchForm>
    </Container>
  );
};

export default Header;
