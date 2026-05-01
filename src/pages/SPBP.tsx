import { PageProps } from '../types';
import { Notice, RateCard, RateGrid, DataTable, Checklist, Tag } from '../shared';

export function SPBP(_: PageProps) {
  return (
    <>
      <div className="page-title">
        <Tag code="SPBP" color="#28a197" large />
        Statutory Parental Bereavement Pay
      </div>
      <div className="page-subtitle">
        Parental Bereavement (Leave and Pay) Act 2018 ("Jack's Law") — in force April 2020
      </div>

      <Notice variant="ok">
        SPBP — known informally as <strong>Jack's Law</strong> — ensures that bereaved parents
        are not forced to choose between grieving and their income. Every employee has the right
        to the <em>leave</em> from day one; the <em>pay</em> element requires 26 weeks'
        service and the LEL earnings test.
      </Notice>

      {/* ── 1. Introduction ─────────────────────────── */}
      <h2>1. Introduction</h2>
      <p>
        SPBP was introduced under <strong>Jack's Law</strong> (Parental Bereavement (Leave and
        Pay) Act 2018), which came into force in <strong>April 2020</strong>. It provides paid
        leave to employed parents who suffer the death of a child under 18, or a stillbirth
        after 24 completed weeks of pregnancy.
      </p>
      <p>
        Before Jack's Law, bereaved parents had no statutory right to paid bereavement leave —
        they had to rely on employer goodwill, sick leave, or holiday entitlement. The law was
        named after Jack Herd, whose mother Lucy campaigned for it following his death aged 23
        months.
      </p>

      {/* ── 2. Key Definitions ───────────────────────── */}
      <h2>2. Key Definitions</h2>
      <DataTable
        headers={['Term', 'What It Means']}
        rows={[
          [<strong>Bereaved Parent</strong>,       'A biological parent, adoptive parent, intended parent in a surrogacy arrangement, or any person in a parental role who had day-to-day responsibility for the child.'],
          [<strong>Child Death</strong>,           'Applies to the death of any child under the age of 18. There is no minimum age — a newborn counts from birth.'],
          [<strong>Stillbirth Threshold</strong>,  'A baby born dead after 24 completed weeks of pregnancy qualifies for SPBP. Before 24 weeks it is classified as a miscarriage and SPBP does not apply.'],
        ]}
      />

      <Notice variant="warn" title="⚠ Miscarriage vs Stillbirth">
        The 24-week threshold is legally significant. A pregnancy loss before 24 completed
        weeks is classified as a miscarriage for statutory purposes — SPBP does <em>not</em>{' '}
        apply. Employees in this situation may qualify for SSP if they are medically unfit
        for work, and many employers apply enhanced compassionate leave policies.
      </Notice>

      {/* ── 3. Qualifying Conditions ─────────────────── */}
      <h2>3. Qualifying Conditions</h2>
      <DataTable
        headers={['Condition', 'Leave Right', 'Pay Right (SPBP)']}
        rows={[
          ['Employee status',       'From day 1 — no service requirement', 'Must be an employee'],
          ['Continuous employment', 'From day 1 — no service requirement', '26 weeks by the date of the child\'s death or stillbirth'],
          ['Earnings (AWE)',        'Not required for leave',              'At or above LEL (£125/week)'],
          ['Notice',                'As soon as reasonably practicable',   'As soon as reasonably practicable before leave starts'],
        ]}
      />

      <p>
        The distinction matters: an employee who has worked for only 3 months has a full
        right to <strong>take the leave</strong>, but will <strong>not receive SPBP</strong>{' '}
        unless they also meet the service and earnings thresholds.
      </p>
      <Checklist
        items={[
          'Must be an employee (for the pay right)',
          <>26 weeks' continuous employment <strong>at the date of the child's death</strong> or stillbirth</>,
          <>AWE at or above the <strong>Lower Earnings Limit (£125/week)</strong></>,
          'Notice given as soon as reasonably practicable before each period of leave',
        ]}
      />

      {/* ── 4. The Entitlement ───────────────────────── */}
      <h2>4. The Entitlement</h2>
      <DataTable
        headers={['Element', 'Detail']}
        rows={[
          ['Duration',      '2 weeks total'],
          ['Flexibility',   'Can be taken as one 2-week block, or two separate one-week blocks at different times'],
          ['Rate',          'Lower of £194.32/week OR 90% of AWE'],
          ['Window',        'Can be taken at any time within 56 weeks of the child\'s death or stillbirth'],
          ['Consecutive?',  'The two weeks do not need to be taken consecutively'],
        ]}
      />

      <RateGrid>
        <RateCard
          label="Duration"
          value="2 weeks"
          sub="Splittable into 2 separate one-week blocks"
          accent="#28a197"
        />
        <RateCard
          label="Weekly Rate"
          value={<>£194.32<span className="rate-card__unit">/wk</span></>}
          sub="Or 90% AWE if that is lower"
          accent="#28a197"
        />
        <RateCard
          label="Window"
          value="56 weeks"
          sub="From the date of the child's death or stillbirth"
          accent="#28a197"
        />
      </RateGrid>

      <Notice variant="info" title="ℹ Why 56 weeks?">
        The 56-week window recognises that grief is not linear. Some parents may not feel
        ready to take leave immediately and may need time off weeks or months later — for
        example around anniversaries, a due date, or when returning to work becomes
        particularly difficult.
      </Notice>

      {/* ── 5. Worked Calculation ────────────────────── */}
      <h2>5. Worked Calculation — Sarah Thompson</h2>

      <div className="persona-box">
        <div className="persona-box__name">Sarah Thompson</div>
        <p>AWE: <strong>£1,153.85/week</strong> · 90% AWE = £1,038.46 → flat rate applies</p>
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
            <td>AWE check</td>
            <td>90% × £1,153.85 = £1,038.46 &gt; £194.32</td>
            <td>Flat rate applies</td>
          </tr>
          <tr>
            <td>Week 1 of SPBP</td>
            <td>1 × £194.32</td>
            <td>£194.32</td>
          </tr>
          <tr>
            <td>Week 2 of SPBP</td>
            <td>1 × £194.32</td>
            <td>£194.32</td>
          </tr>
          <tr className="calc-total">
            <td><strong>Total SPBP payable</strong></td>
            <td>2 × £194.32</td>
            <td><strong>£388.64</strong></td>
          </tr>
        </tbody>
      </table>

      <Notice variant="info">
        If Sarah takes the two weeks separately — for example one week immediately after the
        death and one week six months later — each individual week is still{' '}
        <strong>£194.32</strong>. The timing of the blocks does not affect the rate.
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
    </>
  );
}
