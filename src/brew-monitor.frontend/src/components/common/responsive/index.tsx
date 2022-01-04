import React, { FC } from 'react';
import MediaQuery from 'react-responsive';

export const Desktop: FC = ({ children }) => <MediaQuery minWidth={1224}>{children}</MediaQuery>;

export const Mobile: FC = ({ children }) => <MediaQuery maxWidth={1224}>{children}</MediaQuery>;
