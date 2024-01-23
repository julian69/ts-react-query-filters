import { Oval } from 'react-loader-spinner';

const Loader = () => (
  <Oval
    visible={true}
    height="50"
    width="50"
    color="#000"
    secondaryColor="#828282"
    ariaLabel="oval-loading"
    wrapperStyle={{}}
    wrapperClass=""
  />);

export default Loader;
