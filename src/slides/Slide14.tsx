import type { SlideMeta } from '../types'

export const meta: SlideMeta = {
  id: 14,
  title: 'Changes from 6 April 2026',
  subtitle: 'Key reforms & rate uplifts',
  icon: 'fa-bullhorn',
}

const html = `<div class="slide-container" style="position:relative; width:1280px; height:720px; overflow:hidden; background:#F6FAFC;">
<!-- Background -->
<div data-object="true" data-object-type="shape" style="position:absolute; left:0px; top:0px; width:1280px; height:720px; background:#F6FAFC; z-index:1;"></div>
<div data-object="true" data-object-type="shape" style="position:absolute; left:0px; top:0px; width:1280px; height:112px; background:#0F6E7A; z-index:1;"></div>
<div data-object="true" data-object-type="shape" style="position:absolute; left:0px; top:112px; width:1280px; height:6px; background:#16B3A8; z-index:1;"></div>
<!-- Title -->
<div data-object="true" data-object-type="textbox" style="position:absolute; left:64px; top:24px; width:1152px; height:74px; z-index:10;">
<p style="margin:0; font-family:'Inter', sans-serif; font-size:32px; line-height:1.15; font-weight:800; color:#EFFFFD;">What’s Changing from 6 April 2026</p>
<p style="margin:6px 0 0 0; font-family:'Inter', sans-serif; font-size:14px; line-height:1.35; font-weight:500; color:#D7FFFB;">
        Key statutory leave &amp; pay reforms and rate uplifts (HR + payroll readiness)
      </p>
</div>
<!-- Left highlight rail -->
<div data-object="true" data-object-type="shape" style="position:absolute; left:64px; top:150px; width:88px; height:512px; background:#FFFFFF; border:1px solid #D7E8EB; border-radius:18px; z-index:1;"></div>
<!-- Rail icons -->
<div data-object="true" data-object-type="icon" style="position:absolute; left:92px; top:188px; width:32px; height:32px; z-index:10; color:#0F6E7A;">
<i class="fa-solid fa-kit-medical" style="font-size:24px; line-height:32px;"></i>
</div>
<div data-object="true" data-object-type="icon" style="position:absolute; left:92px; top:366px; width:32px; height:32px; z-index:10; color:#0F6E7A;">
<i class="fa-solid fa-sterling-sign" style="font-size:24px; line-height:32px;"></i>
</div>
<div data-object="true" data-object-type="icon" style="position:absolute; left:92px; top:544px; width:32px; height:32px; z-index:10; color:#0F6E7A;">
<i class="fa-solid fa-baby" style="font-size:24px; line-height:32px;"></i>
</div>
<!-- Card 1: SSP changes -->
<div data-object="true" data-object-type="shape" style="position:absolute; left:168px; top:150px; width:1048px; height:160px; background:#EFFFFD; border:1px solid #CFEDEC; border-radius:18px; z-index:1;"></div>
<div data-object="true" data-object-type="textbox" style="position:absolute; left:196px; top:170px; width:948px; height:126px; z-index:10;">
<p style="margin:0; font-family:'Inter', sans-serif; font-size:16px; line-height:1.25; font-weight:800; color:#0B2D39;">Statutory Sick Pay (SSP): bigger coverage + Day 1 payment</p>
<ul style="margin:10px 0 0 0; padding-left:18px; font-family:'Inter', sans-serif; font-size:14px; line-height:1.55; color:#2E5862;">
<li><span style="font-weight:800; color:#0F6E7A;">Paid from day 1</span> of sickness absence (waiting days removed)</li>
<li><span style="font-weight:800; color:#0F6E7A;">Lower Earnings Limit removed</span> — SSP available regardless of earnings level (subject to eligibility)</li>
<li><span style="font-weight:800; color:#0F6E7A;">New weekly amount:</span> <span style="font-weight:800; color:#0B2D39;">£123.25</span> or <span style="font-weight:800; color:#0B2D39;">80% of normal weekly earnings</span> (whichever is lower)</li>
</ul>
</div>
<!-- Card 2: Family pay rates & thresholds -->
<div data-object="true" data-object-type="shape" style="position:absolute; left:168px; top:326px; width:1048px; height:160px; background:#FFFFFF; border:1px solid #D7E8EB; border-radius:18px; z-index:1;"></div>
<div data-object="true" data-object-type="textbox" style="position:absolute; left:196px; top:346px; width:948px; height:126px; z-index:10;">
<p style="margin:0; font-family:'Inter', sans-serif; font-size:16px; line-height:1.25; font-weight:800; color:#0B2D39;">Family-related statutory pay: standard rate uplift (2026/27)</p>
<ul style="margin:10px 0 0 0; padding-left:18px; font-family:'Inter', sans-serif; font-size:14px; line-height:1.55; color:#2E5862;">
<li>Standard weekly rate increases from <span style="font-weight:800; color:#0B2D39;">£187.18</span> to <span style="font-weight:800; color:#0F6E7A;">£194.32</span></li>
<li>Applies to: <span style="font-weight:800; color:#0B2D39;">SPP, ShPP, SPBP</span> and the standard-rate weeks of <span style="font-weight:800; color:#0B2D39;">SMP/SAP</span></li>
<li>Earnings threshold for these payments increases from <span style="font-weight:800; color:#0B2D39;">£125</span> to <span style="font-weight:800; color:#0F6E7A;">£129</span> (average weekly earnings)</li>
</ul>
</div>
<!-- Card 3: Paternity leave day-one -->
<div data-object="true" data-object-type="shape" style="position:absolute; left:168px; top:502px; width:1048px; height:160px; background:#FFFFFF; border:1px solid #D7E8EB; border-radius:18px; z-index:1;"></div>
<div data-object="true" data-object-type="textbox" style="position:absolute; left:196px; top:522px; width:948px; height:126px; z-index:10;">
<p style="margin:0; font-family:'Inter', sans-serif; font-size:16px; line-height:1.25; font-weight:800; color:#0B2D39;">Paternity Leave: “day one” right (leave only)</p>
<ul style="margin:10px 0 0 0; padding-left:18px; font-family:'Inter', sans-serif; font-size:14px; line-height:1.55; color:#2E5862;">
<li>From <span style="font-weight:800; color:#0F6E7A;">6 April 2026</span>, employees can take Statutory Paternity Leave from their <span style="font-weight:800; color:#0B2D39;">first day of employment</span></li>
<li>Leave remains <span style="font-weight:800; color:#0B2D39;">1–2 weeks</span>, to be taken within <span style="font-weight:800; color:#0B2D39;">52 weeks</span> of birth/placement</li>
<li><span style="font-weight:800; color:#0B2D39;">SPP pay rules remain</span> (including service and earnings tests) — check eligibility separately</li>
</ul>
</div>
<!-- Bottom readiness callout -->
<div data-object="true" data-object-type="shape" style="position:absolute; left:64px; top:672px; width:1152px; height:38px; background:#0B2D39; border-radius:12px; z-index:1;"></div>
<div data-object="true" data-object-type="icon" style="position:absolute; left:88px; top:681px; width:20px; height:20px; z-index:10; color:#16B3A8;">
<i class="fa-solid fa-wrench" style="font-size:16px; line-height:20px;"></i>
</div>
<div data-object="true" data-object-type="textbox" style="position:absolute; left:114px; top:679px; width:1068px; height:24px; z-index:10;">
<p style="margin:0; font-family:'Inter', sans-serif; font-size:12.5px; line-height:1.35; color:#EFFFFD;">
        Payroll readiness: update statutory rates/thresholds, validate SSP “day 1” logic, test RTI/EPS recovery, and refresh policies/manager guidance before April.
      </p>
</div>
</div>`

export default function Slide14() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
