import type { SlideMeta } from '../types'

export const meta: SlideMeta = {
  id: 2,
  title: 'Agenda',
  icon: 'fa-list-ul',
}

export default function Slide02() {
  return (
    <div className="slide-container" style={{ position: 'relative', width: '1280px', height: '720px', overflow: 'hidden', background: '#F6FAFC' }}>
      <div data-object="true" data-object-type="shape" style={{ position: 'absolute', left: '0px', top: '0px', width: '1280px', height: '720px', background: '#F6FAFC', zIndex: 1 }}></div>
      <div data-object="true" data-object-type="shape" style={{ position: 'absolute', left: '0px', top: '0px', width: '1280px', height: '112px', background: '#0F6E7A', zIndex: 1 }}></div>
      <div data-object="true" data-object-type="shape" style={{ position: 'absolute', left: '0px', top: '112px', width: '1280px', height: '6px', background: '#16B3A8', zIndex: 1 }}></div>
      <div data-object="true" data-object-type="textbox" style={{ position: 'absolute', left: '64px', top: '26px', width: '1152px', height: '70px', zIndex: 10 }}>
        <p style={{ margin: 0, fontFamily: "'Inter', sans-serif", fontSize: '34px', lineHeight: 1.15, fontWeight: 800, color: '#EFFFFD' }}>Agenda</p>
        <p style={{ margin: '6px 0 0 0', fontFamily: "'Inter', sans-serif", fontSize: '14px', lineHeight: 1.3, fontWeight: 500, color: '#D7FFFB' }}>What we will cover in this HR & payroll compliance session</p>
      </div>
      <div data-object="true" data-object-type="shape" style={{ position: 'absolute', left: '64px', top: '150px', width: '1152px', height: '500px', background: '#FFFFFF', border: '1px solid #D7E8EB', borderRadius: '18px', zIndex: 1 }}></div>
      <div data-object="true" data-object-type="shape" style={{ position: 'absolute', left: '640px', top: '178px', width: '1px', height: '444px', background: '#E6F0F2', zIndex: 1 }}></div>
      <div data-object="true" data-object-type="icon" style={{ position: 'absolute', left: '96px', top: '204px', width: '22px', height: '22px', zIndex: 10, color: '#0F6E7A' }}>
        <i className="fa-solid fa-layer-group" style={{ fontSize: '18px', lineHeight: '22px' }}></i>
      </div>
      <div data-object="true" data-object-type="icon" style={{ position: 'absolute', left: '96px', top: '266px', width: '22px', height: '22px', zIndex: 10, color: '#0F6E7A' }}>
        <i className="fa-solid fa-table" style={{ fontSize: '18px', lineHeight: '22px' }}></i>
      </div>
      <div data-object="true" data-object-type="icon" style={{ position: 'absolute', left: '96px', top: '328px', width: '22px', height: '22px', zIndex: 10, color: '#0F6E7A' }}>
        <i className="fa-solid fa-kit-medical" style={{ fontSize: '18px', lineHeight: '22px' }}></i>
      </div>
      <div data-object="true" data-object-type="icon" style={{ position: 'absolute', left: '96px', top: '390px', width: '22px', height: '22px', zIndex: 10, color: '#0F6E7A' }}>
        <i className="fa-solid fa-baby" style={{ fontSize: '18px', lineHeight: '22px' }}></i>
      </div>
      <div data-object="true" data-object-type="icon" style={{ position: 'absolute', left: '96px', top: '452px', width: '22px', height: '22px', zIndex: 10, color: '#0F6E7A' }}>
        <i className="fa-solid fa-user-group" style={{ fontSize: '18px', lineHeight: '22px' }}></i>
      </div>
      <div data-object="true" data-object-type="icon" style={{ position: 'absolute', left: '96px', top: '514px', width: '22px', height: '22px', zIndex: 10, color: '#0F6E7A' }}>
        <i className="fa-solid fa-house-chimney" style={{ fontSize: '18px', lineHeight: '22px' }}></i>
      </div>
      <div data-object="true" data-object-type="textbox" style={{ position: 'absolute', left: '132px', top: '196px', width: '472px', height: '44px', zIndex: 10 }}>
        <p style={{ margin: 0, fontFamily: "'Inter', sans-serif", fontSize: '16px', lineHeight: 1.25, fontWeight: 700, color: '#0B2D39' }}>Overview of UK statutory benefits</p>
        <p style={{ margin: '4px 0 0 0', fontFamily: "'Inter', sans-serif", fontSize: '13px', lineHeight: 1.3, color: '#4B6A73' }}>Legal framework, minimum standards, and key definitions</p>
      </div>
      <div data-object="true" data-object-type="textbox" style={{ position: 'absolute', left: '132px', top: '258px', width: '472px', height: '44px', zIndex: 10 }}>
        <p style={{ margin: 0, fontFamily: "'Inter', sans-serif", fontSize: '16px', lineHeight: 1.25, fontWeight: 700, color: '#0B2D39' }}>Comparison: leave & pay at a glance</p>
        <p style={{ margin: '4px 0 0 0', fontFamily: "'Inter', sans-serif", fontSize: '13px', lineHeight: 1.3, color: '#4B6A73' }}>Type, duration, statutory pay structure, core eligibility</p>
      </div>
      <div data-object="true" data-object-type="textbox" style={{ position: 'absolute', left: '132px', top: '320px', width: '472px', height: '44px', zIndex: 10 }}>
        <p style={{ margin: 0, fontFamily: "'Inter', sans-serif", fontSize: '16px', lineHeight: 1.25, fontWeight: 700, color: '#0B2D39' }}>Statutory Sick Pay (SSP)</p>
        <p style={{ margin: '4px 0 0 0', fontFamily: "'Inter', sans-serif", fontSize: '13px', lineHeight: 1.3, color: '#4B6A73' }}>Eligibility, qualifying days, duration, April 2026 changes</p>
      </div>
      <div data-object="true" data-object-type="textbox" style={{ position: 'absolute', left: '132px', top: '382px', width: '472px', height: '44px', zIndex: 10 }}>
        <p style={{ margin: 0, fontFamily: "'Inter', sans-serif", fontSize: '16px', lineHeight: 1.25, fontWeight: 700, color: '#0B2D39' }}>Maternity leave & pay (SML/SMP)</p>
        <p style={{ margin: '4px 0 0 0', fontFamily: "'Inter', sans-serif", fontSize: '13px', lineHeight: 1.3, color: '#4B6A73' }}>52 weeks leave, 39 weeks pay, notice and proof</p>
      </div>
      <div data-object="true" data-object-type="textbox" style={{ position: 'absolute', left: '132px', top: '444px', width: '472px', height: '44px', zIndex: 10 }}>
        <p style={{ margin: 0, fontFamily: "'Inter', sans-serif", fontSize: '16px', lineHeight: 1.25, fontWeight: 700, color: '#0B2D39' }}>Paternity leave & pay (SPL/SPP)</p>
        <p style={{ margin: '4px 0 0 0', fontFamily: "'Inter', sans-serif", fontSize: '13px', lineHeight: 1.3, color: '#4B6A73' }}>1–2 weeks, eligibility, day-one leave change from April 2026</p>
      </div>
      <div data-object="true" data-object-type="textbox" style={{ position: 'absolute', left: '132px', top: '506px', width: '472px', height: '44px', zIndex: 10 }}>
        <p style={{ margin: 0, fontFamily: "'Inter', sans-serif", fontSize: '16px', lineHeight: 1.25, fontWeight: 700, color: '#0B2D39' }}>Adoption leave & pay (SAL/SAP)</p>
        <p style={{ margin: '4px 0 0 0', fontFamily: "'Inter', sans-serif", fontSize: '13px', lineHeight: 1.3, color: '#4B6A73' }}>UK, overseas adoption and surrogacy practicalities</p>
      </div>
      <div data-object="true" data-object-type="icon" style={{ position: 'absolute', left: '672px', top: '204px', width: '22px', height: '22px', zIndex: 10, color: '#0F6E7A' }}>
        <i className="fa-solid fa-share-nodes" style={{ fontSize: '18px', lineHeight: '22px' }}></i>
      </div>
      <div data-object="true" data-object-type="icon" style={{ position: 'absolute', left: '672px', top: '266px', width: '22px', height: '22px', zIndex: 10, color: '#0F6E7A' }}>
        <i className="fa-solid fa-heart" style={{ fontSize: '18px', lineHeight: '22px' }}></i>
      </div>
      <div data-object="true" data-object-type="icon" style={{ position: 'absolute', left: '672px', top: '328px', width: '22px', height: '22px', zIndex: 10, color: '#0F6E7A' }}>
        <i className="fa-solid fa-list-check" style={{ fontSize: '18px', lineHeight: '22px' }}></i>
      </div>
      <div data-object="true" data-object-type="icon" style={{ position: 'absolute', left: '672px', top: '390px', width: '22px', height: '22px', zIndex: 10, color: '#0F6E7A' }}>
        <i className="fa-solid fa-scale-balanced" style={{ fontSize: '18px', lineHeight: '22px' }}></i>
      </div>
      <div data-object="true" data-object-type="icon" style={{ position: 'absolute', left: '672px', top: '452px', width: '22px', height: '22px', zIndex: 10, color: '#0F6E7A' }}>
        <i className="fa-solid fa-file-circle-check" style={{ fontSize: '18px', lineHeight: '22px' }}></i>
      </div>
      <div data-object="true" data-object-type="icon" style={{ position: 'absolute', left: '672px', top: '514px', width: '22px', height: '22px', zIndex: 10, color: '#0F6E7A' }}>
        <i className="fa-solid fa-bullhorn" style={{ fontSize: '18px', lineHeight: '22px' }}></i>
      </div>
      <div data-object="true" data-object-type="textbox" style={{ position: 'absolute', left: '708px', top: '196px', width: '476px', height: '44px', zIndex: 10 }}>
        <p style={{ margin: 0, fontFamily: "'Inter', sans-serif", fontSize: '16px', lineHeight: 1.25, fontWeight: 700, color: '#0B2D39' }}>Shared Parental Leave & Pay (SPL/ShPP)</p>
        <p style={{ margin: '4px 0 0 0', fontFamily: "'Inter', sans-serif", fontSize: '13px', lineHeight: 1.3, color: '#4B6A73' }}>Curtailment, eligibility tests, notice and block booking</p>
      </div>
      <div data-object="true" data-object-type="textbox" style={{ position: 'absolute', left: '708px', top: '258px', width: '476px', height: '44px', zIndex: 10 }}>
        <p style={{ margin: 0, fontFamily: "'Inter', sans-serif", fontSize: '16px', lineHeight: 1.25, fontWeight: 700, color: '#0B2D39' }}>Parental Bereavement Leave & Pay</p>
        <p style={{ margin: '4px 0 0 0', fontFamily: "'Inter', sans-serif", fontSize: '13px', lineHeight: 1.3, color: '#4B6A73' }}>Day-one leave, pay eligibility, simple notice approach</p>
      </div>
      <div data-object="true" data-object-type="textbox" style={{ position: 'absolute', left: '708px', top: '320px', width: '476px', height: '44px', zIndex: 10 }}>
        <p style={{ margin: 0, fontFamily: "'Inter', sans-serif", fontSize: '16px', lineHeight: 1.25, fontWeight: 700, color: '#0B2D39' }}>Employer responsibilities</p>
        <p style={{ margin: '4px 0 0 0', fontFamily: "'Inter', sans-serif", fontSize: '13px', lineHeight: 1.3, color: '#4B6A73' }}>Assess, calculate, communicate, record, and signpost</p>
      </div>
      <div data-object="true" data-object-type="textbox" style={{ position: 'absolute', left: '708px', top: '382px', width: '476px', height: '44px', zIndex: 10 }}>
        <p style={{ margin: 0, fontFamily: "'Inter', sans-serif", fontSize: '16px', lineHeight: 1.25, fontWeight: 700, color: '#0B2D39' }}>Employee rights during leave</p>
        <p style={{ margin: '4px 0 0 0', fontFamily: "'Inter', sans-serif", fontSize: '13px', lineHeight: 1.3, color: '#4B6A73' }}>Holiday accrual, return to work, KIT/SPLIT days, redundancy rules</p>
      </div>
      <div data-object="true" data-object-type="textbox" style={{ position: 'absolute', left: '708px', top: '444px', width: '476px', height: '44px', zIndex: 10 }}>
        <p style={{ margin: 0, fontFamily: "'Inter', sans-serif", fontSize: '16px', lineHeight: 1.25, fontWeight: 700, color: '#0B2D39' }}>HMRC compliance & reporting</p>
        <p style={{ margin: '4px 0 0 0', fontFamily: "'Inter', sans-serif", fontSize: '13px', lineHeight: 1.3, color: '#4B6A73' }}>Recovery via EPS, Small Employers' Relief, audit-ready records</p>
      </div>
      <div data-object="true" data-object-type="textbox" style={{ position: 'absolute', left: '708px', top: '506px', width: '476px', height: '44px', zIndex: 10 }}>
        <p style={{ margin: 0, fontFamily: "'Inter', sans-serif", fontSize: '16px', lineHeight: 1.25, fontWeight: 700, color: '#0B2D39' }}>Recent updates (from 6 April 2026)</p>
        <p style={{ margin: '4px 0 0 0', fontFamily: "'Inter', sans-serif", fontSize: '13px', lineHeight: 1.3, color: '#4B6A73' }}>SSP reforms, rate uplifts, and day-one paternity leave</p>
      </div>
      <div data-object="true" data-object-type="shape" style={{ position: 'absolute', left: '64px', top: '666px', width: '1152px', height: '40px', background: '#EFFFFD', border: '1px solid #CFEDEC', borderRadius: '12px', zIndex: 1 }}></div>
      <div data-object="true" data-object-type="icon" style={{ position: 'absolute', left: '84px', top: '676px', width: '20px', height: '20px', zIndex: 10, color: '#16B3A8' }}>
        <i className="fa-solid fa-circle-info" style={{ fontSize: '18px', lineHeight: '20px' }}></i>
      </div>
      <div data-object="true" data-object-type="textbox" style={{ position: 'absolute', left: '110px', top: '673px', width: '1086px', height: '28px', zIndex: 10 }}>
        <p style={{ margin: 0, fontFamily: "'Inter', sans-serif", fontSize: '12px', lineHeight: 1.35, color: '#2E5862' }}>
          Tip: Use GOV.UK calculators and ACAS templates to standardise requests, reduce errors and support consistent employee experience.
        </p>
      </div>
    </div>
  )
}
