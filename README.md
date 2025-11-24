# GavaConnect App

Implementing GavaConnect, a comprehensive repository that serves as the official catalog for all Government Application Programming Interfaces (APIs). Full access to this centralized resource, which includes detailed documentation and specifications, is provided through the official application, available by navigating to: [Developer Portal](https://developer.go.ke/apis) 

This application is available [Here](https://gavaconnect.vercel.app/)
## Available APIs

The core functionality of this application is powered by a carefully selected series of APIs, which have been fully implemented and are documented below:

### `KRA Pin Registration`

Use this API to *authenticate Excise License Numbers* issued by the *Kenya Revenue Authority (KRA)*. Upon validation, the system retrieves essential license metadata, including the taxpayer's name and PIN, the specific class of goods, and the date of issuance

### `Nill Tax Returns Filling`

This endpoint facilitates the submission of *Nil Returns* for taxpayers who hold active obligations but generated no taxable income during a designated period. It provides a streamlined mechanism for declaring zero activity, ensuring adherence to statutory compliance requirements

### `Tax Compliance Certificate (TCC) Application`

Integrated within the iTax system infrastructure, this API is executed upon submission of a *Tax Compliance Certificate (TCC)* application by a taxpayer

### `Turn Over Tax Returns Filling`

This API provides a unified process for registered taxpayers to submit their *Turn Over Tax (TOT) Returns* and obtain a *Payment Registration Number (PRN)* required to settle the resulting tax liability.

### `KRA PIN Validity Check`

This API is specifically engineered to perform *real-time verification* of a *KRA Personal Identification Number (PIN)* by cross-referencing it with the official, existing taxpayer records maintained within the *iTax system database*

### `KRA PIN Retrieval With ID`

This API provides a crucial *identity lookup service*, enabling users to retrieve a taxpayer's *KRA Personal Identification Number (PIN)* along with their officially registered name. To execute this function, users must supply a valid *Taxpayer Identification Document (ID)* and specify the corresponding *Taxpayer Type*. This service is fundamental for securely *confirming the identity* of both individuals and entities within the Kenya Revenue Authority (KRA) systems

### `Excise License Check With Certificate Number`

This service provides a dedicated interface for automatic *verification of Excise License Numbers* issued by the Kenya Revenue Authority (KRA). It facilitates the immediate confirmation of a license's validity status. Upon successful verification, the service returns essential associated details, including the *Taxpayer Name*, the specific *Class of Goods* covered by the license, the official Issue Date, and the corresponding *Personal Identification Number (PIN)* of the licensee


### `Tax Office Check`

This service provides a dedicated resource for the *retrieval of taxpayer station details*. It is utilized to query and fetch the current *station name* and associated demographic information for a specific taxpayer


### `Import Certificate Check With PIN`

The service provides authorized external systems with the ability to query the status and *details of import certificates* by supplying the relevant *KRA PIN* number

### `Income Tax Exemption Check`

This service is engaged for *regulatory compliance checks*, allowing clients to confirm if a specific entity is legally *excused from paying income tax*. The API not only confirms the status but also provides the necessary *legal framework details* supporting the exemption, including its *time limit* and *obligations*.

### `VAT Exemption Check`

The service provides *authorized external systems* with the ability to *check the validity* of a *VAT Exemption Certificate* for compliance or transactional purposes.

### `Obligations Retrieval`

The service provides a mechanism for *verified systems* (both within the organization and authorized outside parties) to *determine a taxpayer's active tax commitments* at the moment of inquiry.

### `Excise License Check With PIN`

This service acts as a *central verification and information retrieval tool*. It confirms a taxpayer's identity via 8PIN validation* and delivers a complete compliance snapshot, including their *Excise License status* and their current registration standing for VAT and PAYE

### `KRA PIN Retrieval With KRA PIN`

This service core function is to *verify the authenticity and existence* of a submitted KRA PIN within the iTax database.

### `Import Certificate Check With Certificate Number`

The service provides *authorized external systems* with the ability to *check the authenticity and details* of an import certificate for compliance or transactional purposes.

### `Payment Registration Number (PRN) Retrieval`

The service allows clients to *look up and retrieve* the details of *Payment Registration Numbers (PRNs)* previously issued by the iTax system.


### `E-Slip Retrieval`

This service core function is to *validate the authenticity and current status* of tax payment slips created on KRA platforms

### `Income Tax Withholding PRN Generation`

This dservice enables the secure transmission of Income Tax Withholding Tax *transaction data* to the Kenya Revenue Authority (KRA). The payload is structured to include both a header and summary, which provides aggregated information for the complete submission, and detailed records itemizing each individual withholding transaction. Upon successful submission and processing, the system returns a unique *Payment Reference Number (PRN)*, which is required for the subsequent remittance of the withheld tax liability. The official *Income Tax Withholding Certificate* is automatically processed and issued to the withholdee directly by the KRA's iTax system upon confirmation of the full payment associated with the generated *PRN*.


### `VAT Withholding PRN Generation`

This service facilitates the process for Value Added Tax (VAT) *withholding tax remittance* to the Kenya Revenue Authority (KRA). It executes the submission of complete withholding tax transaction data, structured with a header summary and detailed breakdowns of individual withholding transactions. Upon successful submission, the system automatically generates a *Payment Reference Number (PRN)*. This PRN is essential for initiating the required payment of the withheld tax amount. Following the successful payment of the generated PRN, the official *VAT Withholding Certificate* is automatically processed and issued to the withholdee directly through the KRA iTax system.

### `Customs Declaration Check`

This service provides clients with *real-time status lookups* for customs declarations based on the *declaration number*.

### `Tax Compliance Certificate (TCC) Check`

This API provides a service for *verifying* the current standing of *Tax Compliance Certificates (TCCs)* issued by the Kenya Revenue Authority (KRA).


## More APIs

You can find more APIs at the developer portal for the [Gava Connect APIs](https://developer.go.ke/apis)

To learn more about their usage, check out the [FAQs](https://developer.go.ke/FAQs)