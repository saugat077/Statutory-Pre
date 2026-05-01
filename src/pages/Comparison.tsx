import { PageProps } from '../types';
import { Notice, DataTable, Tag } from '../shared';

export function Comparison(_: PageProps) {
  return (
    <>
      <div className="page-title">Comparison Table</div>
      <div className="page-subtitle">
        All 7 statutory payments side by side — 2026/27 confirmed rates
      </div>

      {/* ── Master 8-Column Table ────────────────────── */}
      <h2>1. Master Comparison — All 7 Payments</h2>
      <p>
        Every statutory payment at a glance. The table shows what triggers each payment, who
        qualifies, how long it lasts, the 2026/27 rate, and which other payments can run at
        the same time.
      </p>

      <div className="table-wrap">
        <table className="gov-table" style={{ fontSize: '13px', minWidth: '900px' }}>
          <thead>
            <tr>
              <th style={{ minWidth: '90px'  }}>Code &amp; Name</th>
              <th style={{ minWidth: '150px' }}>Trigger Event</th>
              <th style={{ minWidth: '130px' }}>Qualifying Employment</th>
              <th style={{ minWidth: '120px' }}>Earnings Threshold</th>
              <th style={{ minWidth: '100px' }}>Duration</th>
              <th style={{ minWidth: '150px' }}>Rate (2026/27)</th>
              <th style={{ minWidth: '80px'  }}>Day 1 Entitlement?</th>
              <th style={{ minWidth: '160px' }}>Can Run Concurrently With</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Tag code="SMP" color="#d53880" /><br /><span style={{ fontSize: '12px' }}>Statutory Maternity Pay</span></td>
              <td>Pregnancy / childbirth</td>
              <td>26 weeks' service by the end of the <strong>Qualifying Week</strong> (15th week before EWC)</td>
              <td>LEL — £125/week</td>
              <td>39 weeks</td>
              <td>Wks 1–6: <strong>90% AWE</strong> (no cap)<br />Wks 7–39: <strong>£194.32/wk</strong></td>
              <td style={{ textAlign: 'center' }}>No</td>
              <td><Tag code="SNCP" color="#d4351c" /></td>
            </tr>
            <tr>
              <td><Tag code="SPP" color="#1d70b8" /><br /><span style={{ fontSize: '12px' }}>Statutory Paternity Pay</span></td>
              <td>Birth or adoption of partner's / joint child</td>
              <td>26 weeks' service by the end of the Qualifying Week</td>
              <td>LEL — £125/week</td>
              <td>1–2 weeks (split into separate blocks from April 2024)</td>
              <td><strong>£194.32/wk</strong> or 90% AWE (lower)</td>
              <td style={{ textAlign: 'center' }}>No</td>
              <td><Tag code="SNCP" color="#d4351c" /> <Tag code="ShPP" color="#4c2c92" /></td>
            </tr>
            <tr>
              <td><Tag code="SAP" color="#f47738" /><br /><span style={{ fontSize: '12px' }}>Statutory Adoption Pay</span></td>
              <td>Adoption match (Matching Date)</td>
              <td>26 weeks' service by the end of the <strong>week of the Matching Date</strong></td>
              <td>LEL — £125/week</td>
              <td>39 weeks</td>
              <td>Wk 1: <strong>90% AWE</strong><br />Wks 2–39: <strong>£194.32/wk</strong></td>
              <td style={{ textAlign: 'center' }}>No</td>
              <td><Tag code="SNCP" color="#d4351c" /></td>
            </tr>
            <tr>
              <td><Tag code="ShPP" color="#4c2c92" /><br /><span style={{ fontSize: '12px' }}>Statutory Shared Parental Pay</span></td>
              <td>Curtailment of SMP or SAP by the mother / primary adopter</td>
              <td>26 weeks' service (both parents meet their own separate tests)</td>
              <td>LEL — £125/week</td>
              <td>Up to 37 weeks <em>shared</em> between both parents</td>
              <td><strong>£194.32/wk</strong> or 90% AWE (lower) — assessed per parent</td>
              <td style={{ textAlign: 'center' }}>No</td>
              <td><Tag code="SNCP" color="#d4351c" /></td>
            </tr>
            <tr>
              <td><Tag code="SPBP" color="#28a197" /><br /><span style={{ fontSize: '12px' }}>Statutory Parental Bereavement Pay</span></td>
              <td>Death of a child under 18, or stillbirth at 24+ completed weeks of pregnancy</td>
              <td>26 weeks' service <strong>at the date of death</strong> or stillbirth</td>
              <td>LEL — £125/week</td>
              <td>2 weeks (split into 2 separate blocks within 56 weeks)</td>
              <td><strong>£194.32/wk</strong> or 90% AWE (lower)</td>
              <td style={{ textAlign: 'center', color: 'var(--green)', fontWeight: 700 }}>Yes<br /><span style={{ fontSize: '11px', fontWeight: 400 }}>from date of bereavement</span></td>
              <td><Tag code="SSP" color="#00703c" /> <Tag code="SMP" color="#d53880" /> <Tag code="SAP" color="#f47738" /></td>
            </tr>
            <tr>
              <td><Tag code="SNCP" color="#d4351c" /><br /><span style={{ fontSize: '12px' }}>Statutory Neonatal Care Pay</span></td>
              <td>Baby receives 7+ consecutive days' neonatal care (admitted aged ≤28 days)</td>
              <td>26 weeks' service by the week of the baby's birth</td>
              <td>LEL — £125/week</td>
              <td>Up to 12 weeks <em>per parent</em> — not shared</td>
              <td><strong>£194.32/wk</strong> or 90% AWE (lower)</td>
              <td style={{ textAlign: 'center' }}>No</td>
              <td>
                <Tag code="SMP" color="#d53880" />{' '}
                <Tag code="SPP" color="#1d70b8" />{' '}
                <Tag code="SAP" color="#f47738" />{' '}
                <Tag code="ShPP" color="#4c2c92" />{' '}
                <Tag code="SPBP" color="#28a197" />
              </td>
            </tr>
            <tr>
              <td><Tag code="SSP" color="#00703c" /><br /><span style={{ fontSize: '12px' }}>Statutory Sick Pay</span></td>
              <td>Sickness / incapacity for work</td>
              <td><strong>Any employee</strong> who has done at least some work under their contract</td>
              <td style={{ color: 'var(--green)', fontWeight: 700 }}>None — LEL removed from 6 April 2026</td>
              <td>Up to 28 weeks per PIW</td>
              <td><strong>£123.25/wk</strong> or 80% of AWE — whichever is lower</td>
              <td style={{ textAlign: 'center', color: 'var(--green)', fontWeight: 700 }}>Yes<br /><span style={{ fontSize: '11px', fontWeight: 400 }}>from April 2026</span></td>
              <td><Tag code="SPBP" color="#28a197" /></td>
            </tr>
          </tbody>
        </table>
      </div>

      <Notice variant="info" title="ℹ Reading the 'Can Run Concurrently With' column">
        This column shows which other statutory payments an employee can receive <em>at the
        same time</em>. The most notable case is <strong>SNCP</strong> — it stacks on top of
        SMP, SAP, SPP, or ShPP rather than replacing them. A mother receiving SMP can also
        receive SNCP during the same weeks her baby is in a neonatal unit.
      </Notice>

      {/* ── Feature Comparison ──────────────────────── */}
      <h2>2. Feature Comparison</h2>
      <DataTable
        headers={['Feature', 'SMP', 'SPP', 'SAP', 'ShPP', 'SPBP', 'SNCP', 'SSP']}
        rows={[
          ['Weeks at 90% AWE',                      '6 wks',          '0',      '1 wk',     '0',              '0',      '0',          'N/A'],
          ['Total paid weeks (max)',                 '39',             '2',      '39',        'Up to 37',       '2',      'Up to 12',   'Up to 28'],
          ['Reclaimable from HMRC',                  'Yes',            'Yes',    'Yes',       'Yes',            'Yes',    'Yes',        <strong>No</strong>],
          ['Leave right from day 1 of employment',   'Yes',            'Yes',    'Yes',       'No — 26 wk svc', 'Yes',   'Yes',        'Yes'],
          ['Waiting days before pay starts',         'None',           'None',   'None',      'None',           'None',  'None',       <strong>None — abolished Apr 2026</strong>],
          ['LEL earnings required',                  'Yes',            'Yes',    'Yes',       'Yes',            'Yes',   'Yes',        <strong>No — removed Apr 2026</strong>],
          ['Entitlement shared between parents',     'No',             'No',     'No',        <strong>Yes</strong>, 'No', 'No — independent per parent', 'N/A'],
          ['KIT / SPLIT days allowed',               '10 KIT days',    '—',      '10 KIT days', '20 SPLIT days', '—',  '—',          '—'],
          ['Stacks on top of other statutory pay',   'No',             'No',     'No',        'No',             'No',    <strong>Yes — additional</strong>, 'Partial (SPBP only)'],
        ]}
      />

      {/* ── Leave Entitlement ───────────────────────── */}
      <h2>3. Total Leave Entitlement (not just pay)</h2>
      <p>
        Leave and pay are separate entitlements. An employee always has the <em>right to
        leave</em> from day one of employment — but <em>pay</em> depends on meeting the
        service and earnings tests.
      </p>
      <DataTable
        headers={['Type', 'Total Leave Weeks', 'Structure']}
        rows={[
          [<><Tag code="SMP"  color="#d53880" /> Maternity</>,          '52 weeks',                      '26 OML + 26 AML — 2 compulsory maternity weeks cannot be shared'],
          [<><Tag code="SPP"  color="#1d70b8" /> Paternity</>,          '2 weeks',                       'Within 52 weeks of birth or placement; can be taken as 2 separate 1-week blocks'],
          [<><Tag code="SAP"  color="#f47738" /> Adoption</>,           '52 weeks',                      '26 Ordinary Adoption Leave + 26 Additional Adoption Leave'],
          [<><Tag code="ShPP" color="#4c2c92" /> Shared Parental</>,    'Up to 50 weeks between parents', '52 – 2 compulsory maternity leave weeks; both parents opt in separately'],
          [<><Tag code="SPBP" color="#28a197" /> Parental Bereavement</>, '2 weeks',                    'Within 56 weeks of the death or stillbirth; splittable into 2 separate 1-week blocks'],
          [<><Tag code="SNCP" color="#d4351c" /> Neonatal Care</>,      'Up to 12 weeks per parent',     'Additional — does not reduce any other leave; taken within 68 weeks of birth'],
        ]}
      />

      {/* ── Rate History ────────────────────────────── */}
      <h2>4. Standard Rate History</h2>
      <DataTable
        headers={['Payment', '2023/24', '2024/25', '2025/26', '2026/27 ✓']}
        highlightRows={[0, 1, 2]}
        rows={[
          ['SMP / SPP / SAP / ShPP / SPBP / SNCP (flat rate)', '£172.48/wk', '£184.03/wk', '£187.18/wk', <strong style={{ color: 'var(--green)' }}>£194.32/wk</strong>],
          ['SSP (weekly rate)',                                  '£109.40/wk', '£116.75/wk', '£116.75/wk', <strong style={{ color: 'var(--green)' }}>£123.25/wk</strong>],
          ['Lower Earnings Limit (LEL)',                         '£123/wk',    '£123/wk',    '£125/wk',    <strong style={{ color: 'var(--green)' }}>£125/wk (removed for SSP)</strong>],
          ['Small Employer Relief (SER) threshold',              '£45,000',    '£45,000',    '£45,000',    '£45,000'],
          ['Employer reclaim — standard',                        '92%',        '92%',        '92%',        '92%'],
          ['Employer reclaim — SER',                             '103%',       '103%',       '103%',       '103%'],
        ]}
      />

      <Notice variant="warn" title="⚠ SSP is structurally different from all other payments from April 2026">
        Every other statutory payment still requires the LEL and has no 80%-of-AWE floor.
        SSP now has neither a minimum earnings threshold nor waiting days, making it the most
        accessible statutory payment — but it is the only one employers cannot reclaim from HMRC.
      </Notice>
    </>
  );
}
