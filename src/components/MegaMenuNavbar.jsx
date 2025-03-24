import { useState, useRef, useEffect } from 'react'
import {
  ChevronDown,
  Menu,
  Shield,
  UserCheck,
  FileSignature,
  Building,
  User,
  FileText,
  Database,
  CreditCard,
  Briefcase,
  FileCheck,
  Globe,
  CheckCircle,
  FileSearch,
  DollarSign,
  Key,
  Phone,
  Utensils,
  Factory,
  BadgeCheck,
  Scan,
  Car,
  Camera,
  Truck,
  Settings,
  Banknote,
  EyeOff,
  Smile,
  PenTool,
  LinkIcon,
  LayoutGrid,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '../lib/utils'
import Wrapper from './Wrapper'
import { Link, useNavigate } from 'react-router-dom'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import ContactUsFormSupa from './ContactUsFormSupa'

// Business Verification Items - 15 items
const businessVerificationItems = [
  {
    id: 'bv-1',
    title: 'GST OTP Verification API',
    description: 'Verify GST details using OTP-based authentication',
    url: '/business/gst-otp-verification',
    icon: <Key className="w-4 h-4" />,
  },
  {
    id: 'bv-2',
    title: 'GST Verification API',
    description: 'Validate GST registration and filing status',
    url: '/business/gst-verification',
    icon: <Database className="w-4 h-4" />,
  },
  {
    id: 'bv-3',
    title: 'GST To Phone Number API',
    description: 'Fetch phone number linked to a GST registration',
    url: '/business/gst-to-phone',
    icon: <Phone className="w-4 h-4 " />,
  },
  {
    id: 'bv-4',
    title: 'MCA Data APIs (CIN / DIN)',
    description: 'Retrieve company and director information using CIN/DIN',
    url: '/business/mca-data',
    icon: <Briefcase className="w-4 h-4 " />,
  },
  {
    id: 'bv-5',
    title: 'MCA Filed Doc Pull API',
    description: 'Fetch company documents filed with MCA',
    url: '/business/mca-filed-docs',
    icon: <FileText className="w-4 h-4 " />,
  },
  {
    id: 'bv-6',
    title: 'TDS-206 Compliance',
    description: 'Verify tax deduction compliance under section 206',
    url: '/business/tds-206-compliance',
    icon: <DollarSign className="w-4 h-4 " />,
  },
  {
    id: 'bv-7',
    title: 'FSSAI Verification API',
    description: 'Verify food business registration with FSSAI',
    url: '/business/fssai-verification',
    icon: <Utensils className="w-4 h-4 " />,
  },
  {
    id: 'bv-8',
    title: 'TAN Verification API',
    description: 'Validate Tax Deduction Account Number (TAN)',
    url: '/business/tan-verification',
    icon: <CreditCard className="w-4 h-4 " />,
  },
  {
    id: 'bv-9',
    title: 'Udyog Verification',
    description: 'Verify business details using Udyog Aadhaar',
    url: '/business/udyog-verification',
    icon: <Factory className="w-4 h-4 " />,
  },
  {
    id: 'bv-10',
    title: 'Udyam Verification',
    description: 'Verify MSME registration under Udyam scheme',
    url: '/business/udyam-verification',
    icon: <BadgeCheck className="w-4 h-4 " />,
  },
  {
    id: 'bv-11',
    title: 'IEC Verification',
    description: 'Validate Import Export Code (IEC) registration',
    url: '/business/iec-verification',
    icon: <Globe className="w-4 h-4 " />,
  },
]

// Identity Verification Items - 15 items
const identityVerificationItems = [
  {
    id: 'iv-1',
    title: 'PAN Verification API',
    description: 'Verify PAN card details and status',
    url: '/identity/pan-verification',
    icon: <FileText className="w-4 h-4" />,
  },
  {
    id: 'iv-2',
    title: 'PAN Comprehensive API',
    description: 'Fetch detailed PAN information with verification',
    url: '/identity/pan-comprehensive',
    icon: <FileCheck className="w-4 h-4 " />,
  },
  {
    id: 'iv-3',
    title: 'Aadhaar to PAN API',
    description: 'Link Aadhaar with PAN and verify details',
    url: '/identity/aadhaar-to-pan',
    icon: <LinkIcon className="w-4 h-4 " />,
  },
  {
    id: 'iv-4',
    title: 'PAN Validation API',
    description: 'Validate PAN details for accuracy',
    url: '/identity/pan-validation',
    icon: <CheckCircle className="w-4 h-4 " />,
  },
  {
    id: 'iv-5',
    title: 'Aadhaar Verification API',
    description: 'Verify identity using Aadhaar details',
    url: '/identity/aadhar-verification',
    icon: <User className="w-4 h-4 " />,
  },
  {
    id: 'iv-6',
    title: 'Voter-ID Verification API',
    description: 'Verify Voter ID details',
    url: '/identity/voter-id-verification',
    icon: <UserCheck className="w-4 h-4 " />,
  },
  {
    id: 'iv-7',
    title: 'Voter-ID OCR API',
    description: 'Extract text and details from Voter ID',
    url: '/identity/voter-id-ocr',
    icon: <Scan className="w-4 h-4 " />,
  },
  {
    id: 'iv-8',
    title: 'DL Verification API',
    description: 'Verify Driving License details',
    url: '/identity/dl-verification',
    icon: <Car className="w-4 h-4 " />,
  },
  {
    id: 'iv-9',
    title: 'Passport Verification API',
    description: 'Verify passport details and validity',
    url: '/identity/passport-verification',
    icon: <Globe className="w-4 h-4 " />,
  },
  {
    id: 'iv-10',
    title: 'Passport OCR API',
    description: 'Extract text from passport using OCR',
    url: '/identity/passport-ocr',
    icon: <FileSearch className="w-4 h-4 " />,
  },
  {
    id: 'iv-11',
    title: 'Photo-ID OCR API',
    description: 'Extract text and details from any photo ID',
    url: '/identity/photo-id-ocr',
    icon: <Camera className="w-4 h-4 " />,
  },
  {
    id: 'iv-12',
    title: 'Vehicle RC Verification API',
    description: 'Verify vehicle registration certificate details',
    url: '/identity/vehicle-rc-verification',
    icon: <Truck className="w-4 h-4 " />,
  },
  {
    id: 'iv-13',
    title: 'Chassis Number to RC API',
    description: 'Retrieve RC details using chassis number',
    url: '/identity/chassis-to-rc',
    icon: <Settings className="w-4 h-4 " />,
  },
  {
    id: 'iv-14',
    title: 'RC with Financer Details',
    description: 'Fetch vehicle RC details along with financer info',
    url: '/identity/rc-with-financer',
    icon: <Banknote className="w-4 h-4 " />,
  },
  {
    id: 'iv-15',
    title: 'Aadhaar Masking API',
    description: 'Mask Aadhaar details for privacy and compliance',
    url: '/identity/aadhaar-masking',
    icon: <EyeOff className="w-4 h-4 " />,
  },
]

// Aadhar E-Sign Items - 15 items
const aadharESignItems = [
  {
    id: 'av-1',
    title: 'Face Verification API',
    description: 'Verify identity using facial recognition technology',
    url: '/aadhar/face-verification',
    icon: <Smile className="w-4 h-4" />,
  },
  {
    id: 'av-2',
    title: 'Aadhaar E-Sign API',
    description: 'Digitally sign documents using Aadhaar-based authentication',
    url: '/aadhar/e-sign',
    icon: <PenTool className="w-4 h-4" />,
  },
]

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [activeCategory, setActiveCategory] = useState(null)
  const navRef = useRef(null)
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null)
        setActiveCategory(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Handle window resize to close menus on mobile/desktop switch
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [mobileMenuOpen])

  const toggleDropdown = (menu) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null)
      setActiveCategory(null)
    } else {
      setActiveDropdown(menu)
      // Set default category to 'business' when opening Products dropdown
      if (menu === 'products') {
        setActiveCategory('business')
      } else {
        setActiveCategory(null)
      }
    }
  }

  // Handle hover events for desktop
  const handleMouseEnter = (menu) => {
    if (window.innerWidth >= 768) {
      setActiveDropdown(menu)
      // Set default category to 'business' when opening Products dropdown
      if (menu === 'products') {
        setActiveCategory('business')
      }
    }
  }

  const handleCategoryMouseEnter = (category) => {
    if (window.innerWidth >= 768) {
      setActiveCategory(category)
    }
  }

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      setActiveDropdown(null)
      setActiveCategory(null)
    }
  }

  // Get the appropriate items based on active category
  const getActiveItems = () => {
    switch (activeCategory) {
      case 'business':
        return businessVerificationItems
      case 'identity':
        return identityVerificationItems
      case 'aadhar':
        return aadharESignItems
      default:
        return []
    }
  }

  // Get the appropriate color based on active category
  const getActiveCategoryColor = () => {
    switch (activeCategory) {
      case 'business':
        return ''
      case 'identity':
        return ''
      case 'aadhar':
        return ''
      default:
        return 'text-foreground'
    }
  }

  return (
    <>
      <div className="relative select-none">
        <ScrollProgress className="bottom-0 absolute" />

        <div ref={navRef} className="">
          {/* Announcement banner */}

          <div className="py-4 px-6 md:px-14">
            <nav className="relative z-30">
              <div className="flex justify-between items-center">
                {/* Logo */}
                <Link
                  to="/"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                  }}
                >
                  <div className="flex gap-1 items-center cursor-pointer">
                    <Shield
                      className="h-5 w-5 text-secondary"
                      strokeWidth={2}
                    />
                    <span className="text-lg font-extrabold text-secondary">
                      XRAY
                    </span>
                  </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center justify-center flex-1 ml-10">
                  <div className="flex gap-2">
                    {/* Products Dropdown */}
                    <div
                      className="relative"
                      onMouseEnter={() => handleMouseEnter('products')}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button
                        onClick={() => toggleDropdown('products')}
                        className="group inline-flex h-10 w-max items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary/5"
                      >
                        Products
                        <ChevronDown
                          className={cn(
                            'ml-1 h-4 w-4 transition-transform',
                            activeDropdown === 'products' ? 'rotate-180' : ''
                          )}
                        />
                      </button>
                    </div>

                    {/* About Us */}
                    <Link
                      to="/about-us"
                      onClick={() => {
                        window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
                      }}
                      className="group inline-flex h-10 w-max items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary/5"
                    >
                      About Us
                    </Link>

                    {/* Contact Us */}
                    <Link
                      to="/contact-us"
                      onClick={() => {
                        window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
                      }}
                      className="group inline-flex h-10 w-max items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary/5"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>

                {/* Get API Keys Button */}
                <div className="flex items-center gap-2">
                  <div className="hidden md:flex items-center">
                    <ContactUsFormSupa />
                  </div>

                  {/* Mobile menu button */}
                  <div className="flex items-center md:hidden">
                    <Sheet open={open} onOpenChange={setOpen}>
                      <SheetTrigger asChild>
                        <Button
                          variant="outline"
                          className="p-4 hover:bg-secondary/5 hover:text-secondary"
                          size="icon"
                        >
                          <Menu className="h-6 w-6" />
                        </Button>
                      </SheetTrigger>
                      <SheetContent className="overflow-y-auto">
                        <SheetHeader>
                          <SheetTitle>
                            <Link
                              to="/"
                              className="flex items-center gap-1"
                              onClick={() => {
                                window.scrollTo({
                                  left: 0,
                                  top: 0,
                                  behavior: 'smooth',
                                })
                              }}
                            >
                              <Shield className="h-5 w-5 text-secondary" />
                              <span className="text-lg font-semibold text-secondary">
                                XRAY
                              </span>
                            </Link>
                          </SheetTitle>
                        </SheetHeader>
                        <div className="my-6 flex flex-col gap-6">
                          <Accordion
                            type="multiple"
                            collapsible
                            className="flex w-full flex-col gap-0"
                          >
                            <AccordionItem
                              value="business"
                              className="border-none"
                            >
                              <AccordionTrigger className="hover:no-underline py-2 text-secondary">
                                Business Verification
                              </AccordionTrigger>
                              <AccordionContent>
                                <div className="flex flex-col gap-2">
                                  {businessVerificationItems.map((item) => (
                                    <Link
                                      to={item.url}
                                      key={item.id}
                                      onClick={() => {
                                        setOpen(false)
                                        window.scrollTo({
                                          top: 0,
                                          left: 0,
                                          behavior: 'smooth',
                                        })
                                      }}
                                    >
                                      <div className="flex items-center gap-2">
                                        <div>{item.icon}</div>
                                        <p className="font-medium text-sm hover:border-b-[1.5px] hover:border-secondary">
                                          {item.title}
                                        </p>
                                      </div>
                                    </Link>
                                  ))}
                                  <Link
                                    to="/business"
                                    onClick={() => {
                                      setOpen(false)
                                      window.scrollTo({
                                        top: 0,
                                        left: 0,
                                        behavior: 'smooth',
                                      })
                                    }}
                                  >
                                    <div className="flex items-center gap-2">
                                      <div>
                                        <LayoutGrid className="w-4 h-4" />
                                      </div>
                                      <p className="font-medium text-sm hover:border-b-[1.5px] hover:border-secondary">
                                        View All Services
                                      </p>
                                    </div>
                                  </Link>
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                            <AccordionItem
                              value="identity"
                              className="border-none"
                            >
                              <AccordionTrigger className="hover:no-underline py-2 text-secondary">
                                Identity Verification
                              </AccordionTrigger>
                              <AccordionContent>
                                <div className="flex flex-col gap-2">
                                  {identityVerificationItems.map((item) => (
                                    <Link
                                      to={item.url}
                                      key={item.id}
                                      onClick={() => {
                                        setOpen(false)
                                        window.scrollTo({
                                          top: 0,
                                          left: 0,
                                          behavior: 'smooth',
                                        })
                                      }}
                                    >
                                      <div className="flex items-center gap-2">
                                        <div>{item.icon}</div>
                                        <p className="font-medium text-sm hover:border-b-[1.5px] hover:border-secondary">
                                          {item.title}
                                        </p>
                                      </div>
                                    </Link>
                                  ))}
                                  <Link
                                    to="/identity"
                                    onClick={() => {
                                      setOpen(false)
                                      window.scrollTo({
                                        top: 0,
                                        left: 0,
                                        behavior: 'smooth',
                                      })
                                    }}
                                  >
                                    <div className="flex items-center gap-2">
                                      <div>
                                        <LayoutGrid className="w-4 h-4" />
                                      </div>
                                      <p className="font-medium text-sm hover:border-b-[1.5px] hover:border-secondary">
                                        View All Services
                                      </p>
                                    </div>
                                  </Link>
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                            <AccordionItem
                              value="aadhar"
                              className="border-none"
                            >
                              <AccordionTrigger className="hover:no-underline py-2 text-secondary">
                                Aadhar E-sign
                              </AccordionTrigger>
                              <AccordionContent>
                                <div className="flex flex-col gap-2">
                                  {aadharESignItems.map((item) => (
                                    <Link
                                      to={item.url}
                                      key={item.id}
                                      onClick={() => {
                                        setOpen(false)
                                        window.scrollTo({
                                          top: 0,
                                          left: 0,
                                          behavior: 'smooth',
                                        })
                                      }}
                                    >
                                      <div className="flex items-center gap-2 ">
                                        <div>{item.icon}</div>
                                        <p className="font-medium text-sm hover:border-b-[1.5px] hover:border-secondary">
                                          {item.title}
                                        </p>
                                      </div>
                                    </Link>
                                  ))}
                                  <Link
                                    to="/aadhar"
                                    onClick={() => {
                                      setOpen(false)
                                      window.scrollTo({
                                        top: 0,
                                        left: 0,
                                        behavior: 'smooth',
                                      })
                                    }}
                                  >
                                    <div className="flex items-center gap-2">
                                      <div>
                                        <LayoutGrid className="w-4 h-4" />
                                      </div>
                                      <p className="font-medium text-sm hover:border-b-[1.5px] hover:border-secondary">
                                        View All Services
                                      </p>
                                    </div>
                                  </Link>
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>

                          <div className="flex flex-col gap-2">
                            <Button
                              asChild
                              variant="outline"
                              className="inline-flex hover:scale-[1.01] items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-primary-foreground hover:bg-secondary/90 hover:text-white h-10 px-4 py-2"
                            >
                              <Link
                                to="/about-us"
                                onClick={() => {
                                  setOpen(false)
                                  window.scrollTo({
                                    left: 0,
                                    top: 0,
                                    behavior: 'smooth',
                                  })
                                }}
                              >
                                About Us
                              </Link>
                            </Button>
                            <Button
                              asChild
                              variant="outline"
                              className=" border border-secondary text-secondary hover:scale-[1.01] hover:bg-white hover:text-secondary"
                            >
                              <Link
                                to="/contact-us"
                                className=""
                                onClick={() => {
                                  setOpen(false)
                                  window.scrollTo({
                                    left: 0,
                                    top: 0,
                                    behavior: 'smooth',
                                  })
                                }}
                              >
                                Contact Us
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </SheetContent>
                    </Sheet>
                  </div>
                </div>
              </div>
            </nav>

            {/* Full-width mega menu */}
            {activeDropdown === 'products' && (
              <div
                className="absolute left-0 right-0 mt-1 bg-white dark:bg-[#09090B] border-b shadow-lg z-40"
                onMouseEnter={() => handleMouseEnter('products')}
                onMouseLeave={handleMouseLeave}
              >
                <Wrapper>
                  <div className="container py-6 -mt-2">
                    <div className="flex">
                      {/* Left sidebar - Categories */}
                      <div className="w-64 border-r pr-6">
                        <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-4">
                          Verification Solutions
                        </h3>

                        <div className="space-y-1">
                          <button
                            onClick={() => {
                              navigate('/business')
                              toggleDropdown(false)
                              window.scrollTo({
                                top: 0,
                                left: 0,
                                behavior: 'smooth',
                              })
                            }}
                            onMouseEnter={() =>
                              handleCategoryMouseEnter('business')
                            }
                            className={cn(
                              'w-full flex items-center p-3 rounded-md hover:bg-secondary/5 group text-left',
                              activeCategory === 'business' ? 'bg-muted' : ''
                            )}
                          >
                            <Building className="w-5 h-5 mr-3 flex-shrink-0" />
                            <div>
                              <h4
                                className={cn(
                                  'text-sm font-semibold group',
                                  activeCategory === 'business' ? '' : ''
                                )}
                              >
                                Business Verification
                              </h4>
                              <p className="text-xs text-muted-foreground">
                                Verify business credentials
                              </p>
                            </div>
                          </button>

                          <button
                            onClick={() => {
                              navigate('/identity')
                              toggleDropdown(false)
                              window.scrollTo({
                                top: 0,
                                left: 0,
                                behavior: 'smooth',
                              })
                            }}
                            onMouseEnter={() =>
                              handleCategoryMouseEnter('identity')
                            }
                            className={cn(
                              'w-full flex items-center p-3 rounded-md group text-left hover:bg-secondary/5',
                              activeCategory === 'identity' ? '' : ''
                            )}
                          >
                            <UserCheck className="w-5 h-5 mr-3 flex-shrink-0" />
                            <div>
                              <h4
                                className={cn(
                                  'text-sm font-semibold group',
                                  activeCategory === 'identity' ? '' : ''
                                )}
                              >
                                Identity Verification
                              </h4>
                              <p className="text-xs text-muted-foreground">
                                Verify individual identity
                              </p>
                            </div>
                          </button>

                          <button
                            onClick={() => {
                              navigate('/aadhar')
                              toggleDropdown(false)
                              window.scrollTo({
                                top: 0,
                                left: 0,
                                behavior: 'smooth',
                              })
                            }}
                            onMouseEnter={() =>
                              handleCategoryMouseEnter('aadhar')
                            }
                            className={cn(
                              'w-full flex items-center p-3 rounded-md group text-left hover:bg-secondary/5',
                              activeCategory === 'aadhar' ? '' : ''
                            )}
                          >
                            <FileSignature className="w-5 h-5 mr-3 flex-shrink-0" />
                            <div>
                              <h4
                                className={cn(
                                  'text-sm font-semibold',
                                  activeCategory === 'aadhar' ? '' : ''
                                )}
                              >
                                Aadhaar E-Sign
                              </h4>
                              <p className="text-xs text-muted-foreground">
                                Electronic signature solutions
                              </p>
                            </div>
                          </button>
                        </div>
                      </div>

                      {/* Right content - Services grid */}
                      <div className="flex-1 pl-6 overflow-y-auto">
                        {activeCategory ? (
                          <>
                            <div className="flex items-center justify-between mb-4">
                              <h3
                                className={cn(
                                  'text-lg font-semibold',
                                  getActiveCategoryColor()
                                )}
                              >
                                {activeCategory === 'business' &&
                                  'Business Verification Services'}
                                {activeCategory === 'identity' &&
                                  'Identity Verification Services'}
                                {activeCategory === 'aadhar' &&
                                  'Aadhaar E-Sign Services'}
                              </h3>
                              <Link
                                to={activeCategory}
                                onClick={() => {
                                  toggleDropdown('products')

                                  window.scrollTo({
                                    left: 0,
                                    top: 0,
                                    behavior: 'smooth',
                                  })
                                }}
                                className={cn(
                                  'text-sm font-medium flex items-center hover:bg-secondary/5 rounded-md p-2',
                                  getActiveCategoryColor()
                                )}
                              >
                                View all services
                                <ChevronDown className="w-4 h-4 ml-1 rotate-[-90deg]" />
                              </Link>
                            </div>

                            <div className="grid grid-cols-3 gap-4 overflow-y-auto">
                              {getActiveItems().map((item) => (
                                <Link
                                  key={item.id}
                                  to={item.url}
                                  onClick={() => {
                                    toggleDropdown(false)
                                    window.scrollTo({
                                      left: 0,
                                      top: 0,
                                      behavior: 'smooth',
                                    })
                                  }}
                                  className="flex select-none gap-3 rounded-md p-3 leading-none outline-none transition-colors hover:bg-secondary/5"
                                >
                                  <div className="flex-shrink-0">
                                    {item.icon}
                                  </div>
                                  <div>
                                    <div className="text-sm font-semibold">
                                      {item.title}
                                    </div>
                                    <p className="text-xs leading-snug text-muted-foreground mt-1">
                                      {item.description}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </>
                        ) : (
                          <div className="h-full flex items-center justify-center text-center p-12">
                            <div>
                              <Shield className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                              <h3 className="text-lg font-semibold mb-2">
                                Explore Our Verification Solutions
                              </h3>
                              <p className="text-muted-foreground max-w-md mx-auto">
                                Select a category from the left to view our
                                comprehensive verification services for
                                businesses and individuals.
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Wrapper>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
