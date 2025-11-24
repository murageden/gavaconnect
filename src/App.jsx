import React, { useState, useMemo } from 'react';
import { 
  ArrowRight, Zap, TrendingUp, Shield, Layers, Globe, Lightbulb, 
  FileText, DollarSign, Banknote, UserCheck, MinusCircle, CheckCircle, 
  PlusSquare, FileSignature, Hourglass, Wallet, Home, QrCode, 
  Truck, CreditCard, Download, Settings
} from 'lucide-react';

const ITEMS_PER_PAGE = 9; 

const catalogData = [
  {
    icon: <Zap className="w-6 h-6 text-indigo-500" />,
    title: "KRA Pin Registration",
    text: "Use this API to authenticate Excise License Numbers issued by the Kenya Revenue Authority (KRA). Upon validation, the system retrieves essential license metadata.",
    url: "kra-pin-registration",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-green-500" />,
    title: "Nill Tax Returns Filling",
    text: "This endpoint facilitates the submission of Nil Returns for taxpayers who generated no taxable income during a designated period. Ensures statutory compliance.",
    url: "nil-tax-returns-filling",
  },
  {
    icon: <Shield className="w-6 h-6 text-red-500" />,
    title: "Tax Compliance Certificate Application",
    text: "Integrated within the iTax system infrastructure, this API is executed upon submission of a Tax Compliance Certificate (TCC) application by a taxpayer.",
    url: "tax-compliance-certificate-application",
  },
  {
    icon: <Layers className="w-6 h-6 text-sky-500" />,
    title: "Turn Over Tax Returns Filling",
    text: "This API provides a unified process for registered taxpayers to submit their Turn Over Tax (TOT) Returns and obtain a Payment Registration Number (PRN).",
    url: "turn-over-tax-returns-filling",
  },
  {
    icon: <Globe className="w-6 h-6 text-amber-500" />,
    title: "KRA PIN Validity Check",
    text: "This API is specifically engineered to perform real-time verification of a KRA Personal Identification Number (PIN) by cross-referencing it with the official, existing taxpayer records maintained within the iTax system database.",
    url: "kra-pin-validity-check",
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-purple-500" />,
    title: "KRA PIN Retrieval With ID",
    text: "This API provides a crucial identity lookup service, enabling users to retrieve a taxpayer's KRA PIN along with their officially registered name. To execute this function, users must supply a valid Taxpayer Identification Document (ID) and specify the corresponding Taxpayer Type. This service is fundamental for securely confirming the identity of both individuals and entities within the Kenya Revenue Authority (KRA) systems.",
    url: "kra-pin-retrieval-with-id",
  },

  {
    icon: <FileText className="w-6 h-6 text-blue-600" />,
    title: "Excise License Check With Certificate Number",
    text: "This service provides a dedicated interface for automatic verification of Excise License Numbers issued by the Kenya Revenue Authority (KRA). It facilitates the immediate confirmation of a license's validity status. Upon successful verification, the service returns essential associated details, including the Taxpayer Name, the specific Class of Goods covered by the license, the official Issue Date, and the corresponding Personal Identification Number (PIN) of the licensee.",
    url: "excise-license-check-with-certificate-number",
  },
  {
    icon: <DollarSign className="w-6 h-6 text-emerald-500" />,
    title: "Tax Office Check",
    text: "This service provides a dedicated resource for the retrieval of taxpayer station details. It is utilized to query and fetch the current station name and associated demographic information for a specific taxpayer.",
    url: "tax-office-check",
  },
  {
    icon: <Banknote className="w-6 h-6 text-yellow-600" />,
    title: "Import Certificate Check With PIN",
    text: "The service provides authorized external systems with the ability to query the status and details of import certificates by supplying the relevant KRA PIN number.",
    url: "import-certificate-check-with-pin",
  },
  {
    icon: <UserCheck className="w-6 h-6 text-sky-600" />,
    title: "Income Tax Exemption Check",
    text: "This service is engaged for regulatory compliance checks, allowing clients to confirm if a specific entity is legally excused from paying income tax. The API not only confirms the status but also provides the necessary legal framework details supporting the exemption, including its time limit and obligations.",
    url: "income-tax-exemption-check",
  },
  {
    icon: <MinusCircle className="w-6 h-6 text-rose-500" />,
    title: "VAT Exemption Check",
    text: "The service provides authorized external systems with the ability to check the validity of a VAT Exemption Certificate for compliance or transactional purposes.",
    url: "vat-exemption-check",
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-indigo-600" />,
    title: "Obligations Retrieval",
    text: "The service provides a mechanism for verified systems (both within the organization and authorized outside parties) to determine a taxpayer's active tax commitments at the moment of inquiry.",
    url: "obligations-retrievals",
  },
  {
    icon: <PlusSquare className="w-6 h-6 text-fuchsia-600" />,
    title: "Excise License Check With PIN",
    text: "This service acts as a central verification and information retrieval tool. It confirms a taxpayer's identity via PIN validation and delivers a complete compliance snapshot, including their Excise License status and their current registration standing for VAT and PAYE.",
    url: "excise-license-check-with-pin",
  },
  {
    icon: <FileSignature className="w-6 h-6 text-pink-600" />,
    title: "KRA PIN Retrieval With KRA PIN",
    text: "This service core function is to verify the authenticity and existence of a submitted KRA PIN within the iTax database.",
    url: "kra-pin-retrieval-with-kra-pin",
  },
  {
    icon: <Hourglass className="w-6 h-6 text-amber-400" />,
    title: "Import Certificate Check With Certificate Number",
    text: "The service provides authorized external systems with the ability to check the authenticity and details of an import certificate for compliance or transactional purposes.",
    url: "import-certificate-check-with-certificate-number",
  },
  {
    icon: <Wallet className="w-6 h-6 text-lime-500" />,
    title: "Payment Registration Number (PRN) Retrieval",
    text: "The service allows clients to look up and retrieve the details of Payment Registration Numbers (PRNs) previously issued by the iTax system.",
    url: "payment-registration-number-prn-retrieval",
  },
  {
    icon: <Home className="w-6 h-6 text-teal-500" />,
    title: "E-Slip Retrieval",
    text: "The service core function is to validate the authenticity and current status of tax payment slips created on KRA platforms.",
    url: "e-slip-retrieval",
  },
  {
    icon: <QrCode className="w-6 h-6 text-cyan-600" />,
    title: "Income Tax Withholding PRN Generation",
    text: "This dservice enables the secure transmission of Income Tax Withholding Tax transaction data to the Kenya Revenue Authority (KRA). The payload is structured to include both a header and summary, which provides aggregated information for the complete submission, and detailed records itemizing each individual withholding transaction. Upon successful submission and processing, the system returns a unique Payment Reference Number (PRN), which is required for the subsequent remittance of the withheld tax liability. The official *Income Tax Withholding Certificate* is automatically processed and issued to the withholdee directly by the KRA's iTax system upon confirmation of the full payment associated with the generated PRN",
    url: "income-tax-withholding-prn-generation",
  },
  {
    icon: <Truck className="w-6 h-6 text-orange-600" />,
    title: "VAT Withholding PRN Generation",
    text: "This service facilitates the process for Value Added Tax (VAT) withholding tax remittance to the Kenya Revenue Authority (KRA). It executes the submission of complete withholding tax transaction data, structured with a header summary and detailed breakdowns of individual withholding transactions. Upon successful submission, the system automatically generates a Payment Reference Number (PRN). This PRN is essential for initiating the required payment of the withheld tax amount. Following the successful payment of the generated PRN, the official VAT Withholding Certificate is automatically processed and issued to the withholdee directly through the KRA iTax system.",
    url: "vat-withholding-prn-generation",
  },
  {
    icon: <CreditCard className="w-6 h-6 text-fuchsia-500" />,
    title: "Customs Declaration Check",
    text: "This service provides clients with real-time status lookups for customs declarations based on the declaration number.",
    url: "customs-declaration-check",
  },
  {
    icon: <Download className="w-6 h-6 text-neutral-600" />,
    title: "Tax Compliance Certificate (TCC) Check",
    text: "This API provides a service for verifying the current standing of Tax Compliance Certificates (TCCs) issued by the Kenya Revenue Authority (KRA).",
    url: "tax-compliance-certificate-tcc-check",
  },
];


