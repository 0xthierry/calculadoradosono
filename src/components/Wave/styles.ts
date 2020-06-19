import styled, { keyframes } from 'styled-components';

const drift = keyframes`
	from {
		transform: rotate(0deg)
	}
	from {
		transform: rotate(180deg)
	}
`;

export const Container = styled.div`
  width: 100%;
  height: 700px;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
`;

export const WaveOne = styled.div`
  opacity: 0.7;
  position: absolute;
  background: ${({ theme }) => theme.colors.primary.light};
  width: 4500px;
  height: 4500px;
  margin-left: -1350px;
  margin-top: -3950px;
  transform-origin: 50% 50%;
  border-radius: 43%;
  animation: ${drift} 3000ms infinite linear;
  z-index: -5;
`;

export const WaveTwo = styled(WaveOne)`
  animation: drift 7000ms infinite linear;
  opacity: 0.1;
`;

export const WaveThree = styled(WaveOne)`
  animation: ${drift} 5000ms infinite linear;
`;

export const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
`;
