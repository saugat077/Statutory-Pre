import { PageProps } from '../types';
import { Notice, RateCard, RateGrid, DataTable, Checklist, Tag, NextPageLink } from '../shared';

export function SAP({ onNavigate }: PageProps) {
  return (
    <>
      <div className="page-title">
        <Tag code="SAP" color="#f47738" large />
        Statutory Adoption Pay
      </div>
      <div className="page-subtitle">
        Paternity and Adoption Leave Regulations 2002
      </div>

      {/* ── 1. Introduction ─────────────────────────── */}
      <h2>1. Introduction</h2>
      <p>
        SAP is paid by the employer to the employee who is the <strong>primary adopter</strong>{' '}
        of a child. 
      </p>
      <p>
        SAP deliberately mirrors SMP in structure and rates.This is intentional government
        policy to give adoptive parents the same financial protection as birth parents. Unlike
        SMP which is restricted to the person who gave birth, SAP has{' '}
        <strong>no gender restriction whatsoever</strong><br /> <br />
        <p style={{ fontSize: '28px', fontWeight: 800, color: '#f47738', margin: '12px 0 0' }}>
          "Either partner in a couple can be the primary adopter."
        </p>
      </p>
      <p>
        In a couple adopting together, <strong>one partner claims SAP</strong> (the primary
        adopter) and the other may claim <strong>SPP</strong>. Only one person can claim SAP
        per adoption.
      </p>

      {/* ── 2. Key Rule — One SAP Per Placement ─────── */}
      <h2>2. Key Rule : One SAP Per Placement</h2>
      <p>
        In a couple adopting together, only <strong>one person can claim SAP</strong> per
        placement. The couple decides between themselves who is the primary adopter. This decision is entirely the couple's choice. HMRC does not prescribe which
        partner must be primary based on gender or any other factor.
      </p>
      <ul>
        <li><strong>Father = primary adopter</strong> (SAP, 39 weeks) + Mother = secondary adopter (SPP, 1–2 weeks)</li>
        <li><strong>Mother = primary adopter</strong> (SAP, 39 weeks) + Father = secondary adopter (SPP, 1–2 weeks)</li>
        <li><strong>Same-sex couple:</strong> either partner can be primary or secondary</li>
        <li><strong>Single adopter:</strong> takes SAP as the only adopter,no SPP involved</li>
      </ul>

      {/* ── 3. Key Definitions ───────────────────────── */}
      <h2>3. Key Definitions</h2>
      <DataTable
        headers={['Term', 'What It Means']}
        rows={[
          [<strong>Matching Date</strong>,         'The date the adoption agency formally matches the child to the adopter. This is the reference point for calculating the Relevant Period and qualifying conditions.'],
          [<strong>Placement Date</strong>,        'The date the child is physically placed into the adopter\'s home. SAP can start from this date or up to 14 days before the expected Placement Date.'],
          [<strong>Official Notification</strong>, 'For overseas adoptions, the date the adopter receives official confirmation (approval from the relevant UK authority to adopt from abroad). This replaces the Matching Date as the reference point.'],
          [<strong>AWE</strong>,                   'Average Weekly Earnings — calculated over the 8 weeks ending with the week of the Matching Date (or Official Notification for overseas adoptions).'],
          [<strong>Primary Adopter</strong>,       'The person in a couple who is designated to claim SAP. Only one person per placement can claim SAP. Either partner can take this role — HMRC does not restrict by gender.'],
          [<strong>Secondary Adopter</strong>,     'The other person in a couple — they claim SPP (1–2 weeks) instead of SAP. May extend this through ShPP if the primary adopter curtails SAP early.'],
        ]}
      />

      {/* ── 4. The Entitlement ───────────────────────── */}
      <h2>4. The Entitlement</h2>
      <DataTable
        headers={['Period', 'Rate']}
        rows={[
          [<strong>Weeks 1 – 6</strong>,   '90% of AWE'],
          [<strong>Weeks 7 – 39</strong>,  '£194.32/wk or 90% AWE (whichever is lower)'],
          [<strong>Weeks 40 – 52</strong>, 'Unpaid'],
        ]}
      />

      {/* ── 7. Why SAP Exists Separately from SMP ───── */}
      <h2>7. Why SAP Exists Separately from SMP</h2>
      <p>
        SMP requires a pregnancy.It uses EWC, QW, and a MATB1 certificate. Adoptive parents
        have none of these. SAP uses entirely different reference points:
      </p>
      <DataTable
        headers={['Framework Point', 'SMP', 'SAP']}
        rows={[
          ['Reference event',  'Expected Week of Childbirth (EWC)', 'Matching Date'],
          ['Qualifying week',  '15th week before the EWC',          'Week of matching notification'],
          ['Evidence required','MATB1 certificate from GP/midwife', 'Matching certificate from adoption agency'],
          ['Who can claim',    'Person who gave birth only',        'Either partner — no gender restriction'],
        ]}
      />

      {/* ── 8. Common Questions ──────────────────────── */}
      <h2>8. Common Questions</h2>

      <h3>If SAP and SMP produce the same amounts, why have both?</h3>
      <p>
        Because the trigger events and qualifying frameworks are completely different. SMP is
        triggered by giving birth; the evidence is a MATB1 certificate and the reference point is
        the EWC. SAP is triggered by an adoption placement; the evidence is the matching certificate
        and the reference point is the Matching Date. A mother who gives birth cannot claim SAP.
        An adoptive parent cannot claim SMP. The amounts look the same because Parliament
        deliberately gave adoptive parents equal financial protection, not because they are the
        same payment.
      </p>

      <h3>Can the father take SAP and the mother take SPP?</h3>
      <p>
        Yes, completely valid. SAP has no gender restriction. If the father is designated as
        the primary adopter, he takes SAP (39 weeks). The mother as secondary adopter takes
        SPP (1–2 weeks). HMRC does not care about gender, only about who is designated
        primary adopter.
      </p>

      <h3>Can the mother get more than just 1–2 weeks as secondary adopter?</h3>
      <p>
        Yes, through <strong>ShPP</strong>. If the primary adopter curtails SAP early, the
        remaining weeks convert into a shared ShPP pot that both parents can draw from.
        For example:
      </p>
      <ul>
        <li>Father takes 10 weeks SAP then curtails</li>
        <li>Remaining 29 weeks of pay become ShPP</li>
        <li>Mother takes 20 weeks ShPP at £194.32/week = <strong>£3,886.40</strong></li>
        <li>Father takes remaining 9 weeks ShPP at £194.32/week = <strong>£1,748.88</strong></li>
      </ul>
      <p>
        This gives the mother far more than the 1–2 weeks she would have received under SPP alone.
      </p>

      <Notice variant="warn" title="⚠ What the secondary adopter cannot do">
        The secondary adopter cannot claim SAP (only one SAP per placement), cannot claim SMP
        (no pregnancy), and cannot claim a second SAP for the same placement. Their only routes
        to additional paid leave beyond SPP are through ShPP if the primary adopter curtails SAP.
      </Notice>

      {/* ── 9. Worked Calculation ────────────────────── */}
      <h2>9. Worked Calculation — Sarah Thompson (Primary Adopter)</h2>

      <div className="persona-box">
        <div className="persona-box__name">Sarah Thompson — primary adopter</div>
        <p>Monthly salary: <strong>£5,000</strong> · Continuously employed: <strong>3 years</strong></p>
        <p>Matching Date: <strong>1 June 2026</strong> · Placement Date: <strong>15 June 2026</strong></p>
        <p>
          AWE = £5,000 × 12 ÷ 52 = <strong>£1,153.85/week</strong>, above LEL (£125/week) ✓
        </p>
        <p>
          Since 90% of Sarah's AWE (£1,038.46) is above the flat rate (£194.32), the flat
          rate applies from week 7 onwards, identical to her SMP calculation.
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
            <td>LEL check</td>
            <td>£1,153.85 &gt; £125/week</td>
            <td>Qualifies ✓</td>
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
            <td>SAP — Weeks 1–6</td>
            <td>6 × £1,038.46</td>
            <td>£6,230.76</td>
          </tr>
          <tr>
            <td>SAP — Weeks 7–39</td>
            <td>33 × £194.32</td>
            <td>£6,412.56</td>
          </tr>
          <tr className="calc-total">
            <td><strong>Total SAP payable</strong></td>
            <td>£6,230.76 + £6,412.56</td>
            <td><strong>£12,643.32</strong></td>
          </tr>
        </tbody>
      </table>

      <p>
        Sarah's partner (secondary adopter) separately claims SPP:{' '}
        <strong>2 weeks × £194.32 = £388.64</strong>
      </p>


      <Notice variant="info" title="ℹ Identical to SMP — by design">
        SAP and SMP use the same rates and the same 39-week structure. For the same employee
        the total SAP figure will always equal the total SMP figure. The legislative intention
        is to give adoptive parents the same level of income support as birth parents.
      </Notice>

      <NextPageLink to="shpp" onNavigate={onNavigate} />
    </>
  );
}
