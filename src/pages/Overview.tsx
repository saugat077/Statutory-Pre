import { PageProps, SectionId } from '../types';
import { Notice, RateCard, RateGrid, DataTable, Tag } from '../shared';

export function Overview({ onNavigate }: PageProps) {
  const go = (id: SectionId) => onNavigate?.(id);

  return (
    <>
      <div className="page-title">UK Statutory Leave &amp; Pay — A Beginner's Guide</div>
      <div className="page-subtitle">
        Tax Year 2026/27 · 6 April 2026 to 5 April 2027
      </div>

      <h2>What is Statutory Leave &amp; Pay?</h2>
      <p>
        Statutory leave and pay is the minimum entitlement guaranteed by UK law to employees when
        they cannot work due to a major life event — such as having a baby, adopting a child,
        becoming seriously ill, or losing a child. "Statutory" means it is set by Parliament, not
        by the employer, so every eligible employee in the country has the same basic rights
        regardless of which company they work for.
      </p>
      <p>
        Employers pay statutory pay through payroll, just like normal wages. For most types
        (all except SSP), they then reclaim the majority of that cost back from HMRC. Employers
        are free to offer more generous <em>enhanced</em> pay on top of the statutory minimum,
        but they can never go below it.
      </p>

      <h2>Why Does It Exist?</h2>
      <p>
        Statutory pay exists to protect workers from losing their income entirely at vulnerable
        times in their lives. The UK framework is built on several Acts of Parliament —
        including the <strong>Employment Rights Act 1996</strong> and the{' '}
        <strong>Social Security Contributions and Benefits Act 1992</strong> — which set minimum
        floors that all employers must meet. The system balances the cost of this protection
        between the employer (who pays first) and the state (HMRC, who then reimburses most of it).
      </p>

      <h2>Example Employee Used Throughout This Guide</h2>
      <div className="persona-box">
        <div className="persona-box__name">Sarah Thompson</div>
        <p>
          Full-time employee &nbsp;·&nbsp; 5 days/week &nbsp;·&nbsp;
          Monthly salary: <strong>£5,000/month</strong>
        </p>
        <p>
          Average Weekly Earnings (AWE):{' '}
          £5,000 × 12 ÷ 52 = <strong>£1,153.85/week</strong>
        </p>
        <p style={{ color: 'var(--grey3)', marginTop: 6 }}>
          Sarah's AWE is well above the Lower Earnings Limit (£125/week), so she qualifies
          for all statutory payments. Her figures are used in the worked examples throughout
          this guide.
        </p>
      </div>

      <h2>Key 2026/27 Rates at a Glance</h2>
      <RateGrid>
        <RateCard
          label="Lower Earnings Limit (LEL)"
          value={<>£125<span className="rate-card__unit">/wk</span></>}
          sub="Minimum AWE to qualify for any statutory payment"
        />
        <RateCard
          label="Family Leave Flat Rate"
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
        <RateCard
          label="Small Employer Relief Threshold"
          value="£45,000"
          sub="Prior-year NIC liability to qualify for 103% reclaim"
          accent="#f47738"
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

      <h2>Explore Each Section</h2>
      <div className="overview-grid">
        {[
          { id: 'smp',   code: 'SMP',  color: '#d53880', name: 'Statutory Maternity Pay',    rate: '39 weeks paid',   dur: 'Wks 1–6: 90% AWE · Wks 7–39: £194.32/wk' },
          { id: 'spp',   code: 'SPP',  color: '#1d70b8', name: 'Statutory Paternity Pay',    rate: '1 or 2 weeks',    dur: '£194.32/wk or 90% AWE if lower' },
          { id: 'sap',   code: 'SAP',  color: '#f47738', name: 'Statutory Adoption Pay',     rate: '39 weeks paid',   dur: 'Wk 1: 90% AWE · Wks 2–39: £194.32/wk' },
          { id: 'shpp',  code: 'ShPP', color: '#4c2c92', name: 'Shared Parental Pay',        rate: 'Up to 37 weeks',  dur: '£194.32/wk — shared between parents' },
          { id: 'spbp',  code: 'SPBP', color: '#28a197', name: 'Parental Bereavement Pay',   rate: '2 weeks',         dur: '£194.32/wk — within 56 days of bereavement' },
          { id: 'sncp',  code: 'SNCP', color: '#d4351c', name: 'Neonatal Care Pay',          rate: 'Up to 12 weeks',  dur: '£194.32/wk — additional to all other leave' },
          { id: 'ssp',   code: 'SSP',  color: '#00703c', name: 'Statutory Sick Pay',         rate: 'Up to 28 weeks',  dur: '£123.25/wk — day 4 onwards (3 waiting days)' },
        ].map(item => (
          <button
            key={item.id}
            className="overview-card"
            onClick={() => go(item.id as SectionId)}
          >
            <div className="overview-card__badge" style={{ background: item.color }}>
              {item.code}
            </div>
            <h4>{item.name}</h4>
            <div className="overview-card__rate">{item.rate}</div>
            <div className="overview-card__dur">{item.dur}</div>
          </button>
        ))}
      </div>

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

      <Notice variant="info" title="ℹ Small Employer Relief (SER)">
        If your total employer Class 1 NIC bill for the <em>previous</em> tax year was £45,000
        or less, you qualify for SER. The 103% reclaim rate means you get back 100% of what you
        paid out, plus 3% to cover the NIC you paid on those statutory payments.
      </Notice>
    </>
  );
}
