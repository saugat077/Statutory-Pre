import type { SlideMeta } from '../types'

export const meta: SlideMeta = {
  id: 3,
  title: 'Overview of UK Statutory Benefits',
  icon: 'fa-scale-balanced',
}

export default function Slide03() {
  return (
    <div className="slide-container" style={{ position: 'relative', width: '1280px', height: '720px', overflow: 'hidden', background: '#F6FAFC' }}>
      <div data-object="true" data-object-type="shape" style={{ position: 'absolute', left: '0px', top: '0px', width: '1280px', height: '720px', background: '#F6FAFC', zIndex: 1 }}></div>
      <div data-object="true" data-object-type="shape" style={{ position: 'absolute', left: '0px', top: '0px', width: '1280px', height: '112px', background: '#0F6E7A', zIndex: 1 }}></div>
      <div data-object="true" data-object-type="shape" style={{ position: 'absolute', left: '0px', top: '112px', width: '1280px', height: '6px', background: '#16B3A8', zIndex: 1 }}></div>
      <div data-object="true" data-object-type="textbox" style={{ position: 'absolute', left: '64px', top: '24px', width: '1152px', height: '74px', zIndex: 10 }}>
        <p style={{ margin: 0, fontFamily: "'Inter', sans-serif", fontSize: '32px', lineHeight: 1.15, fontWeight: 800, color: '#EFFFFD' }}>Overview of UK Statutory Benefits</p>
        <p style={{ margin: '6px 0 0 0', fontFamily: "'Inter', sans-serif", fontSize: '14px', lineHeight: 1.35, fontWeight: 500, color: '#D7FFFB' }}>
          The minimum legal entitlements for time off and statutory pay — and how HR/payroll applies them consistently
        </p>
      </div>
      <div data-object="true" data-object-type="shape" style={{ position: 'absolute', left: '64px', top: '150px', width: '560px', height: '244px', background: '#FFFFFF', border: '1px solid #D7E8EB', borderRadius: '18px', zIndex: 1 }}></div>
      <div data-object="true" data-object-type="icon" style={{ position: 'absolute', left: '92px', top: '178px', width: '32px', height: '28px', zIndex: 10, color: '#0F6E7A' }}>
        <i className="fa-solid fa-layer-group" style={{ fontSize: '24px', lineHeight: '28px' }}></i>
      </div>
      <div data-object="true" data-object-type="textbox" style={{ position: 'absolute', left: '128px', top: '172px', width: '476px', height: '32px', zIndex: 10 }}>
        <p style={{ margin: 0, fontFamily: "'Inter', sans-serif", fontSize: '18px', lineHeight: 1.25, fontWeight: 800, color: '#0B2D39' }}>What "statutory" means</p>
      </div>
      <div data-object="true" data-object-type="textbox" style={{ position: 'absolute', left: '92px', top: '212px', width: '500px', height: '160px', zIndex: 10 }}>
        <ul style={{ margin: 0, paddingLeft: '18px', fontFamily: "'Inter', sans-serif", fontSize: '14px', lineHeight: 1.55, color: '#2E5862' }}>
          <li><span style={{ fontWeight: 700, color: '#0B2D39' }}>Minimum standard</span> set by UK law — employers can enhance via contractual schemes</li>
          <li>Applies to <span style={{ fontWeight: 700, color: '#0B2D39' }}>employees</span> (not usually "workers" or self-employed), unless specified</li>
          <li>Paid through payroll and subject to <span style={{ fontWeight: 700, color: '#0B2D39' }}>tax & National Insurance</span></li>
          <li>Key tests: <span style={{ fontWeight: 700, color: '#0B2D39' }}>continuous service</span>, <span style={{ fontWeight: 700, color: '#0B2D39' }}>qualifying week</span>, and <span style={{ fontWeight: 700, color: '#0B2D39' }}>average weekly earnings (AWE)</span></li>
        </ul>
      </div>
      <div data-object="true" data-object-type="shape" style={{ position: 'absolute', left: '656px', top: '150px', width: '560px', height: '244px', background: '#FFFFFF', border: '1px solid #D7E8EB', borderRadius: '18px', zIndex: 1 }}></div>
      <div data-object="true" data-object-type="icon" style={{ position: 'absolute', left: '684px', top: '178px', width: '32px', height: '28px', zIndex: 10, color: '#0F6E7A' }}>
        <i className="fa-solid fa-scale-balanced" style={{ fontSize: '24px', lineHeight: '28px' }}></i>
      </div>
      <div data-object="true" data-object-type="textbox" style={{ position: 'absolute', left: '720px', top: '172px', width: '476px', height: '32px', zIndex: 10 }}>
        <p style={{ margin: 0, fontFamily: "'Inter', sans-serif", fontSize: '18px', lineHeight: 1.25, fontWeight: 800, color: '#0B2D39' }}>How entitlements are determined</p>
      </div>
      <div data-object="true" data-object-type="textbox" style={{ position: 'absolute', left: '684px', top: '212px', width: '500px', height: '160px', zIndex: 10 }}>
        <ul style={{ margin: 0, paddingLeft: '18px', fontFamily: "'Inter', sans-serif", fontSize: '14px', lineHeight: 1.55, color: '#2E5862' }}>
          <li><span style={{ fontWeight: 700, color: '#0B2D39' }}>Employment Rights Act 1996</span> underpins statutory leave rights</li>
          <li><span style={{ fontWeight: 700, color: '#0B2D39' }}>HMRC rules</span> set statutory pay conditions, rates and recovery</li>
          <li>Notice & evidence (e.g., <span style={{ fontWeight: 700, color: '#0B2D39' }}>MATB1</span>, adoption matching letter) drive payroll start dates</li>
          <li>Payroll should use <span style={{ fontWeight: 700, color: '#0B2D39' }}>GOV.UK calculators</span> to reduce error and support audit trails</li>
        </ul>
      </div>
      <div data-object="true" data-object-type="shape" style={{ position: 'absolute', left: '64px', top: '418px', width: '1152px', height: '244px', background: '#FFFFFF', border: '1px solid #D7E8EB', borderRadius: '18px', zIndex: 1 }}></div>
      <div data-object="true" data-object-type="icon" style={{ position: 'absolute', left: '92px', top: '448px', width: '32px', height: '28px', zIndex: 10, color: '#16B3A8' }}>
        <i className="fa-solid fa-people-roof" style={{ fontSize: '24px', lineHeight: '28px' }}></i>
      </div>
      <div data-object="true" data-object-type="textbox" style={{ position: 'absolute', left: '128px', top: '442px', width: '520px', height: '30px', zIndex: 10 }}>
        <p style={{ margin: 0, fontFamily: "'Inter', sans-serif", fontSize: '18px', lineHeight: 1.25, fontWeight: 800, color: '#0B2D39' }}>Family-related leave & pay</p>
      </div>
      <div data-object="true" data-object-type="textbox" style={{ position: 'absolute', left: '92px', top: '478px', width: '532px', height: '164px', zIndex: 10 }}>
        <ul style={{ margin: 0, paddingLeft: '18px', fontFamily: "'Inter', sans-serif", fontSize: '14px', lineHeight: 1.55, color: '#2E5862' }}>
          <li>Maternity (SML/SMP): up to <span style={{ fontWeight: 700, color: '#0B2D39' }}>52 weeks</span> leave; <span style={{ fontWeight: 700, color: '#0B2D39' }}>39 weeks</span> statutory pay</li>
          <li>Paternity (SPL/SPP): <span style={{ fontWeight: 700, color: '#0B2D39' }}>1–2 weeks</span> leave; statutory pay if eligible</li>
          <li>Adoption (SAL/SAP): mirrors maternity structure for eligible adopters/surrogacy</li>
          <li>Shared Parental (SPL/ShPP): share up to <span style={{ fontWeight: 700, color: '#0B2D39' }}>50 weeks</span> leave and <span style={{ fontWeight: 700, color: '#0B2D39' }}>37 weeks</span> pay</li>
          <li>Parental Bereavement (SPBL/SPBP): <span style={{ fontWeight: 700, color: '#0B2D39' }}>day-one leave</span>; statutory pay if qualifying conditions met</li>
        </ul>
      </div>
      <div data-object="true" data-object-type="shape" style={{ position: 'absolute', left: '656px', top: '442px', width: '1px', height: '202px', background: '#E6F0F2', zIndex: 1 }}></div>
      <div data-object="true" data-object-type="icon" style={{ position: 'absolute', left: '684px', top: '448px', width: '32px', height: '28px', zIndex: 10, color: '#16B3A8' }}>
        <i className="fa-solid fa-kit-medical" style={{ fontSize: '24px', lineHeight: '28px' }}></i>
      </div>
      <div data-object="true" data-object-type="textbox" style={{ position: 'absolute', left: '720px', top: '442px', width: '476px', height: '30px', zIndex: 10 }}>
        <p style={{ margin: 0, fontFamily: "'Inter', sans-serif", fontSize: '18px', lineHeight: 1.25, fontWeight: 800, color: '#0B2D39' }}>Illness absence support</p>
      </div>
      <div data-object="true" data-object-type="textbox" style={{ position: 'absolute', left: '684px', top: '478px', width: '500px', height: '164px', zIndex: 10 }}>
        <ul style={{ margin: 0, paddingLeft: '18px', fontFamily: "'Inter', sans-serif", fontSize: '14px', lineHeight: 1.55, color: '#2E5862' }}>
          <li>Statutory Sick Pay (SSP): paid by the employer for up to <span style={{ fontWeight: 700, color: '#0B2D39' }}>28 weeks</span></li>
          <li>Normally payable when sickness lasts <span style={{ fontWeight: 700, color: '#0B2D39' }}>4+ days</span> (rules change from 6 April 2026)</li>
          <li>Paid for <span style={{ fontWeight: 700, color: '#0B2D39' }}>qualifying days</span> and aligned to normal payroll cycles</li>
          <li>Use SSP1 where SSP cannot be paid (e.g., not eligible or SSP ends)</li>
        </ul>
      </div>
      <div data-object="true" data-object-type="shape" style={{ position: 'absolute', left: '64px', top: '672px', width: '1152px', height: '38px', background: '#EFFFFD', border: '1px solid #CFEDEC', borderRadius: '12px', zIndex: 1 }}></div>
      <div data-object="true" data-object-type="icon" style={{ position: 'absolute', left: '84px', top: '681px', width: '24px', height: '20px', zIndex: 10, color: '#0F6E7A' }}>
        <i className="fa-solid fa-circle-info" style={{ fontSize: '18px', lineHeight: '20px' }}></i>
      </div>
      <div data-object="true" data-object-type="textbox" style={{ position: 'absolute', left: '110px', top: '679px', width: '1086px', height: '24px', zIndex: 10 }}>
        <p style={{ margin: 0, fontFamily: "'Inter', sans-serif", fontSize: '12px', lineHeight: 1.35, color: '#2E5862' }}>
          Rates and qualifying thresholds change annually. Always validate against GOV.UK and confirm payroll software settings before processing statutory payments.
        </p>
      </div>
    </div>
  )
}
