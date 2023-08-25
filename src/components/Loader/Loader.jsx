import { Ring } from './Loader.styled';
import { Hearts } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Ring>
      <Hearts
        height="80"
        width="80"
        color="var(--color-pink)"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass="loader"
        visible={true}
      />
    </Ring>
  );
};
