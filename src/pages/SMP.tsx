import { PageProps } from '../types';
import { Notice, RateCard, RateGrid, DataTable, Checklist, Tag } from '../shared';

export function SMP(_: PageProps) {
  return (
    <>
      <div className="page-title">
        <Tag code="SMP" color="#d53880" large />
        Statutory Maternity Pay
      </div>
      <div className="page-subtitle">
        Employment Rights Act 1996 · Statutory Maternity Pay (General) Regulations 1986
      </div>

      {/* ── 1. Introduction ─────────────────────────── */}
      <h2>1. Introduction</h2>
      <p>
        SMP is paid by the employer to eligible pregnant employees when they take maternity
        leave. It covers up to <strong>39 weeks</strong> of the maternity leave period. The
        remaining 13 weeks of the full 52-week maternity leave entitlement are unpaid —
        employees may use accrued holiday or contractual enhanced pay, but there is no further
        statutory payment.
      </p>
      <p>
        Employers pay SMP through payroll alongside normal wages, then reclaim the cost from
        HMRC (92% or 103% for small employers). The employee does not need to repay SMP if
        they decide not to return to work.
      </p>

      {/* ── 2. Key Definitions ───────────────────────── */}
      <h2>2. Key Definitions</h2>
      <DataTable
        headers={['Term', 'Full Name', 'What It Means']}
        rows={[
          [<strong>EWC</strong>, 'Expected Week of Childbirth', 'The week — starting on a Sunday — in which the baby is due. Confirmed on the MAT B1 certificate.'],
          [<strong>QW</strong>,  'Qualifying Week',             'The 15th week before the EWC. This is the critical date: the employee must have been continuously employed for 26 weeks by the end of this week.'],
          [<strong>AWE</strong>, 'Average Weekly Earnings',     'The employee\'s average gross weekly pay, calculated over the 8-week Relevant Period ending with the last complete Saturday before the QW.'],
          [<strong>LEL</strong>, 'Lower Earnings Limit',        '£125/week for 2026/27. The employee\'s AWE must be at or above this figure to qualify.'],
          [<strong>MAT B1</strong>, 'Maternity Certificate',    'A certificate issued by a GP or midwife, available from 20 weeks before the EDD, confirming the EWC. Employers may request this as evidence.'],
        ]}
      />

      {/* ── 3. Qualifying Conditions ─────────────────── */}
      <h2>3. Qualifying Conditions</h2>
      <p>All five conditions must be met:</p>
      <Checklist
        items={[
          <>Must be an <strong>employee</strong> — workers and self-employed individuals do not qualify (they may be eligible for Maternity Allowance instead)</>,
          <>Must have been <strong>continuously employed</strong> for at least 26 weeks by the end of the Qualifying Week (the 15th week before the EWC)</>,
          <>Average Weekly Earnings must be at or above the <strong>Lower Earnings Limit (£125/week)</strong> during the Relevant Period</>,
          <>Must give the employer at least <strong>28 days' notice</strong> (or as much notice as reasonably practicable) of the date SMP is due to start</>,
          <>Must provide a <strong>MAT B1 certificate</strong> if requested by the employer, confirming the Expected Week of Childbirth</>,
        ]}
      />

      {/* ── 4. The Relevant Period ───────────────────── */}
      <h2>4. The Relevant Period</h2>
      <p>
        The Relevant Period is the <strong>8-week window</strong> used to calculate AWE. It
        runs from the last complete Saturday before the start of the Qualifying Week, counting
        back 8 weeks (or 2 months for monthly-paid employees).
      </p>
      <Notice variant="info" title="ℹ How AWE is calculated">
        <strong>Step 1:</strong> Identify the last complete Saturday before the QW.<br />
        <strong>Step 2:</strong> Count back 8 weeks — this is your Relevant Period.<br />
        <strong>Step 3:</strong> Add up all gross earnings paid in that period.<br />
        <strong>Step 4:</strong> Divide by 8 to get the AWE.<br />
        <br />
        Include: wages, bonuses, commission, SSP paid in that period.<br />
        Exclude: expenses, benefits in kind, employer pension contributions.
      </Notice>

      {/* ── 5. The Entitlement ───────────────────────── */}
      <h2>5. The Entitlement</h2>
      <DataTable
        headers={['Period', 'Rate', 'Key Rule']}
        highlightRows={[0, 1]}
        rows={[
          [<strong>Weeks 1 – 6</strong>,   <><strong>90% of AWE</strong></>,                                        'No cap — always 90% regardless of how high earnings are'],
          [<strong>Weeks 7 – 39</strong>,  <><strong>£194.32/wk</strong> or 90% AWE (whichever is lower)</>,        'Most employees receive the flat rate; only very low earners fall below'],
          [<strong>Weeks 40 – 52</strong>, 'Unpaid',                                                                 'Remaining Maternity Leave has no statutory pay; employer may top up'],
        ]}
      />

      <RateGrid>
        <RateCard
          label="Weeks 1–6"
          value="90% AWE"
          sub="No upper cap — based on actual earnings"
          accent="#d53880"
        />
        <RateCard
          label="Weeks 7–39 (flat rate)"
          value={<>£194.32<span className="rate-card__unit">/wk</span></>}
          sub="Or 90% AWE if that's lower — 33 weeks at this rate"
          accent="#d53880"
        />
        <RateCard
          label="Total paid period"
          value="39 weeks"
          sub="13 further weeks of unpaid leave available"
          accent="#d53880"
        />
      </RateGrid>

      {/* ── 6. Worked Calculation ────────────────────── */}
      <h2>6. Worked Calculation — Sarah Thompson</h2>

      <div className="persona-box">
        <div className="persona-box__name">Sarah Thompson</div>
        <p>Monthly salary: <strong>£5,000</strong> · Full-time · 5 days/week</p>
        <p>
          AWE = £5,000 × 12 ÷ 52 = <strong>£1,153.85/week</strong>
        </p>
        <p style={{ color: 'var(--grey3)' }}>
          Since 90% of Sarah's AWE (£1,038.46) is above the flat rate (£194.32), the flat
          rate applies from week 7 onwards.
        </p>
      </div>

      <table className="calc-table">
        <thead>
          <tr>
            <th>Step</th>
            <th>Calculation</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AWE</td>
            <td>£5,000 × 12 ÷ 52</td>
            <td>£1,153.85/week</td>
          </tr>
          <tr>
            <td>Weeks 1–6 rate</td>
            <td>90% × £1,153.85</td>
            <td>£1,038.46/week</td>
          </tr>
          <tr>
            <td>Weeks 7–39 rate</td>
            <td>Flat rate applies (£1,038.46 &gt; £194.32)</td>
            <td>£194.32/week</td>
          </tr>
          <tr>
            <td>SMP — Weeks 1–6</td>
            <td>6 × £1,038.46</td>
            <td>£6,230.76</td>
          </tr>
          <tr>
            <td>SMP — Weeks 7–39</td>
            <td>33 × £194.32</td>
            <td>£6,412.56</td>
          </tr>
          <tr className="calc-total">
            <td><strong>Total SMP payable</strong></td>
            <td>£6,230.76 + £6,412.56</td>
            <td><strong>£12,643.32</strong></td>
          </tr>
        </tbody>
      </table>

      <Notice variant="info" title="ℹ Employer reclaim on Sarah's SMP">
        A standard (large) employer reclaims <strong>92% × £12,643.32 = £11,631.85</strong>.
        A small employer qualifying for SER reclaims{' '}
        <strong>103% × £12,643.32 = £13,022.62</strong> — recovering more than they paid out.
      </Notice>

      {/* ── 7. If the Employee Does Not Qualify ─────── */}
      <h2>7. If the Employee Does Not Qualify for SMP</h2>
      <p>
        If an employee does not meet the qualifying conditions — for example because she has
        not worked for the employer for 26 weeks, or because her AWE falls below the LEL —
        she <strong>cannot receive SMP</strong>. The employer must issue a{' '}
        <strong>Form SMP1</strong> explaining why SMP is not being paid.
      </p>
      <p>
        The employee may instead claim <strong>Maternity Allowance (MA)</strong> directly from
        the DWP. Key points about Maternity Allowance:
      </p>
      <ul>
        <li>Available for up to <strong>39 weeks</strong></li>
        <li>Rate: up to <strong>£194.32/week</strong> (or 90% of AWE if lower)</li>
        <li>Paid directly by DWP — <strong>not</strong> by the employer</li>
        <li>Available to employees, workers, and the self-employed who meet DWP's own eligibility tests</li>
        <li>The employer has no involvement in paying or reclaiming MA</li>
      </ul>

      <Notice variant="warn" title="⚠ Employer action required">
        If SMP cannot be paid, the employer <strong>must issue Form SMP1</strong> within 7 days
        of the employee's request or within 7 days of the date SMP would have started. Failure
        to issue Form SMP1 can result in a penalty from HMRC.
      </Notice>

      {/* ── Employer Reclaim Summary ─────────────────── */}
      <h2>Employer Reclaim</h2>
      <DataTable
        headers={['Employer', 'Prior Year NIC Liability', 'Reclaim', "Sarah's Example"]}
        rows={[
          ['Large employer', '> £45,000/year', <strong>92%</strong>, '£11,631.85'],
          ['Small Employer (SER)', '≤ £45,000/year', <strong>103%</strong>, '£13,022.62'],
        ]}
      />
    </>
  );
}
