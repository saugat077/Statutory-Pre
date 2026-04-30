import type { SlideMeta } from '../types'

export const meta: SlideMeta = {
  id: 11,
  title: 'Employer Responsibilities',
  subtitle: 'HR + Payroll operational checklist',
  icon: 'fa-list-check',
}

const html = `<div class="slide-container" style="position:relative; width:1280px; height:720px; overflow:hidden; background:#F6FAFC;">
<!-- Background -->
<div data-object="true" data-object-type="shape" style="position:absolute; left:0px; top:0px; width:1280px; height:720px; background:#F6FAFC; z-index:1;"></div>
<div data-object="true" data-object-type="shape" style="position:absolute; left:0px; top:0px; width:1280px; height:112px; background:#0F6E7A; z-index:1;"></div>
<div data-object="true" data-object-type="shape" style="position:absolute; left:0px; top:112px; width:1280px; height:6px; background:#16B3A8; z-index:1;"></div>
<!-- Title -->
<div data-object="true" data-object-type="textbox" style="position:absolute; left:64px; top:24px; width:1152px; height:74px; z-index:10;">
<p style="margin:0; font-family:'Inter', sans-serif; font-size:32px; line-height:1.15; font-weight:800; color:#EFFFFD;">Employer Responsibilities</p>
<p style="margin:6px 0 0 0; font-family:'Inter', sans-serif; font-size:14px; line-height:1.35; font-weight:500; color:#D7FFFB;">Operational checklist for statutory leave &amp; pay administration (HR + Payroll)</p>
</div>
<!-- Two-column cards -->
<div data-object="true" data-object-type="shape" style="position:absolute; left:64px; top:150px; width:560px; height:472px; background:#FFFFFF; border:1px solid #D7E8EB; border-radius:18px; z-index:1;"></div>
<div data-object="true" data-object-type="shape" style="position:absolute; left:656px; top:150px; width:560px; height:472px; background:#FFFFFF; border:1px solid #D7E8EB; border-radius:18px; z-index:1;"></div>
<!-- LEFT COLUMN: Eligibility & calculation -->
<div data-object="true" data-object-type="icon" style="position:absolute; left:104px; top:178px; width:30px; height:30px; z-index:10; color:#0F6E7A;">
<i class="fa-solid fa-list-check" style="font-size:24px; line-height:30px;"></i>
</div>
<div data-object="true" data-object-type="textbox" style="position:absolute; left:140px; top:172px; width:448px; height:34px; z-index:10;">
<p style="margin:0; font-family:'Inter', sans-serif; font-size:18px; line-height:1.25; font-weight:800; color:#0B2D39;">Eligibility assessment &amp; calculations</p>
</div>
<div data-object="true" data-object-type="textbox" style="position:absolute; left:104px; top:212px; width:488px; height:178px; z-index:10;">
<ul style="margin:0; padding-left:18px; font-family:'Inter', sans-serif; font-size:14px; line-height:1.55; color:#2E5862;">
<li>Confirm <span style="font-weight:800; color:#0B2D39;">employment status</span> (employee vs worker) and the correct <span style="font-weight:800; color:#0B2D39;">qualifying/matching week</span></li>
<li>Calculate <span style="font-weight:800; color:#0B2D39;">Average Weekly Earnings (AWE)</span> using payroll data for the relevant period</li>
<li>Apply the correct <span style="font-weight:800; color:#0B2D39;">rate, weeks and caps</span> (e.g., SMP/SAP 6 weeks @ 90% then standard rate)</li>
<li>Where not eligible for statutory pay, signpost alternatives (e.g., <span style="font-weight:800; color:#0B2D39;">Maternity Allowance</span>) and document the outcome</li>
</ul>
</div>
<!-- LEFT COLUMN divider -->
<div data-object="true" data-object-type="shape" style="position:absolute; left:92px; top:408px; width:504px; height:1px; background:#E6F0F2; z-index:1;"></div>
<!-- LEFT COLUMN: Pay processing -->
<div data-object="true" data-object-type="icon" style="position:absolute; left:104px; top:426px; width:30px; height:30px; z-index:10; color:#16B3A8;">
<i class="fa-solid fa-calculator" style="font-size:24px; line-height:30px;"></i>
</div>
<div data-object="true" data-object-type="textbox" style="position:absolute; left:140px; top:420px; width:448px; height:34px; z-index:10;">
<p style="margin:0; font-family:'Inter', sans-serif; font-size:18px; line-height:1.25; font-weight:800; color:#0B2D39;">Pay processing (payroll controls)</p>
</div>
<div data-object="true" data-object-type="textbox" style="position:absolute; left:104px; top:460px; width:488px; height:156px; z-index:10;">
<ul style="margin:0; padding-left:18px; font-family:'Inter', sans-serif; font-size:14px; line-height:1.55; color:#2E5862;">
<li>Pay statutory amounts <span style="font-weight:800; color:#0B2D39;">via payroll</span> and deduct <span style="font-weight:800; color:#0B2D39;">tax and NIC</span> as normal</li>
<li>Align payments to the employee’s <span style="font-weight:800; color:#0B2D39;">pay frequency</span> (weekly/monthly) and qualifying days where relevant (SSP)</li>
<li>Ensure <span style="font-weight:800; color:#0B2D39;">payslips</span> clearly show statutory pay and any contractual enhancement</li>
<li>Use GOV.UK calculators and payroll software checks to reduce <span style="font-weight:800; color:#0B2D39;">errors and disputes</span></li>
</ul>
</div>
<!-- RIGHT COLUMN: Notice, evidence & records -->
<div data-object="true" data-object-type="icon" style="position:absolute; left:696px; top:178px; width:30px; height:30px; z-index:10; color:#0F6E7A;">
<i class="fa-solid fa-envelope-open-text" style="font-size:24px; line-height:30px;"></i>
</div>
<div data-object="true" data-object-type="textbox" style="position:absolute; left:732px; top:172px; width:460px; height:34px; z-index:10;">
<p style="margin:0; font-family:'Inter', sans-serif; font-size:18px; line-height:1.25; font-weight:800; color:#0B2D39;">Notice &amp; evidence management</p>
</div>
<div data-object="true" data-object-type="textbox" style="position:absolute; left:696px; top:212px; width:488px; height:186px; z-index:10;">
<ul style="margin:0; padding-left:18px; font-family:'Inter', sans-serif; font-size:14px; line-height:1.55; color:#2E5862;">
<li>Track statutory <span style="font-weight:800; color:#0B2D39;">notice deadlines</span> (e.g., SMP start 28 days; SPL/ShPP 8 weeks)</li>
<li>Collect and store required <span style="font-weight:800; color:#0B2D39;">proof</span> (e.g., <span style="font-weight:800; color:#0B2D39;">MATB1</span>, matching letter/certificate, declarations)</li>
<li>Confirm leave dates in writing within <span style="font-weight:800; color:#0B2D39;">28 days</span> where required (maternity/adoption)</li>
<li>Handle date changes consistently (e.g., return-to-work change generally needs <span style="font-weight:800; color:#0B2D39;">8 weeks’ notice</span>)</li>
</ul>
</div>
<!-- RIGHT COLUMN divider -->
<div data-object="true" data-object-type="shape" style="position:absolute; left:684px; top:414px; width:504px; height:1px; background:#E6F0F2; z-index:1;"></div>
<!-- RIGHT COLUMN: Records & non-payment forms -->
<div data-object="true" data-object-type="icon" style="position:absolute; left:696px; top:432px; width:30px; height:30px; z-index:10; color:#16B3A8;">
<i class="fa-solid fa-archive" style="font-size:24px; line-height:30px;"></i>
</div>
<div data-object="true" data-object-type="textbox" style="position:absolute; left:732px; top:426px; width:460px; height:34px; z-index:10;">
<p style="margin:0; font-family:'Inter', sans-serif; font-size:18px; line-height:1.25; font-weight:800; color:#0B2D39;">Records &amp; statutory forms</p>
</div>
<div data-object="true" data-object-type="textbox" style="position:absolute; left:696px; top:466px; width:472px; height:164px; z-index:10;">
<ul style="margin:0; padding-left:18px; font-family:'Inter', sans-serif; font-size:13.5px; line-height:1.5; color:#2E5862;">
<li>Keep statutory pay records for <span style="font-weight:800; color:#0B2D39;">3 years</span> from the end of the tax year (SMP/SPP/SAP/ShPP/SPBP)</li>
<li>For SSP, keep appropriate <span style="font-weight:800; color:#0B2D39;">sickness absence evidence</span> to support decisions (in case of disputes)</li>
<li>Issue non-payment forms within required timescales: <span style="font-weight:800; color:#0B2D39;">SMP1</span>, <span style="font-weight:800; color:#0B2D39;">SPP1</span>, <span style="font-weight:800; color:#0B2D39;">SAP1</span> (and SSP1 where applicable)</li>
<li>Maintain an auditable trail: decisions, dates, payments, and <span style="font-weight:800; color:#0B2D39;">weeks not paid + reason</span></li>
</ul>
</div>
<!-- Bottom callout -->
<div data-object="true" data-object-type="shape" style="position:absolute; left:64px; top:640px; width:1152px; height:70px; background:#EFFFFD; border:1px solid #CFEDEC; border-radius:16px; z-index:1;"></div>
<div data-object="true" data-object-type="icon" style="position:absolute; left:96px; top:662px; width:22px; height:22px; z-index:10; color:#0F6E7A;">
<i class="fa-solid fa-lightbulb" style="font-size:18px; line-height:22px;"></i>
</div>
<div data-object="true" data-object-type="textbox" style="position:absolute; left:124px; top:650px; width:1072px; height:54px; z-index:10;">
<p style="margin:0; font-family:'Inter', sans-serif; font-size:12.5px; line-height:1.32; color:#2E5862;">
      Good practice: use a <span style="font-weight:800; color:#0B2D39;">single case tracker</span> (key dates, evidence, eligibility, pay weeks, forms issued) shared between HR and Payroll to prevent missed deadlines.
    </p>
<p style="margin:4px 0 0 0; font-family:'Inter', sans-serif; font-size:12px; line-height:1.22; color:#4B6A73;">
      Control point: test statutory pay calculations after any <span style="font-weight:800; color:#0B2D39;">rate/threshold change</span> (e.g., 6 April updates) and document payroll sign-off.
    </p>
</div>
</div>`

export default function Slide11() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
