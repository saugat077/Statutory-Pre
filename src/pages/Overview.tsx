import { PageProps, SectionId } from '../types';
import { Notice, RateCard, RateGrid, DataTable, Tag, NextPageLink } from '../shared';

export function Overview({ onNavigate }: PageProps) {
  const go = (id: SectionId) => onNavigate?.(id);

  return (
    <>
      <div className="page-title">UK Statutory Leave &amp; Pay</div>
      <div className="page-subtitle">
        Tax Year 2026/27 · 6 April 2026 to 5 April 2027
      </div>

      <h2>What is Statutory Leave &amp; Pay?</h2>
      <p>
        Statutory leave and pay is the minimum entitlement guaranteed by UK law to employees when
        they cannot work due to a major life event.</p>
        <p>
        <strong>"Statutory"</strong> means it is set by Parliament, not
        by the employer, so every eligible employee in the country has the same basic rights
        regardless of which company they work for.</p>
      
      <p>
        Employers pay statutory pay through payroll, just like normal wages. For most types
        (all except SSP), they then reclaim the majority of that cost back from HMRC. Employers
        are free to offer more generous <em>enhanced</em> pay on top of the statutory minimum,
        but they can never go below it.
      </p>

      <h2>Why Does It Exist?</h2>
      <p>
        Statutory pay exists to protect workers from losing their income entirely at vulnerable
        times in their lives.</p>
        <p>The system balances the cost of this protection
        between the employer (who pays first) and the state (HMRC, who then reimburses most of it).
      </p>

      <h2>Key 2026/27 Rates at a Glance</h2>
      <RateGrid>
        <RateCard
          label="Lower Earnings Limit (LEL)"
          value={<>£125<span className="rate-card__unit">/wk</span></>}
          sub="Minimum AWE to qualify for any statutory payment"
        />
        <RateCard
          label="Standard Weekly Rate"
          value={<>£194.32<span className="rate-card__unit">/wk</span></>}
          sub="SMP, SPP, SAP, ShPP, SPBP, SNCP — all at this rate"
          accent="#d53880"
        />
        <RateCard
          label="Statutory Sick Pay (SSP)"
          value={<>£123.25<span className="rate-card__unit">/wk</span></>}
          sub="Max 28 weeks · 3 waiting days · employer bears full cost"
          accent="#00703c"
        />
        
      </RateGrid>

      <h2>The 7 Types of Statutory Pay</h2>
      <DataTable
        headers={['Code', 'Full Name', 'Who It Covers', 'Max Paid Duration']}
        rows={[
          [<Tag code="SMP"  color="#d53880" />, 'Statutory Maternity Pay',          'Pregnant employees on maternity leave',                            '39 weeks'],
          [<Tag code="SPP"  color="#1d70b8" />, 'Statutory Paternity Pay',          'Partner or father at birth or adoption',                           '1 or 2 weeks'],
          [<Tag code="SAP"  color="#f47738" />, 'Statutory Adoption Pay',           'Primary adopter taking adoption leave',                            '39 weeks'],
          [<Tag code="ShPP" color="#4c2c92" />, 'Statutory Shared Parental Pay',    'Parents sharing leave after the birth or adoption of a child',     'Up to 37 weeks'],
          [<Tag code="SPBP" color="#28a197" />, 'Statutory Parental Bereavement Pay','Parents who lose a child under 18 or suffer a stillbirth (24+ wks)','2 weeks'],
          [<Tag code="SNCP" color="#d4351c" />, 'Statutory Neonatal Care Pay',      'Parents of babies receiving neonatal care (from April 2025)',      'Up to 12 weeks'],
          [<Tag code="SSP"  color="#00703c" />, 'Statutory Sick Pay',               'Employees unable to work due to illness or injury',                'Up to 28 weeks'],
        ]}
      />

      <h2>Employer Reclaim Rates</h2>
      <p>
        Employers pay statutory family leave pay upfront, then reclaim from HMRC via their
        payroll software (RTI submission). SSP is the exception — it cannot be reclaimed.
      </p>
      <DataTable
        headers={['Employer Type', 'Prior Year NIC Liability', 'Reclaim Rate', 'Applies To']}
        rows={[
          [<strong>Standard employer</strong>, '> £45,000', <strong>92%</strong>, 'SMP, SPP, SAP, ShPP, SPBP, SNCP'],
          [<strong>Small Employer (SER)</strong>, '≤ £45,000', <strong>103%</strong>, 'SMP, SPP, SAP, ShPP, SPBP, SNCP'],
          [<strong>Any employer — SSP</strong>, '—', <strong>Not reclaimable</strong>, 'Employer bears full cost'],
        ]}
      />
      <NextPageLink to="smp" onNavigate={onNavigate} />
    </>
  );
}
