import type { SlideMeta } from '../types'

export const meta: SlideMeta = {
  id: 13,
  title: 'HMRC Compliance & Reporting',
  subtitle: 'Recovery, RTI/EPS & audit-ready records',
  icon: 'fa-cloud-arrow-up',
}

const html = `<div class="slide-container" style="position:relative; width:1280px; height:720px; overflow:hidden; background:#F6FAFC;">
<!-- Background -->
<div data-object="true" data-object-type="shape" style="position:absolute; left:0px; top:0px; width:1280px; height:720px; background:#F6FAFC; z-index:1;"></div>
<div data-object="true" data-object-type="shape" style="position:absolute; left:0px; top:0px; width:1280px; height:112px; background:#0F6E7A; z-index:1;"></div>
<div data-object="true" data-object-type="shape" style="position:absolute; left:0px; top:112px; width:1280px; height:6px; background:#16B3A8; z-index:1;"></div>
<!-- Title -->
<div data-object="true" data-object-type="textbox" style="position:absolute; left:64px; top:24px; width:1152px; height:74px; z-index:10;">
<p style="margin:0; font-family:'Inter', sans-serif; font-size:32px; line-height:1.15; font-weight:800; color:#EFFFFD;">HMRC Compliance &amp; Reporting</p>
<p style="margin:6px 0 0 0; font-family:'Inter', sans-serif; font-size:14px; line-height:1.35; font-weight:500; color:#D7FFFB;">Recover statutory payments correctly, report via RTI, and maintain HMRC-ready records</p>
</div>
<!-- Two-column cards -->
<div data-object="true" data-object-type="shape" style="position:absolute; left:64px; top:150px; width:560px; height:472px; background:#FFFFFF; border:1px solid #D7E8EB; border-radius:18px; z-index:1;"></div>
<div data-object="true" data-object-type="shape" style="position:absolute; left:656px; top:150px; width:560px; height:472px; background:#FFFFFF; border:1px solid #D7E8EB; border-radius:18px; z-index:1;"></div>
<!-- LEFT COLUMN: Recovery -->
<div data-object="true" data-object-type="icon" style="position:absolute; left:104px; top:178px; width:30px; height:30px; z-index:10; color:#0F6E7A;">
<i class="fa-solid fa-percent" style="font-size:24px; line-height:30px;"></i>
</div>
<div data-object="true" data-object-type="textbox" style="position:absolute; left:140px; top:172px; width:448px; height:34px; z-index:10;">
<p style="margin:0; font-family:'Inter', sans-serif; font-size:18px; line-height:1.25; font-weight:800; color:#0B2D39;">Recovery of statutory payments</p>
</div>
<div data-object="true" data-object-type="textbox" style="position:absolute; left:104px; top:212px; width:488px; height:178px; z-index:10;">
<ul style="margin:0; padding-left:18px; font-family:'Inter', sans-serif; font-size:14px; line-height:1.55; color:#2E5862;">
<li>Most employers can reclaim <span style="font-weight:800; color:#0B2D39;">92%</span> of <span style="font-weight:800; color:#0B2D39;">SMP, SPP, SAP, ShPP</span> and <span style="font-weight:800; color:#0B2D39;">Statutory Parental Bereavement Pay</span></li>
<li><span style="font-weight:800; color:#0B2D39;">Small Employers’ Relief</span> (prior tax year Class 1 NIC ≤ <span style="font-weight:800; color:#0B2D39;">£45,000</span>): reclaim <span style="font-weight:800; color:#0B2D39;">108.5%</span> (commonly used in 2025/26) / <span style="font-weight:800; color:#0B2D39;">109%</span> (2026/27)</li>
<li>Recovery applies to the <span style="font-weight:800; color:#0B2D39;">statutory amount</span> paid (enhanced contractual amounts are not fully reclaimable)</li>
<li>Set off reclaimed amounts against PAYE liabilities or request repayment where eligible</li>
</ul>
</div>
<!-- LEFT COLUMN: Reporting (EPS) -->
<div data-object="true" data-object-type="shape" style="position:absolute; left:92px; top:380px; width:504px; height:1px; background:#E6F0F2; z-index:1;"></div>
<div data-object="true" data-object-type="icon" style="position:absolute; left:104px; top:398px; width:30px; height:30px; z-index:10; color:#16B3A8;">
<i class="fa-solid fa-cloud-arrow-up" style="font-size:24px; line-height:30px;"></i>
</div>
<div data-object="true" data-object-type="textbox" style="position:absolute; left:140px; top:392px; width:448px; height:34px; z-index:10;">
<p style="margin:0; font-family:'Inter', sans-serif; font-size:18px; line-height:1.25; font-weight:800; color:#0B2D39;">RTI reporting: Employer Payment Summary (EPS)</p>
</div>
<div data-object="true" data-object-type="textbox" style="position:absolute; left:104px; top:432px; width:488px; height:178px; z-index:10;">
<ul style="margin:0; padding-left:18px; font-family:'Inter', sans-serif; font-size:14px; line-height:1.55; color:#2E5862;">
<li>Report reclaimed statutory payments through an <span style="font-weight:800; color:#0B2D39;">EPS</span> (not the FPS)</li>
<li>Payroll software should calculate recovery and populate EPS fields automatically</li>
<li>Keep recovery aligned to the <span style="font-weight:800; color:#0B2D39;">correct tax year</span> and employee’s statutory pay weeks</li>
<li>Operate PAYE as normal: statutory pay is subject to <span style="font-weight:800; color:#0B2D39;">tax and NIC</span></li>
</ul>
</div>
<!-- RIGHT COLUMN: Record keeping -->
<div data-object="true" data-object-type="icon" style="position:absolute; left:696px; top:178px; width:30px; height:30px; z-index:10; color:#0F6E7A;">
<i class="fa-solid fa-box-archive" style="font-size:24px; line-height:30px;"></i>
</div>
<div data-object="true" data-object-type="textbox" style="position:absolute; left:732px; top:172px; width:460px; height:34px; z-index:10;">
<p style="margin:0; font-family:'Inter', sans-serif; font-size:18px; line-height:1.25; font-weight:800; color:#0B2D39;">Records &amp; evidence (HMRC ready)</p>
</div>
<div data-object="true" data-object-type="textbox" style="position:absolute; left:696px; top:212px; width:488px; height:220px; z-index:10;">
<ul style="margin:0; padding-left:18px; font-family:'Inter', sans-serif; font-size:14px; line-height:1.55; color:#2E5862;">
<li>Keep statutory family pay records for <span style="font-weight:800; color:#0B2D39;">3 years</span> from the end of the relevant tax year</li>
<li>Retain evidence such as <span style="font-weight:800; color:#0B2D39;">MATB1</span>, adoption match/placement evidence (if requested), and bereavement pay declarations</li>
<li>Maintain dates and amounts: statutory pay start, weekly payments, and <span style="font-weight:800; color:#0B2D39;">weeks not paid</span> (with reason)</li>
<li>For SSP: keep sickness absence records as needed for disputes (HMRC may request to see them)</li>
</ul>
</div>
<!-- RIGHT COLUMN: Tools & dispute support -->
<div data-object="true" data-object-type="shape" style="position:absolute; left:684px; top:454px; width:504px; height:1px; background:#E6F0F2; z-index:1;"></div>
<div data-object="true" data-object-type="icon" style="position:absolute; left:696px; top:472px; width:30px; height:30px; z-index:10; color:#16B3A8;">
<i class="fa-solid fa-screwdriver-wrench" style="font-size:24px; line-height:30px;"></i>
</div>
<div data-object="true" data-object-type="textbox" style="position:absolute; left:732px; top:466px; width:460px; height:34px; z-index:10;">
<p style="margin:0; font-family:'Inter', sans-serif; font-size:18px; line-height:1.25; font-weight:800; color:#0B2D39;">Tools, controls &amp; dispute handling</p>
</div>
<div data-object="true" data-object-type="textbox" style="position:absolute; left:696px; top:506px; width:472px; height:132px; z-index:10;">
<ul style="margin:0; padding-left:18px; font-family:'Inter', sans-serif; font-size:14px; line-height:1.55; color:#2E5862;">
<li>Use GOV.UK tools: <span style="font-weight:800; color:#0B2D39;">SSP calculator</span> and <span style="font-weight:800; color:#0B2D39;">maternity/paternity/adoption calculator</span> for qualifying week and AWE</li>
<li>Implement payroll controls: check thresholds, rate changes, and EPS totals before submission</li>
<li>Escalate entitlement disputes through HMRC’s <span style="font-weight:800; color:#0B2D39;">Statutory Payment Disputes Team</span> (where applicable)</li>
</ul>
</div>
<!-- Bottom callout -->
<div data-object="true" data-object-type="shape" style="position:absolute; left:64px; top:640px; width:1152px; height:70px; background:#EFFFFD; border:1px solid #CFEDEC; border-radius:16px; z-index:1;"></div>
<div data-object="true" data-object-type="icon" style="position:absolute; left:96px; top:662px; width:22px; height:22px; z-index:10; color:#0F6E7A;">
<i class="fa-solid fa-circle-check" style="font-size:18px; line-height:22px;"></i>
</div>
<div data-object="true" data-object-type="textbox" style="position:absolute; left:124px; top:650px; width:1072px; height:54px; z-index:10;">
<p style="margin:0; font-family:'Inter', sans-serif; font-size:12.5px; line-height:1.32; color:#2E5862;">
      Practical check: reconcile statutory payments paid in payroll to <span style="font-weight:800; color:#0B2D39;">EPS recovery values</span> each period, and retain evidence (forms/certificates) for audit queries.
    </p>
<p style="margin:4px 0 0 0; font-family:'Inter', sans-serif; font-size:12px; line-height:1.22; color:#4B6A73;">
      Assumption note: recovery rates shown reflect standard HMRC guidance for statutory family payments; confirm your payroll software is configured for the correct tax year.
    </p>
</div>
</div>`

export default function Slide13() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
