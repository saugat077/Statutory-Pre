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


      {/* ── 2. Qualifying Conditions ─────────────────── */}
      <h2>2. Qualifying Conditions</h2>
      <Checklist
        items={[
          'Must be an employee (not a worker or self-employed person)',
          <>At least <strong>26 weeks' continuous employment</strong> by the end of the Qualifying Week (the 15th week before EWC, or the week of the matching notification for adoptions)</>,
          <>AWE at or above the <strong>Lower Earnings Limit (£129/week)</strong></>,
          <>Must be the <strong>biological father</strong>, the mother's <strong>partner</strong>, or the second parent in a joint adoption</>,
          <>Must have, or expect to have, <strong>main responsibility</strong> for the child's upbringing alongside the mother or primary adopter</>,
          <>Must give at least <strong>28 days' notice</strong> before each block of paternity leave taken</>,
          <>Cannot receive SPP at the same time as <strong>SMP, SAP, or ShPP</strong></>,
        ]}
      />

      {/* ── 3. The Entitlement ───────────────────────── */}
      <h2>3. The Entitlement</h2>

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
        after the birth and the second week later for example when the mother returns to work
        or when childcare arrangements change. <strong>28 days' notice</strong> is required
        before each separate block.
      </Notice>

      {/* ── 4. Worked Calculation ────────────────────── */}
      <h2>4. Worked Calculation</h2>

      <div className="persona-box">
        <div className="persona-box__name">Saugat KC</div>
        <p>Monthly salary: <strong>£5,000</strong> · AWE: <strong>£1,153.85/week</strong></p>
        <p>
          90% of AWE = £1,038.46 ;above the flat rate of £194.32, so the
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
            <td>SPP: 2 weeks</td>
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


      <NextPageLink to="sap" onNavigate={onNavigate} />
    </>
  );
}
