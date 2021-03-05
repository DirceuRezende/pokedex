import styled from 'styled-components';

const Spinner = styled.div`
  border: 8px solid rgba(0, 0, 0, .1);
  border-left-color: #22a6b3;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

export default Spinner;
