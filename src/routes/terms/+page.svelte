<script>
    import { goto } from "$app/navigation";
    import { base } from "$app/paths";
</script>

<div class="px-4 pt-20 gradient-bg flex items-center">
    <div class="container mx-auto text-start">
        <div class="mb-10">
            <div class="text-customGreen mb-4 text-3xl">Terms of Use</div>
            <ul class="list-disc list-inside text-gray-400 mb-4 ms-4">
                <li class="mb-2">
                    You must be at least 18 years old to use our services.
                </li>
                <li class="mb-2">
                    Creating an account with false information is a violation of
                    our terms.
                </li>
                <li class="mb-2">
                    Each user is permitted to create only one free account.
                </li>
                <li class="mb-2">
                    Inactive accounts may be closed after 3 months.
                </li>
                <li class="mb-2">
                    You must provide accurate account details and are
                    responsible for the security of your account.
                </li>
            </ul>
        </div>

        <div class="my-10">
            <div class="text-customGreen mb-4 text-xl">
                Privacy and Data Protection
            </div>
            <div class="text-gray-400 mb-4">
                We value your privacy and take data protection seriously. The
                following types of information are collected:
            </div>
            <ul class="list-disc list-inside text-gray-400 mb-4 ms-4">
                <li class="mb-2">
                    Anonymized usage data for website improvements.
                </li>
                <li class="mb-2">
                    Personal details such as names, company affiliations, and
                    email addresses for user identification.
                </li>
                <li class="mb-2">
                    Financial records including VAT-IDs and invoices for
                    transactional purposes.
                </li>
                <li class="mb-2">
                    Correspondence records, such as email dialogues, for
                    customer service excellence.
                </li>
            </ul>
            <div class="text-gray-400">
                For details on telemetry data collection and opt-out procedures,
                please refer to our
                <span
                    class="text-customGreen cursor-pointer hover:text-white"
                    onclick={() => goto(base + "/telemetry")}
                >
                    {" "}Telemetry Policy
                </span>
                .
            </div>
        </div>

        <div class="my-10">
            <div class="text-customGreen mb-4 text-xl">Support</div>
            <div class="text-gray-400 mb-4">
                Our support is categorized and provided as follows:
            </div>
            <ul class="list-disc list-inside text-gray-400 mb-4 ms-4">
                <li class="mb-2">
                    Community assistance for unpaid support or issues at
                    <span
                        class="text-customGreen cursor-pointer hover:text-white"
                        onclick={() =>
                            window.open(
                                "https://discourse.openiap.io/",
                                "_blank",
                                "noopener,noreferrer",
                            )}
                    >
                        {" "}discourse
                    </span>.
                </li>
                <li class="mb-2">
                    We have paid support for available for training,
                    installation, and troubleshooting via
                    <span
                        class="text-customGreen cursor-pointer hover:text-white"
                        onclick={() => goto(base + "/partners")}
                    >
                        {" "}partners
                    </span>.
                </li>
                <li class="mb-2">
                    Reporting of issues and bugs at
                    <span
                        class="text-customGreen cursor-pointer hover:text-white"
                        onclick={() =>
                            window.open(
                                "https://discourse.openiap.io/",
                                "_blank",
                                "noopener,noreferrer",
                            )}
                    >
                        {" "}discourse
                    </span>.
                </li>
                <li class="mb-2">
                    Security issues reporting at
                    <span
                        class="text-customGreen cursor-pointer hover:text-white"
                        onclick={() =>
                            window.open(
                                "https://discourse.openiap.io/",
                                "_blank",
                                "noopener,noreferrer",
                            )}
                    >
                        {" "}discourse{" "}
                    </span>or via email at info@openiap.io.
                </li>
                <li class="mb-2">
                    Purchase of paid priority on features or bug fixing at our
                    <span
                        class="text-customGreen cursor-pointer hover:text-white"
                        onclick={() => goto(base + "/pricing")}
                    >
                        {" "}pricing page
                    </span>.
                </li>
                <li class="mb-2">
                    Architectural consulting services available at an hourly
                    rate as per
                    <span
                        class="text-customGreen cursor-pointer hover:text-white"
                        onclick={() => goto(base + "/pricing")}
                    >
                        {" "}our pricing
                    </span>.
                </li>
            </ul>
        </div>

        <div class="my-10">
            <div class="text-customGreen mb-4 text-xl">Cloud Subscription</div>
            <ul class="list-disc list-inside text-gray-400 mb-4 ms-4">
                <li class="mb-2">
                    Additional storage and enhanced resources for long-running
                    agents are available for purchase.
                </li>
                <li class="mb-2">
                    These services are offered with billing support only.
                </li>
                <li class="mb-2">
                    We aim for an uptime of above 98%, although this is not
                    guaranteed under a service level agreement.
                </li>
            </ul>
        </div>

        <div class="my-10">
            <div class="text-customGreen mb-4 text-xl">
                OpenIAP Flow/OpenCore License Subscription
            </div>
            <ul class="list-disc list-inside text-gray-400 mb-4 ms-4">
                <li class="mb-2">
                    Premium licenses are available for on-premise or cloud use
                    <span
                        class="text-customGreen cursor-pointer hover:text-white"
                        onclick={() =>
                            window.open(
                                "https://app.openiap.io/ui/#/Customer",
                                "_blank",
                                "noopener,noreferrer",
                            )}
                    >
                        {" "}app.openiap.io
                    </span>.
                </li>
                <li class="mb-2">
                    Premium licenses can only be bought through the customer
                    page at
                    <span
                        class="text-customGreen cursor-pointer hover:text-white"
                        onclick={() =>
                            window.open(
                                "https://app.openiap.io/ui/#/Customer",
                                "_blank",
                                "noopener,noreferrer",
                            )}
                    >
                        {" "}app.openiap.io
                    </span>.
                </li>
                <li class="mb-2">Licenses come with billing support only.</li>
                <li class="mb-2">
                    Licenses are issued monthly and can be managed automatically
                    or manually.
                </li>
                <li class="mb-2">
                    Expired licenses will limit functionality, affecting
                    management of agents, report generation, and other premium
                    features.
                </li>

                <li class="mb-2">
                    A license grants access to features not available in the
                    open-source version of the software. These features are
                    detailed at
                    <span
                        class="text-customGreen cursor-pointer hover:text-white"
                        onclick={() =>
                            window.open(
                                "https://app.openiap.io/ui/#/Customer",
                                "_blank",
                                "noopener,noreferrer",
                            )}
                    >
                        {" "}app.openiap.io
                    </span>.
                </li>
                <li class="mb-2">
                    The license fee contributes to the ongoing development and
                    maintenance of the product.
                </li>
                <li class="mb-2">
                    Requests for bug fixes, feature modifications, or new
                    features can be submitted via our forum. Prioritization of
                    such requests can be expedited through additional payment
                    via Consulting Service.
                </li>
            </ul>
        </div>

        <div class="my-10">
            <div class="text-customGreen mb-4 text-xl">
                OpenIAP ApS Consulting Service
            </div>
            <div class="text-gray-400 mb-4">
                Consulting services offered include:
            </div>
            <ul class="list-disc list-inside text-gray-400 mb-4 ms-4">
                <li class="mb-2">
                    Installation and troubleshooting of OpenIAP Flow/OpenCore on
                    Kubernetes.
                </li>
                <li class="mb-2">
                    Installation and troubleshooting of OpenIAP Flow/OpenCore on
                    Docker.
                </li>
                <li class="mb-2">
                    Priority attention for bug fixes in OpenIAP Flow/OpenCore
                    and OpenRPA.
                </li>
                <li class="mb-2">
                    Development of new features and expansion of existing
                    features in OpenIAP Flow/OpenCore.
                </li>
                <li class="mb-2">
                    Architectural and solution-based consulting for developers.
                </li>
            </ul>
            <div class="text-gray-400 mb-4">
                We reserve the right to decline any consulting request and to
                terminate ongoing consulting if progress is unsatisfactory for
                either party. If OpenIAP ApS is the canceling party, all unspent
                hours will be refunded.
            </div>
        </div>

        <div class="my-10">
            <div class="text-customGreen mb-4 text-xl">
                Consulting Hours Terms
            </div>
            <ul class="list-disc list-inside text-gray-400 mb-4 ms-4">
                <li class="mb-2">
                    Consulting hours must be booked at least 2 business days in
                    advance.
                </li>
                <li class="mb-2">
                    Standard delivery hours for consulting services are between
                    10 AM and 4 PM Danish time.
                </li>
                <li class="mb-2">
                    Hours scheduled outside standard hours may incur double
                    billing.
                </li>
                <li class="mb-2">
                    'Urgent' hours needed within the 2 business day notice
                    period will be billed at twice the standard rate.
                </li>
                <li class="mb-2">
                    Prepaid consulting hours must be used within 12 months of
                    purchase. Unused hours after this period will expire and are
                    not eligible for a refund.
                </li>
                <li class="mb-2">
                    Hours cannot be booked or used beyond the 12-month period
                    from the purchase date.
                </li>
                <li class="mb-2">
                    In the event of a cancellation by OpenIAP ApS, all unspent
                    and unexpired hours will be refunded fully.
                </li>
            </ul>
        </div>

        <div class="my-10">
            <div class="text-customGreen mb-4 text-xl">
                Subscription Fees, Renewal, and Cancellation
            </div>
            <div class="text-gray-400 mb-4">
                Subscription-related terms are as follows:
            </div>
            <ul class="list-disc list-inside text-gray-400 mb-4 ms-4">
                <li class="mb-2">
                    Fees are based on the selected plan and are non-refundable.
                </li>
                <li class="mb-2">
                    Subscriptions automatically renew unless canceled.
                </li>
                <li class="mb-2">
                    To cancel, remove services on your
                    <span
                        class="text-customGreen cursor-pointer hover:text-white"
                        onclick={() =>
                            window.open(
                                "https://app.openiap.io/ui/#/Customer",
                                "_blank",
                                "noopener,noreferrer",
                            )}
                    >
                        {" "}customer page{" "}
                    </span>
                    or email info@openiap.io for assistance.
                </li>
                <li class="mb-2">
                    Email cancellations must be acknowledged by OpenIAP ApS to
                    be considered effective.
                </li>
                <li class="mb-2">
                    OpenIAP ApS may cancel subscriptions with 1 month's notice.
                </li>
            </ul>
        </div>

        <div class="my-10">
            <div class="text-customGreen mb-4 text-xl">Taxes</div>
            <div class="text-gray-400 mb-4">
                VAT or Sales Tax will be applied based on your location. Provide
                valid exemption IDs during purchase if applicable.
            </div>
        </div>

        <div class="my-10">
            <div class="text-customGreen mb-4 text-xl">Price Changes</div>
            <div class="text-gray-400 mb-4">
                All prices are exclusive of taxes and are subject to an annual
                adjustment based on the CPI or a minimum increase of 3%,
                whichever is greater.
            </div>
        </div>

        <div class="my-10">
            <div class="text-customGreen mb-4 text-xl">Warranty Disclaimer</div>
            <ul class="list-disc list-inside text-gray-400 mb-4 ms-4">
                <li class="mb-2">
                    The website and services are provided "AS IS" without
                    warranties of any kind.
                </li>
                <li class="mb-2">
                    Users assume all risks related to quality and performance.
                </li>
                <li class="mb-2">
                    All implied warranties, including for merchantability and
                    fitness, are expressly disclaimed.
                </li>
                <li class="mb-2">
                    OpenIAP ApS is not liable for indirect or consequential
                    damages.
                </li>
            </ul>
        </div>

        <div class="my-10">
            <div class="text-customGreen mb-4 text-xl">
                Limitation of Liability
            </div>
            <ul class="list-disc list-inside text-gray-400 mb-4 ms-4">
                <li class="mb-2">
                    OpenIAP Aps is not responsible for consequential damages and
                    indirect losses, as well as incompatibilities in relation to
                    software provided by others than OpenIAP Aps. Likewise,
                    OpenIAP Aps is not responsible for errors in software
                    developed by third parties, sold, or delivered through
                    OpenIAP Aps.
                </li>
                <li class="mb-2">
                    OpenIAP Aps cannot be held responsible for any indirect
                    losses caused by delay, including operational losses, loss
                    of profit, and other consequential financial losses.
                </li>
                <li class="mb-2">
                    OPENIAP WILL NOT BE LIABLE TO YOU OR OTHERS FOR ANY DAMAGES
                    RESULTING FROM YOUR USE OF THE WEBSITE AND ASSOCIATED
                    SERVICES OR YOUR DISPLAYING, COPYING, OR DOWNLOADING ANY
                    MATERIALS TO OR FROM THE WEBSITE AND ASSOCIATED SERVICES. IN
                    NO EVENT WILL OPENIAP BE LIABLE TO YOU FOR ANY INDIRECT,
                    EXTRAORDINARY, EXEMPLARY, PUNITIVE, SPECIAL, INCIDENTAL, OR
                    CONSEQUENTIAL DAMAGES (INCLUDING LOSS OF DATA, REVENUE,
                    PROFITS, OPPORTUNITIES, REPUTATION, USE, OR OTHER ECONOMIC
                    ADVANTAGE) HOWEVER ARISING, EVEN IF WE KNOW THERE IS A
                    POSSIBILITY OF SUCH DAMAGE.
                </li>
                <li class="mb-2">
                    OPENIAP'S MAXIMUM AGGREGATE LIABILITY TO YOU IN CONNECTION
                    WITH THESE TERMS OR THE WEBSITE AND ASSOCIATED SERVICES,
                    REGARDLESS OF THE FORM OF ACTION (WHETHER SUCH LIABILITY
                    ARISES DUE TO NEGLIGENCE, BREACH OF CONTRACT,
                    MISREPRESENTATION, OR FOR ANY OTHER REASON), WILL AT ALL
                    TIMES BE LIMITED TO THE GREATER OF (I) THE AMOUNT PAID, IF
                    ANY, BY YOU TO OPENIAP IN CONNECTION WITH THESE TERMS IN THE
                    SIX (6) MONTHS PRIOR TO THE ACTION GIVING RISE TO LIABILITY
                    OR (II) US $10.00.
                </li>
                <li class="mb-2">
                    THIS LIMITATION OF LIABILITY IS PART OF THE BASIS OF THE
                    BARGAIN BETWEEN YOU AND OPENIAP AND SHALL APPLY TO ALL
                    CLAIMS OF LIABILITY, EVEN IF OPENIAP HAS BEEN ADVISED OF THE
                    POSSIBILITY OF ANY SUCH DAMAGE, AND EVEN IF THESE REMEDIES
                    FAIL THEIR ESSENTIAL PURPOSE.
                </li>
            </ul>
        </div>

        <div class="my-10">
            <div class="text-customGreen mb-4 text-xl">
                Right to Change Terms and Conditions
            </div>
            <div class="text-gray-400 mb-4">
                OpenIAP Aps may modify these terms at any time without prior
                notice, and changes are effective immediately unless stated
                otherwise.
            </div>
        </div>

        <div class="my-10">
            <div class="text-customGreen mb-4 text-xl">Force Majeure</div>
            <div class="text-gray-400 mb-4">
                OpenIAP Aps is not liable for delays or failures in fulfilling
                our obligations due to circumstances beyond our control.
            </div>
        </div>

        <div class="my-10">
            <div class="text-customGreen mb-4 text-xl">
                Transfer of Contract
            </div>
            <div class="text-gray-400 mb-4">
                Contractual rights and obligations may not be transferred
                without written consent from OpenIAP ApS. Unauthorized transfers
                are invalid.
            </div>
        </div>

        <div class="my-10">
            <div class="text-customGreen mb-4 text-xl">
                Choice of Law and Jurisdiction
            </div>
            <div class="text-gray-400 mb-4">
                Disputes will be governed by Danish law and subject to the
                jurisdiction of the court in Randers.
            </div>
        </div>
    </div>
</div>
