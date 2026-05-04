import { PageProps } from '../types';
import { Notice, RateCard, RateGrid, DataTable, Checklist, Tag, NextPageLink } from '../shared';

export function SPBP({ onNavigate }: PageProps) {
  return (
    <>
      <div className="page-title">
        <Tag code="SPBP" color="#28a197" large />
        Statutory Parental Bereavement Pay
      </div>
      <div className="page-subtitle">
        Parental Bereavement (Leave and Pay) Act 2018 ("Jack's Law"), in force April 2020
      </div>

      <Notice variant="ok">
        SPBP, known informally as <strong>Jack's Law</strong>, ensures that bereaved parents
        are not forced to choose between grieving and their income. Every employee has the right
        to the <em>leave</em> from day one; the <em>pay</em> element requires 26 weeks'
        service and the LEL earnings test.
      </Notice>

      {/* ── 1. Introduction ─────────────────────────── */}
      <h2>1. Introduction</h2>
      <p>
        SPBP was introduced under <strong>Jack's Law</strong> (Parental Bereavement (Leave and
        Pay) Act 2018), which came into force in <strong>April 2020</strong>. It gives employed
        parents a statutory right to paid leave following the death of a child under 18, or a
        stillbirth after 24 completed weeks of pregnancy.
      </p>
      <p>
        Before Jack's Law existed, bereaved parents had no statutory entitlement to any paid
        leave whatsoever. They relied entirely on whatever their employer chose to offer
        contractually.
      </p>

      {/* ── 2. The Story Behind Jack's Law ───────────── */}
      <h2>2. The Story Behind Jack's Law</h2>
      <p>
        Jack's Law is named after <strong>Jack Herd</strong>, who drowned aged 23 months in
        2010. His mother <strong>Lucy Herd</strong> campaigned for over a decade because at the
        time Jack's father was only entitled to 3 days discretionary leave with no statutory
        pay. There was no legal protection for bereaved parents at all.
      </p>
      <p>
        Lucy's campaign eventually led to the Parental Bereavement (Leave and Pay) Act 2018.
        The legislation was deliberately scoped to child bereavement only; that was the campaign,
        that was the injustice, and that is why SPBP covers only the death of a child and
        nothing else.
      </p>

      {/* ── 3. What Qualifies for SPBP ───────────────── */}
      <h2>3. What Qualifies for SPBP</h2>
      <p>The following events <strong>trigger SPBP entitlement:</strong></p>
      <ul>
        <li>Death of a child under the age of 18</li>
        <li>Stillbirth at or after 24 completed weeks of pregnancy</li>
      </ul>
      <p>The following do <strong>NOT</strong> qualify for SPBP:</p>
      <ul>
        <li>Miscarriage or pregnancy loss before 24 completed weeks (not legally a stillbirth; no SPBP entitlement)</li>
        <li>Death of a spouse or partner</li>
        <li>Death of a parent</li>
        <li>Death of a sibling</li>
        <li>Death of a grandparent</li>
        <li>Death of any other relative or close friend</li>
      </ul>

      {/* ── 4. Key Definitions ───────────────────────── */}
      <h2>4. Key Definitions</h2>
      <DataTable
        headers={['Term', 'What It Means']}
        rows={[
          [<strong>Bereaved Parent</strong>,      'A biological parent, adoptive parent, intended parent in a surrogacy arrangement, or any person who was in a parental role with the child (for example a step-parent living with the child).'],
          [<strong>Child Death</strong>,          'Applies to any child under the age of 18 at the time of death. There is no minimum age; a newborn counts from birth.'],
          [<strong>Stillbirth Threshold</strong>, 'A baby born dead at or after 24 completed weeks of pregnancy. Before 24 weeks it is legally classified as a miscarriage; SPBP does not apply.'],
          [<strong>The 56-Week Window</strong>,   "SPBP can be taken at any point within 56 weeks of the date of the child's death or stillbirth, giving parents flexibility to take leave when they need it most, not just immediately after the death."],
          [<strong>Date of Death</strong>,        'The anchor point for all SPBP calculations. It replaces the function that the Qualifying Week (QW) serves in SMP and SPP.'],
        ]}
      />

      <Notice variant="warn" title="⚠ Miscarriage vs Stillbirth">
        The 24-week threshold is legally significant. A pregnancy loss before 24 completed
        weeks is classified as a miscarriage for statutory purposes; SPBP does <em>not</em>{' '}
        apply. Employees in this situation may qualify for SSP if they are medically unfit
        for work, and many employers apply enhanced compassionate leave policies.
      </Notice>

      {/* ── 5. Does SPBP Have a Qualifying Week? ─────── */}
      <h2>5. Does SPBP Have a Qualifying Week (QW)?</h2>
      <p>
        <strong>No.</strong> SPBP has no QW at all. This is a common source of confusion for
        students who have learned QW in the context of SMP and SPP.
      </p>
      <p>
        QW exists only in SMP and SPP because those payments are tied to a pregnancy timeline;
        you need a fixed future reference point (the due date) to work backwards from. SPBP has
        no pregnancy timeline. The trigger is a death, which is sudden and unexpected with no
        advance reference point. There is nothing to count 15 weeks back from.
      </p>
      <p>
        In SPBP, eligibility is assessed at the <strong>date of the child's death</strong>.
        That date replaces the function of QW but is never called a QW in SPBP legislation.
      </p>

      <Notice variant="warn" title="⚠ Common student mistake: do not apply QW to SPBP">
        QW is pregnancy-specific terminology used only in SMP and SPP. SPBP has no QW, no EWC,
        and no qualifying week of any kind. The anchor point is simply the date of the child's
        death.
      </Notice>

      {/* ── 6. How AWE is Calculated in SPBP ─────────── */}
      <h2>6. How AWE is Calculated in SPBP</h2>
      <p>
        AWE in SPBP uses the same 8-week gross earnings method as other statutory payments,
        anchored to the date of death rather than a QW or matching date.
      </p>
      <Notice variant="info" title="ℹ AWE calculation steps">
        Step 1: Identify the date of the child's death.<br />
        Step 2: Find the last complete week (Sunday to Saturday) before that date.<br />
        Step 3: Count back 8 weeks from that Saturday to get the Relevant Period.<br />
        Step 4: Total all gross earnings paid in those 8 weeks.<br />
        Step 5: Divide by 8 to get AWE.
      </Notice>

      <p><strong>Example using Sarah Thompson:</strong></p>
      <p>
        Child passes away on Wednesday 1 July 2026. Last complete Saturday before 1 July 2026
        = Saturday 27 June 2026. Relevant Period = Sunday 4 May 2026 to Saturday 27 June 2026
        (8 weeks). AWE = £5,000 × 12 ÷ 52 = <strong>£1,153.85/week</strong>.
      </p>

      {/* ── 7. The Entitlement ───────────────────────── */}
      <h2>7. The Entitlement</h2>
      <DataTable
        headers={['Element', 'Detail']}
        rows={[
          ['Duration',      '2 weeks total'],
          ['Flexibility',   'Option A: both weeks together as one continuous block. Option B: two separate one-week blocks taken at different times within the 56-week window'],
          ['Rate',          'Lower of £194.32/week OR 90% of AWE'],
          ['Window',        'Can be taken at any time within 56 weeks of the child\'s death or stillbirth'],
          ['Per child',     'Each child death triggers a separate independent 2-week entitlement; if a parent tragically loses more than one child, each death is counted separately'],
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
        ready to take leave immediately and may need time off weeks or months later, for
        example around anniversaries, a due date, or when returning to work becomes
        particularly difficult.
      </Notice>

      {/* ── 8. Is This Changing? ────────────────────── */}
      <h2>8. Is This Changing?</h2>
      <p>
        The Employment Rights Act 2025 introduced significant payroll reforms (particularly to
        SSP) but did not extend statutory bereavement pay beyond child death. There have been
        parliamentary discussions about broader bereavement leave rights, but as of the 2026/27
        tax year nothing has been legislated. Students should watch this space as it remains an
        active area of employment law discussion in the UK.
      </p>

      {/* ── 9. Worked Calculation ───────────────────── */}
      <h2>9. Worked Calculation</h2>

      <div className="persona-box">
        <div className="persona-box__name">Sarah Thompson</div>
        <p>Monthly salary: <strong>£5,000</strong> · Continuously employed: <strong>3 years</strong></p>
        <p>Child passes away: <strong>Wednesday 1 July 2026</strong></p>
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
            <td>Anchor point</td>
            <td>Date of death = 1 July 2026</td>
            <td>No QW to find</td>
          </tr>
          <tr>
            <td>Last complete Saturday</td>
            <td>Before 1 July 2026</td>
            <td>27 June 2026</td>
          </tr>
          <tr>
            <td>Relevant Period</td>
            <td>8 weeks back from 27 June 2026</td>
            <td>4 May 2026 to 27 June 2026</td>
          </tr>
          <tr>
            <td>Continuous employment</td>
            <td>3 years at date of death &gt; 26 weeks</td>
            <td>Qualifies ✓</td>
          </tr>
          <tr>
            <td>AWE</td>
            <td>£5,000 × 12 ÷ 52</td>
            <td>£1,153.85/week</td>
          </tr>
          <tr>
            <td>LEL check</td>
            <td>£1,153.85 &gt; £125/week</td>
            <td>Qualifies ✓</td>
          </tr>
          <tr>
            <td>Rate check</td>
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
        Sarah may take both weeks immediately as one block, or split them, for example one
        week in July 2026 and one week in October 2026 when she feels she needs it most. Both
        options are valid within the 56-week window. The timing does not affect the rate; each
        week remains <strong>£194.32</strong>.
      </Notice>

      <p><strong>If Sarah tragically lost two children in separate incidents:</strong></p>
      <table className="calc-table">
        <thead>
          <tr>
            <th>Bereavement</th>
            <th>Calculation</th>
            <th>SPBP</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Child 1 death</td>
            <td>2 × £194.32</td>
            <td>£388.64</td>
          </tr>
          <tr>
            <td>Child 2 death</td>
            <td>2 × £194.32</td>
            <td>£388.64</td>
          </tr>
          <tr className="calc-total">
            <td><strong>Total across both bereavements</strong></td>
            <td>4 × £194.32</td>
            <td><strong>£777.28</strong></td>
          </tr>
        </tbody>
      </table>

      <Notice variant="warn" title="⚠ The 24-Week Stillbirth Rule">
        A baby born dead before 24 completed weeks of pregnancy is legally classified as a
        miscarriage in UK law, not a stillbirth. This means SPBP does not apply. This is a
        painful legal boundary that many find difficult to accept. Parents in this situation
        have no statutory entitlement to SPBP and must rely entirely on their employer's
        compassionate leave policy. Payroll professionals must understand this distinction
        clearly and communicate it with sensitivity.
      </Notice>

      <NextPageLink to="sncp" onNavigate={onNavigate} />
    </>
  );
}
