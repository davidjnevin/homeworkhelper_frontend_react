import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 70vw;
    max-width: 400px;
    display: block;
    margin-bottom: 0.5rem;
    margin-top: -1rem;
  }
  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    line-height: 1.5;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: var(--grey-500);
  }
	 .small {
    margin-top: 1.5rem;
		font-size: 0.8rem;
	}
  a {
    color: var(--primary-500);
    text-transform: capitalize;
  }
`;

export default Wrapper;

