import { PageProps } from '../types';
import { Notice, RateCard, RateGrid, DataTable, Checklist, Tag, NextPageLink } from '../shared';

export function SSP({ onNavigate }: PageProps) {
  return (
    <>
      <div className="page-title">
        <Tag code="SSP" color="#00703c" large />
        Statutory Sick Pay
      </div>
      <div className="page-subtitle">
        Social Security Contributions and Benefits Act 1992 · Employment Rights Act 2025
      </div>

      {/* ── 1. Introduction ─────────────────────────── */}
      <h2>1. Introduction</h2>
      <p>
        SSP is paid by the employer to eligible employees who are unable to work due to
        illness or injury. Unlike all the family-related statutory payments, <strong>SSP
        cannot be reclaimed from HMRC</strong> by most employers, the employer bears the
        full cost.
      </p>

      <h2>2. What Changed: 2025/26 vs 2026/27</h2>
      <DataTable
        headers={['Rule', '2025/26 (old)', '2026/27 (reformed from 6 Apr 2026)']}
        rows={[
          ['Waiting days',           '3 qualifying days unpaid at start of every PIW',   'Abolished'],
          ['SSP starts from',        'Day 4 (4th qualifying day)',                        'Day 1 (1st qualifying day)'],
          ['Minimum absence',        '4 consecutive calendar days',                       '1 qualifying day'],
          ['LEL earnings test',      'Yes; must earn ≥ £125/week',                        'Abolished; all employees qualify regardless of pay'],
          ['Weekly rate',            '£118.75/week (flat rate only)',                     '£123.25/week OR 80% of AWE (whichever is lower)']
        ]}
      />

      <Notice variant="error" title="⚠ SSP is not reclaimable from HMRC">
        The Percentage Threshold Scheme that previously allowed some employers to reclaim
        SSP was abolished in 2014 and has not been reinstated. Employers bear the full cost
        of SSP. This is the key cost difference between SSP and all other statutory payments.
      </Notice>

      {/* ── 3. Key Definitions ───────────────────────── */}
      <h2>3. Key Definitions</h2>
      <DataTable
        headers={['Term', 'Definition (as of 6 April 2026)']}
        rows={[
          [<strong>PIW — Period of Incapacity for Work</strong>, 'A period of 1 or more qualifying days of sickness. From April 2026 a single day of illness is a PIW; previously the threshold was 4 or more consecutive calendar days.'],
          [<strong>Qualifying Day (QD)</strong>,                  'A day on which the employee is contracted to work. SSP is only payable on QDs, not on rest days or non-contracted days.'],
          [<strong>Linked PIWs</strong>,                          'Two or more PIWs separated by 8 weeks or less. They link together and count as one continuous PIW for the 28-week maximum. Waiting days are not re-served on a linked PIW.'],
          [<strong>AWE for SSP</strong>,                          'Average Weekly Earnings calculated over the 8 complete weeks immediately before the first day of the PIW.'],
        ]}
      />

      {/* ── 4. Qualifying Conditions (from April 2026) ── */}
      <h2>4. Qualifying Conditions (from 6 April 2026)</h2>
      <Checklist
        items={[
          <>Must be an <strong>employee</strong> (not a worker or self-employed, though zero-hours employees may qualify)</>,
          'Must have done at least some work under the employment contract',
          <><strong>No minimum earnings threshold</strong>; the LEL was removed from 6 April 2026. All employees qualify regardless of their pay level</>,
          <>Must be sick for at least <strong>1 complete qualifying day</strong>; waiting days were abolished from 6 April 2026</>,
          'Must notify the employer within the employer\'s stated deadline (or within 7 days if no policy exists)',
        ]}
      />

      {/* ── 5. The Entitlement ───────────────────────── */}
      <h2>5. The Entitlement</h2>
      <DataTable
        headers={['Element', 'Detail (from 6 April 2026)']}
        rows={[
          ['Rate',         'Lower of £123.25/week OR 80% of AWE, whichever is lower'],
          ['Paid from',    'Day 1 of sickness (waiting days abolished)'],
          ['Duration',     'Up to 28 weeks per PIW, or linked PIWs'],
          ['Daily rate',   'Weekly rate ÷ number of qualifying days in that week'],
          ['LEL required', 'No; removed from April 2026'],
        ]}
      />

      <RateGrid>
        <RateCard
          label="Weekly Rate (flat)"
          value={<>£123.25<span className="rate-card__unit">/wk</span></>}
          sub="For employees earning above the 80% threshold"
          accent="#00703c"
        />
        <RateCard
          label="Alternative Rate"
          value="80% AWE"
          sub="Applies to lower-paid employees where 80% AWE < £123.25"
          accent="#00703c"
        />
        <RateCard
          label="Maximum duration"
          value="28 weeks"
          sub="Per PIW (or linked group of PIWs)"
          accent="#00703c"
        />
      </RateGrid>

      <Notice variant="info" title="ℹ The 80% AWE rule explained">
        The 80% rule protects lower-paid employees. If 80% of a worker's AWE is{' '}
        <em>less than</em> £123.25, they receive 80% of their AWE instead of the flat
        rate. This ensures SSP is proportionate to earnings for the lowest-paid workers.
        For most employees (including Sarah Thompson), the flat rate is lower and applies.
      </Notice>

      {/* ── 6. The Abolished Waiting Days ────────────── */}
      <h2>6. The Abolished Waiting Days Rule</h2>
      <p>
        This is the most impactful change for day-to-day payroll. A short absence that
        previously attracted zero SSP now triggers payment from day one.
      </p>

      <Notice variant="ok" title="✓ What this means in practice">
        An employee who falls ill on a Monday and returns to work on Wednesday (2 qualifying
        days) would have received <strong>£0 SSP</strong> before April 2026; all 2 days
        were waiting days. From April 2026, they receive{' '}
        <strong>SSP for both days</strong>.
      </Notice>

      {/* ── 7. Linked PIWs ───────────────────────────── */}
      <h2>7. Linked PIWs: What They Mean</h2>
      <p>
        Linking rules prevent the 28-week SSP clock from resetting with every short absence.
        If an employee returns to work and then falls ill again <strong>within 8 weeks</strong>,
        the two absences link; they are treated as one continuous PIW.
      </p>
      <DataTable
        headers={['Scenario', 'Are they linked?', 'Effect']}
        rows={[
          ['Sick Week 1, well Week 2, sick Week 3',          <><strong>Yes</strong> (gap = 1 week)</>,  'Count as one PIW; 28-week clock not reset'],
          ['Sick Week 1, well Weeks 2–9, sick Week 10',     <><strong>No</strong> (gap = 8 weeks)</>,  'New PIW; fresh 28 weeks of SSP available'],
          ['Sick Week 1, well Weeks 2–10, sick Week 11',    <><strong>No</strong> (gap = 9 weeks)</>,  'New PIW; fresh 28 weeks of SSP available'],
        ]}
      />
      <Notice variant="warn" title="⚠ Linked PIWs and the 28-week maximum">
        If an employee has three separate absences linked as one PIW totalling 28 weeks, SSP
        stops even if each individual absence was short. Always track the cumulative weeks
        across linked PIWs, not just the weeks in the current absence.
      </Notice>

      {/* ── 8. Worked Calculation ────────────────────── */}
      <h2>8. Worked Calculation: Sarah Thompson</h2>

      <div className="persona-box">
        <div className="persona-box__name">Sarah Thompson, off sick Monday to Wednesday</div>
        <p>AWE: <strong>£1,153.85/week</strong> · Works 5 days/week (Mon–Fri)</p>
        <p>
          Sarah is ill on Monday, Tuesday, and Wednesday: 3 qualifying days. She returns to
          work on Thursday.
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
            <td>80% of AWE</td>
            <td>80% × £1,153.85</td>
            <td>£923.08/week</td>
          </tr>
          <tr>
            <td>Rate check</td>
            <td>£923.08 &gt; £123.25 → flat rate is lower</td>
            <td>£123.25/week applies</td>
          </tr>
          <tr>
            <td>Daily SSP rate</td>
            <td>£123.25 ÷ 5 qualifying days</td>
            <td>£24.65/day</td>
          </tr>
          <tr>
            <td>3 qualifying days off (Mon–Wed)</td>
            <td>3 × £24.65</td>
            <td>£73.95</td>
          </tr>
          <tr className="calc-total">
            <td><strong>SSP payable (from April 2026)</strong></td>
            <td>—</td>
            <td><strong>£73.95</strong></td>
          </tr>
        </tbody>
      </table>

      <Notice variant="warn" title="⚠ What this would have been before April 2026">
        Under the old rules, all 3 days would have been <strong>waiting days</strong>; SSP
        would have been <strong>£0</strong>. From April 2026, Sarah receives £73.95 for this
        same absence. This is the practical impact of abolishing waiting days.
      </Notice>

      {/* ── 9. When SSP Ends ─────────────────────────── */}
      <h2>9. When SSP Ends</h2>
      <DataTable
        headers={['Reason SSP Stops', 'What Happens Next']}
        rows={[
          ['Employee returns to work',           'SSP stops; no further action needed'],
          ['28 weeks of SSP paid (exhaustion)',  'Employer must issue Form SSP1 within 7 days; employee can then claim ESA or UC from DWP'],
          ["Employee's contract ends",           'SSP stops on the last day of employment'],
          ['Employee starts SMP',                'SMP takes precedence; SSP cannot be paid at the same time as SMP'],
          ['Employee goes into legal custody',   'SSP stops immediately'],
        ]}
      />

      <NextPageLink to="compare" onNavigate={onNavigate} />
    </>
  );
}
