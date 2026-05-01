import { PageProps } from '../types';
import { Notice, RateCard, RateGrid, DataTable, Checklist, Tag } from '../shared';

const flowSteps = [
  {
    title: 'Mother / adopter is receiving SMP or SAP',
    desc:  'Up to 39 weeks of statutory pay is available. The 2 compulsory maternity weeks cannot be shared — the shareable maximum is therefore 37 weeks of pay and 50 weeks of leave.',
  },
  {
    title: 'Curtailment Notice submitted',
    desc:  'The mother/adopter gives a written Curtailment Notice to their employer, choosing to end SMP/SAP early. Example: she curtails after 10 weeks, leaving 27 weeks of pay in the shared pot (37 − 10).',
  },
  {
    title: 'ShPP pot is created',
    desc:  'The remaining weeks of pay become available as Statutory Shared Parental Pay, shared between both parents. Each parent draws from the same pot — the total across both cannot exceed 37 weeks.',
  },
  {
    title: 'Both parents submit opt-in notices',
    desc:  'Each parent gives a separate opt-in notice to their own employer, setting out how many weeks of ShPP they intend to take and the proposed dates.',
  },
  {
    title: 'Parents take ShPP in agreed blocks',
    desc:  'Leave can be taken in up to 3 separate blocks each. Blocks can be consecutive, alternating, or simultaneous — both parents drawing ShPP from their own employer at the same time.',
  },
];

