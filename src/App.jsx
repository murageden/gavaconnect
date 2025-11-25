import React, { useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, ArrowLeft, Zap, TrendingUp, Shield, Layers, Globe, Lightbulb, 
  FileText, DollarSign, Banknote, UserCheck, MinusCircle, CheckCircle, 
  PlusSquare, FileSignature, Hourglass, Wallet, Home, QrCode, 
  Truck, CreditCard, Download, Settings, Send, XCircle
} from 'lucide-react';

export const catalogData = [
  {
    icon: <Zap className="w-6 h-6 text-indigo-500" />,
    title: "KRA Pin Registration",
    text: "This API facilitates the registration of new Personal Identification Numbers (PINs) for individual Kenyan taxpayers.",
    url: "kra-pin-registration",
    color: "indigo",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-green-500" />,
    title: "Nill Tax Returns Filling",
    text: "This endpoint facilitates the submission of Nil Returns for taxpayers who generated no taxable income during a designated period. Ensures statutory compliance.",
    url: "nil-tax-returns-filling",
    color: "green",
  },
  {
    icon: <Shield className="w-6 h-6 text-red-500" />,
    title: "Tax Compliance Certificate Application",
    text: "Integrated within the iTax system infrastructure, this API is executed upon submission of a Tax Compliance Certificate (TCC) application by a taxpayer.",
    url: "tax-compliance-certificate-application",
    color: "red",
  },
  {
    icon: <Layers className="w-6 h-6 text-sky-500" />,
    title: "Turn Over Tax Returns Filling",
    text: "This API provides a unified process for registered taxpayers to submit their Turn Over Tax (TOT) Returns and obtain a Payment Registration Number (PRN).",
    url: "turn-over-tax-returns-filling",
    color: "sky",
  },
  {
    icon: <Globe className="w-6 h-6 text-amber-500" />,
    title: "KRA PIN Validity Check",
    text: "This API is specifically engineered to perform real-time verification of a KRA Personal Identification Number (PIN) by cross-referencing it with the official, existing taxpayer records maintained within the iTax system database.",
    url: "kra-pin-validity-check",
    color: "amber",
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-purple-500" />,
    title: "KRA PIN Retrieval With ID",
    text: "This API provides a crucial identity lookup service, enabling users to retrieve a taxpayer's KRA PIN along with their officially registered name. To execute this function, users must supply a valid Taxpayer Identification Document (ID) and specify the corresponding Taxpayer Type. This service is fundamental for securely confirming the identity of both individuals and entities within the Kenya Revenue Authority (KRA) systems.",
    url: "kra-pin-retrieval-with-id",
    color: "purple",
  },
  {
    icon: <FileText className="w-6 h-6 text-blue-600" />,
    title: "Excise License Check With Certificate Number",
    text: "This service provides a dedicated interface for automatic verification of Excise License Numbers issued by the Kenya Revenue Authority (KRA). It facilitates the immediate confirmation of a license's validity status. Upon successful verification, the service returns essential associated details, including the Taxpayer Name, the specific Class of Goods covered by the license, the official Issue Date, and the corresponding Personal Identification Number (PIN) of the licensee.",
    url: "excise-license-check-with-certificate-number",
    color: "blue",
  },
  {
    icon: <DollarSign className="w-6 h-6 text-emerald-500" />,
    title: "Tax Office Check",
    text: "This service provides a dedicated resource for the retrieval of taxpayer station details. It is utilized to query and fetch the current station name and associated demographic information for a specific taxpayer.",
    url: "tax-office-check",
    color: "emerald",
  },
  {
    icon: <Banknote className="w-6 h-6 text-yellow-600" />,
    title: "Import Certificate Check With PIN",
    text: "The service provides authorized external systems with the ability to query the status and details of import certificates by supplying the relevant KRA PIN number.",
    url: "import-certificate-check-with-pin",
    color: "yellow",
  },
  {
    icon: <UserCheck className="w-6 h-6 text-sky-600" />,
    title: "Income Tax Exemption Check",
    text: "This service is engaged for regulatory compliance checks, allowing clients to confirm if a specific entity is legally excused from paying income tax. The API not only confirms the status but also provides the necessary legal framework details supporting the exemption, including its time limit and obligations.",
    url: "income-tax-exemption-check",
    color: "sky",
  },
  {
    icon: <MinusCircle className="w-6 h-6 text-rose-500" />,
    title: "VAT Exemption Check",
    text: "The service provides authorized external systems with the ability to check the validity of a VAT Exemption Certificate for compliance or transactional purposes.",
    url: "vat-exemption-check",
    color: "rose",
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-indigo-600" />,
    title: "Obligations Retrieval",
    text: "The service provides a mechanism for verified systems (both within the organization and authorized outside parties) to determine a taxpayer's active tax commitments at the moment of inquiry.",
    url: "obligations-retrievals",
    color: "indigo",
  },
  {
    icon: <PlusSquare className="w-6 h-6 text-fuchsia-600" />,
    title: "Excise License Check With PIN",
    text: "This service acts as a central verification and information retrieval tool. It confirms a taxpayer's identity via PIN validation and delivers a complete compliance snapshot, including their Excise License status and their current registration standing for VAT and PAYE.",
    url: "excise-license-check-with-pin",
    color: "fuchsia",
  },
  {
    icon: <FileSignature className="w-6 h-6 text-pink-600" />,
    title: "KRA PIN Retrieval With KRA PIN",
    text: "This service core function is to verify the authenticity and existence of a submitted KRA PIN within the iTax database.",
    url: "kra-pin-retrieval-with-kra-pin",
    color: "pink",
  },
  {
    icon: <Hourglass className="w-6 h-6 text-amber-400" />,
    title: "Import Certificate Check With Certificate Number",
    text: "The service provides authorized external systems with the ability to check the authenticity and details of an import certificate for compliance or transactional purposes.",
    url: "import-certificate-check-with-certificate-number",
    color: "amber",
  },
  {
    icon: <Wallet className="w-6 h-6 text-lime-500" />,
    title: "Payment Registration Number (PRN) Retrieval",
    text: "The service allows clients to look up and retrieve the details of Payment Registration Numbers (PRNs) previously issued by the iTax system.",
    url: "payment-registration-number-prn-retrieval",
    color: "lime",
  },
  {
    icon: <Home className="w-6 h-6 text-teal-500" />,
    title: "E-Slip Retrieval",
    text: "The service core function is to validate the authenticity and current status of tax payment slips created on KRA platforms.",
    url: "e-slip-retrieval",
    color: "teal",
  },
  {
    icon: <QrCode className="w-6 h-6 text-cyan-600" />,
    title: "Income Tax Withholding PRN Generation",
    text: "This dservice enables the secure transmission of Income Tax Withholding Tax transaction data to the Kenya Revenue Authority (KRA). The payload is structured to include both a header and summary, which provides aggregated information for the complete submission, and detailed records itemizing each individual withholding transaction. Upon successful submission and processing, the system returns a unique Payment Reference Number (PRN), which is required for the subsequent remittance of the withheld tax liability. The official *Income Tax Withholding Certificate* is automatically processed and issued to the withholdee directly by the KRA's iTax system upon confirmation of the full payment associated with the generated PRN",
    url: "income-tax-withholding-prn-generation",
    color: "cyan",
  },
  {
    icon: <Truck className="w-6 h-6 text-orange-600" />,
    title: "VAT Withholding PRN Generation",
    text: "This service facilitates the process for Value Added Tax (VAT) withholding tax remittance to the Kenya Revenue Authority (KRA). It executes the submission of complete withholding tax transaction data, structured with a header summary and detailed breakdowns of individual withholding transactions. Upon successful submission, the system automatically generates a Payment Reference Number (PRN). This PRN is essential for initiating the required payment of the withheld tax amount. Following the successful payment of the generated PRN, the official VAT Withholding Certificate is automatically processed and issued to the withholdee directly through the KRA iTax system.",
    url: "vat-withholding-prn-generation",
    color: "orange",
  },
  {
    icon: <CreditCard className="w-6 h-6 text-fuchsia-500" />,
    title: "Customs Declaration Check",
    text: "This service provides clients with real-time status lookups for customs declarations based on the declaration number.",
    url: "customs-declaration-check",
    color: "fuchsia",
  },
  {
    icon: <Download className="w-6 h-6 text-neutral-600" />,
    title: "Tax Compliance Certificate (TCC) Check",
    text: "This API provides a service for verifying the current standing of Tax Compliance Certificates (TCCs) issued by the Kenya Revenue Authority (KRA).",
    url: "tax-compliance-certificate-tcc-check",
    color: "neutral",
  },
];

