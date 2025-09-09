import { Separator } from '@/components/decoration/separator';
import { Identity } from '@/config/identity';

export default function TermsOfService() {
  return (
    <div className="space-y-4 pt-4">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-amber-900 mb-8 text-center">Terms of Service</h1>
          
          <div className="prose prose-amber max-w-none text-gray-700">
            <p className="text-sm text-gray-500 mb-8">
              <strong>Effective Date:</strong> January 1, 2025<br />
              <strong>Last Updated:</strong> January 1, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-amber-800 mb-4">1. Agreement to Terms</h2>
              <p className="mb-4">
                By accessing and using the services of {Identity.companyName} (&apos;we,&apos; &apos;our,&apos; or &apos;us&apos;), 
                you agree to be bound by these Terms of Service and all applicable laws and regulations. 
                If you do not agree with any of these terms, you are prohibited from using our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-amber-800 mb-4">2. Services Description</h2>
              <p className="mb-4">
                {Identity.companyName} provides Pilates instruction services including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Private Pilates sessions</li>
                <li>Group Pilates classes</li>
                <li>Corporate wellness programs</li>
                <li>Online booking and payment services</li>
                <li>Wellness consultation and guidance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-amber-800 mb-4">3. Health and Safety Requirements</h2>
              
              <h3 className="text-xl font-medium text-amber-700 mb-3">Health Clearance</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>You must be physically able to participate in Pilates exercises</li>
                <li>You must disclose any health conditions, injuries, or limitations</li>
                <li>Consult your physician before beginning any exercise program</li>
                <li>Inform instructors of any changes in your health status</li>
              </ul>

              <h3 className="text-xl font-medium text-amber-700 mb-3">Safety Compliance</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Follow all instructor guidance and safety protocols</li>
                <li>Use equipment properly and as instructed</li>
                <li>Report any equipment issues immediately</li>
                <li>Maintain appropriate attire and hygiene</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-amber-800 mb-4">4. Booking and Payment Terms</h2>
              
              <h3 className="text-xl font-medium text-amber-700 mb-3">Booking Policy</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Sessions must be booked in advance</li>
                <li>Payment is required at time of booking</li>
                <li>Session packages have expiration dates as specified</li>
                <li>Unused sessions may not be refunded after expiration</li>
              </ul>

              <h3 className="text-xl font-medium text-amber-700 mb-3">Cancellation Policy</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Cancellations must be made at least 24 hours in advance</li>
                <li>Late cancellations (less than 24 hours) may result in session forfeiture</li>
                <li>No-shows will result in full session charge</li>
                <li>Emergency cancellations will be considered on a case-by-case basis</li>
              </ul>

              <h3 className="text-xl font-medium text-amber-700 mb-3">No Refund Policy</h3>
              <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg mb-4">
                <p className="font-semibold text-amber-800 mb-2">IMPORTANT: NO REFUNDS</p>
                <p className="text-amber-700">
                  All sales are final. We do not offer refunds for any services, packages, or memberships.
                </p>
              </div>
              <p className="mb-4">Please understand that:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>All payments for services, packages, and memberships are non-refundable</li>
                <li>This policy applies regardless of usage, satisfaction, or circumstances</li>
                <li>Session packages and memberships cannot be refunded, even if unused</li>
                <li>Payment disputes must be resolved directly with {Identity.companyName}</li>
                <li>Refunds will not be issued for medical reasons, scheduling conflicts, or personal circumstances</li>
                <li>Gift certificates and promotional packages are non-refundable</li>
                <li>In exceptional circumstances, credit toward future services may be considered at our sole discretion</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-amber-800 mb-4">5. Liability and Risk Assumption</h2>
              
              <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-4">
                <p className="font-semibold text-red-800 mb-2">IMPORTANT: READ CAREFULLY</p>
                <p className="text-red-700">
                  Participation in Pilates activities involves inherent risks of injury. 
                  By using our services, you acknowledge and assume these risks.
                </p>
              </div>

              <h3 className="text-xl font-medium text-amber-700 mb-3">Assumption of Risk</h3>
              <p className="mb-4">You acknowledge that:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Physical exercise involves risk of injury</li>
                <li>You participate voluntarily and at your own risk</li>
                <li>You are responsible for knowing your physical limitations</li>
                <li>You will not exceed your personal limits during sessions</li>
              </ul>

              <h3 className="text-xl font-medium text-amber-700 mb-3">Limitation of Liability</h3>
              <p className="mb-4">
                To the fullest extent permitted by law, {Identity.companyName} and its instructors 
                shall not be liable for any injuries, damages, or losses arising from your participation 
                in our services, except in cases of gross negligence or willful misconduct.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-amber-800 mb-4">6. Code of Conduct</h2>
              <p className="mb-4">All clients must:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Treat instructors and other clients with respect</li>
                <li>Maintain appropriate language and behavior</li>
                <li>Respect studio property and equipment</li>
                <li>Follow all studio rules and policies</li>
                <li>Maintain confidentiality of other clients information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-amber-800 mb-4">7. Intellectual Property</h2>
              <p className="mb-4">
                All content, methods, and materials used in our services are the intellectual property 
                of {Identity.companyName} or licensed to us. You may not reproduce, distribute, or 
                use our proprietary methods without written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-amber-800 mb-4">8. Privacy and Confidentiality</h2>
              <p className="mb-4">
                Your privacy is important to us. Please review our Privacy Policy for information 
                about how we collect, use, and protect your personal information. Health information 
                shared with instructors will be kept confidential and used only for providing safe, 
                effective instruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-amber-800 mb-4">9. Termination</h2>
              <p className="mb-4">
                We reserve the right to terminate or suspend your access to our services at any time 
                for violation of these terms, inappropriate behavior, or safety concerns. Upon termination, 
                you must cease all use of our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-amber-800 mb-4">10. Force Majeure</h2>
              <p className="mb-4">
                We are not liable for any failure to perform our obligations due to circumstances 
                beyond our reasonable control, including but not limited to natural disasters, 
                government regulations, or public health emergencies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-amber-800 mb-4">11. Governing Law</h2>
              <p className="mb-4">
                These terms are governed by the laws of the Commonwealth of Pennsylvania. 
                Any disputes will be resolved in the courts of Allegheny County, Pennsylvania.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-amber-800 mb-4">12. Changes to Terms</h2>
              <p className="mb-4">
                We reserve the right to modify these terms at any time. We will notify you of 
                material changes by posting updated terms on our website. Continued use of our 
                services after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-amber-800 mb-4">13. Contact Information</h2>
              <p className="mb-4">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-amber-50 p-4 rounded-lg">
                <p><strong>{Identity.companyName}</strong></p>
                <p>Email: <a href={`mailto:${Identity.email}`} className="text-amber-700 hover:text-amber-800">{Identity.email}</a></p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-amber-800 mb-4">14. Acknowledgment</h2>
              <p className="mb-4">
                By booking and using our services, you acknowledge that you have read, understood, 
                and agree to be bound by these Terms of Service.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Separator />
    </div>
  );
}
