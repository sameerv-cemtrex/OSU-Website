import React from "react";
import { heroBanner } from "../data";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
};

const PrivacyPolicy = () => {
  return (
    <div>
      <Link href={"/"}>
        <nav className="container px-5 lg:px-[6.75rem] py-10">
          <img
            src={heroBanner.logo}
            className="w-1/2 sm:w-[200px]"
            alt="logo"
          />
        </nav>
      </Link>

      <h1 className="font-grozen-medical text-center pt-[30px] font-bold text-[40px] leading-[100%]">
        PRIVACY POLICY
      </h1>
      <p className="mt-3 text-[28px] leading-normal text-center font-medium">
        May 2024
      </p>

      <div className="container px-6 lg:px-[6.75rem] mt-12">
        <div className="rounded-3xl bg-[#F8F3F1] p-8 lg:p-14">
          <article className="text-base leading-6 text-gray-700 space-y-5">
            <p>
              This website is operated by Freepik Company, S.L., registered in
              the Commercial Registry of Málaga, volume 4994, sheet 217, page
              number MA-113059, with Tax Number B-93183366 and registered office
              at 13 Molina Lario St., 5th floor, 29015, Málaga, Spain
              (&quot;Company&quot;).
            </p>
            <p>
              These terms of use (&quot;Terms&quot;) govern the access, browsing
              and use by the users (&quot;User&quot; or &quot;Users&quot;, as
              applicable) of https://www.freepik.com/, including any of its
              subdomains and/or sections (&quot;Website&quot;); as well as the
              services rendered through the Website (&quot;Service&quot; or
              &quot; Services&quot;, as applicable) which include the download
              and use of certain content.
            </p>
            <p>
              By accessing and using the Website, the User accepts in their
              entirety and agrees to be bound by the Company&apos;s{" "}
              <ExternalLink href="https://www.freepik.com/legal/acceptable-use-policy/">
                Acceptable Use Policy
              </ExternalLink>
              , which is made an integral part of these Terms by this reference.
            </p>
            <p>
              Accessing and using the Website implies that the User has read and
              accepts to be bound by these Terms without exception. In case the
              User does not accept the Terms or has any objection to any part of
              the present Terms, the User must not use the Website.
            </p>
            <p>
              The Company may modify the Terms at any time and thus we recommend
              that the Terms are reviewed on a regular basis by the User. The
              date at the beginning of these Terms refers to the latest update
              of these Terms, which will be applicable from the date of
              publication.
            </p>
            <p>
              Some Services provided through the Website may be subject to
              specific conditions or instructions that must be accepted by the
              User prior to the provision of the relevant Service. These
              specific conditions may be imposed by the Company or by third
              parties. Such specific conditions shall apply in addition to the
              Terms and, in case of conflict, shall supersede the Terms.
              Accordingly, the User must read and accept such specific
              conditions before the provision of the relevant Service.
            </p>
            <p>
              The Company may provide translations of these Terms into various
              languages merely for informative purposes. However, the English
              version is the only legally binding version. In the event of any
              discrepancy between the English version and a translated version,
              the English version shall prevail.
            </p>
            <p>
              Likewise, in respect of collection and processing of personal
              data, the{" "}
              <ExternalLink href="https://www.freepik.com/legal/privacy">
                Privacy Policy
              </ExternalLink>{" "}
              will apply.
            </p>

            <Section title="1. Services Offered">
              <p>
                Through the Website, it is offered to the User visual content,
                like vectors and illustrations, photos and images, PSDs and
                Photoshop files, vector icons, video contents and recordings
                (including the corresponding audio) in any format, as well as
                specific information related to such content.
              </p>
              <p>
                The Services may offer contents owned by the Company
                (&quot;Freepik Own Content&quot;), contents owned by third
                parties offered through the Website (&quot;Collaborators
                Content&quot;) as well as third-party content not offered free
                of charge (&quot;Sponsored Content&quot;). Sponsored Content is
                duly differentiated and identified on the search results.
                Freepik Own Content and Collaborators Content shall be
                hereinafter referred to collectively as the &quot; Freepik
                Content&quot; and can be downloaded through the Website.
              </p>
              <p>
                The Services also include the use of the Company&apos;s{" "}
                <ExternalLink href="https://www.freepik.com/legal/terms-of-use#nav-ai-products">
                  AI Products
                </ExternalLink>
                , as well as the use of the{" "}
                <ExternalLink href="https://www.freepik.com/legal/terms-of-use#nav-freepik-online-editor">
                  Freepik Online Editors
                </ExternalLink>
                . These services are governed by their respective terms and
                conditions, which form part of these Terms by reference. By
                using these products, the User accepts said terms and
                conditions.
              </p>
            </Section>

            <Section title="2. Authorized Use">
              <p>
                The User is only authorized to use the Website and the Services
                in good faith and under the Terms, which include our{" "}
                <ExternalLink href="https://www.freepik.com/legal/acceptable-use-policy/">
                  Acceptable Use Policy
                </ExternalLink>
                . In particular and without limitation, Users (irrespective of
                whether they have purchased a Subscription or not) undertake
                that any access or downloads of any content available in the
                Website or through the Services will always be the result of a
                genuine legitimate interest of the User and acknowledges that
                any method which artificially increases the number of downloads,
                accesses or clicks over such content is strictly prohibited
                under these Terms (including, without limitation, the generation
                of downloads, accesses or clicks over such content through any
                robots, spiders or any other mechanism, mobile application,
                program or tool) and will result in the cancellation of the
                User&apos;s account by the Company and the obligation for the
                User to indemnify the Company for all damages suffered as a
                result of the User&apos;s breach of this undertaking, without
                the right of reimbursement of any of the amounts paid.
              </p>
              <p>
                The User agrees not to use the Services negligently, for
                fraudulent purposes or in an unlawful manner. Likewise, the User
                agrees not to partake in any conduct or action that could damage
                the image, interests or rights of the Website or third parties.
              </p>
              <p>
                The User will not interfere with the functioning of the Website
                or in the Services, in particular, he/she/it will not
                impersonate another user or person. The User agrees not to carry
                out any action that may damage, make unavailable, overload,
                deteriorate or impede the normal use of the Website or the
                Services, which may impact the security of the Website or the
                Services, or which may in any way interfere with the Services
                offered by the Company. The use of robots, spiders or any other
                mechanism, mobile application, program or tool to access, copy
                or control any part of the Website or the Services in any way
                which is contrary to the ordinary use of the Website or which
                infringes the Company&apos;s interests (without its express
                prior authorization) is strictly prohibited. Likewise, obtaining
                or attempting to obtain the contents of the Website using any
                method or system not expressly authorized by the Company or
                which is not the ordinary method of accessing the Website is
                also strictly prohibited.
              </p>
              <p>
                The User shall be responsible for any costs required for the
                Services&apos; use and for ensuring, prior to using the
                Services, that the Services&apos; features meet the User&apos;s
                needs and that he/she/it meets all requirements and has all the
                equipment and software necessary for this purpose.
              </p>
              <p>
                The rights granted to the User under these Terms are personal
                and shall not be assigned to any third party (including
                affiliates or entities part of the same group of companies)
                totally or partially, by any mean, without the prior, express
                and written consent from the Company.
              </p>
              <p>
                When providing the Services, the Website can publish advertising
                either related or not to the contents displayed or the Services,
                which is expressly accepted by the User.
              </p>
            </Section>

            <Section title="3. Registration">
              <p>
                In order to use certain Services, the User must register,
                creating a username and password and activating an account. To
                this end, the User must provide a valid email address where the
                User will receive notifications related to the Services. If the
                User is a legal entity or business, its username must be its
                full name or corporate name and the person registering on behalf
                of the legal entity or business declares that he/she is duly
                authorized to bind such legal entity or business and that such
                legal entity or business shall be bound to these Terms.
              </p>
              <p>
                The User agrees to provide the mandatory information required
                for registration and also acknowledges that such information is
                true, complete and up to date. The User is solely responsible
                for keeping such information updated. Should the User provide
                false, outdated or incomplete information, or should the Company
                have reasons to suspect it, the Company reserves the right to
                suspend or cancel the User&apos;s account.
              </p>
              <p>
                The User must protect and keep the account password confidential
                and must not disclose it to third parties. The User must neither
                allow other Users to access the Services through the User&apos;s
                account nor use the account of another User to access the
                Services.
              </p>
              <p>
                The User is responsible for all operations carried out through
                the User&apos;s account through any device. If the User suspects
                that another User is using his account, he/she/it should
                immediately inform the Company.
              </p>
              <p>
                The Company may suspend or cancel the User&apos;s account if it
                considers that the User has breached these Terms.
              </p>
            </Section>

            <Section title="4. Content">
              <p>
                The Services allow Users to search for content that may result
                in Freepik Content and Sponsored Content, according to his or
                her preferences, and download such Freepik Content and AI
                Generated Content.
              </p>
              <p>
                If you have any question regarding any content or believe that
                it infringes any right, that it does not comply with these
                Terms, or that is inappropriate, you can do so by contacting the
                Company as indicated in these Terms or following the
                instructions provided on the Website for a copyright complaint.
              </p>

              <Section title="4.1. Sponsored Content">
                <p>
                  Regarding Sponsored Content, the Website&apos;s role is
                  limited to displaying content offered by the sponsored website
                  with which the Company has reached an affiliation agreement or
                  similar. Therefore, the Company will display a link to the
                  sponsored website which offers the Sponsored Content, together
                  with specific related information. In some cases, in order to
                  provide the User a better user experience and facilitate
                  returning to the Services, the link can be presented within a
                  frame corresponding to the Website, which can be removed by
                  the User at any time.
                </p>
                <p>
                  The Company is not the provider of the Sponsored Content and
                  does not present itself as owner of such contents.
                </p>
                <p>
                  The Company does not select, examine, control, guarantee,
                  approve, sponsor or identify itself in any form with the
                  Sponsored Content displayed to the Users according to their
                  preferences. The Sponsored Content are the sole responsibility
                  of the third parties that make them available to the public
                  over their own websites or Internet.
                </p>
                <p>
                  The User will be able to access the corresponding third party
                  sponsored websites and download Sponsored Content under the
                  terms and conditions established by such third parties. The
                  Company shall not be a party or be involved in any way in the
                  relationship between the User and the corresponding third
                  party. The User undertakes to read and comply with the terms
                  and conditions established by such third parties for the
                  download and use of Sponsored Content.
                </p>
                <p>
                  The Company is not a party and does not take part in the
                  relationship between the User and the third party that offers
                  the Sponsored Content, and it is not directly or indirectly
                  responsible for the performance, omissions, errors, negligence
                  or breaches of the Users or such third parties. Any claim from
                  the Users regarding the Sponsored Content must be addressed to
                  the relevant third parties through the linked website.
                </p>
              </Section>

              <Section title="4.2. Freepik Own Content">
                <p>
                  Freepik Own Contents are offered under the conditions stated
                  from time to time in the Website (including, without
                  limitation, restrictions to the number of downloads per day)
                  and its use is allowed in the terms set out or referred to in
                  these Terms, as applicable.
                </p>
              </Section>

              <Section title="4.3. Collaborators Content">
                <p>
                  Collaborators Contents are offered in the terms stated at the
                  relevant time in the Website (including, without limitation,
                  daily download limits), and its use is allowed in the terms
                  set out or referred to in these Terms, as applicable.
                </p>
                <p>
                  When offering Collaborators Content, the Company acts as a
                  mere intermediary between the User that downloads such content
                  and the collaborator, providing the User with access and
                  subscription to the Collaborators Content.
                </p>
                <p>
                  The Company makes reasonable efforts in guaranteeing the
                  lawfulness and quality of the Collaborators Content. However,
                  the Company cannot monitor or control all Collaborators
                  Content. Therefore, the User acknowledges and agrees that the
                  Company shall not be responsible for evaluating the
                  originality, the non-infringement of third-party rights or the
                  lawfulness of Collaborator Content and that the Company does
                  not guarantee nor is liable in respect of any such contents,
                  except for those cases expressly provided in the applicable
                  regulations.
                </p>
              </Section>

              <Section title="4.4. AI Generated Content">
                <p>
                  The User may generate different types of content using the AI
                  Products offered by the Company on the Website. The use of the
                  AI Products, as well as the content generated using such
                  tools, is governed by the{" "}
                  <ExternalLink href="https://www.freepik.com/legal/terms-of-use#nav-ai-products">
                    AI Products Terms and Conditions
                  </ExternalLink>
                  .
                </p>
              </Section>
            </Section>

            <Section title="5. Storage and Offer of Collaborator Content">
              <p>
                The Company limits itself to solely hosting the Collaborator
                Content and, therefore, it has no obligation to edit, select,
                check, or control the Collaborator Content nor does it
                guarantee, approve or necessarily agree with the Collaborator
                Content. If you wish to make an enquiry related to the
                Collaborator Content or if you believe that the Collaborator
                Content violates any rights or does not meet these Terms, or is
                inappropriate, you can contact the Company as indicated below.
              </p>
              <p>
                The Collaborator is the sole and exclusive responsible for the
                Collaborator Content provided to the Company for storage,
                publishing and offering to Users through the Website.
              </p>
            </Section>

            <Section title="6. Liability">
              <p>
                The User acknowledges and agrees that he/she/it uses the Website
                and its Services at the User&apos;s own risk and under the
                User&apos;s responsibility and, therefore, the Company does not
                accept any responsibility for misuse or use in breach of these
                Terms.
              </p>
              <p>
                The User will be responsible for any damages to the Company
                resulting from the User&apos;s use of the Website and the
                Services in breach of the Terms and accepts to indemnify the
                Company and its directors, employees, agents and representatives
                from any liability in which they may incur as a result of the
                User&apos;s breach of these Terms.
              </p>
            </Section>
          </article>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

type LinkProps = {
  href: string;
  children: React.ReactNode;
};

const ExternalLink: React.FC<LinkProps> = ({ href, children }) => (
  <a
    href={href}
    className="underline"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <section>
    <h2 className="font-bold text-gray-700">{title}</h2>
    {children}
  </section>
);
