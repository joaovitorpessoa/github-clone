import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Breadcrumb,
  Stats,
  LinkButton,
  RepoIcon,
  StarIcon,
  ForkIcon,
  GithubIcon,
} from "./styles";

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />

        <Link className={"username"} to={"/joaovitorpessoa"}>
          joaovitorpessoa
        </Link>

        <span>/</span>

        <Link className={"reponame"} to={"/joaovitorpessoa/ble"}>
          ble
        </Link>
      </Breadcrumb>

      <p>
        Aplicativo mockup construído com React Native para lidar com Bluetooth
        Low Energy.
      </p>

      <Stats>
        <li>
          <StarIcon />
          <b>0</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={"https://github.com/joaovitorpessoa/ble"}>
        <GithubIcon />
        <span>View on Github</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