const ITEMS_PER_PAGE = 9; 

const Notification = ({ message, type, onClose }) => {
  if (!message) return null;

  const typeClasses = {
    success: 'bg-green-500 border-green-700',
    error: 'bg-red-500 border-red-700',
  };
  const Icon = type === 'success' ? CheckCircle : XCircle;

  return (
    <div className="fixed bottom-5 right-5 z-50 p-4 max-w-sm w-full">
      <div className={`flex items-center ${typeClasses[type]} text-white text-sm font-bold px-4 py-3 rounded-lg shadow-xl border-l-4`}>
        <Icon className="w-5 h-5 mr-3" />
        <p className="flex-grow">{message}</p>
        <button onClick={onClose} className="ml-4 opacity-75 hover:opacity-100 transition">
          <svg className="fill-current h-6 w-6" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.854l-2.651 2.995a1.2 1.2 0 1 1-1.697-1.697l2.995-2.651-2.995-2.651a1.2 1.2 0 1 1 1.697-1.697L10 8.303l2.651-2.995a1.2 1.2 0 1 1 1.697 1.697L11.854 10l2.995 2.651a1.2 1.2 0 0 1 0 1.698z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

const DetailPage = ({ setNotification }) => {
  const { cardUrl } = useParams();
  const navigate = useNavigate();
  const card = catalogData.find(item => item.url === cardUrl);

  const handleBack = () => {
    navigate('/');
  };

  if (!card) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] p-8 bg-gray-50 flex-grow w-full max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-red-600">404 - Feature Not Found</h2>
        <p className="text-gray-600 mt-2">The requested feature could not be located.</p>
        <button
          onClick={handleBack}
          className="mt-6 px-6 py-2 bg-rose-800 text-white font-semibold rounded-lg hover:bg-rose-700 transition duration-150 flex items-center shadow-lg"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Features
        </button>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Submitting form for: ${card.title}`);
    
    setNotification({
      message: `Form for "${card.title}" submitted successfully! (Check console for details)`,
      type: 'success'
    });
  };

  const iconBgClass = `bg-${card.color}-100`;
  const iconTextColorClass = `text-${card.color}-600`;

  return (
    <div className="flex flex-col flex-grow w-full">
      <header className="py-8 px-4 sm:px-8 bg-white shadow-lg border-b border-gray-200 w-full">
        <div className="mx-auto max-w-5xl"> 
          <button
            onClick={handleBack}
            className="text-rose-600 hover:text-rose-800 transition-colors flex items-center mb-4 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Features
          </button>
          <div className="flex items-center">
            <div className={`p-3 rounded-full ${iconBgClass} ${iconTextColorClass}`}>
                {card.icon}
            </div>
            <h1 className="text-4xl font-extrabold text-gray-900 ml-4">{card.title}</h1>
          </div>
          <p className="mt-3 text-lg text-gray-600">{card.text}</p>
        </div>
      </header>
      
      <main className="flex-grow flex items-center justify-center w-full py-12 px-4 sm:px-8"> 
        <form 
          onSubmit={handleSubmit} 
          className="bg-white p-6 sm:p-10 shadow-2xl rounded-xl w-full max-w-4xl mx-auto border-t-8 border-rose-600 transform hover:shadow-3xl transition duration-500"
        >
          <h2 className="text-2xl font-bold mb-8 text-gray-800 border-b pb-4">Fill in all the required fields</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <label className="block">
                <span className="text-gray-700 font-semibold mb-1 block">TaxPayer's Name</span>
                <input
                    type="text"
                    placeholder="e.g., Q3 Launch"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-rose-200 focus:border-rose-500 transition duration-200 hover:border-rose-400"
                />
            </label>
            <label className="block">
                <span className="text-gray-700 font-semibold mb-1 block">TaxPayer's Region</span>
                <select
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-rose-200 focus:border-rose-500 transition duration-200 hover:border-rose-400 appearance-none bg-white pr-8"
                >
                    <option value="">Select a region</option>
                    <option>Global (Default)</option>
                    <option>North America</option>
                    <option>Europe</option>
                    <option>Asia Pacific</option>
                </select>
            </label>
            <label className="block md:col-span-2">
                <span className="text-gray-700 font-semibold mb-1 block">Description / Notes</span>
                <textarea
                    placeholder="Optional notes for deployment..."
                    rows="3"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-rose-200 focus:border-rose-500 transition duration-200 hover:border-rose-400 resize-none"
                ></textarea>
            </label>
            
          </div>

          <div className="pt-8 mt-8 border-t border-gray-200 flex justify-end w-full">
            <button
              type="submit" 
              className="px-8 py-3 bg-rose-800 text-white font-semibold rounded-full 
                        shadow-xl hover:bg-rose-700 focus:outline-none 
                        focus:ring-4 focus:ring-rose-500 focus:ring-opacity-50 
                        transition duration-300 ease-in-out flex items-center space-x-2 transform hover:scale-[1.05]"
            >
              <Send className="w-5 h-5" />
              <span>Submit</span>
            </button>
          </div>
          
        </form>
      </main>
    </div>
  );
};

const CatalogCard = ({ title, text, url, icon }) => {
  return (
    <Link
      to={`/features/${url}`}
      className="block w-full h-full p-6 rounded-2xl border border-gray-200 bg-white shadow-xl cursor-pointer 
      transition duration-300 ease-in-out 
      transform hover:scale-[1.02] hover:shadow-2xl 
      hover:border-rose-600 group focus:outline-none focus:ring-4 focus:ring-rose-200"
      aria-label={`Go to ${title} solution`}
    >
      <div className="flex flex-col h-full justify-between">
        <div className="mb-4">
          <div className="mb-3">{icon}</div>
          <h2 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
            {title}
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed ">
            {text}
          </p>
        </div>

        <div className="flex items-center mt-4 pt-3 border-t border-gray-100 justify-between 
                      text-rose-600 font-semibold text-sm">
          <span className="group-hover:underline transition duration-300">
            Explore Solution
          </span>
          <ArrowRight
            className="w-5 h-5 ml-2 transition-transform duration-300 
                       group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  );
};

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  if (totalPages <= 1) return null;

  const getVisiblePages = (current, total) => {
    const delta = 2; 
    const range = [];
    const rangeWithDots = [];
    let l;

    for (let i = 1; i <= total; i++) {
      if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
        range.push(i);
      }
    }

    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    }
    return rangeWithDots;
  };
  
  const visiblePages = getVisiblePages(currentPage, totalPages);

  return (
    <nav className="mt-12" aria-label="Pagination">
      <ul className="flex justify-center space-x-2">
        <li>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-3 text-sm font-semibold rounded-lg transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed
              bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
            aria-label="Previous Page"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
        </li>

        {visiblePages.map((number, index) => (
          <li key={index}>
            {number === '...' ? (
              <span className="px-2 py-2 text-sm text-gray-500 font-semibold">...</span>
            ) : (
              <button
                onClick={() => paginate(number)}
                className={`px-4 py-2 text-sm font-semibold rounded-lg transition duration-150 ease-in-out 
                  ${currentPage === number 
                    ? 'bg-rose-800 text-white shadow-lg' 
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
                  }`}
                aria-current={currentPage === number ? 'page' : undefined}
              >
                {number}
              </button>
            )}
          </li>
        ))}

        <li>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-3 text-sm font-semibold rounded-lg transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed
              bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
            aria-label="Next Page"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

const Header = () => (
  <header className="sticky top-0 z-10 bg-rose-800 text-white shadow-xl w-full">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
      {/* Left Corner: Site Title */}
      <Link to="/" className="text-xl font-bold text-white hover:text-rose-200 transition">
        Gava Connect
      </Link>
      
      {/* Right Corner: Developer Portal Button */}
      <a 
        href="https://developer.go.ke/apis" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-sm font-bold text-white px-4 py-2 rounded-lg bg-rose-900 hover:bg-rose-700 transition duration-150"
        onClick={() => {}}
      >
        Developer Portal
      </a>
    </div>
  </header>
);

const CatalogView = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const currentItems = useMemo(() => {
    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    return catalogData.slice(indexOfFirstItem, indexOfLastItem);
  }, [currentPage]);
  
  return (
    <>
      <header className="py-12 text-center px-4 w-full">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Discover Gava Connect Features
        </h1>
        <p className="text-xl text-gray-500 w-full px-4">
          Explore the powerful features integrated with iTax and KRA systems using this modern API catalog.
        </p>
      </header>
      <hr className="w-full"/>
      <main className="w-full mx-auto pb-16 px-4 sm:px-8 max-w-7xl"> 
        <div className="grid grid-cols-1 gap-8 
                        md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {currentItems.map((card, index) => (
            <div key={index}> 
              <CatalogCard
                title={card.title}
                text={card.text}
                url={card.url}
                icon={card.icon}
              />
            </div>
          ))}
        </div>
        
        <Pagination
            itemsPerPage={ITEMS_PER_PAGE}
            totalItems={catalogData.length}
            paginate={paginate}
            currentPage={currentPage}
        />
      </main>
    </>
  );
};

const Footer = () => (
  <footer className="w-full bg-gray-100 border-t border-gray-200 mt-auto py-6 px-4">
    <div className="max-w-7xl mx-auto text-center text-sm text-gray-500">
      &copy; {new Date().getFullYear()} Gava Connect Demo. All rights reserved.
    </div>
  </footer>
);

const App = () => {
  const [notification, setNotification] = useState(null);

  const handleCloseNotification = () => {
    setNotification(null);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex flex-col font-sans w-full"> 
        
        <Header /> 
        
        <Routes>
          <Route path="/" element={<CatalogView />} />
          
          <Route 
            path="/features/:cardUrl" 
            element={<DetailPage setNotification={setNotification} />} 
          />
        </Routes>

        <Footer />
        
        <Notification 
          message={notification?.message} 
          type={notification?.type} 
          onClose={handleCloseNotification} 
        />
      </div>
    </BrowserRouter>
  );
};

export default App;