import { HTMLAttributes, memo } from 'react';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: never;
  direction?: 'horizontal' | 'vertical';
  size: number;
}

const Spacing = memo(function Spacing({ direction = 'vertical', size, ...props }: Props) {
  return <StyledSpacing direction={direction} size={size} {...props} />;
});

export default Spacing;

const StyledSpacing = styled.div<Props>`
  flex: none;
  width: ${({ direction, size }) => (direction === 'horizontal' ? `${size}px` : 'auto')};
  height: ${({ direction, size }) => (direction === 'vertical' ? `${size}px` : 'auto')};
`;
