import { PageProps } from '../types';
import { Notice, RateCard, RateGrid, DataTable, Checklist, Tag, NextPageLink } from '../shared';

export function SPP({ onNavigate }: PageProps) {
  return (
    <>
      <div className="page-title">
        <Tag code="SPP" color="#1d70b8" large />
        Statutory Paternity Pay
      </div>
      <div className="page-subtitle">
        Paternity and Adoption Leave Regulations 2002 (as amended April 2024)
      </div>

      {/* ── 1. Introduction ─────────────────────────── */}
      <h2>1. Introduction</h2>
      <p>
        SPP is paid by the employer to eligible employees who are the <strong>partner, father,
        or second parent</strong> of a newborn or newly adopted child. It is designed to give
        the other parent time off around the birth or placement without losing all of their income.
      </p>
      <p>
        From <strong>April 2024</strong>, the rules were relaxed: the two weeks of paternity
        leave can now be taken as <strong>two separate one-week blocks</strong> at any point
        within 52 weeks of the birth or placement. They no longer have to be taken consecutively
        or within 56 days.
      </p>

      {/* ── 2. Key Definitions ───────────────────────── */}
      <h2>2. Key Definitions</h2>
      <DataTable
        headers={['Term', 'Full Name', 'What It Means']}
        rows={[
          [<strong>EWC</strong>, 'Expected Week of Childbirth', 'The week — starting on a Sunday — in which the baby is due.'],
          [<strong>QW</strong>,  'Qualifying Week',             'The 15th week before the EWC. Continuous employment of 26 weeks must be completed by the end of this week.'],
          [<strong>AWE</strong>, 'Average Weekly Earnings',     'The employee\'s average gross weekly pay, calculated over the 8-week Relevant Period ending with the last complete Saturday before the QW.'],
        ]}
      />
      <Notice variant="info">
        These definitions are the same as for SMP. If you have not already read the SMP section,
        the SMP Key Definitions and Relevant Period explanations apply here too.
      </Notice>

      {/* ── 3. Qualifying Conditions ─────────────────── */}
      <h2>3. Qualifying Conditions</h2>
      <p>All five conditions must be met:</p>
      <Checklist
        items={[
          <>Must be an <strong>employee</strong> (not a worker or self-employed)</>,
          <>Must have been <strong>continuously employed for 26 weeks</strong> by the end of the Qualifying Week (15th week before EWC)</>,
          <>AWE must be at or above the <strong>Lower Earnings Limit (£125/week)</strong></>,
          <>Must have, or expect to have, <strong>responsibility for the child's upbringing</strong></>,
          <>Must give at least <strong>28 days' notice</strong> using form <strong>SC3</strong> (or employer's own self-certificate) — or as soon as reasonably practicable if 28 days is not possible</>,
        ]}
      />

      {/* ── 4. The Relevant Period ───────────────────── */}
      <h2>4. The Relevant Period</h2>
      <p>
        The Relevant Period for SPP is the same as for SMP: the <strong>8-week window</strong>{' '}
        ending with the last complete Saturday before the start of the Qualifying Week. AWE is
        the total of all gross earnings paid in this 8-week window, divided by 8.
      </p>

      {/* ── 5. The Entitlement ───────────────────────── */}
      <h2>5. The Entitlement</h2>
      <DataTable
        headers={['Element', 'Detail']}
        rows={[
          ['Duration', '1 week or 2 weeks — the employee chooses before leave starts'],
          ['Rate', 'Lower of £194.32/week OR 90% of AWE'],
          ['Window (birth)', 'Must be taken within 52 weeks of the date of birth'],
          ['Window (adoption)', 'Must be taken within 52 weeks of the date of placement'],
          ['Flexibility (from April 2024)', 'The 2 weeks can be split — taken as 2 separate one-week blocks at different times within the 52-week window'],
        ]}
      />

      <RateGrid>
        <RateCard
          label="Duration"
          value="1 or 2 wks"
          sub="Employee's choice at the start"
          accent="#1d70b8"
        />
        <RateCard
          label="Weekly Rate"
          value={<>£194.32<span className="rate-card__unit">/wk</span></>}
          sub="Or 90% AWE if that is lower"
          accent="#1d70b8"
        />
        <RateCard
          label="Window"
          value="52 weeks"
          sub="From date of birth or placement"
          accent="#1d70b8"
        />
      </RateGrid>

      <Notice variant="info" title="ℹ Taking SPP as two separate weeks">
        Since April 2024, an employee can take the first week of paternity leave immediately
        after the birth and the second week later — for example when the mother returns to work
        or when childcare arrangements change. <strong>28 days' notice</strong> is required
        before each separate block.
      </Notice>

      {/* ── 6. Worked Calculation ────────────────────── */}
      <h2>6. Worked Calculation — Sarah Thompson</h2>

      <div className="persona-box">
        <div className="persona-box__name">Sarah Thompson — as the claimant</div>
        <p>Monthly salary: <strong>£5,000</strong> · AWE: <strong>£1,153.85/week</strong></p>
        <p>
          90% of AWE = £1,038.46 — well above the flat rate of £194.32, so the
          flat rate applies.
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
            <td>90% of AWE</td>
            <td>90% × £1,153.85</td>
            <td>£1,038.46/week</td>
          </tr>
          <tr>
            <td>Rate check</td>
            <td>£1,038.46 &gt; £194.32 → flat rate applies</td>
            <td>£194.32/week</td>
          </tr>
          <tr>
            <td>SPP — 2 weeks</td>
            <td>2 × £194.32</td>
            <td>£388.64</td>
          </tr>
          <tr className="calc-total">
            <td><strong>Total SPP payable</strong></td>
            <td>—</td>
            <td><strong>£388.64</strong></td>
          </tr>
        </tbody>
      </table>

      <Notice variant="info" title="ℹ Employer reclaim on Sarah's SPP">
        A standard employer reclaims <strong>92% × £388.64 = £357.55</strong>.
        A small employer (SER) reclaims <strong>103% × £388.64 = £400.30</strong>.
      </Notice>

      {/* ── Employer Reclaim ─────────────────────────── */}
      <h2>Employer Reclaim</h2>
      <DataTable
        headers={['Employer', 'Prior Year NIC Liability', 'Reclaim', "Sarah's Example"]}
        rows={[
          ['Large employer', '> £45,000/year', <strong>92%</strong>, '£357.55'],
          ['Small Employer (SER)', '≤ £45,000/year', <strong>103%</strong>, '£400.30'],
        ]}
      />
      <NextPageLink to="sap" onNavigate={onNavigate} />
    </>
  );
}
