import { PageProps } from '../types';
import { Notice, RateCard, RateGrid, DataTable, Checklist, Tag, NextPageLink } from '../shared';

export function SNCP({ onNavigate }: PageProps) {
  return (
    <>
      <div className="page-title">
        <Tag code="SNCP" color="#d4351c" large />
        Statutory Neonatal Care Pay
      </div>
      <div className="page-subtitle">
        Neonatal Care (Leave and Pay) Act 2023 — in force 6 April 2025
      </div>

      <div className="callout">
        <div className="callout__title">⚡ What Makes SNCP Unique</div>
        <p>
          SNCP <strong>stacks on top of other statutory leave</strong> — it does not replace
          or reduce any existing entitlement. A mother receiving SMP can{' '}
          <strong>also receive SNCP at the same time</strong> if her baby qualifies for
          neonatal care. Think of it as an extra layer of protection added to the existing
          framework, not a replacement for it.
        </p>
      </div>

      {/* ── 1. Introduction ─────────────────────────── */}
      <h2>1. Introduction</h2>
      <p>
        SNCP is the <strong>most recently introduced</strong> statutory payment in the UK,
        brought in from <strong>6 April 2025</strong> under the Neonatal Care (Leave and Pay)
        Act 2023. Before this law, parents whose babies required neonatal care had no specific
        statutory entitlement — they had to use their maternity or paternity leave while their
        baby was still in hospital, leaving little or no leave for when the baby finally came home.
      </p>
      <p>
        SNCP provides <strong>additional</strong> paid leave and pay to parents of babies who
        require neonatal care shortly after birth. The key word is additional — it sits on top
        of whatever other statutory leave the parent is already entitled to.
      </p>

      <Notice variant="info" title="ℹ Applies to babies born on or after 6 April 2025">
        SNCP only applies to babies born on or after 6 April 2025. Babies born before that
        date are not covered, even if their neonatal care continues after the commencement date.
      </Notice>

      {/* ── 2. Key Definitions ───────────────────────── */}
      <h2>2. Key Definitions</h2>
      <DataTable
        headers={['Term', 'What It Means']}
        rows={[
          [<strong>Neonatal Care</strong>,           'Medical care received in a hospital or similar neonatal unit by a baby aged 28 days old or younger at the time care begins.'],
          [<strong>Qualifying Period of Care</strong>,'The baby must have received neonatal care for at least 7 consecutive days to trigger any SNCP entitlement. Care lasting 6 days or fewer does not qualify.'],
          [<strong>Tier 1 Leave</strong>,            'Leave taken during or immediately after the period of neonatal care — while the situation is ongoing. Shorter notice requirements apply.'],
          [<strong>Tier 2 Leave</strong>,            'Leave taken later — any time within 68 weeks of the baby\'s birth date, after neonatal care has ended. Requires 28 days\' notice.'],
        ]}
      />

      {/* ── 3. Qualifying Conditions ─────────────────── */}
      <h2>3. Qualifying Conditions</h2>
      <p>Two sets of conditions must be met — one for the parent, one for the baby:</p>

      <h3>The Parent</h3>
      <Checklist
        items={[
          'Must be an employee (not a worker or self-employed)',
          '26 weeks\' continuous employment by the week the baby is born',
          <>AWE at or above the <strong>Lower Earnings Limit (£125/week)</strong></>,
          'Must be a qualifying parent: biological parent, partner, adoptive parent, or intended parent in a surrogacy arrangement',
          'Notice given as soon as reasonably practicable (Tier 1), or 28 days in advance (Tier 2)',
        ]}
      />

      <h3>The Baby</h3>
      <Checklist
        items={[
          <>Born on or after <strong>6 April 2025</strong></>,
          <>Admitted to neonatal care aged <strong>28 days old or younger</strong></>,
          <>Received at least <strong>7 consecutive days</strong> of qualifying neonatal care</>,
        ]}
      />

      {/* ── 4. The Entitlement ───────────────────────── */}
      <h2>4. The Entitlement</h2>
      <p>
        Entitlement accrues at <strong>1 week of SNCP for each week of neonatal care</strong>,
        capped at 12 weeks. The first 7 days of care triggers 1 week; each further 7-day
        period adds another week.
      </p>
      <DataTable
        headers={['Baby\'s Neonatal Care Duration', 'SNCP Entitlement per Parent']}
        highlightRows={[7]}
        rows={[
          ['7 – 13 days',    '1 week'],
          ['14 – 20 days',   '2 weeks'],
          ['21 – 27 days',   '3 weeks'],
          ['28 – 34 days',   '4 weeks'],
          ['35 – 41 days',   '5 weeks'],
          ['42 – 48 days',   '6 weeks'],
          ['Each further 7 days', '+1 week'],
          [<strong>56+ days (8 weeks or more)</strong>, <strong>Maximum: 12 weeks</strong>],
        ]}
      />

      <RateGrid>
        <RateCard
          label="Max per parent"
          value="12 weeks"
          sub="Each parent has their own entitlement — not a shared pot"
          accent="#d4351c"
        />
        <RateCard
          label="Weekly Rate"
          value={<>£194.32<span className="rate-card__unit">/wk</span></>}
          sub="Or 90% AWE if that is lower"
          accent="#d4351c"
        />
        <RateCard
          label="Window"
          value="68 weeks"
          sub="From the baby's date of birth"
          accent="#d4351c"
        />
      </RateGrid>

      <Notice variant="ok" title="✓ Not a shared pot">
        Unlike ShPP, SNCP is <strong>not shared between parents</strong>. Each qualifying parent
        has their own independent entitlement of up to 12 weeks. If both parents qualify, each
        can claim up to 12 weeks separately — potentially 24 weeks of SNCP in total across the
        family.
      </Notice>

      {/* ── 5. Worked Calculation ────────────────────── */}
      <h2>5. Worked Calculation — Sarah Thompson</h2>

      <div className="persona-box">
        <div className="persona-box__name">Sarah Thompson — baby admitted to NICU for 4 weeks</div>
        <p>AWE: <strong>£1,153.85/week</strong> · Flat rate applies: <strong>£194.32/week</strong></p>
        <p>
          Sarah's baby is born and immediately admitted to the neonatal unit. The baby receives
          28 days (4 weeks) of qualifying neonatal care. Sarah is <em>simultaneously</em>{' '}
          receiving SMP — SNCP runs in addition to this.
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
            <td>Baby's neonatal care</td>
            <td>28 days = 4 weeks</td>
            <td>4 weeks of SNCP entitlement</td>
          </tr>
          <tr>
            <td>AWE check</td>
            <td>90% × £1,153.85 = £1,038.46 &gt; £194.32</td>
            <td>Flat rate applies</td>
          </tr>
          <tr>
            <td>SNCP — 4 weeks</td>
            <td>4 × £194.32</td>
            <td>£777.28</td>
          </tr>
          <tr className="calc-total">
            <td><strong>Total SNCP payable</strong></td>
            <td>—</td>
            <td><strong>£777.28</strong></td>
          </tr>
        </tbody>
      </table>

      <Notice variant="info" title="ℹ What Sarah receives in total during NICU">
        During the 4 weeks her baby is in the neonatal unit, Sarah receives both{' '}
        <strong>SMP</strong> (£194.32/week, as she is in weeks 7–39 of maternity leave) and{' '}
        <strong>SNCP</strong> (£194.32/week). Her total statutory income during those 4 weeks
        is <strong>£194.32 + £194.32 = £388.64/week</strong>.
      </Notice>

      {/* ── Employer Reclaim ─────────────────────────── */}
      <h2>Employer Reclaim</h2>
      <DataTable
        headers={['Employer', 'Prior Year NIC Liability', 'Reclaim', "Sarah's Example (4 wks)"]}
        rows={[
          ['Large employer', '> £45,000/year', <strong>92%</strong>, '£715.10'],
          ['Small Employer (SER)', '≤ £45,000/year', <strong>103%</strong>, '£800.60'],
        ]}
      />
      <NextPageLink to="ssp" onNavigate={onNavigate} />
    </>
  );
}
