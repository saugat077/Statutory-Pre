import { PageProps } from '../types';

const terms: { term: string; definition: string }[] = [
  {
    term: 'AAL — Additional Adoption Leave',
    definition: 'The second 26-week block of adoption leave, taken immediately after Ordinary Adoption Leave (OAL). The employee has a right to return to the same or a suitable alternative job. SAP is not paid during AAL — pay only covers the first 39 weeks.',
  },
  {
    term: 'AML — Additional Maternity Leave',
    definition: 'The second 26-week block of maternity leave, taken after OML. The employee has the right to return to the same or a suitable alternative job (slightly weaker return right than OML). SMP does not extend into AML — it covers only the first 39 weeks.',
  },
  {
    term: 'AWE — Average Weekly Earnings',
    definition: 'The average amount an employee earns each week, used in two ways: (1) to check whether their earnings meet the LEL, and (2) to calculate the "enhanced" 90% rate for SMP and SAP. Calculated by adding up 8 weeks\' worth of gross pay immediately before the relevant qualifying date, then dividing by 8. For SSP, AWE covers the 8 complete weeks before the first day of sickness.',
  },
  {
    term: 'Binding Period',
    definition: 'Once the mother or primary adopter submits a Curtailment Notice, it is legally binding — they generally cannot take it back. The only exceptions are very specific situations, such as the partner dying or the couple\'s relationship breaking down before the partner\'s ShPP has started. Employers should treat a Curtailment Notice as final once submitted.',
  },
  {
    term: 'Curtailment Notice',
    definition: 'A written notice from the mother or primary adopter to their employer, formally cutting short their SMP or SAP before the full entitlement is used. This is what "creates" the ShPP pot — without a Curtailment Notice, there is nothing to share. Once submitted it becomes binding (see Binding Period).',
  },
  {
    term: 'EDD — Expected Date of Delivery',
    definition: 'The medically expected date the baby is due, as stated on the MATB1 certificate. Used to identify the Expected Week of Childbirth (EWC).',
  },
  {
    term: 'Employment Rights Act 2025',
    definition: 'The legislation that introduced the most significant SSP reforms in over 40 years, effective 6 April 2026. Three key changes: (1) waiting days were abolished — SSP is now payable from the first qualifying day of sickness; (2) the Lower Earnings Limit was removed as an SSP condition — all employees qualify regardless of pay; (3) a new 80% of AWE rule was introduced to protect lower-paid employees. The same Act also extended rights in other areas of employment law.',
  },
  {
    term: 'ESA — Employment and Support Allowance',
    definition: 'A DWP benefit for people who are unable to work due to illness or disability. When SSP is exhausted (28 weeks used), the employer must issue Form SSP1 — the employee can then claim "New Style ESA" from DWP. For most new claimants Universal Credit has replaced traditional ESA, but New Style ESA remains available separately.',
  },
  {
    term: 'EWC — Expected Week of Childbirth',
    definition: 'The week — running Sunday to Saturday — in which the baby is expected to be born. Most SMP and SPP calculations are anchored to this week. The Qualifying Week (QW), for example, is the 15th week before the EWC. If a baby arrives early or late, the EWC does not change — it is based on the expected date, not the actual birth date.',
  },
  {
    term: 'Jack\'s Law',
    definition: 'The informal name for the Parental Bereavement (Leave and Pay) Act 2018, which created SPBP. The law is named after Jack Herd, who died aged 23 months in 2010. His mother, Lucy Herd, campaigned for nearly 10 years for bereaved parents to have a statutory right to paid leave rather than having to rely on employer goodwill or use holiday entitlement. The law came into force in April 2020.',
  },
  {
    term: 'KIT Day — Keeping In Touch Day',
    definition: 'A day an employee on maternity or adoption leave can work for their employer without losing statutory pay for that week. Up to 10 KIT days are available during the whole leave period. Even one hour of work on any given day counts as a full KIT day. Both the employer and employee must agree to KIT days — neither can insist.',
  },
  {
    term: 'LEL — Lower Earnings Limit',
    definition: 'The minimum average weekly pay an employee must earn to qualify for family-related statutory payments (SMP, SPP, SAP, ShPP, SPBP, SNCP). Set at £125/week for 2026/27. Important exception: from 6 April 2026, the LEL was removed as an SSP qualifying condition — all employees can now receive SSP regardless of how much they earn.',
  },
  {
    term: 'MATB1 — Maternity Certificate',
    definition: 'A form issued by a GP or midwife confirming the Expected Week of Childbirth. Employers need this before they can pay SMP. It can be issued no earlier than 20 weeks before the due date. The employee should give it to their employer as early as possible to allow SMP to be set up correctly.',
  },
  {
    term: 'Matching Date',
    definition: 'The date an approved adoption agency formally matches a prospective adopter with a specific child. This date is the anchor point for SAP: the 26-week qualifying service test must be met by the week this date falls in, and the relevant period for calculating AWE ends at the last normal pay day on or before this date. Leave and pay can start from the Matching Date or up to 14 days before the child is placed.',
  },
  {
    term: 'Neonatal Care',
    definition: 'Specialist medical care provided to a newborn baby in a hospital neonatal unit (such as a NICU or SCBU). For SNCP to apply, two conditions must be met: (1) the baby must have been admitted to neonatal care aged 28 days or younger; and (2) the baby must have received at least 7 consecutive days of qualifying care. Care of 6 days or fewer does not trigger any SNCP entitlement.',
  },
  {
    term: 'OAL — Ordinary Adoption Leave',
    definition: 'The first 26-week block of adoption leave, beginning from the Placement Date (or earlier). The employee has the right to return to exactly the same job after OAL.',
  },
  {
    term: 'OML — Ordinary Maternity Leave',
    definition: 'The first 26-week block of maternity leave. The employee has the strongest right to return — back to exactly the same job on the same terms and conditions. This right is slightly weaker during Additional Maternity Leave.',
  },
  {
    term: 'PIW — Period of Incapacity for Work',
    definition: 'The block of sickness time that triggers SSP. From 6 April 2026: a PIW starts from the very first qualifying day of sickness — previously, 4 or more consecutive calendar days were needed. Two separate PIWs separated by 8 weeks or fewer automatically link together and count as one continuous PIW. This matters because the 28-week SSP maximum runs across all linked PIWs, not just the current absence.',
  },
  {
    term: 'Placement Date',
    definition: 'The date a child is physically placed in the adopter\'s home. For UK domestic adoption, leave and pay can begin on or after the Placement Date (or up to 14 days before it). For overseas adoption, different rules apply and the relevant date is the date of entry into Great Britain.',
  },
  {
    term: 'QD — Qualifying Day',
    definition: 'For SSP: the days of the week on which the employee is contracted to work. SSP is only paid for qualifying days — not rest days or non-contracted days. If an employee works Monday to Friday, their 5 qualifying days are Mon–Fri. The daily SSP rate is calculated by dividing the weekly rate by the number of qualifying days in that week.',
  },
  {
    term: 'QW — Qualifying Week',
    definition: 'The 15th week before the Expected Week of Childbirth. To qualify for SMP or SPP, an employee must have completed 26 weeks\' continuous service by the end of this week. It is assessed at the end of Saturday of the Qualifying Week — not at the point when leave starts. If an employee misses this threshold by even one day, they cannot claim SMP (though they may be able to claim Maternity Allowance from DWP instead).',
  },
  {
    term: 'SAP — Statutory Adoption Pay',
    definition: 'Pay for up to 39 weeks for employees adopting a child through an approved adoption agency. Week 1: 90% of AWE (no cap); weeks 2–39: £194.32/week or 90% AWE, whichever is lower. Reclaimed from HMRC at 92% (large employers) or 103% (SER). Rate confirmed for 2026/27.',
  },
  {
    term: 'SC2 — Self-Certification',
    definition: 'A form (or an employer\'s own equivalent) completed by the employee themselves to certify that they were ill. Required for absences of up to 7 calendar days. No GP or medical professional is involved — the employee\'s own declaration is sufficient.',
  },
  {
    term: 'SC3 — Paternity Pay Declaration',
    definition: 'A form used by an employee to declare their eligibility for Statutory Paternity Pay and to give notice of when they intend to take leave. Employers may accept a written notice in a different format in lieu of the official SC3 form.',
  },
  {
    term: 'SER — Small Employer Relief',
    definition: 'An enhanced HMRC reclaim rate available to smaller employers. Standard employers can reclaim 92% of statutory payments made (except SSP which cannot be reclaimed). Employers whose total employer Class 1 NIC bill in the previous tax year was £45,000 or less can reclaim 103% — the extra 3% offsets the employer NIC due on the statutory payments.',
  },
  {
    term: 'ShPL — Shared Parental Leave (also referred to as Shared Maternity/Parental Leave)',
    definition: 'Leave that a mother or primary adopter creates by formally ending their own maternity or adoption leave early (curtailment). The remaining leave can then be shared between both parents in flexible blocks. Up to 50 weeks of leave are available to share (52 total minus 2 compulsory maternity weeks). Both parents must actively opt in — nothing happens automatically.',
  },
  {
    term: 'ShPP — Statutory Shared Parental Pay',
    definition: 'Pay during Shared Parental Leave. Up to 37 weeks of pay are available to share (39 total minus 2 compulsory maternity weeks). Rate: £194.32/week or 90% of that parent\'s own AWE, whichever is lower. Each parent\'s ShPP is paid by their own employer and reclaimed from HMRC independently. Rate confirmed for 2026/27.',
  },
  {
    term: 'SML — Statutory Maternity Leave',
    definition: 'The full 52-week leave entitlement (OML + AML). All employees are entitled to SML from the very first day of employment — there is no minimum service requirement for the leave itself. The pay element (SMP) requires 26 weeks\' service.',
  },
  {
    term: 'SMP — Statutory Maternity Pay',
    definition: 'Pay for up to 39 weeks of maternity leave. Weeks 1–6: 90% of AWE (no upper cap). Weeks 7–39: £194.32/week or 90% of AWE, whichever is lower. Paid by the employer and reclaimed from HMRC at 92% or 103% (SER). If the employee leaves their job during or after maternity leave, they do not have to repay SMP. Rate confirmed for 2026/27.',
  },
  {
    term: 'SNCP — Statutory Neonatal Care Pay',
    definition: 'Introduced 6 April 2025 under the Neonatal Care (Leave and Pay) Act 2023. Additional paid leave for parents of babies requiring neonatal care — it stacks on top of any other statutory leave and pay the parent is already receiving. Up to 12 weeks per parent (not shared). Rate: £194.32/week or 90% of AWE, whichever is lower (2026/27). Only applies to babies born on or after 6 April 2025.',
  },
  {
    term: 'SPBP — Statutory Parental Bereavement Pay',
    definition: '2 weeks\' pay for employed parents following the death of a child under 18, or a stillbirth after 24 completed weeks of pregnancy. Can be taken as one block or two separate 1-week blocks at different times, within 56 weeks of the bereavement. Rate: £194.32/week or 90% of AWE, whichever is lower (2026/27). Named Jack\'s Law after the campaigning that led to its creation.',
  },
  {
    term: 'SPLIT Day — Shared Parental Leave In Touch Day',
    definition: 'The ShPL equivalent of a KIT day. A day when a parent on Shared Parental Leave can work without losing that week\'s ShPP. Each parent gets up to 20 SPLIT days — twice as many as the 10 KIT days available during maternity/adoption leave. Must be agreed between both the employee and employer.',
  },
  {
    term: 'SPP — Statutory Paternity Pay',
    definition: '1 or 2 weeks\' pay for eligible employees who are the biological father or the partner of the birth mother or primary adopter. From April 2024, the 2 weeks can be taken as 2 separate 1-week blocks at different points within 52 weeks of the birth or placement. Rate: £194.32/week or 90% of AWE, whichever is lower (2026/27).',
  },
  {
    term: 'SSP — Statutory Sick Pay',
    definition: 'Pay for employees who are too ill to work. From 6 April 2026: payable from the first qualifying day of sickness (waiting days abolished); no earnings threshold (LEL removed); rate is £123.25/week or 80% of AWE, whichever is lower. Maximum 28 weeks per linked PIW. Unlike every other statutory payment, SSP cannot be reclaimed from HMRC by most employers — the employer bears the full cost.',
  },
  {
    term: 'SSP1 — SSP End / Refusal Form',
    definition: 'A form the employer must send to the employee within 7 days of SSP ending (e.g. the 28-week maximum has been reached) or when SSP cannot be paid (e.g. the employee does not qualify). The employee needs this form to apply for New Style ESA or Universal Credit from DWP. Failure to issue SSP1 on time can result in a penalty from HMRC.',
  },
  {
    term: 'UC — Universal Credit',
    definition: 'The main working-age benefit administered by DWP, replacing several older benefits. Employees directed via Form SSP1 when SSP is exhausted or not payable can claim UC if they meet the financial eligibility conditions. For employees whose SSP is refused from the outset, UC or New Style ESA may be available immediately.',
  },
];

export function Glossary(_: PageProps) {
  return (
    <>
      <div className="page-title">Glossary</div>
      <div className="page-subtitle">
        Key terms and abbreviations — plain English definitions for payroll students and practitioners
      </div>

      <p>
        All 2026/27 rates apply unless stated otherwise. Definitions reflect the Employment
        Rights Act 2025 reforms to SSP effective 6 April 2026.
      </p>

      <dl>
        {terms.map(({ term, definition }) => (
          <div key={term} className="glossary-item">
            <dt>{term}</dt>
            <dd>{definition}</dd>
          </div>
        ))}
      </dl>

      <hr />
      <p className="page-footer">
        For guidance purposes only. Always refer to HMRC official guidance at GOV.UK before
        processing statutory payments. Tax year 2026/27. This guide is not legal advice.
      </p>
    </>
  );
}
