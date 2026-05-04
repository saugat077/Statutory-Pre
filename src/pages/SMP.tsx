import { useState } from 'react';
import { PageProps } from '../types';
import { Notice, DataTable, Checklist, Tag, NextPageLink } from '../shared';

export function SMP({ onNavigate }: PageProps) {
  const [showSolution, setShowSolution]             = useState(false);
  const [showAssignSolution, setShowAssignSolution] = useState(false);

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
        leave. <br />
        - Total of <strong>52 weeks</strong> Statutory Maternity Entitlement. <br />
        - <strong>39 weeks</strong> are paid. <br />
        - The remaining 13 weeks are unpaid. <br />
      </p>

      {/* ── 2. Key Definitions ───────────────────────── */}
      <h2>2. Key Definitions</h2>
      <DataTable
        headers={['Term', 'Full Name', 'What It Means']}
        rows={[
          [<strong>EWC</strong>,    'Expected Week of Childbirth', 'The week starting on a Sunday in which the baby is due. Confirmed on the MAT B1 certificate.'],
          [<strong>QW</strong>,     'Qualifying Week',             'The 15th week before the EWC. This is the critical date: the employee must have been continuously employed for 26 weeks by the end of this week.'],
          [<strong>AWE</strong>,    'Average Weekly Earnings',     "The employee's average gross weekly pay, calculated over the 8-week Relevant Period ending with the last complete Saturday before the QW."],
          [<strong>RP</strong>,     'Relevant Period',             'The 8-week window used to calculate AWE, ending with the last complete Saturday before the QW.'],
          [<strong>LEL</strong>,    'Lower Earnings Limit',        "£125/week for 2026/27. The employee's AWE must be at or above this figure to qualify."],
          [<strong>MAT B1</strong>, 'Maternity Certificate',       'A certificate issued by a GP or midwife, available from 20 weeks before the EDD, confirming the EWC. Employers may request this as evidence.'],
        ]}
      />

      {/* ── 3. Qualifying Conditions ─────────────────── */}
      <h2>3. Qualifying Conditions</h2>
      <Checklist
        items={[
          'Must be an employee (not a worker or self-employed person)',
          <>At least <strong>26 weeks' continuous employment</strong> by the end of the Qualifying Week</>,
          <>AWE at or above the <strong>Lower Earnings Limit (£125/week)</strong> for 2026/27</>,
          <>Still pregnant at the <strong>11th week before EWC</strong>, or has already given birth</>,
          <>Must give the employer at least <strong>28 days' notice</strong> of the intended start date for SMP</>,
          <>Must provide a <strong>MATB1 certificate</strong>, obtainable from a GP or midwife from 20 weeks before the due date</>,
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
        Step 1: Identify the last complete Saturday before the QW.<br />
        Step 2: Count back 8 weeks; this is your Relevant Period.<br />
        Step 3: Add up all gross earnings paid in that period.<br />
        Step 4: Divide by 8 to get the AWE.<br />
        <br />
        Include: wages, bonuses, commission, SSP paid in that period.<br />
        Exclude: expenses, benefits in kind, employer pension contributions.
      </Notice>

      <img
        src="/images/SMP_timeline.png"
        alt="SMP timeline diagram"
        style={{ width: '100%', marginTop: '24px', borderRadius: '6px' }}
      />

      {/* ── 5. The Entitlement ───────────────────────── */}
      <h2>5. The Entitlement</h2>
      <DataTable
        headers={['Period', 'Rate']}
        rows={[
          [<strong>Weeks 1 – 6</strong>,   '90% of AWE'],
          [<strong>Weeks 7 – 39</strong>,  '£194.32/wk or 90% AWE (whichever is lower)'],
          [<strong>Weeks 40 – 52</strong>, 'Unpaid'],
        ]}
      />

      {/* ── 6. Worked Calculation ────────────────────── */}
      <h2>6. Worked Calculation</h2>
      <p style={{ color: 'var(--grey3)' }}>
        Sarah earns an annual salary of{' '}
        <strong style={{ color: 'var(--black)' }}>£50,000</strong>. She is a monthly payroll
        employee, full-time, 5 days/week.
      </p>
      <strong>She is in SMP for 39 weeks. Calculate her total SMP.</strong>
      <ol className="question-list">
        <li>Calculate Pay Per Period</li>
        <li>Calculate AWE</li>
        <li>Calculate SMP per week</li>
        <li>Calculate SMP for first 6 weeks</li>
        <li>Calculate SMP for remaining weeks</li>
        <li>Total SMP</li>
      </ol>

      <button className="solution-toggle" onClick={() => setShowSolution(s => !s)}>
        {showSolution ? '▲ Hide Solution' : '▼ Show Solution'}
      </button>

      {showSolution && (
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
              <td>Pay per period (monthly)</td>
              <td>£50,000 ÷ 12</td>
              <td>£4,166.67/month</td>
            </tr>
            <tr>
              <td>AWE</td>
              <td>£4,166.67 × 12 ÷ 52</td>
              <td>£961.54/week</td>
            </tr>
            <tr>
              <td>Weeks 1–6 rate</td>
              <td>90% × £961.54</td>
              <td>£865.38/week</td>
            </tr>
            <tr>
              <td>Rate check (weeks 7–39)</td>
              <td>£865.38 &gt; £194.32, flat rate applies</td>
              <td>£194.32/week</td>
            </tr>
            <tr>
              <td>SMP: Weeks 1–6</td>
              <td>6 × £865.38</td>
              <td>£5,192.31</td>
            </tr>
            <tr>
              <td>SMP: Weeks 7–39</td>
              <td>33 × £194.32</td>
              <td>£6,412.56</td>
            </tr>
            <tr className="calc-total">
              <td><strong>Total SMP payable</strong></td>
              <td>£5,192.31 + £6,412.56</td>
              <td><strong>£11,604.87</strong></td>
            </tr>
          </tbody>
        </table>
      )}

      {/* ── Assignment: Alabaster Payment ────────────── */}
      <h2>Assignment: Alabaster Payment</h2>
      <div className="assignment-card">
        <div className="assignment-card__title">Alabaster Payment</div>
        <p>
          1. What is Alabaster payment ? <br />
          2. The Salary increased to £60,000. Calculate Alabaster Payment for the worked example above <br />
        </p>
      </div>


      <NextPageLink to="spp" onNavigate={onNavigate} />
    </>
  );
}