export function ShPP(_: PageProps) {
  return (
    <>
      <div className="page-title">
        <Tag code="ShPP" color="#4c2c92" large />
        Statutory Shared Parental Pay
      </div>
      <div className="page-subtitle">
        Shared Parental Leave and Pay Regulations 2014
      </div>

      <div className="callout">
        <div className="callout__title">⚡ Key Concept Before You Start</div>
        <p>
          ShPP is the most complex statutory payment. The critical concept is:{' '}
          <strong>SMP or SAP must be curtailed first before ShPP can exist.</strong>{' '}
          Think of it as "converting" maternity or adoption pay into a shared pot that
          both parents can draw from. Nothing happens automatically — both parents must
          actively opt in.
        </p>
      </div>

      {/* ── 1. Introduction ─────────────────────────── */}
      <h2>1. Introduction</h2>
      <p>
        ShPP allows eligible parents to share up to <strong>50 weeks of leave</strong> and up
        to <strong>37 weeks of statutory pay</strong> between them, after the mother or primary
        adopter ends or curtails their SMP/SAP early. It gives families the freedom to decide
        who takes leave and when, rather than leave being locked to one parent.
      </p>
      <p>
        It is the most <strong>flexible</strong> — and most <strong>complex</strong> — of all
        the statutory payments. Both parents must meet their own eligibility tests independently,
        and the process requires multiple formal notices to be submitted in the correct order.
      </p>

      {/* ── 2. Key Definitions ───────────────────────── */}
      <h2>2. Key Definitions</h2>
      <DataTable
        headers={['Term', 'What It Means']}
        rows={[
          [<strong>Curtailment Notice</strong>,  "A written notice from the mother/adopter to their employer, formally ending their SMP or SAP before the full 39 weeks are used. This is what 'creates' the ShPP entitlement."],
          [<strong>Binding Period</strong>,       'Once a Curtailment Notice is submitted, it becomes binding and generally cannot be revoked — with very limited exceptions (e.g. partner loses entitlement through death or relationship breakdown).'],
          [<strong>Opt-In Notice</strong>,        "A notice each parent submits to their own employer, setting out how much ShPP they intend to take and on what dates. Both parents must do this independently."],
          [<strong>SPLIT Days</strong>,           'Shared Parental Leave In Touch days — up to 20 days each parent can work during ShPP without losing that week\'s payment. Like KIT days for SMP but 20 instead of 10.'],
          [<strong>Discontinuous Blocks</strong>, 'Requesting ShPP leave in separate, non-consecutive periods — e.g. 4 weeks on, 2 weeks back at work, 4 weeks on. Employers can refuse discontinuous requests (but not continuous ones).'],
        ]}
      />

      {/* ── 3. How ShPP is Created ───────────────────── */}
      <h2>3. How ShPP is Created — The Curtailment Process</h2>
      <div className="flow">
        {flowSteps.map((step, i) => (
          <div key={i} className="flow-step">
            <div className="flow-step__track">
              <div className="flow-step__dot">{i + 1}</div>
              {i < flowSteps.length - 1 && <div className="flow-step__line" />}
            </div>
            <div className="flow-step__body">
              <div className="flow-step__title">{step.title}</div>
              <div className="flow-step__desc">{step.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ── 4. Qualifying Conditions ─────────────────── */}
      <h2>4. Qualifying Conditions — Both Parents</h2>
      <p>
        Both parents must meet <strong>their own separate</strong> eligibility tests.
        Meeting one test does not satisfy the other.
      </p>

      <h3>Mother / Primary Adopter</h3>
      <Checklist
        items={[
          'Employee (not a worker or self-employed)',
          '26 weeks\' continuous employment by the end of the Qualifying Week',
          'AWE at or above the LEL (£125/week)',
          'Has curtailed, or given notice to curtail, their SMP or SAP',
        ]}
      />

      <h3>Partner</h3>
      <Checklist
        items={[
          'Employed or self-employed (broader than other statutory payments)',
          <>Worked for at least <strong>26 of the 66 weeks</strong> before the EWC or placement date</>,
          <>Earned at least <strong>£30/week average</strong> in 13 of those 66 weeks</>,
          'Has, or expects to have, responsibility for the child\'s upbringing',
        ]}
      />

      <Notice variant="warn" title="⚠ Both must qualify independently">
        If either parent fails their eligibility test, <em>neither</em> can receive ShPP.
        The mother loses SMP (because she curtailed it) and the partner cannot take ShPP.
        Both notices must be submitted and accepted before any ShPP is paid.
      </Notice>

      {/* ── 5. The Entitlement ───────────────────────── */}
      <h2>5. The Entitlement</h2>
      <DataTable
        headers={['Element', 'Detail']}
        rows={[
          ['Maximum shared leave',            '50 weeks (52 total − 2 compulsory maternity weeks)'],
          ['Maximum shared pay',              '37 weeks (39 total − 2 compulsory maternity weeks)'],
          ['Rate per parent',                 'Lower of £194.32/week OR 90% of that parent\'s own AWE'],
          ['Blocks allowed',                  'Up to 3 separate blocks per parent'],
          ['Simultaneous leave',              'Allowed — both parents can take ShPP at the same time, each paid by their own employer'],
          ['SPLIT days per parent',           'Up to 20 days each without losing the week\'s ShPP'],
        ]}
      />

      <RateGrid>
        <RateCard
          label="Max shared pay weeks"
          value="37 weeks"
          sub="Combined total across both parents"
          accent="#4c2c92"
        />
        <RateCard
          label="Weekly Rate"
          value={<>£194.32<span className="rate-card__unit">/wk</span></>}
          sub="Or 90% AWE if lower — assessed per parent"
          accent="#4c2c92"
        />
        <RateCard
          label="SPLIT Days"
          value="20 days"
          sub="Per parent — work without losing pay"
          accent="#4c2c92"
        />
      </RateGrid>

      {/* ── 6. Worked Calculation ────────────────────── */}
      <h2>6. Worked Calculation — Sarah Thompson</h2>

      <div className="persona-box">
        <div className="persona-box__name">Sarah Thompson — curtails SMP after 10 weeks</div>
        <p>AWE: <strong>£1,153.85/week</strong> · Flat rate applies: <strong>£194.32/week</strong></p>
        <p>
          Sarah's partner also works full-time. Both independently qualify. Sarah curtails her
          SMP after 10 weeks, creating a shared pot of 27 weeks of pay (37 − 10 = 27).
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
            <td>SMP used by Sarah (10 weeks)</td>
            <td>(6 × £1,038.46) + (4 × £194.32)</td>
            <td>£7,007.04</td>
          </tr>
          <tr>
            <td>ShPP pot remaining</td>
            <td>37 − 10 weeks used</td>
            <td>27 weeks available to share</td>
          </tr>
          <tr>
            <td>Sarah takes 10 weeks ShPP</td>
            <td>10 × £194.32</td>
            <td>£1,943.20</td>
          </tr>
          <tr>
            <td>Partner takes 17 weeks ShPP</td>
            <td>17 × £194.32</td>
            <td>£3,303.44</td>
          </tr>
          <tr>
            <td>Weeks check</td>
            <td>10 + 17 = 27 weeks used</td>
            <td>Pot exhausted ✓</td>
          </tr>
          <tr className="calc-total">
            <td><strong>Total ShPP paid out</strong></td>
            <td>£1,943.20 + £3,303.44</td>
            <td><strong>£5,246.64</strong></td>
          </tr>
        </tbody>
      </table>

      <Notice variant="info" title="ℹ Each employer reclaims separately">
        Sarah's employer pays and reclaims her 10 weeks of ShPP (£1,943.20). Her
        partner's employer pays and reclaims their 17 weeks (£3,303.44). Each uses the
        standard 92% or 103% (SER) reclaim rate against their own payroll.
      </Notice>

      {/* ── 7. Discontinuous Blocks ──────────────────── */}
      <h2>7. Discontinuous Blocks — What This Means</h2>
      <p>
        Instead of taking all ShPP leave in one continuous block, parents can request leave
        in <strong>separate periods separated by time back at work</strong>. For example:
      </p>
      <DataTable
        headers={['Week', 'Sarah', "Sarah's Partner"]}
        rows={[
          ['Weeks 1–4',   'ShPP (4 weeks)',       'Working'],
          ['Weeks 5–6',   'Back at work',         'Working'],
          ['Weeks 7–12',  'ShPP (6 weeks)',       'ShPP (6 weeks) — simultaneously'],
          ['Weeks 13–14', 'Working',              'ShPP (final 2 weeks)'],
        ]}
      />
      <Notice variant="warn" title="⚠ Employers can refuse discontinuous requests">
        An employer <strong>cannot refuse</strong> a request for continuous ShPP leave.
        However, they <strong>can refuse</strong> a discontinuous request (separate blocks).
        If refused, the employee must either accept a single continuous block starting on
        the same date, or withdraw the request entirely.
      </Notice>

      {/* ── Employer Reclaim ─────────────────────────── */}
      <h2>Employer Reclaim</h2>
      <DataTable
        headers={['Employer', 'Prior Year NIC Liability', 'Reclaim']}
        rows={[
          ['Large employer', '> £45,000/year', <strong>92% of ShPP paid to their own employee</strong>],
          ['Small Employer (SER)', '≤ £45,000/year', <strong>103% of ShPP paid to their own employee</strong>],
        ]}
      />
    </>
  );
}
