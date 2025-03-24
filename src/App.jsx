import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { Spinner } from './components/ui/spinner'
import Layout from './components/Layout'

const withSuspense = (Component) => (
  <Suspense
    fallback={
      <div className="w-full h-screen flex justify-center items-center">
        <Spinner />
      </div>
    }
  >
    <Component />
  </Suspense>
)

const Home = lazy(() => import('@/pages/Home/Home'))
const Aadhar = lazy(() => import('@/pages/Aadhar/Aadhar'))
const Business = lazy(() => import('@/pages/Business/Business'))
const Identity = lazy(() => import('@/pages/Identity/Identity'))
const ContactUs = lazy(() => import('@/pages/ContactUs/ContactUs'))
const AboutUs = lazy(() => import('@/pages/AboutUs/AboutUs'))
const GSTOTPVerification = lazy(() =>
  import('./pages/Business/gst-otp-verification')
)
const IECVerification = lazy(() => import('./pages/Business/IECVerification'))
const FaceVerification = lazy(() => import('./pages/Aadhar/face-verification'))
const AadharESign = lazy(() => import('./pages/Aadhar/aadhar-esign'))
const PanVerification = lazy(() => import('./pages/Identity/pan-verification'))
const PANComprehensive = lazy(() =>
  import('./pages/Identity/pan-comprehensive')
)
const AadharPAN = lazy(() => import('./pages/Identity/aadhar-pan'))
const PANValidation = lazy(() => import('./pages/Identity/pan-validation'))
const VoterOCR = lazy(() => import('./pages/Identity/voter-ocr'))
const DLVerification = lazy(() => import('./pages/Identity/dl-verification'))
const PassportVerification = lazy(() =>
  import('./pages/Identity/passport-verification')
)
const PassportOCR = lazy(() => import('./pages/Identity/passport-ocr'))
const PhotoOCR = lazy(() => import('./pages/Identity/photo-ocr'))
const VehicleRCVerification = lazy(() =>
  import('./pages/Identity/vehicle-rc-verification')
)
const ChasisRC = lazy(() => import('./pages/Identity/chasis-rc'))
const RCFinancer = lazy(() => import('./pages/Identity/rc-financer'))
const AadharMasking = lazy(() => import('./pages/Identity/aadhar-masking'))
const GSTVerification = lazy(() => import('./pages/Business/gst-verification'))
const GSTPhoneAPI = lazy(() => import('./pages/Business/gst-phone-api'))
const MCAData = lazy(() => import('./pages/Business/mca-data'))
const MCAFiledDocs = lazy(() => import('./pages/Business/mca-filed-docs'))
const TDSCompliance = lazy(() => import('./pages/Business/tds-compliance'))
const FSSAIVerification = lazy(() =>
  import('./pages/Business/fssai-verification')
)
const TANVerification = lazy(() => import('./pages/Business/tan-verification'))
const UDYOGVerification = lazy(() =>
  import('./pages/Business/udyog-verification')
)
const UDYAMVerification = lazy(() =>
  import('./pages/Business/udyam-verification')
)
const AadharVerification = lazy(() =>
  import('./pages/Identity/aadhar-verification')
)
const VoterVerification = lazy(() =>
  import('./pages/Identity/voter-verification')
)

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={withSuspense(Home)} />
        <Route path="/business">
          <Route index element={withSuspense(Business)} />
          <Route
            path="gst-otp-verification"
            element={withSuspense(GSTOTPVerification)}
          />
          <Route
            path="gst-verification"
            element={withSuspense(GSTVerification)}
          />
          <Route path="gst-to-phone" element={withSuspense(GSTPhoneAPI)} />
          <Route path="mca-data" element={withSuspense(MCAData)} />
          <Route path="mca-filed-docs" element={withSuspense(MCAFiledDocs)} />
          <Route
            path="tds-206-compliance"
            element={withSuspense(TDSCompliance)}
          />
          <Route
            path="fssai-verification"
            element={withSuspense(FSSAIVerification)}
          />
          <Route
            path="tan-verification"
            element={withSuspense(TANVerification)}
          />
          <Route
            path="udyog-verification"
            element={withSuspense(UDYOGVerification)}
          />
          <Route
            path="udyam-verification"
            element={withSuspense(UDYAMVerification)}
          />
          <Route
            path="iec-verification"
            element={withSuspense(IECVerification)}
          />
        </Route>
        <Route path="/identity">
          <Route index element={withSuspense(Identity)} />
          <Route
            path="pan-verification"
            element={withSuspense(PanVerification)}
          />
          <Route
            path="pan-comprehensive"
            element={withSuspense(PANComprehensive)}
          />
          <Route path="aadhaar-to-pan" element={withSuspense(AadharPAN)} />
          <Route path="pan-validation" element={withSuspense(PANValidation)} />
          <Route
            path="aadhar-verification"
            element={withSuspense(AadharVerification)}
          />
          <Route
            path="voter-id-verification"
            element={withSuspense(VoterVerification)}
          />
          <Route path="voter-id-ocr" element={withSuspense(VoterOCR)} />
          <Route
            path="dl-verification"
            element={withSuspense(DLVerification)}
          />
          <Route
            path="passport-verification"
            element={withSuspense(PassportVerification)}
          />
          <Route path="passport-ocr" element={withSuspense(PassportOCR)} />
          <Route path="photo-id-ocr" element={withSuspense(PhotoOCR)} />
          <Route
            path="vehicle-rc-verification"
            element={withSuspense(VehicleRCVerification)}
          />
          <Route path="chassis-to-rc" element={withSuspense(ChasisRC)} />
          <Route path="rc-with-financer" element={withSuspense(RCFinancer)} />
          <Route path="aadhaar-masking" element={withSuspense(AadharMasking)} />
        </Route>
        <Route path="/aadhar">
          <Route index element={withSuspense(Aadhar)} />
          <Route
            path="face-verification"
            element={withSuspense(FaceVerification)}
          />
          <Route path="e-sign" element={withSuspense(AadharESign)} />
        </Route>
        <Route path="/contact-us" element={withSuspense(ContactUs)} />
        <Route path="/about-us" element={withSuspense(AboutUs)} />
      </Route>
      <Route
        path="/*"
        element={
          <div className="w-screen h-screen flex justify-center items-center">
            404
          </div>
        }
      />
    </Routes>
  )
}

export default App
