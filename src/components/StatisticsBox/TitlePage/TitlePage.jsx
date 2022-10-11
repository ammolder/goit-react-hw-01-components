import { Title } from './TitlePage.style';

export const TitlePage = ({ title }) => {
  return title && <Title className="title">{title}</Title>;
};
