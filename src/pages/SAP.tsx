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
        of a child — either through a UK domestic adoption or an overseas adoption. It mirrors
        SMP almost exactly in both structure and duration: 39 weeks of statutory pay with the
        same weekly rates.
      </p>
      <p>
        In a couple adopting together, <strong>one partner claims SAP</strong> (the primary
        adopter) and the other may claim <strong>SPP</strong>. Only one person can claim SAP
        per adoption — the choice must be made before pay begins.
      </p>

      {/* ── 2. Key Definitions ───────────────────────── */}
      <h2>2. Key Definitions</h2>
      <DataTable
        headers={['Term', 'What It Means']}
        rows={[
          [<strong>Matching Date</strong>,        'The date the adopter is formally matched with a child by the adoption agency (UK domestic adoption). This triggers the 26-week qualifying period check.'],
          [<strong>Placement Date</strong>,       'The date the child is actually placed with the adopter — the earliest SAP and Adoption Leave can start.'],
          [<strong>Official Notification</strong>,'For overseas adoptions, the date the adopter receives official confirmation that they have been matched. Replaces the Matching Date for overseas cases.'],
          [<strong>AWE</strong>,                  'Average Weekly Earnings — calculated over the 8 weeks ending with the week of the Matching Date (or Official Notification for overseas).'],
        ]}
      />

      {/* ── 3. Qualifying Conditions ─────────────────── */}
      <h2>3. Qualifying Conditions</h2>
      <p>All five conditions must be met:</p>
      <Checklist
        items={[
          <>Must be an <strong>employee</strong> (not a worker or self-employed)</>,
          <>Must have been <strong>continuously employed for 26 weeks</strong> ending with the week in which they are notified of the match</>,
          <>AWE must be at or above the <strong>Lower Earnings Limit (£125/week)</strong></>,
          <>Must give the employer <strong>28 days' notice</strong> of the intended adoption leave start date</>,
          <>Must provide the employer with a <strong>matching certificate</strong> from the adoption agency (or equivalent official documentation for overseas adoptions)</>,
        ]}
      />

      {/* ── 4. The Relevant Period ───────────────────── */}
      <h2>4. The Relevant Period</h2>
      <p>
        For SAP the Relevant Period is the <strong>8-week window ending with the week in which
        the adopter is notified of the match</strong>. AWE is the total gross earnings paid in
        this period divided by 8.
      </p>
      <Notice variant="info" title="ℹ Difference from SMP">
        For SMP the Relevant Period ends at the Qualifying Week (15th week before the EWC).
        For SAP it ends at the week of the <em>matching notification</em> — because there is
        no equivalent of a fixed "due date" in adoption.
      </Notice>

      {/* ── 5. The Entitlement ───────────────────────── */}
      <h2>5. The Entitlement</h2>
      <DataTable
        headers={['Period', 'Rate', 'Key Rule']}
        highlightRows={[0, 1]}
        rows={[
          [<strong>Weeks 1 – 6</strong>,   <><strong>90% of AWE</strong></>,                                       'No cap — always 90% regardless of earnings level'],
          [<strong>Weeks 7 – 39</strong>,  <><strong>£194.32/wk</strong> or 90% AWE (whichever is lower)</>,       'Flat rate applies to most employees'],
          [<strong>Weeks 40 – 52</strong>, 'Unpaid',                                                                'Additional Adoption Leave — employer may offer enhanced pay'],
        ]}
      />

      <RateGrid>
        <RateCard
          label="Weeks 1–6"
          value="90% AWE"
          sub="No upper cap — based on actual earnings"
          accent="#f47738"
        />
        <RateCard
          label="Weeks 7–39 (flat rate)"
          value={<>£194.32<span className="rate-card__unit">/wk</span></>}
          sub="Or 90% AWE if that is lower — 33 weeks at this rate"
          accent="#f47738"
        />
        <RateCard
          label="Total paid period"
          value="39 weeks"
          sub="Mirrors SMP exactly in structure and amount"
          accent="#f47738"
        />
      </RateGrid>

      {/* ── 6. Worked Calculation ────────────────────── */}
      <h2>6. Worked Calculation — Sarah Thompson</h2>

      <div className="persona-box">
        <div className="persona-box__name">Sarah Thompson — primary adopter</div>
        <p>Monthly salary: <strong>£5,000</strong> · AWE: <strong>£1,153.85/week</strong></p>
        <p>
          Since 90% of Sarah's AWE (£1,038.46) is above the flat rate (£194.32), the flat
          rate applies from week 7 onwards — identical to her SMP calculation.
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

      <Notice variant="info" title="ℹ Identical to SMP — by design">
        SAP and SMP use the same rates and the same 39-week structure. For the same employee
        the total SAP figure will always equal the total SMP figure. The legislative intention
        is to give adoptive parents the same level of income support as birth parents.
      </Notice>

      {/* ── Employer Reclaim ─────────────────────────── */}
      <h2>Employer Reclaim</h2>
      <DataTable
        headers={['Employer', 'Prior Year NIC Liability', 'Reclaim', "Sarah's Example"]}
        rows={[
          ['Large employer', '> £45,000/year', <strong>92%</strong>, '£11,631.85'],
          ['Small Employer (SER)', '≤ £45,000/year', <strong>103%</strong>, '£13,022.62'],
        ]}
      />
      <NextPageLink to="shpp" onNavigate={onNavigate} />
    </>
  );
}
