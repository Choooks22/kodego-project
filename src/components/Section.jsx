import Divider from '@mui/material/Divider';
import PropTypes from 'prop-types';

export default function CreateSection(props) {
  return (
    <>
      <section id={props.id}>
        <props.content />
      </section>
      {!props.noDivider && <Divider />}
    </>
  );
}

CreateSection.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.elementType.isRequired,
  noDivider: PropTypes.bool,
};
