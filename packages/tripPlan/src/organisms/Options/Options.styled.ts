import styled from 'styled-components';
import { spacing } from '../../foundation/spacing';
import { Description } from '../../atoms';

export const StyledOptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
export const StyledOptionLabel = styled(Description)`
    margin-bottom: ${spacing.xxxs};
`
