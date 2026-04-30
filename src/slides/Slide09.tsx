import type { SlideMeta } from '../types'

export const meta: SlideMeta = {
  id: 9,
  title: 'Shared Parental Leave & Pay',
  subtitle: 'SPL/ShPP sharing rules & curtailment',
  icon: 'fa-share-nodes',
}

const html = `<div class="slide-container" style="position:relative; width:1280px; height:720px; overflow:hidden; background:#F6FAFC;">
<!-- Background -->
<div data-object="true" data-object-type="shape" style="position:absolute; left:0px; top:0px; width:1280px; height:720px; background:#F6FAFC; z-index:1;"></div>
<div data-object="true" data-object-type="shape" style="position:absolute; left:0px; top:0px; width:1280px; height:112px; background:#0F6E7A; z-index:1;"></div>
<div data-object="true" data-object-type="shape" style="position:absolute; left:0px; top:112px; width:1280px; height:6px; background:#16B3A8; z-index:1;"></div>
<!-- Title -->
<div data-object="true" data-object-type="textbox" style="position:absolute; left:64px; top:24px; width:1152px; height:74px; z-index:10;">
<p style="margin:0; font-family:'Inter', sans-serif; font-size:32px; line-height:1.15; font-weight:800; color:#EFFFFD;">Shared Parental Leave &amp; Pay (SPL/ShPP)</p>
<p style="margin:6px 0 0 0; font-family:'Inter', sans-serif; font-size:14px; line-height:1.35; font-weight:500; color:#D7FFFB;">How parents can share leave and statutory pay in the first year after birth/adoption</p>
</div>
<!-- Left icon rail -->
<div data-object="true" data-object-type="shape" style="position:absolute; left:64px; top:150px; width:88px; height:512px; background:#FFFFFF; border:1px solid #D7E8EB; border-radius:18px; z-index:1;"></div>
<!-- Icons aligned to cards -->
<div data-object="true" data-object-type="icon" style="position:absolute; left:92px; top:186px; width:32px; height:32px; z-index:10; color:#0F6E7A;">
<i class="fa-solid fa-share-nodes" style="font-size:26px; line-height:32px;"></i>
</div>
<div data-object="true" data-object-type="icon" style="position:absolute; left:92px; top:330px; width:32px; height:32px; z-index:10; color:#0F6E7A;">
<i class="fa-solid fa-circle-check" style="font-size:26px; line-height:32px;"></i>
</div>
<div data-object="true" data-object-type="icon" style="position:absolute; left:92px; top:474px; width:32px; height:32px; z-index:10; color:#0F6E7A;">
<i class="fa-solid fa-clipboard-list" style="font-size:26px; line-height:32px;"></i>
</div>
<!-- Card 1: Entitlement & pay -->
<div data-object="true" data-object-type="shape" style="position:absolute; left:168px; top:150px; width:1048px; height:128px; background:#FFFFFF; border:1px solid #D7E8EB; border-radius:18px; z-index:1;"></div>
<div data-object="true" data-object-type="textbox" style="position:absolute; left:196px; top:172px; width:940px; height:94px; z-index:10; padding-right:16px; box-sizing:border-box;">
<p style="margin:0; font-family:'Inter', sans-serif; font-size:16px; line-height:1.25; font-weight:800; color:#0B2D39;">Entitlement (what can be shared)</p>
<p style="margin:8px 0 0 0; font-family:'Inter', sans-serif; font-size:14px; line-height:1.55; color:#2E5862;">
      Up to <span style="font-weight:800; color:#0B2D39;">50 weeks</span> of Shared Parental Leave and up to <span style="font-weight:800; color:#0B2D39;">37 weeks</span> of Statutory Shared Parental Pay can be shared between parents.
    </p>
<p style="margin:4px 0 0 0; font-family:'Inter', sans-serif; font-size:12.5px; line-height:1.4; color:#4B6A73;">
      ShPP is paid at the statutory weekly rate (or 90% of AWE if lower) and is processed via payroll (tax/NIC deducted).
    </p>
</div>
<!-- Card 2: Eligibility (tests for both parents) -->
<div data-object="true" data-object-type="shape" style="position:absolute; left:168px; top:294px; width:1048px; height:140px; background:#FFFFFF; border:1px solid #D7E8EB; border-radius:18px; z-index:1;"></div>
<div data-object="true" data-object-type="textbox" style="position:absolute; left:196px; top:316px; width:940px; height:110px; z-index:10; padding-right:16px; box-sizing:border-box;">
<p style="margin:0; font-family:'Inter', sans-serif; font-size:16px; line-height:1.25; font-weight:800; color:#0B2D39;">Eligibility (key tests)</p>
<ul style="margin:8px 0 0 0; padding-left:18px; font-family:'Inter', sans-serif; font-size:13.5px; line-height:1.45; color:#2E5862;">
<li><span style="font-weight:800; color:#0B2D39;">Both parents</span> must share responsibility for the child and meet work/earnings criteria</li>
<li>The parent taking SPL must usually have <span style="font-weight:800; color:#0B2D39;">26 weeks’ continuous employment</span> by the relevant qualifying week and remain employed until SPL starts</li>
<li>For ShPP, each parent must usually have <span style="font-weight:800; color:#0B2D39;">average weekly earnings</span> at or above the statutory threshold (check current year rates)</li>
</ul>
</div>
<!-- Card 3: How it works (curtailment, notice, booking) -->
<div data-object="true" data-object-type="shape" style="position:absolute; left:168px; top:450px; width:1048px; height:176px; background:#EFFFFD; border:1px solid #CFEDEC; border-radius:18px; z-index:1;"></div>
<div data-object="true" data-object-type="textbox" style="position:absolute; left:196px; top:472px; width:940px; height:142px; z-index:10; padding-right:16px; box-sizing:border-box;">
<p style="margin:0; font-family:'Inter', sans-serif; font-size:16px; line-height:1.25; font-weight:800; color:#0B2D39;">Process rules (curtailment &amp; notice)</p>
<ul style="margin:8px 0 0 0; padding-left:18px; font-family:'Inter', sans-serif; font-size:14px; line-height:1.55; color:#2E5862;">
<li><span style="font-weight:800; color:#0F6E7A;">Curtailment required:</span> the mother/adopter must end maternity/adoption leave (and pay) early to create SPL/ShPP</li>
<li><span style="font-weight:800; color:#0F6E7A;">Notice:</span> give at least <span style="font-weight:800; color:#0B2D39;">8 weeks’ written notice</span> of SPL/ShPP dates (and any changes)</li>
<li><span style="font-weight:800; color:#0F6E7A;">Booking:</span> leave can be taken in blocks (continuous or discontinuous); statutory entitlement is typically up to <span style="font-weight:800; color:#0B2D39;">3 booking notices</span> per parent</li>
<li><span style="font-weight:800; color:#0F6E7A;">Working days:</span> up to <span style="font-weight:800; color:#0B2D39;">20 SPLIT days</span> (in addition to any KIT days used during maternity/adoption leave)</li>
</ul>
</div>
<!-- Bottom practical example strip -->
<div data-object="true" data-object-type="shape" style="position:absolute; left:64px; top:632px; width:1152px; height:78px; background:#FFFFFF; border:1px solid #D7E8EB; border-radius:16px; z-index:1;"></div>
<div data-object="true" data-object-type="icon" style="position:absolute; left:88px; top:654px; width:22px; height:22px; z-index:10; color:#16B3A8;">
<i class="fa-solid fa-lightbulb" style="font-size:18px; line-height:22px;"></i>
</div>
<div data-object="true" data-object-type="textbox" style="position:absolute; left:116px; top:642px; width:1044px; height:64px; z-index:10; padding-right:16px; box-sizing:border-box;">
<p style="margin:0; font-family:'Inter', sans-serif; font-size:12.5px; line-height:1.32; color:#2E5862;">
      Example: The mother takes <span style="font-weight:800; color:#0B2D39;">22 weeks</span> of maternity leave and pay, then curtails. The parents can share up to <span style="font-weight:800; color:#0B2D39;">30 weeks</span> of SPL and up to <span style="font-weight:800; color:#0B2D39;">17 weeks</span> of ShPP in the child’s first year.
    </p>
<p style="margin:4px 0 0 0; font-family:'Inter', sans-serif; font-size:12px; line-height:1.22; color:#4B6A73;">
      Payroll action: capture the curtailment notice, validate eligibility, and schedule ShPP via payroll with the correct statutory rate and EPS reclaim process.
    </p>
</div>
</div>`

export default function Slide09() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
