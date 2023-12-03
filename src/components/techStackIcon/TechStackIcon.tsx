import styled from 'styled-components';
import { techStackIconMapping } from './techStackIconMapping';

type TechStackProps = {
  techs: string[];
};

const TechStackIcons = ({ techs }: TechStackProps) => {
  return (
    <div>
      {techs.map(tech => {
        const iconUrl = techStackIconMapping[tech.toLowerCase()];
        return iconUrl ? <TechIcon key={tech} src={iconUrl} alt={tech} /> : null;
      })}
    </div>
  );
};

export default TechStackIcons;

const TechIcon = styled.img`
  width: 40px;
  height: 40px;
  margin: 5px;
`;
