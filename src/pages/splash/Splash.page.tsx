import React from "react";

import {
  PageContainer,
  ContentRow,
  InformationContainer,
  NewsContainer,
  SecondaryInfoContainer,
  TertiaryInfoContainer,
  ColumnContainer,
  Text,
} from "./styled-components";

const SplashPage: React.FC = () => {
  return (
    <PageContainer>
      <ContentRow>
        <InformationContainer>
          <h2>Welcome</h2>
          <Text>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Posuere
            tincidunt torquent fermentum turpis fermentum massa duis scelerisque
            nec eget nullam integer nec. Placerat netus mollis mollis donec
            senectus libero torquent ex. Enim viverra eleifend ultricies tempor
            massa vestibulum eros class platea suscipit ad habitant. Id sapien
            posuere faucibus tellus a maximus mollis tincidunt neque convallis
            dictum. Platea euismod rhoncus mollis eu penatibus at habitant
            ultrices vel finibus. Aconvallis elit tellus suspendisse arcu hac
            euismod blandit. Mi dictum urna ac ridiculus auctor dictum potenti
            litora justo sit placerat felis sodales.
          </Text>
          <br />
          <Text>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Posuere
            tincidunt torquent fermentum turpis fermentum massa duis scelerisque
            nec eget nullam integer nec. Placerat netus mollis mollis donec
            senectus libero torquent ex. Enim viverra eleifend ultricies tempor
            massa vestibulum eros class platea suscipit ad habitant. Id sapien
            posuere faucibus tellus a maximus mollis tincidunt neque convallis
            dictum. Platea euismod rhoncus mollis eu penatibus at habitant
            ultrices vel finibus. Aconvallis elit tellus suspendisse arcu hac
            euismod blandit. Mi dictum urna ac ridiculus auctor dictum potenti
            litora justo sit placerat felis sodales.
          </Text>
        </InformationContainer>
        <SecondaryInfoContainer>
          <h3>Contact details</h3>
          <Text>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Posuere
            tincidunt torquent fermentum turpis fermentum massa duis scelerisque
            nec eget nullam integer nec. Placerat netus mollis mollis donec
            senectus libero torquent ex. Enim viverra eleifend ultricies tempor
            massa vestibulum eros class platea suscipit ad habitant. Id sapien
            posuere faucibus tellus a maximus mollis tincidunt neque convallis
            dictum. Platea euismod rhoncus mollis eu penatibus at habitant
            ultrices vel finibus. Aconvallis elit tellus suspendisse arcu hac
            euismod blandit. Mi dictum urna ac ridiculus auctor dictum potenti
            litora justo sit placerat felis sodales.
          </Text>
        </SecondaryInfoContainer>
      </ContentRow>
      <ContentRow>
        <NewsContainer>
          <h2>News container</h2>
        </NewsContainer>
        <ColumnContainer>
          <div>
            <TertiaryInfoContainer>
              <h3>Links to social media</h3>
            </TertiaryInfoContainer>
          </div>
          <div>
            <TertiaryInfoContainer>
              <h3>calender?</h3>
            </TertiaryInfoContainer>
          </div>
        </ColumnContainer>
      </ContentRow>
    </PageContainer>
  );
};

export default SplashPage;
