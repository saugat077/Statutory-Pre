export type SectionId =
  | 'overview'
  | 'smp'
  | 'spp'
  | 'sap'
  | 'shpp'
  | 'spbp'
  | 'sncp'
  | 'ssp'
  | 'compare'
  | 'glossary';

export interface NavItem {
  id: SectionId;
  code: string;
  label: string;
  color: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'overview', code: 'OVR',  label: 'Home / Overview',           color: '#505a5f' },
  { id: 'smp',      code: 'SMP',  label: 'Statutory Maternity Pay',   color: '#d53880' },
  { id: 'spp',      code: 'SPP',  label: 'Statutory Paternity Pay',   color: '#1d70b8' },
  { id: 'sap',      code: 'SAP',  label: 'Statutory Adoption Pay',    color: '#f47738' },
  { id: 'shpp',     code: 'ShPP', label: 'Shared Parental Pay',       color: '#4c2c92' },
  { id: 'spbp',     code: 'SPBP', label: 'Parental Bereavement Pay',  color: '#28a197' },
  { id: 'sncp',     code: 'SNCP', label: 'Neonatal Care Pay',         color: '#d4351c' },
  { id: 'ssp',      code: 'SSP',  label: 'Statutory Sick Pay',        color: '#00703c' },
  { id: 'compare',  code: 'CMP',  label: 'Comparison Table',          color: '#003078' },
  { id: 'glossary', code: 'GLS',  label: 'Glossary',                  color: '#0b0c0c' },
];

export interface PageProps {
  onNavigate?: (id: SectionId) => void;
}
