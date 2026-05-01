import React from 'react';
import { SectionId, PageProps } from '../types';
import { Overview }    from './Overview';
import { SMP }        from './SMP';
import { SPP }        from './SPP';
import { SAP }        from './SAP';
import { ShPP }       from './ShPP';
import { SPBP }       from './SPBP';
import { SNCP }       from './SNCP';
import { SSP }        from './SSP';
import { Comparison } from './Comparison';
import { Glossary }   from './Glossary';

export const pages: Record<SectionId, React.ComponentType<PageProps>> = {
  overview:  Overview,
  smp:       SMP,
  spp:       SPP,
  sap:       SAP,
  shpp:      ShPP,
  spbp:      SPBP,
  sncp:      SNCP,
  ssp:       SSP,
  compare:   Comparison,
  glossary:  Glossary,
};