const CatalogCard = ({ title, text, url, icon }) => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log(`Navigating to: ${url} - Card Title: ${title}`);
  };

  return (
    <a
      href={url}
      onClick={handleClick}
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
    </a>
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
            <ArrowRight className="w-4 h-4 transform rotate-180" />
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

const SimpleHeader = () => (
    <nav className="w-full bg-rose-800 shadow-md border-b border-gray-100">
        <div className="w-full px-4 sm:px-8">
            <div className="flex justify-between items-center h-14">
                <div className="text-xl font-bold text-white">
                    Gava Connect
                </div>
                <div className="flex items-center space-x-4">
                    <a 
                        href="https://developer.go.ke/apis" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-white px-4 py-2 rounded-lg bg-rose-900 hover:bg-rose-700 transition duration-150"
                        onClick={(e) => { 
                            console.log('Navigating to Developer Portal (New Tab)'); 
                        }}
                    >
                        Developer Portal
                    </a>
                </div>
            </div>
        </div>
    </nav>
);


const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const currentItems = useMemo(() => {
    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    return catalogData.slice(indexOfFirstItem, indexOfLastItem);
  }, [currentPage]);
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center font-sans">
      
      <SimpleHeader />

      <div className="w-full flex flex-col items-center">
        
        <header className="py-12 text-center px-4 w-full">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Discover Gava Connect Features
          </h1>
          <p className="text-xl text-gray-500 w-full px-4">
            Explore the powerful features integrated with iTax and KRA systems using this modern API catalog.
          </p>
        </header>
        <hr className="w-full"/>
        <main className="w-full mx-auto pb-16 px-4 sm:px-8"> 
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
        <hr className="w-full"/>
        <footer className="w-full border-t border-gray-200 mt-auto">
          <div className="w-full py-6 text-center text-sm text-gray-400 px-4">
            &copy; 2025 Gava Connect. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;