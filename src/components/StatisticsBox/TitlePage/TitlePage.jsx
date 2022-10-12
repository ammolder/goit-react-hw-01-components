import PropTypes from 'prop-types';

import { Title } from './TitlePage.style';

export const TitlePage = ({ title }) => {
  return title && <Title className="title">{title}</Title>;
};
TitlePage.propTypes = {
  title: PropTypes.string.isRequired,
};
