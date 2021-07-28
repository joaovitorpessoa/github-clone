import React from "react";

import { Container } from "./styles";

interface IProps {
  username: string;
  reponame: string;
  description?: string;
  language?: string;
  stars: number;
  forks: number;
}

const RepoCard: React.FC<IProps> = ({
  username,
  reponame,
  description,
  stars,
  forks,
}) => {
  return (
    <Container>
      <h1>RepoCard</h1>
    </Container>
  );
};

export default RepoCard;
