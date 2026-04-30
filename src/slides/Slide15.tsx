import type { SlideMeta } from '../types'

export const meta: SlideMeta = {
  id: 15,
  title: 'Summary & Key Takeaways',
  subtitle: 'Compliance actions & resources',
  icon: 'fa-circle-check',
}

const html = `<div class="slide-container" style="position:relative; width:1280px; height:720px; overflow:hidden; background:#F6FAFC;">
<!-- Background -->
<div data-object="true" data-object-type="shape" style="position:absolute; left:0px; top:0px; width:1280px; height:720px; background:#F6FAFC; z-index:1;"></div>
<div data-object="true" data-object-type="shape" style="position:absolute; left:0px; top:0px; width:1280px; height:112px; background:#0F6E7A; z-index:1;"></div>
<div data-object="true" data-object-type="shape" style="position:absolute; left:0px; top:112px; width:1280px; height:6px; background:#16B3A8; z-index:1;"></div>
<!-- Title -->
<div data-object="true" data-object-type="textbox" style="position:absolute; left:64px; top:22px; width:1152px; height:86px; z-index:10;">
<p style="margin:0; font-family:'Inter', sans-serif; font-size:32px; line-height:1.15; font-weight:800; color:#EFFFFD;">Summary &amp; Key Takeaways</p>
<p style="margin:6px 0 0 0; font-family:'Inter', sans-serif; font-size:14px; line-height:1.35; font-weight:500; color:#D7FFFB;">
        Practical compliance actions for HR &amp; payroll — plus resources to keep you audit-ready
      </p>
</div>
<!-- Left rail -->
<div data-object="true" data-object-type="shape" style="position:absolute; left:64px; top:150px; width:88px; height:512px; background:#FFFFFF; border:1px solid #D7E8EB; border-radius:18px; z-index:1;"></div>
<!-- Rail icons -->
<div data-object="true" data-object-type="icon" style="position:absolute; left:92px; top:188px; width:32px; height:32px; z-index:10; color:#0F6E7A;">
<i class="fa-solid fa-circle-check" style="font-size:22px; line-height:32px;"></i>
</div>
<div data-object="true" data-object-type="icon" style="position:absolute; left:92px; top:346px; width:32px; height:32px; z-index:10; color:#0F6E7A;">
<i class="fa-solid fa-wrench" style="font-size:22px; line-height:32px;"></i>
</div>
<div data-object="true" data-object-type="icon" style="position:absolute; left:92px; top:504px; width:32px; height:32px; z-index:10; color:#0F6E7A;">
<i class="fa-solid fa-link" style="font-size:22px; line-height:32px;"></i>
</div>
<!-- Card 1: Compliance essentials -->
<div data-object="true" data-object-type="shape" style="position:absolute; left:168px; top:150px; width:1048px; height:170px; background:#FFFFFF; border:1px solid #D7E8EB; border-radius:18px; z-index:1;"></div>
<div data-object="true" data-object-type="textbox" style="position:absolute; left:196px; top:170px; width:952px; height:136px; z-index:10;">
<p style="margin:0; font-family:'Inter', sans-serif; font-size:16px; line-height:1.25; font-weight:800; color:#0B2D39;">1) Compliance essentials (reduce disputes &amp; rework)</p>
<ul style="margin:10px 0 0 0; padding-left:18px; font-family:'Inter', sans-serif; font-size:14px; line-height:1.55; color:#2E5862;">
<li>Confirm <span style="font-weight:800; color:#0B2D39;">employment status</span> (employee vs worker) and apply the correct statutory rule set</li>
<li>Validate <span style="font-weight:800; color:#0B2D39;">qualifying week / matching week</span> and <span style="font-weight:800; color:#0B2D39;">AWE</span> (use GOV.UK calculators where possible)</li>
<li>Capture notice &amp; evidence on time (e.g., <span style="font-weight:800; color:#0B2D39;">MATB1</span>, adoption matching letter); confirm dates in writing when required</li>
<li>Process statutory pay through payroll with <span style="font-weight:800; color:#0B2D39;">tax/NIC</span> deductions; keep required records for audit</li>
</ul>
</div>
<!-- Card 2: Payroll actions / April 2026 readiness -->
<div data-object="true" data-object-type="shape" style="position:absolute; left:168px; top:336px; width:1048px; height:170px; background:#EFFFFD; border:1px solid #CFEDEC; border-radius:18px; z-index:1;"></div>
<div data-object="true" data-object-type="textbox" style="position:absolute; left:196px; top:356px; width:952px; height:136px; z-index:10;">
<p style="margin:0; font-family:'Inter', sans-serif; font-size:16px; line-height:1.25; font-weight:800; color:#0B2D39;">2) Action checklist (HR + payroll readiness)</p>
<ul style="margin:10px 0 0 0; padding-left:18px; font-family:'Inter', sans-serif; font-size:14px; line-height:1.55; color:#2E5862;">
<li>Update payroll settings for <span style="font-weight:800; color:#0F6E7A;">6 Apr 2026</span>: SSP Day 1 logic, rate/threshold uplifts, and eligibility validations</li>
<li>Test RTI/EPS outputs and statutory pay recovery (standard <span style="font-weight:800; color:#0B2D39;">92%</span>; Small Employers’ Relief if eligible)</li>
<li>Refresh policies, templates and manager guidance (paternity leave day‑one; SSP changes; notice handling)</li>
<li>Build a consistent workflow: eligibility check → written confirmation → payroll calculation → records → reclaim/reporting</li>
</ul>
</div>
<!-- Card 3: Resources -->
<div data-object="true" data-object-type="shape" style="position:absolute; left:168px; top:522px; width:1048px; height:140px; background:#FFFFFF; border:1px solid #D7E8EB; border-radius:18px; z-index:1;"></div>
<div data-object="true" data-object-type="textbox" style="position:absolute; left:196px; top:542px; width:952px; height:34px; z-index:10;">
<p style="margin:0; font-family:'Inter', sans-serif; font-size:16px; line-height:1.25; font-weight:800; color:#0B2D39;">3) Recommended resources (keep one source of truth)</p>
</div>
<div data-object="true" data-object-type="textbox" style="position:absolute; left:196px; top:578px; width:952px; height:74px; z-index:10;">
<ul style="margin:0; padding-left:18px; font-family:'Inter', sans-serif; font-size:13.5px; line-height:1.5; color:#2E5862;">
<li>GOV.UK: <span style="font-weight:800; color:#0B2D39;">Rates and thresholds for employers</span> (annual statutory rate updates)</li>
<li>GOV.UK calculators: <span style="font-weight:800; color:#0B2D39;">SSP</span> and <span style="font-weight:800; color:#0B2D39;">Maternity/Paternity/Adoption</span> calculators (eligibility + AWE checks)</li>
<li>Acas templates: SPL/ShPP notices and forms (standardised employee communications)</li>
</ul>
</div>
<!-- Footer callout -->
<div data-object="true" data-object-type="shape" style="position:absolute; left:64px; top:672px; width:1152px; height:38px; background:#0B2D39; border-radius:12px; z-index:1;"></div>
<div data-object="true" data-object-type="icon" style="position:absolute; left:88px; top:681px; width:20px; height:20px; z-index:10; color:#16B3A8;">
<i class="fa-solid fa-shield-halved" style="font-size:15px; line-height:20px;"></i>
</div>
<div data-object="true" data-object-type="textbox" style="position:absolute; left:114px; top:679px; width:1068px; height:28px; z-index:10;">
<p style="margin:0; font-family:'Inter', sans-serif; font-size:12px; line-height:1.35; color:#EFFFFD;">
        Best practice: document decisions, retain evidence, and validate rates/thresholds before each payroll run — statutory pay is a minimum and errors can trigger disputes.
      </p>
</div>
</div>`

export default function Slide15() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
