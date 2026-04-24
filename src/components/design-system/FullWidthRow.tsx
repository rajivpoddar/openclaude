import * as React from 'react';
import { Box } from '../../ink.js';

type Props = {
  children: React.ReactNode;
  opaque?: boolean;
};

export default function FullWidthRow({
  children,
  opaque = false
}: Props): React.ReactNode {
  return <Box flexDirection="row" width="100%" opaque={opaque}>
      {children}
      <Box flexGrow={1} />
    </Box>;
}
