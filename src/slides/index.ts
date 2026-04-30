import type { SlideMeta } from '../types'
import type { ComponentType } from 'react'

// ── Individual slide imports ────────────────────────────────────
import Slide01, { meta as meta01 } from './Slide01'
import Slide02, { meta as meta02 } from './Slide02'
import Slide03, { meta as meta03 } from './Slide03'
import Slide04, { meta as meta04 } from './Slide04'
import Slide05, { meta as meta05 } from './Slide05'
import Slide06, { meta as meta06 } from './Slide06'
import Slide07, { meta as meta07 } from './Slide07'
import Slide08, { meta as meta08 } from './Slide08'
import Slide09, { meta as meta09 } from './Slide09'
import Slide10, { meta as meta10 } from './Slide10'
import Slide11, { meta as meta11 } from './Slide11'
import Slide12, { meta as meta12 } from './Slide12'
import Slide13, { meta as meta13 } from './Slide13'
import Slide14, { meta as meta14 } from './Slide14'
import Slide15, { meta as meta15 } from './Slide15'

// ── Slide registry ──────────────────────────────────────────────
export interface SlideEntry {
  meta: SlideMeta
  Component: ComponentType
}

export const SLIDES: SlideEntry[] = [
  { meta: meta01, Component: Slide01 },
  { meta: meta02, Component: Slide02 },
  { meta: meta03, Component: Slide03 },
  { meta: meta04, Component: Slide04 },
  { meta: meta05, Component: Slide05 },
  { meta: meta06, Component: Slide06 },
  { meta: meta07, Component: Slide07 },
  { meta: meta08, Component: Slide08 },
  { meta: meta09, Component: Slide09 },
  { meta: meta10, Component: Slide10 },
  { meta: meta11, Component: Slide11 },
  { meta: meta12, Component: Slide12 },
  { meta: meta13, Component: Slide13 },
  { meta: meta14, Component: Slide14 },
  { meta: meta15, Component: Slide15 },
]

export const TOTAL_SLIDES = SLIDES.length
