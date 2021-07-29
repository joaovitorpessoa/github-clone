import React from "react";

import { ProfileData, RepoCard, RandomCalendar } from "../../components";

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading,
  Tab,
  RepoIcon,
} from "./styles";

const Profile: React.FC = () => {
  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">6</span>
    </div>
  );

  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />
          <TabContent />
        </div>

        <span className="line" />
      </Tab>

      <Main>
        <LeftSide>
          <ProfileData
            username={"joaovitorpessoa"}
            name={"João Vitor Pessoa"}
            avatarUrl={"https://avatars.githubusercontent.com/u/59486112?v=4"}
            followers={3}
            following={4}
            company={"P&D no IST Mecatrônica"}
            location={"Caxias do Sul - RS"}
            email={"joaovitorpessoa81@gmail.com"}
            blog={undefined}
          />
        </LeftSide>

        <RightSide>
          <Tab className="mobile">
            <TabContent />

            <span className="line" />
          </Tab>

          <Repos>
            <h2>Random repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map((n, index) => (
                <RepoCard
                  key={index}
                  username={"joaovitorpessoa"}
                  reponame={"ble"}
                  description={
                    "Aplicativo mockup construído com React Native para lidar com Bluetooth Low Energy."
                  }
                  language={n % 3 === 0 ? "JavaScript" : "TypeScript"}
                  stars={0}
                  forks={0}
                />
              ))}
            </div>
          </Repos>

          <CalendarHeading>
            Random calendar (do not represent actual data)
          </CalendarHeading>
          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
